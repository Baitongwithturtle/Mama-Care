import React from 'react';
import Assessment from '@/component/assessment/assessment';
import MenuBar from '@/component/menu_bar';

interface Form {
  title: string;
  detail: formDetail[];
}
interface formDetail {
  text: string;
  star: number;
}
const Page = () => {
  const form: Form[] = [
    {
      title: 'ด้านเนื้อหา',
      detail: [
        { text: '1.เนื้อหามีความชัดเจน เข้าใจง่าย', star: 0 },
        { text: '2. เนื้อหาครอบคลุมสิ่งที่แม่หลังคลอดควรรู้', star: 0 },
        { text: '3.ข้อมูลเรื่องการดูแลแผลผ่าตัดมีประโยชน์', star: 0 },
        { text: '4.เนื้อหาในแอพมีความน่าเชื่อถือ', star: 0 },
        {
          text: '5.มีการใช้คำถามหรือแบบฝึกหัดประกอบเพื่อทบทวนความเข้าใจ',
          star: 0,
        },
        { text: '6.การตัดลำดับเนื้อหาเป็นระบบ เข้าใจง่าย', star: 0 },
        { text: '7.ใช้ภาษาที่เหมาะสมกับระดับของผู้ใช้งาน', star: 0 },
      ],
    },
    {
      title: 'ด้านประโยชน์ต่อแม่หลังคลอด',
      detail: [
        { text: '1.แอพช่วยให้ดูแลแผลผ่าตัดได้ถูกต้องมากขึ้น', star: 0 },
        { text: '2.ช่วยให้รู้สึกมั่นใจในการดูแลตัวเองหลังคลอด', star: 0 },
        { text: '3.ช่วยลดการกังวลเกี่ยวกับร่างกายหลังคลอด', star: 0 },
        { text: '4.เนื้อหาในแอพมีความน่าเชื่อถือ', star: 0 },
        {
          text: '5.มีการใช้คำถามหรือแบบฝึกหัดประกอบ เพื่อทบทวนความเข้าใจ',
          star: 0,
        },
        { text: '6.สีพื้นหลังและข้อความมีความชัดเจน ไม่รบกวนสายตา', star: 0 },
        { text: '7.ปุ่มควบคุมและเมนูต่างๆใช้งานง่าย', star: 0 },
        { text: '8.เข้าใช้งานเนื้อหาได้สะดวก ไม่ค้าง ไม่สะดุด', star: 0 },
        { text: '9.มีการแสดงผลเนื้อหา เช่น วิดิโอหรือภาพ มีคุณภาพ', star: 0 },
        { text: '10.ข้อมูลในแอพโหลดเร็ว ใช้งานไม่สะดุด', star: 0 },
        {
          text: '11.รองรับการใช้งานบนอุปกรณ์หลากหลาย (มือถือ แท็บเล็ต คอมพิวเตอร์)',
          star: 0,
        },
        { text: '12.มีคำอธิบายหรือคู่มือการใช้งานอย่าง ชัดเจน', star: 0 },
      ],
    },
    {
      title: 'ด้านการออกแบบแอพ/การใช้งาน',
      detail: [
        { text: '1.รูปแบบหน้าจออ่านง่าย ใช้งานสะดวก', star: 0 },
        { text: '2. สีสันหรือภาพประกอบในแอพทำให้น่าสนใจ', star: 0 },
        { text: '3. ฟ้อนต์และขนาดตัวอักษรอ่านง่าย เหมาะสม', star: 0 },
        { text: '4.ช่วยให้เรียนรู้ได้ด้วยตนเองโดยไม่ต้องไปโรงพยาบาล', star: 0 },
        {
          text: '5. มีประโยชน์ต่อทั้งมารดาหลังคลอด สามารถนำไปถ่ายทอดหรือให้ความรู้ให้กับสามีหรือคนในบ้านหรือคนรอบตัวให้ช่วยดูแลต่อได้',
          star: 0,
        },
      ],
    },
  ];
  return (
    <div className="mobile flex flex-col justify-between pt-12 pb-9">
      <img
        src="assets/5.webp"
        alt="frame"
        className="fixed top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <MenuBar />
      <div className="px-[20px] mt-4">
        <h1 className="text-[32px] font-extrabold font-sarabun text-center text-[#F0818C]">
          ความพึงพอใจในการใช้ <span className="text-nowrap">MaMa Care</span>
        </h1>
        <Assessment prop={form} />
      </div>
      <img
        alt="curve"
        src="assets/1.webp"
        className="fixed bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
    </div>
  );
};

export default Page;
