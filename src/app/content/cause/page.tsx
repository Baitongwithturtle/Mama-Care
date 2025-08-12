import React from 'react';
import NavBar from '@/component/nav_bar';
import MenuBar from '@/component/menu_bar';

export default function causepage() {
  return (
    <div className="mobile bg-[#FCF9DA] p-6 flex flex-col items-center font-baloo">
      <MenuBar />

      {/* หัวข้อ */}
      <div className="items-center flex justify-center bg-[#AADAD5] font-baloo font-bold w-200 min-h-[40px] px-8 border border-white gap-2 mb-12">
        <img alt="glass" src="/assets/8.webp" width={40} />
        <h1 className="text-2xl">สาเหตุของการติดเชื้อ</h1>
      </div>
      {/* เนื้อหา */}
      <div className="grid grid-cols-2 gap-6">
        {/* อ้วน */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
            <img
              src="/assets/9.webp"
              alt="รูปอ้วน"
              className="rounded-md object-cover  width={40}"
            />
          </div>
          <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-12 py-1 ">
            รูปร่างอ้วน
          </p>
        </div>

        {/* เป็นเบาหวาน */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
            <img
              src="/assets/11.webp"
              alt="เป็นเบาหวาน"
              className="rounded-md object-cover width={60} h-32"
            />
          </div>
          <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-9 py-1">
            เป็นเบาหวาน
          </p>
        </div>

        {/* Steroids */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
            <img
              src="/assets/12.webp"
              alt="การใช้สเตียรอยด์"
              className="rounded-md object-cover width={40} "
            />
          </div>
          <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-10 py-1">
            การใช้ steroid
          </p>
        </div>

        {/* มีภูมิต้านทานตํ่า */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
            <img
              src="/assets/10.webp"
              alt="มีภูมิต้านทานตํ่า"
              className="rounded-md object-cover width={40} h-32"
            />
          </div>
          <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-6 py-1">
            มีภูมิต้านทานตํ่า
          </p>
        </div>
        {/* มีภาวะซีด */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
            <img
              src="/assets/21.webp"
              alt="มีภูมิต้านทานตํ่า"
              className="rounded-md object-cover width={40} h-32"
            />
          </div>
          <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-6 py-1">
            มีภาวะซีด
          </p>
        </div>
        {/* มีก้อนเลือดคั่งที่แผล */}
        <div className="flex flex-col items-center">
          <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
            <img
              src="/assets/22.webp"
              alt="มีภูมิต้านทานตํ่า"
              className="rounded-md object-cover width={40} h-32"
            />
          </div>
          <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-6 py-1">
            มีก้อนเลือดคั่งที่แผล
          </p>
        </div>
      </div>
      {/* มีการติดเชื้อของเยื่อหุ้มเด็ก */}
      <div className="flex flex-col items-center py-10">
        <div className="bg-white p-6 rounded-xl shadow-[_0px_20px_rgba(255,142,175)] mask-origin-border items-center">
          <img
            src="/assets/23.webp"
            alt="มีภูมิต้านทานตํ่า"
            className="rounded-md object-cover width={40} h-32"
          />
        </div>
        <p className="font-sarabun rounded-2xl shadow-md bg-[#F7CBCE] border text-center font-bold px-6 py-1">
          มีการติดเชื้อของเยื่อหุ้มเด็ก
        </p>
      </div>
    </div>
  );
}
