import React from 'react';
import MenuBar from '@/component/menu_bar';

export default function Page() {
  return (
    <div className="mobile bg-[#FCF9DA] p-6 flex flex-col items-center font-baloo">
      <MenuBar />

      <div className="items-center flex justify-center bg-[#AADAD5] font-sarabun font-bold w-200 min-h-[40px] px-8 border border-white text-2x gap-2 mb-10">
        <img alt="care" src="/assets/14.webp" width={40} />
        <h1 className="text-[30px]">การดูแลแผลผ่าตัด</h1>
      </div>
      {/*หัวข้อ*/}
      <div className="bg-[#fad172] shadow-[_8px_10px_white]  w-90 h-25 rounded-xl items-center border-2 border-black border-dashed">
        <h1 className="text-center font-bold font-sarabun text-[26px] mt-2 text-red-800">
          อาการผิดปกติ
        </h1>
        <h1 className="text-center font-bold font-sarabun text-[26px]">
          ที่ควรมาพบแพทย์ที่โรงพยาบาล
        </h1>
      </div>
      {/*เนื้อหา*/}
      <div className="flex flex-col items-center">
        <div className="border-[#73B8B3] border-2 p-2 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-120 h-65 flex flex-col items-center gap-2 mt-8  bg-white">
          <img
            src="/assets/39.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover w-85 py-2"
          />
        </div>
      </div>
      <h2 className="font-sarabun text-center font-bold mt-6 text-xl text-red-700">
        แผลมีรอยปริแยก มีอาการบวม แดง รอบ ๆ แผล
      </h2>

      <div className="flex flex-col items-center">
        <div className="border-[#FF8EAF] border-2 p-2 pb-1 rounded-xl shadow-[_8px_10px_pink] w-120 h-65 flex flex-col items-center gap-2 mt-8  bg-white">
          <img
            src="/assets/40.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover w-85 h-90 py-2"
          />
        </div>
      </div>
      <h2 className="font-sarabun text-center font-bold mt-6 text-xl text-red-700">
        มีอาการปวดแผลมาก รับประทานยาบรรเทาปวด
      </h2>
      <h2 className="font-sarabun text-center font-bold mt-2 text-xl text-red-700">
        แต่อาการไม่ดีขึ้น
      </h2>

      <div className="flex flex-col items-center">
        <div className="border-[#5a8f8b] border-2 p-2 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-120 h-65 flex flex-col items-center gap-2 mt-8  bg-white">
          <img
            src="/assets/41.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover w-85 h-90 py-2"
          />
        </div>
      </div>
      <h2 className="font-sarabun text-center font-bold mt-6 text-xl text-red-700">
        แผลมีสารคัดหลั่งซึม เช่น หนอง หรือเลือด เป็นต้น
      </h2>

      <div className="flex flex-col items-center">
        <div className="border-[#FF8EAF]  border-2 p-2 pb-1 rounded-xl shadow-[_8px_10px_pink] w-120 h-65 flex flex-col items-center gap-2 mt-8  bg-white">
          <img
            src="/assets/42.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover w-85 h-90 py-2"
          />
        </div>
      </div>
      <h2 className="font-sarabun text-center font-bold mt-6 text-xl text-red-700">
        มีไข้ หนาวสั่น
      </h2>

      <div className="flex flex-col items-center">
        <div className="border-[#73B8B3] border-2 p-2 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-120 h-65 flex flex-col items-center gap-2 mt-8  bg-white">
          <img
            src="/assets/43.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover w-85 h-90 py-2"
          />
        </div>
      </div>
      <h2 className="font-sarabun text-center font-bold mt-6 text-xl text-red-700">
        ภายหลังคลอด 2 สัปดาห์ ยังสามารถคลำได้ก้อนบริเวณหน้าท้อง
      </h2>
    </div>
  );
}
