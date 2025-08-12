'use client';
import React from 'react';
import NavBar from '@/component/nav_bar';
import MenuBar from '@/component/menu_bar';

function page() {
  function handleClick(path: string) {
    window.location.href = `/content/care/${path}`;
  }
  return (
    <div className="mobile pb-9 pt-12 flex flex-col items-center relative">
      <img
        src="/assets/5.webp"
        alt="frame"
        className="fixed top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <MenuBar />

      {/* หัวข้อ */}
      <div className="items-center flex justify-center bg-[#AADAD5] font-bold min-h-[40px] px-8 border border-white text-2x gap-2 mb-10">
        <img alt="care" src="/assets/14.webp" width={40} />
        <h1 className="text-[30px] font-sarabun">การดูแลแผลผ่าตัด</h1>
      </div>
      {/*เนื้อหา*/}
      <div
        className="bg-[#FAF0D9] shadow-[_8px_10px_white]  w-120 h-40 p-6 rounded-xl items-center"
        onClick={() => handleClick('guidelines')}
      >
        <h1 className="text-center font-bold font-sarabun text-[32px] mt-2">
          คำแนะนำ
        </h1>
        <h1 className="items-center font-bold font-sarabun text-[30px] ">
          การดูแลแผลผ่าคลอดทางหน้าท้อง
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-12 mt-12">
        {/* แผลผ่าคลอด */}
        <div className="flex flex-col items-center">
          <div
            className="bg-[#FAF0D9] shadow-[_8px_10px_white] w-70 h-50 p-6 rounded-xl items-center"
            onClick={() => handleClick('abnormal')}
          >
            <p className="text-center font-bold font-sarabun text-[28px] mt-4">
              อาการผิดปกติ
            </p>
            <p className="text-center font-bold font-sarabun text-[28px] mt-4">
              ที่ควรมาพบแพทย์
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div
            className="bg-[#FAF0D9] shadow-[_8px_10px_white] w-70 h-50 p-6 rounded-xl items-center "
            onClick={() => handleClick('video')}
          >
            <p className="text-center font-bold font-sarabun text-[28px] mt-4">
              วิดิโอการดูแล
            </p>
            <p className="text-center font-bold font-sarabun text-[26px] mt-4">
              แผลผ่าคลอดเพิ่มเติม
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
