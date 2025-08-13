import { NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

export const runtime = 'nodejs';
const db = getFirestore(app);

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const segments = url.pathname.split('/').filter(Boolean);
    const uID = segments[segments.length - 1]?.trim();

    if (!uID) {
      return NextResponse.json(
        { success: false, message: 'Missing uID' },
        { status: 400 }
      );
    }

    const snap = await db.collection('UsersCollection').doc(uID).get();
    if (!snap.exists) {
      return NextResponse.json(
        { success: false, message: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, id: snap.id, user: snap.data() });
  } catch (err) {
    console.error('GET /api/users/[uID] error:', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
