import State from '@/component/game/state';
import MenuBar from '@/component/menu_bar';
import React from 'react';

const Page = () => {
  return (
    <div className="mobile flex flex-col items-center justify-between pb-9 pt-12 relative">
      <section className="flex flex-col items-center">
        <img
          src="assets/5.webp"
          alt="frame"
          className="fixed top-0 object-cover w-[447.96px] h-[36.5px]"
        />
        <MenuBar />
        <div className="relative py-8">
          <img
            src={'assets/state/sparkle.webp'}
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
            src={'assets/state/sparkle.webp'}
            alt="sparkle"
            width={60}
            className="absolute right-[-80px] bottom-4"
          />
        </div>
        <State />
      </section>
      <img
        alt="curve"
        src="assets/1.webp"
        className="fixed bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
    </div>
  );
};

export default Page;
