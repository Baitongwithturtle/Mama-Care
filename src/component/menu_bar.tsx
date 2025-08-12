'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { signOutAll } from '@/app/firebase/auth';
interface User {
  name: string;
  email: string;
  uID: string;
}
const MenuBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [user, setUser] = useState<User>();
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, mounted]);

  async function fetchUserData() {
    const uID = localStorage.getItem('uID');
    if (!uID) return;
    try {
      const response = await fetch(`/api/users/${uID}`);
      if (!response.ok) {
        console.error('Failed to fetch user data');
        return;
      }
      const data = await response.json();
      setUser(data.user);
      console.log('User data:', data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="absolute top-16 right-8"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </button>

      {mounted && open && (
        <div className="absolute inset-0  z-[9999] bg-[#fcf9da]">
          <img src="/assets/5.webp" alt="frame" className="absolute top-0" />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className="absolute flex flex-col items-center mt-18 w-full overflow-y-auto"
          >
            <div className="flex flex-col items-center w-full px-[20px] gap-[20px]">
              <h1 className="text-[48px] leading-[48px] font-bold text-[#F0818C] font-baloo">
                Menu
              </h1>

              <div className="flex flex-col items-center w-full gap-[18px]">
                <button
                  className="flex justify-center items-center gap-2 rounded-full bg-white border border-[#F0818C] w-full max-w-[280px] py-2"
                  onClick={() => {
                    window.location.href = '/content';
                  }}
                >
                  <Image
                    src="/assets/lightbumb.png"
                    alt="frame"
                    width={48}
                    height={48}
                  />
                  <div className="text-center flex flex-col items-center">
                    <p className="font-baloo text-[24px] leading-[24px] font-bold">
                      Content
                    </p>
                    <span className="font-sarabun text-[14px]">
                      ความรู้ทั่วไป
                    </span>
                  </div>
                </button>
                <button
                  className="flex justify-center items-center gap-2 rounded-full bg-white border border-[#F0818C] w-full max-w-[280px] py-2"
                  onClick={() => {
                    window.location.href = '/quiz';
                  }}
                >
                  <Image
                    src="/assets/test.png"
                    alt="frame"
                    width={48}
                    height={48}
                  />
                  <div className="text-center flex flex-col items-center">
                    <p className="font-baloo text-[24px] leading-[24px] font-bold">
                      Test
                    </p>
                    <span className="font-sarabun text-[14px]">
                      แบบทดสอบความรู้
                    </span>
                  </div>
                </button>
                <button
                  className="flex justify-center items-center gap-2 rounded-full bg-white border border-[#F0818C] w-full max-w-[280px] py-2"
                  onClick={() => {
                    window.location.href = '/chatbot';
                  }}
                >
                  <Image
                    src="/assets/chatbot.png"
                    alt="frame"
                    width={48}
                    height={48}
                  />
                  <div className="text-center flex flex-col items-center">
                    <p className="font-baloo text-[24px] leading-[24px] font-bold">
                      Chat AI
                    </p>
                    <span className="font-sarabun text-[14px]">
                      ปรึกษาแชท AI
                    </span>
                  </div>
                </button>
                <h3 className="font-baloo text-[20px] leading-[20px] font-bold">
                  Profile
                </h3>
                <p className="font-baloo text-[16px] leading-[16px]">
                  {user?.email}
                </p>
                <button
                  onClick={signOutAll}
                  className="bg-pinky px-[12px] py-[6px] rounded-md font-baloo text-[14px] leading-[14px] text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="absolute top-16 right-8 z-50"
          >
            <X className="h-7 w-7" />
            <span className="sr-only">Close</span>
          </button>
          <img alt="curve" src="/assets/1.webp" className="absolute bottom-0" />
        </div>
      )}
    </>
  );
};

export default MenuBar;
