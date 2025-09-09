import { NextRequest, NextResponse } from 'next/server';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

const db = getFirestore(app);

export async function PUT(
  req: NextRequest,
  { params }: { params: { uID: string } }
) {
  try {
    console.log('Increment login count for uID:', params.uID);
    const userRef = db.collection('UsersCollection').doc(params.uID);
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
