import React from 'react';
import MenuBar from '@/component/menu_bar';

export default function Page() {
  return (
    <div className="mobile bg-[#FCF9DA] p-6 flex flex-col items-center font-baloo ">
      <MenuBar />

      <div className="items-center flex justify-center bg-[#AADAD5] font-sarabun font-bold w-200 min-h-[40px] px-8 border border-white text-2x gap-2 mb-10">
        <img alt="care" src="/assets/14.webp" width={40} />
        <h1 className="text-[30px]">การดูแลแผลผ่าตัด</h1>
      </div>
      {/*หัวข้อ*/}
      <div className="bg-[#fad172] shadow-[_8px_10px_white]  w-90 h-16 rounded-xl items-center border-2 border-black border-dashed">
        <h1 className="text-center font-bold font-sarabun text-[24px] mt-2 text-red-800">
          วิดีโอการดูแลแผลผ่าคลอดเพิ่มเติม
        </h1>
      </div>
      {/*เนื้อหา*/}
      <div className="bg-[#FFF5E6] p-4 rounded-xl border-2 border-[#73B8B3] shadow-[8px_10px_rgba(121,173,154,1)] w-[900px] flex flex-col mt-10">
        <div className="flex">
          {/*หัวข้อ*/}
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9qg6yN6CXlc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/*หัวข้อ*/}
          <div className="flex flex-col justify-center px-4">
            <p className="font-sarabun text-lg leading-relaxed">
              คลิปนี้แนะนำเทคนิคดูแลแผลผ่าคลอดให้หายไว
              โดยเน้นการปฏิบัติตัวที่ถูกต้อง เช่น หลีกเลี่ยงยกของหนัก
              ใช้ผ้ารัดหน้าท้อง พักผ่อนให้เพียงพอ และดูแลแผลให้แห้งสะอาด
              ควรรับประทานอาหารที่มีโปรตีนสูง
              เพื่อช่วยซ่อมแซมแผลและฟื้นตัวเร็วขึ้น
            </p>
          </div>
        </div>

        {/*หัวข้อ*/}
        <div className="mt-4">
          <a
            href="https://www.youtube.com/embed/9qg6yN6CXlc"
            className="underline text-blue-700"
          >
            https://www.youtube.com/embed/9qg6yN6CXlc
          </a>
        </div>

        {/*หัวข้อ*/}
        <p className="mt-2 text-center text-sm text-gray-700">
          (วิดิโอนี้ใช้เพื่อการศึกษาเท่านั้น ไม่สามารถใช้แทนคำแนะนำจากแพทย์ได้
          หากมีข้อสงสัยควรปรึกษาแพทย์ผู้เชี่ยวชาญ)
        </p>
      </div>

      <div className="bg-[#FFF5E6] p-4 rounded-xl border-2 border-[#FF8EAF]  shadow-[_8px_10px_pink] w-[900px] flex flex-col mt-10">
        <div className="flex">
          {/*หัวข้อ*/}
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/W-9EenslZL4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/*หัวข้อ*/}
          <div className="flex flex-col justify-center px-4">
            <p className="font-sarabun text-lg leading-relaxed">
              คลิปนี้ให้ความรู้เกี่ยวกับการดูแลแผลผ่าคลอดอย่างถูกวิธี
              เพื่อช่วยให้แผลหายเร็ว ลดการอักเสบ ป้องกันการติดเชื้อ
              และลดการเกิดแผลเป็นคีลอยด์ โดยแนะนำการทำความสะอาดแผล
              การใช้ผลิตภัณฑ์ลดรอยแผล และข้อควรระวังหลังคลอด
              เหมาะสำหรับคุณแม่ที่ต้องการดูแลแผลผ่าคลอดด้วยตนเองที่บ้านอย่างปลอดภัยและได้ผลดี
            </p>
          </div>
        </div>

        {/*หัวข้อ*/}
        <div className="mt-4">
          <a
            href="https://www.youtube.com/embed/W-9EenslZL4"
            className="underline text-blue-700"
          >
            https://www.youtube.com/embed/W-9EenslZL4
          </a>
        </div>

        {/*หัวข้อ*/}
        <p className="mt-2 text-center text-sm text-gray-700">
          (วิดิโอนี้ใช้เพื่อการศึกษาเท่านั้น ไม่สามารถใช้แทนคำแนะนำจากแพทย์ได้
          หากมีข้อสงสัยควรปรึกษาแพทย์ผู้เชี่ยวชาญ)
        </p>
      </div>
    </div>
  );
}
