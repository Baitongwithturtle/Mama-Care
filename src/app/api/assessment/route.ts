import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

const auth = getAuth(app);
const db = getFirestore(app);

type Item = { qid?: string; text: string; star: number };
type Section = { title: string; items: Item[] };

export async function POST(req: NextRequest) {
  try {
    // 1) verify session cookie (สำคัญ)
    const sessionCookie = req.cookies.get('session')?.value;
    if (!sessionCookie) {
      return NextResponse.json(
        { success: false, message: 'No session' },
        { status: 401 }
      );
    }
    const decoded = await auth.verifySessionCookie(sessionCookie, true);
    const uid = decoded.uid;

    // 2) read body
    const body = await req.json();
    const { sections, comment } = body as {
      sections: Section[]; // [{ title, items:[{ text, star }] }]
      comment?: string;
    };

    if (!Array.isArray(sections) || sections.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Invalid sections' },
        { status: 400 }
      );
    }

    // 3) sanitize: star ต้อง 0..5
    for (const s of sections) {
      if (!s?.title || !Array.isArray(s.items)) {
        return NextResponse.json(
          { success: false, message: 'Malformed section' },
          { status: 400 }
        );
      }
      for (const it of s.items) {
        if (
          typeof it.star !== 'number' ||
          it.star < 0 ||
          it.star > 5 ||
          !it.text
        ) {
          return NextResponse.json(
            { success: false, message: 'Malformed item' },
            { status: 400 }
          );
        }
      }
    }

    // 4) write to Firestore
    const doc = {
      userId: uid,
      sections,
      comment: comment ?? '',
      submittedAt: FieldValue.serverTimestamp(),
    };

    const ref = await db.collection('AssessmentCollection').add(doc);

    return NextResponse.json({ success: true, id: ref.id });
  } catch (err) {
    console.error('POST /api/assessment error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
