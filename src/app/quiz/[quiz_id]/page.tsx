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

const page = () => {
  const params = useParams();
  const [quiz, setQuiz] = useState<Question | null>(null);
  useEffect(() => {
    const id = Number(params.quiz_id);
    if (!isNaN(id)) {
      const found = question.find((q: Question) => q.id === id);
      if (found) setQuiz(found);
    }
  }, [params.id]);
  return (
    <div className="mobile flex flex-col items-center justify-between relative overflow-hidden">
      <section className="flex flex-col items-center gap-4">
        <img alt="curve" src="/assets/1.webp" className="rotate-180" />
        <div className="px-[20px] w-full">
          <Quiz question={quiz} />
        </div>
        <button
          className="bg-[#F0818C] h-[32px] px-6 rounded-md font-sarabun text-[14px] text-white"
          onClick={() => (window.location.href = '/quiz')}
        >
          ย้อนกลับ
        </button>
      </section>
      <img alt="frame" src="/assets/1.webp" />
    </div>
  );
};

export default page;
