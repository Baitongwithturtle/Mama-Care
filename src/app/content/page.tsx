'use client';
import MenuBar from '@/component/menu_bar';
import React from 'react';
import Image from 'next/image';
const page = () => {
  const menuItems = [
    {
      title: 'สาเหตุของการติดเชื้อ',
      image: '/assets/magnifying.png',
      path: '/content/cause',
    },
    {
      title: 'อาการและอาการแสดงจากการติดเชื้อ',
      image: '/assets/temperature.png',
      path: '/content/symptoms',
    },
    {
      title: 'การป้องกันการติดเชื้อของแผล',
      image: '/assets/plaster.png',
      path: '/content/protection',
    },
    {
      title: 'การดูแลแผลผ่าตัด',
      image: '/assets/heart.png',
      path: '/content/care',
    },
  ];
  return (
    <div className="mobile flex flex-col items-center justify-between pb-9 pt-18 relative">
      <img
        src="assets/5.webp"
        alt="frame"
        className="absolute top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <MenuBar />
      <div className="flex flex-col items-center justify-center w-full px-[20px] gap-4">
        <div className="text-end">
          <h1 className="text-[48px] leading-[48px] font-baloo font-bold text-pinky">
            Content
          </h1>
          <p className="text-[14px] font-sarabun font-bold text-black">
            ความรู้ทั่วไป
          </p>
        </div>
        <ul className="flex flex-wrap gap-4 justify-center">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className="flex flex-col items-center justify-center gap-1 bg-white font-sarabun w-[160px] h-[160px] p-2 border-1 border-pinky rounded-lg"
                onClick={() => (window.location.href = item.path)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-cover"
                />
                <p className="font-sarabun text-[14px] min-h-[42px]">
                  {item.title}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <img
        alt="curve"
        src="assets/1.webp"
        className="absolute bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
    </div>
  );
};

export default page;
