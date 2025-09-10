import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

export const runtime = 'nodejs';
const db = getFirestore(app);

export async function PATCH(
  request: Request
) {
  try {
    const url = new URL(request.url);
    const segments = url.pathname.split('/').filter(Boolean);
    const uID = segments[segments.length - 1]?.trim();
    const userRef = db.collection('UsersCollection').doc(uID);
    await userRef.update({
      login_count: FieldValue.increment(1),
      last_login: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ success: true, message: 'login incremented' });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, message: 'server error' },
      { status: 500 }
    );
  }
}
