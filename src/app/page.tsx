'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  function loginpage() {
    router.replace('/login');
  }
  return (
    <div
      className="flex flex-col mobile items-center justify-center gap-2"
      onClick={loginpage}
    >
      <img
        src="assets/5.webp"
        alt="frame"
        className="fixed top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <img
        alt="center mama care"
        src="assets/4.webp"
        width={320}
        height={0}
      ></img>
      <img
        alt="center mama care"
        src="assets/2.webp"
        width={220}
        height={0}
      ></img>
      <img
        alt="center mama care"
        src="assets/3.webp"
        width={200}
        height={0}
      ></img>
      <img
        alt="curve"
        src="assets/1.webp"
        className="fixed bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
    </div>
  );
}
