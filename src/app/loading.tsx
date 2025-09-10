'use client';

import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex mobile items-center justify-center w-full">
      <img
        src="/assets/5.webp"
        alt="frame"
        className="absolute top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="loader"></div>
      </div>
      <img
        src="/assets/1.webp"
        alt="frame"
        className="absolute bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
    </div>
  );
}
