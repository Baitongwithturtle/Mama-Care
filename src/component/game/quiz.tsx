'use client';
import React, { useEffect, useState } from 'react';
interface Question {
  id: number;
  question: string;
  choices: string[];
  answer: number;
}
const quiz = ({ question }: { question: Question | null }) => {
  const [answer, setAnswer] = useState<number>();
  return (
    <div className="bg-white w-full h-full flex flex-col justify-center items-center px-[20px] py-[40px] rounded-[20px]">
      <div className="relative w-fit">
        <img
          src={'/assets/state/sparkle.webp'}
          alt="sparkle"
          width={60}
          className="rotate-180 absolute left-[-80px] top-[-20px]"
        />
        <header className="flex flex-col items-end">
          <h1 className="font-baloo text-[64px] leading-[64px] font-extrabold text-[#F0818C]">
            QUIZ
          </h1>
          <span className="font-sarabun text-[14px] font-bold">
            แบบทดสอบความรู้
          </span>
        </header>
        <img
          src={'/assets/state/sparkle.webp'}
          alt="sparkle"
          width={60}
          className="absolute right-[-80px] top-[40px]"
        />
      </div>
      {question ? (
        <>
          <p className="mt-10 text-lg font-sarabun font-semibold">
            {question.question}
          </p>
          <ul className="mt-8 space-y-4 w-full">
            {question.choices.map((choice, index) => (
              <li key={index} className="text-base relative">
                <div className="flex rounded-full bg-white outline-4 outline-[#F0818C] border-dashed border-2 w-[44px] h-[44px] justify-center items-center top-1/2 -translate-y-1/2 absolute">
                  <p className="font-baloo text-[24px] leading-[20px] font-extrabold">
                    {index + 1}
                  </p>
                </div>
                <button
                  className={`w-full min-h-[44px] rounded-[12px] transition-colors duration-300 hover:[box-shadow:0_0_20px_0_#FFD0D8]
    ${
      answer
        ? index + 1 === question.answer
          ? 'bg-[#9EE76B]' // ถูก
          : index + 1 === answer
            ? 'bg-[#FF6C6C]' // ตอบผิด
            : 'bg-[#FFD0D8]' // ปุ่มอื่น
        : 'bg-[#FFD0D8]' // ยังไม่ตอบ
    }`}
                  onClick={() => (answer ? undefined : setAnswer(index + 1))}
                >
                  {choice}
                </button>
              </li>
            ))}
          </ul>
          {/* <button className="bg-[#F0818C] h-[32px] px-6 rounded-md mt-4 self-end font-sarabun text-[14px] text-white">ยืนยัน</button> */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default quiz;
