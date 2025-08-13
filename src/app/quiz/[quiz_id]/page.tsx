'use client';
import Quiz from '@/component/game/quiz';
import React, { useEffect, useState } from 'react';
import question from '@/quiz.json';
import { useParams } from 'next/navigation';

interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: number;
}

const Page = () => {
  const params = useParams();
  const [quiz, setQuiz] = useState<Question | null>(null);
  useEffect(() => {
    const id = Number(params.quiz_id);
    if (!isNaN(id)) {
      const found = question.find((q: Question) => q.id === id);
      if (found) setQuiz(found);
    }
  }, [params.quiz_id]);
  return (
    <div className="mobile flex flex-col items-center justify-start gap-4 relative pb-9 pt-12 px-[20px] overflow-hidden">
      <img
        src="/assets/5.webp"
        alt="frame"
        className="fixed top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <Quiz question={quiz} />
      <button
        className="bg-[#F0818C] h-[32px] px-6 rounded-md font-sarabun text-[14px] text-white"
        onClick={() => (window.location.href = '/quiz')}
      >
        ย้อนกลับ
      </button>
      <img
        alt="curve"
        src="/assets/1.webp"
        className="fixed bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
    </div>
  );
};

export default Page;
