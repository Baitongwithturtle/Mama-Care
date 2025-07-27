import MenuBar from '@/component/menu_bar';
import React from 'react';

const page = () => {
  return (
    <div className="mobile flex flex-col items-center justify-between relative">
      {/* Section: Top Content */}
      <div className="flex flex-col items-center h-full gap-20">
        {/* Top Image */}
        <img src="assets/5.webp" alt="frame" />
        {/* <div className="w-full flex items-end justify-end px-5">
          <MenuBar />
        </div> */}

        {/* Content Box */}
        <div className="flex flex-col items-center justify-start w-full min-h-full px-20 gap-4">
          {/* Header Section */}
          <div className="bg-[#62ABA4] rounded-[8px] px-8 shadow-lg text-white text-center">
            <h1 className="text-3xl font-baloo text-black">Content</h1>
            <p className="font-sarabun">ความรู้ทั่วไป</p>
          </div>

          {/* Buttons */}
          <button className="bg-[#AADAD5] font-sarabun w-full min-h-[40px] px-8 border border-white text-xl">
            สาเหตุของการติดเชื้อ
          </button>
          <button className="bg-[#AADAD5] font-sarabun w-full min-h-[40px] px-8 border border-white text-xl">
            อาการและอาการแสดงจากการติดเชื้อ
          </button>
          <button className="bg-[#AADAD5] font-sarabun w-full min-h-[40px] px-8 border border-white text-xl">
            การป้องกันการติดเชื้อของแผล
          </button>
          <button className="bg-[#AADAD5] font-sarabun w-full min-h-[40px] px-8 py-2 border border-white text-xl">
            การดูแลแผลผ่าตัด
          </button>
        </div>
      </div>

      {/* Bottom Image */}

      <img src="assets/1.webp" alt="frame" />
    </div>
  );
};

export default page;
