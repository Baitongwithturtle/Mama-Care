import { NextResponse } from 'next/server';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { app } from '@/app/firebase/server';

const db = getFirestore(app);

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { uID, quizNumber, score } = body;

    if (!uID || !quizNumber || typeof score !== 'boolean') {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing or invalid uID / quizNumber / score',
        },
        { status: 400 }
      );
    }

    const userRef = db.collection('QuizCollection').doc(uID);

    // เพิ่ม quiz_plays ทีละ 1 และอัปเดต score
    await userRef.update({
      [`quiz.${quizNumber}.quiz_plays`]: FieldValue.increment(1),
      [`quiz.${quizNumber}.score`]: score,
    });

    return NextResponse.json({ success: true, message: 'Quiz updated' });
  } catch (error) {
    console.error('Error patching quiz:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
