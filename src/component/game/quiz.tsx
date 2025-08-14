'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: number;
}

const Quiz = ({ question }: { question: Question | null }) => {
  const [answer, setAnswer] = useState<number | undefined>(undefined);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const uID =
    typeof window !== 'undefined' ? localStorage.getItem('uID') : null;
  const params = useParams();

  async function updateQuizScore(uID: string, score: boolean) {
    try {
      const response = await fetch(`/api/quiz/${uID}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uID,
          quizNumber: params.quiz_id,
          score,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        console.error('❌ Error:', data.message);
      } else {
        console.log('✅ Success:', data.message);
      }

      return data;
    } catch (error) {
      console.error('❌ Fetch error:', error);
    }
  }

  async function handleAnswer(selectedIndex: number, isCorrect: boolean) {
    if (answer !== undefined) return;
    setAnswer(selectedIndex + 1);
    setShowFeedback(true);

    if (uID && params.quiz_id) {
      await updateQuizScore(uID, isCorrect);
    } else {
      console.warn('Missing uID or quiz_id', { uID, quiz_id: params.quiz_id });
    }
  }

  useEffect(() => {
    if (answer !== undefined) {
      const timeout = setTimeout(() => {
        setShowFeedback(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [answer]);

  return (
    <div className="bg-white w-full h-full flex flex-col justify-center items-center px-[20px] py-[40px] rounded-[20px] overflow-hidden">
      <div className="relative py-4">
        <img
          src="/assets/state/sparkle.webp"
          alt="sparkle"
          width={60}
          className="rotate-180 absolute left-[-80px] top-0"
        />
        <header className="flex flex-col items-end">
          <h1 className="font-baloo text-[48px] leading-[48px] font-extrabold text-[#F0818C]">
            QUIZ
          </h1>
          <span className="font-sarabun text-[14px] font-bold">
            แบบทดสอบความรู้
          </span>
        </header>
        <img
          src="/assets/state/sparkle.webp"
          alt="sparkle"
          width={60}
          className="absolute right-[-80px] bottom-4"
        />
      </div>

      {question ? (
        <>
          <AnimatePresence>
            {answer !== undefined && showFeedback && (
              <>
                {[...Array(10)].map((_, i) => {
                  const randomX = Math.floor(Math.random() * 100);
                  const delay = i * 0.1;

                  return (
                    <motion.div
                      className="z-10"
                      key={i}
                      initial={{ y: -420, opacity: 0.5 }}
                      animate={{ y: 600, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 2, delay }}
                      style={{
                        position: 'absolute',
                        left: `${randomX}%`,
                        fontSize: '48px',
                        pointerEvents: 'none',
                      }}
                    >
                      {question.answer === answer ? '🥳' : '😭'}
                    </motion.div>
                  );
                })}
              </>
            )}
          </AnimatePresence>
          <p className="mt-10 text-lg font-sarabun font-semibold">
            {question.question}
          </p>
          <ul className="mt-8 space-y-4 w-full flex flex-col items-center">
            {question.choices.map((choice, index) => (
              <li key={index} className="text-base w-full relative">
                <div className="flex rounded-full bg-white outline-4 outline-[#F0818C] border-dashed border-2 w-[44px] h-[44px] justify-center items-center top-1/2 -translate-y-1/2 absolute">
                  <p className="font-baloo text-[24px] leading-[20px] font-extrabold">
                    {index + 1}
                  </p>
                </div>
                <button
                  className={`min-h-[44px] rounded-[12px] transition-colors duration-300 hover:[box-shadow:0_0_20px_0_#FFD0D8]
                  ${
                    answer !== undefined
                      ? index + 1 === question.answer
                        ? 'bg-[#9EE76B]'
                        : index + 1 === answer
                          ? 'bg-[#FF6C6C]'
                          : 'bg-[#FFD0D8]'
                      : 'bg-[#FFD0D8]'
                  }${params.quiz_id=="8" ? " flex w-fit justify-center items-center p-2" : "w-full"}`}
                  onClick={() =>
                    handleAnswer(index, index + 1 === question.answer)
                  }
                  disabled={answer !== undefined} // ป้องกันตอบซ้ำ
                >
                  {(params.quiz_id=="8")? <Image alt='choice' src={choice} width={300} height={0}></Image>:(choice)}
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quiz;
