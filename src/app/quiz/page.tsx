import State from "@/component/game/state";
import React from "react";

const page = () => {
  return (
    <div className="mobile flex flex-col items-center justify-between">
      <section className="flex flex-col items-center gap-4">
        <img alt="curve" src="assets/1.webp" className="rotate-180"/>
        <div className="relative">
          <img src={"assets/state/sparkle.webp"} alt="sparkle" width={60} className="rotate-180 absolute left-[-80px] top-[-20px]"/>
          <header className="flex flex-col items-end">
            <h1 className="font-baloo text-[64px] leading-[64px] font-extrabold text-[#F0818C]">
              QUIZ
            </h1>
            <span className="font-sarabun text-[14px] font-bold">
              แบบทดสอบความรู้
            </span>
          </header>
          <img src={"assets/state/sparkle.webp"} alt="sparkle" width={60} className="absolute right-[-80px] top-[40px]"/>
        </div>
        <State />
      </section>
      <img alt="frame" src="assets/1.webp" />
    </div>
  );
};

export default page;
