"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  function loginpage(){
    router.replace("/login");
  }
  return (
    <div className="mobile flex flex-col items-center justify-between" onClick={loginpage}>
    <img alt='frame' src="assets/5.webp"></img>
    <img alt='center mama care' src="assets/4.webp" width={350} height={0}></img>
    <img alt='center mama care' src="assets/2.webp" width={350} height={0}></img>
    <img alt='center mama care' src="assets/3.webp" width={350} height={0}></img>
   <img alt='frame' src="assets/1.webp" ></img>
   </div>
  );
}
