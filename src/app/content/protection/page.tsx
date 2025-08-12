import React from 'react';
import NavBar from '@/component/nav_bar';
import MenuBar from '@/component/menu_bar';

export default function Page() {
  return (
    <div className="mobile bg-pink-200 p-6 flex flex-col items-center font-baloo relative">
      <MenuBar />
      {/* หัวข้อ */}
      <div className="items-center flex justify-center bg-[#AADAD5] font-sarabun font-bold w-200 min-h-[40px] px-8 border border-white text-2x gap-2 mb-10">
        <img alt="care" src="/assets/14.webp" width={40} />
        <h1 className="text-[30px]">การดูแลแผลผ่าตัด</h1>
      </div>
      {/*เนื้อหา*/}
      <div className="bg-[#FAF0D9] shadow-[_8px_10px_white]  w-120 h-40 p-6 rounded-xl items-center">
        <h1 className="text-center font-bold font-sarabun text-[32px] mt-2">
          Preoperative Practices
        </h1>
        <h1 className="text-center font-bold font-sarabun text-[30px]">
          ป้องกันก่อนผ่าตัด
        </h1>
      </div>
      <div className="bg-[#FAF0D9] shadow-[_8px_10px_white]  w-120 h-40 p-6 rounded-xl items-center mt-10">
        <h1 className="text-center font-bold font-sarabun text-[32px] mt-2">
          Intraoperative Practices
        </h1>
        <h1 className="text-center font-bold font-sarabun text-[30px] ">
          ป้องกันระหว่างผ่าตัด
        </h1>
      </div>
      <div className="bg-[#FAF0D9] shadow-[_8px_10px_white]  w-120 h-40 p-6 rounded-xl items-center mt-10">
        <h1 className="text-center font-bold font-sarabun text-[32px] mt-2">
          Postoperative Practices
        </h1>
        <h1 className="text-center font-bold font-sarabun text-[30px]">
          ป้องกันหลังผ่าตัด
        </h1>
      </div>
    </div>
  );
}
