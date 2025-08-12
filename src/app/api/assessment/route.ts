import { NextResponse } from 'next/server';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

const db = getFirestore(app);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { uID, email, name } = body;
    const quiz = {
      '1': { quiz_plays: 0, score: null },
      '2': { quiz_plays: 0, score: null },
      '3': { quiz_plays: 0, score: null },
      '4': { quiz_plays: 0, score: null },
      '5': { quiz_plays: 0, score: null },
      '6': { quiz_plays: 0, score: null },
      '7': { quiz_plays: 0, score: null },
      '8': { quiz_plays: 0, score: null },
      '9': { quiz_plays: 0, score: null },
      '10': { quiz_plays: 0, score: null },
    };

    if (!uID || !email) {
      return NextResponse.json(
        { success: false, message: 'Missing uID or email' },
        { status: 400 }
      );
    }

    const userDoc = await db.collection('UsersCollection').doc(uID).get();

    if (userDoc.exists) {
      return NextResponse.json(
        { success: false, message: 'User already exists' },
        { status: 409 }
      );
    }

    const userRef = db.collection('UsersCollection').doc(uID);
    await userRef.set({ email, name, created_at: Date.now() });
    const quizRef = db.collection('QuizCollection').doc(uID);
    await quizRef.set({ uID, quiz });

    return NextResponse.json({
      success: true,
      message: 'User created and Quiz record',
    });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
