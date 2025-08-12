import React from 'react';
import NavBar from '@/component/nav_bar';
import MenuBar from '@/component/menu_bar';

function page() {
  return (
    <div className="mobile bg-[#FCF9DA] p-6 flex flex-col items-center font-baloo">
      <MenuBar />

      {/* หัวข้อ */}
      <div className="items-center flex justify-center bg-[#AADAD5] font-sarabun font-bold w-3xl min-h-[40px] px-8 border border-white text-2x gap-2 mb-2">
        <img alt="chem" src="/assets/13.webp" width={40} />
        <h1 className="text-2xl">อาการและอาการแสดงจากการติดเชื้อ</h1>
      </div>
      {/* เนื้อหา */}
      <div className="grid grid-cols-2 gap-10 py-6">
        {/* อ้วน */}
        <div className="flex flex-col items-center bg-white">
          <div className=" border-[#FF8EAF] border-5 p-4 pb-1 rounded-xl shadow-[_8px_10px_pink]  w-70 h-50 items-center">
            <img
              src="/assets/15.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width={40}"
            />
            <p className="font-sarabun text-center font-bold px-12 py-1 ">
              ปวด บวม แดง บริเวณแผล
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  bg-white">
          <div className="flex border-[#73B8B3] border-5 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(133,201,197,1)] w-70 h-50 items-center">
            <img
              src="/assets/19.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover h-25"
            />
            <p className="font-sarabun text-center font-bold ">
              แผลแยกหรือปริออก
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  bg-white">
          <div className=" flex flex-row  border-[#FF8EAF] border-5 p-2 pb-1 rounded-xl shadow-[_8px_10px_pink] w-70 h-50 items-center">
            <img
              src="/assets/17.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width-40 h-40"
            />
            <p className="font-sarabun text-center font-bold font-px-12 py-3">
              ไข้สูงเกิน 38 องศาเซลเซียส
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center  bg-white">
          <div className=" flex flex-row  border-[#73B8B3] border-5 p-4 pb-1 rounded-xl shadow-[_8px_10px_rgba(133,201,197,1)] w-70 h-50 items-center">
            <img
              src="/assets/16.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover width-40 h-35 "
            />
            <p className="font-sarabun text-center font-bold font-px-12 py-3">
              มีฝีหนองบริเวณแผล
            </p>
          </div>
        </div>
      </div>
      <div className="items-center flex justify-center mt-6  bg-white">
        <div className=" border-[#FF8EAF] border-5 p-3 pb-1 rounded-xl shadow-[_8px_10px_pink] w-70 h-55 items-center">
          <img
            src="/assets/18.webp"
            alt="รูปอ้วน"
            className="rounded-md object-cover width={40} "
          />
          <p className="font-sarabun text-center font-semibold px-9 py-3">
            นํ้าคาวปลามีกลิ่นแรงหรือมีเลือดปน
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
