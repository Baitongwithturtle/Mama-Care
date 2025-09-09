// /app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';
import crypto from 'crypto';

const db = getFirestore(app);

function buildInitialQuizMap(n = 10) {
  const obj: Record<string, { quiz_plays: number; score: number | null }> = {};
  for (let i = 1; i <= n; i++) obj[String(i)] = { quiz_plays: 0, score: null };
  return obj;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email }: { name?: string; email?: string } = await req
      .json()
      .catch(() => ({}));
    if (!name?.trim()) {
      return NextResponse.json(
        { success: false, message: 'name is required' },
        { status: 400 }
      );
    }

    const existingUid = req.cookies.get('uID')?.value;
    const uid = existingUid ?? crypto.randomUUID();
    const userRef = db.collection('UsersCollection').doc(uid);
    const quizRef = db.collection('QuizCollection').doc(uid);

    const userSnap = await userRef.get();
    let res: NextResponse;

    if (userSnap.exists) {
      await userRef.update({
        name,
        login_count: FieldValue.increment(1),
        last_login: FieldValue.serverTimestamp(),
      });
      res = NextResponse.json({
        success: true,
        message: 'User updated (existing)',
        uid,
      });
    } else {
      const batch = db.batch();
      batch.set(userRef, {
        uid,
        name,
        email: email ?? null,
        created_at: FieldValue.serverTimestamp(),
        last_login: FieldValue.serverTimestamp(),
        login_count: 1,
        provider: 'local',
      });
      batch.set(quizRef, { uid, quiz: buildInitialQuizMap(10) });
      await batch.commit();
      res = NextResponse.json({
        success: true,
        message: 'User created and quiz record initialized',
        uid,
      });
    }

    // ✅ set cookie เสมอ
    res.cookies.set('uID', uid, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    });

    return res;
  } catch (err) {
    console.error('Create/Update user error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  const name = req.nextUrl.searchParams.get('name');
  if (!name) {
    return NextResponse.json(
      { success: false, message: 'name is required' },
      { status: 400 }
    );
  }

  const snap = await db
    .collection('UsersCollection')
    .where('name', '==', name)
    .limit(1)
    .get();
  if (snap.empty) {
    return NextResponse.json(
      { success: false, message: 'User not found' },
      { status: 404 }
    );
  }

  const doc = snap.docs[0];
  return NextResponse.json({ success: true, uid: doc.id, ...doc.data() });
}
/*// /app/api/users/route.ts
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
  } catch (err: unknown) {
    if (
      typeof err === 'object' &&
      err !== null &&
      ('code' in err || 'message' in err)
    ) {
      const firebaseErr = err as { code?: number; message?: string };
      if (
        firebaseErr.code === 6 ||
        /ALREADY_EXISTS/i.test(String(firebaseErr.message))
      ) {
        return NextResponse.json(
          { success: false, message: 'User already exists' },
          { status: 409 }
        );
      }
    }

    console.error('Create user error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}*/
