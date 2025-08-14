import React from 'react';
import MenuBar from '@/component/menu_bar';

export default function Page() {
  return (
    <div className="mobile bg-[#FCF9DA] p-6 flex flex-col items-center font-baloo">
      <MenuBar />
      <div className="items-center flex justify-center bg-[#AADAD5] font-sarabun font-bold w-fit  min-h-[40px] px-8 border border-white text-2x gap-2 mb-10">
        <img alt="care" src="/assets/14.webp" width={40} />
        <h1 className="text-[30px]">การดูแลแผลผ่าตัด</h1>
      </div>
      {/*เนื้อหา*/}
      <div className="grid grid-cols-1 gap-6">
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#FF8EAF] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_pink] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              ห้ามให้แผลโดนนํ้า หากปิดแผลด้วยพลาส-เตอร์กันน้ำสามารถอาบน้ำได้ปกติ
            </p>
            <img
              src="/assets/24.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-2"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#73B8B3] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              ห้ามแกะ หรือเกา บริเวณแผล
            </p>
            <img
              src="/assets/25.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#73B8B3] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">ห้ามยกของหนัก</p>
            <p className="font-sarabun text-center font-bold">
              อย่างน้อย 6 สัปดาห์หลังคลอด
            </p>
            <img
              src="/assets/26.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-4"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#FF8EAF] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_pink] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              งดการมีเพศสัมพันธ์
            </p>
            <p className="font-sarabun text-center font-bold">
              อย่างน้อย 6 สัปดาห์หลังคลอด
            </p>
            <img
              src="/assets/27.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#FF8EAF] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_pink] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              {' '}
              รับประทานอาหารให้ครบ 5 หมู่ โดยเฉพาะอาหารประเภทโปรตีน เช่น
              เนื้อสัตว์ นม ไข่
            </p>
            <img
              src="/assets/28.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#73B8B3] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              หลีกเลี่ยงการรับประทานอาหารรสจัด
            </p>
            <p className="font-sarabun text-center font-bold">
              ของหมักดอง และอาหารสุก ๆ ดิบ ๆ
            </p>
            <img
              src="/assets/29.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-4"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#73B8B3] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              {' '}
              หลีกเลี่ยงเครื่องดื่มที่มีแอลกอฮอล์
            </p>
            <p className="font-sarabun text-center font-bold">
              และการสูบบุหรี่
            </p>
            <div className="flex gap-2 mt-2">
              <img
                src="/assets/30.webp"
                alt="รูปอ้วน"
                className="flex object-cover width-30 h-50 rounded-md"
              />
              <img
                src="/assets/31.webp"
                alt="รูปอ้วน"
                className="flex object-cover width-30 h-50 rounded-md"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#FF8EAF] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_pink] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              {' '}
              ดื่มน้ำให้เพียงพออย่างน้อย 8-10 แก้วหรืออย่างน้อยวันละ 2 ลิตร
            </p>
            <img
              src="/assets/36.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#FF8EAF] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_pink] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              พักผ่อนให้เพียงพออย่างน้อย 6-8 ชั่วโมง
            </p>
            <img
              src="/assets/32.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-5"
            />
          </div>
        </div>
        <div className="flex flex-col items-center bg-white">
          <div className="border-[#73B8B3] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-80 h-80 flex flex-col items-center">
            <p className="font-sarabun text-center font-bold">
              มาพบแพทย์เพื่อตรวจดูแผล ทำแผล{' '}
            </p>
            <p className="font-sarabun text-center font-bold">
              และตรวจหลังคลอดตามที่แพทย์นัด
            </p>
            <img
              src="/assets/33.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40} py-4"
            />
          </div>
        </div>
        <div className="border-[#73B8B3] border-2 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(121,173,154,1)] w-80 h-80 flex flex-col items-center bg-white">
          <p className="font-sarabun text-center font-bold">
            มาพบแพทย์เพื่อตรวจดูแผล ทำแผล{' '}
          </p>
          <p className="font-sarabun text-center font-bold">
            และตรวจหลังคลอดตามที่แพทย์นัด
          </p>
          <img
            src="/assets/34.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover w-120 h py-4"
          />
        </div>
      </div>
      </div>
  );
}
