// /app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

const auth = getAuth(app);
const db = getFirestore(app);

// Helper: build initial quiz map (1..10)
function buildInitialQuizMap(n = 10) {
  const obj: Record<string, { quiz_plays: number; score: number | null }> = {};
  for (let i = 1; i <= n; i++) obj[String(i)] = { quiz_plays: 0, score: null };
  return obj;
}

export async function POST(req: NextRequest) {
  try {
    // 1) Verify session cookie
    const sessionCookie = req.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json(
        { success: false, message: 'No session' },
        { status: 401 }
      );
    }
    const decoded = await auth.verifySessionCookie(sessionCookie, true);
    const uid = decoded.uid;

    // 2) Parse body (optional profile fields from client)
    const { email, name } = await req.json().catch(() => ({}));
    const userEmail = email ?? decoded.email ?? null;

    // 3) Refs
    const userRef = db.collection('UsersCollection').doc(uid);
    const quizRef = db.collection('QuizCollection').doc(uid);

    // 4) Atomic create (fail if user already exists)
    const batch = db.batch();

    // Use "create" so Firestore throws if the doc already exists
    batch.create(userRef, {
      email: userEmail,
      name: name ?? null,
      created_at: FieldValue.serverTimestamp(),
      login_count: 1,
    });

    batch.create(quizRef, {
      uid,
      quiz: buildInitialQuizMap(10),
    });

    await batch.commit();

    return NextResponse.json({
      success: true,
      message: 'User created and quiz record initialized',
      uid,
    });
  } catch (err: any) {
    // Handle "already exists" gracefully
    if (err?.code === 6 || /ALREADY_EXISTS/i.test(String(err?.message))) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }
    console.error('Create user error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // verify session cookie
    const sessionCookie = req.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json(
        { success: false, message: 'No session' },
        { status: 401 }
      );
    }
    await auth.verifySessionCookie(sessionCookie, true);

    const uid = params.id;
    const userDoc = await db.collection('UsersCollection').doc(uid).get();
    if (!userDoc.exists) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, user: userDoc.data() });
  } catch (err) {
    console.error('GET user error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
