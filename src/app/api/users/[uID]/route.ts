import { NextRequest, NextResponse } from 'next/server';
import { getFirestore } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

const db = getFirestore(app);

export async function GET(
  _req: NextRequest,
  { params }: { params: { uID: string } }
) {
  try {
    const uID = params.uID?.trim();
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
  } catch (e) {
    console.error('GET /api/users/[uID] error:', e);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
