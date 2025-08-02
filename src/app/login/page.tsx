'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { signInWithGoogle } from '@/app/firebase/auth';

const page = () => {
  function handleLogin() {
    signInWithGoogle();
  }
  return (
    <div className="flex flex-col mobile  items-center justify-between">
      <img alt="curve" src="assets/1.webp" className="rotate-180"></img>
      <img
        alt="center mama care"
        src="assets/4.webp"
        width={350}
        height={0}
      ></img>

      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[52px] leading-[52px] font-bold font-baloo">
          Login Here
        </h1>
        <h2 className="text-[24px] leading-[24px] font-semibold">
          Welcome to planner
        </h2>
      </div>

      <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-2 px-20 py-2 bg-white border border-[#DD6774] rounded-full shadow hover:bg-[#FFD0D8] transition"
      >
        <img
          alt="google icon"
          src="assets/google.svg"
          width={20}
          height={20}
        ></img>
        <p className="text-nowrap font-baloo text-[16px] leading-[16px]">
          Login with Google
        </p>
      </button>

      <img alt="foot" src="assets/3.webp" width={200} />
      <img alt="curve" src="assets/1.webp" />
    </div>
  );
};

export default page;
