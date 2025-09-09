'use client';
import React, { useEffect, useState } from 'react';
import { signInWithGoogle, signInWithName } from '@/app/firebase/auth';
const Privacy: React.FC = () => {
  return (
    <article className="flex flex-col items-center font-sarabun text-[14px] gap-2">
      <p>
        นักศึกษาวิทยาลัยพยาบาลบรมราชชนนี กรุงเทพ (ผู้วิจัย)
        มุ่งมั่นที่จะคุ้มครองข้อมูลส่วนบุคคลของท่านในฐานะที่ท่านเข้ารับบริการ{' '}
        <strong>Mama care</strong>{' '}
        ข้อมูลบุคคลของท่านจะได้รับความคุ้มครองตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล
        ปี 2562
        ผู้วิจัยในฐานะเป็นผู้ควบคุมข้อมูลส่วนบุคคลมีหน้าที่ในการแจ้งเอกสารฉบับนี้ให้แก่ท่านทราบถึงวัตถุประสงค์
        ข้อมูลที่ใช้ ระยะเวลาในการเก็บรักษา รวมถึงสิทธิของเจ้าของข้อมูลส่วนบุคคล
      </p>
      <h2 className="font-bold">นิยาม</h2>
      <ul>
        <li>
          <strong>“ข้อมูลส่วนบุคคล”</strong>
          หมายความว่า
          ข้อมูลเกี่ยวกับบุคคลซึ่งทำให้สามารถระบุตัวบุคคลนั้นได้ไม่ว่าทางตรงหรือทางอ้อม
          แต่ไม่รวมถึงข้อมูลของผู้ถึงแก่กรรมโดยเฉพาะ เช่น ภาพถ่ายประจำตัว ชื่อ
          นามสกุล อายุ เพศ วันเดือนปีเกิด เลขบัตรประจำตัวประชาชน เบอร์โทรศัพท์
          อีเมล เป็นต้น
        </li>
        <li>
          <strong>“ข้อมูลส่วนบุคคลที่มีความอ่อนไหว”</strong>
          หมายความว่า ข้อมูลส่วนบุคคลเกี่ยวกับเชื้อชาติ เผ่าพันธุ์
          ความคิดเห็นทางการเมือง ความเชื่อในลัทธิ ศาสนาหรือปรัชญา พฤติกรรมทางเพศ
          ประวัติอาชญากรรม ข้อมูลสุขภาพ ความพิการ ข้อมูลสหภาพแรงงาน
          ข้อมูลพันธุกรรม เป็นต้น
        </li>
        <li>
          <strong>“การประมวลผลข้อมูลส่วนบุคคล”</strong>
          หมายความว่า การเก็บรวบรวม ใช้ เปิดเผย หรือการกระทำใดๆ
          ต่อข้อมูลส่วนบุคคลหรือข้อมูลส่วนบุคคลที่มีความอ่อนไหว
          รวมถึงแต่ไม่จำกัดเพียง การส่งต่อ การโอน การทำลาย การลบ เป็นต้น
        </li>
        <li>
          <strong>“ผู้ควบคุมข้อมูลส่วนบุคคล”</strong>
          หมายความว่าบุคคลหรือนิติบุคคลซึ่งมีอำนาจหน้าที่ตัดสินใจเกี่ยวกับการเก็บรวบรวม
          ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล
        </li>
        <li>
          <strong>“เจ้าของข้อมูลส่วนบุคคล” หรือ “ท่าน”</strong>
          หมายความว่า
          เจ้าของข้อมูลส่วนบุคคลหรือเจ้าของข้อมูลส่วนบุคคลที่มีความอ่อนไหวที่ใช้ในการประมวลผลข้อมูลส่วนบุคคลตามนโยบายที่เป็นบุคคลธรรมดา
        </li>
      </ul>

      <h2 className="font-bold">วัตถุประสงค์</h2>
      <ol>
        <li>
          <p>เพื่อยืนยันตัวตนของผู้ใช้งานผ่านอีเมลและรักษาความปลอดภัยของระบบ</p>
          <p>
            <strong>ประเภทข้อมูล</strong>: ข้อมูลระบุตัวตน เช่น รหัสผ่าน
          </p>
        </li>
        <li>
          <p>
            เพื่อให้ข้อมูลความรู้และติดต่อสื่อสารกับผู้ใช้งาน เช่น
            ส่งอีเมลแจ้งเตือน ตอบกลับแบบฟอร์ม
          </p>
          <p>
            <strong>ประเภทข้อมูล</strong>: ข้อมูลติดต่อ เช่น อีเมล
            หมายเลขโทรศัพท์
          </p>
        </li>
        <li>
          <p>
            เพื่อวิเคราะห์และพัฒนาคุณภาพของการบริการโดยไม่บ่งชี้ตัวตนของเจ้าของข้อมูลส่วนบุคคล
          </p>
          <p>
            <strong>ประเภทข้อมูล</strong>: ข้อมูลสถิติ เช่น เวลาเข้าใช้งาน, IP
            address, ประเภทอุปกรณ์
          </p>
        </li>
      </ol>

      <h2 className="font-bold">ระยะเวลาในการเก็บรักษาข้อมูล</h2>
      <ol>
        <li>
          ผู้วิจัยจะเก็บรวบรวมข้อมูลส่วนบุคคลเท่าที่จำเป็นตามวัตถุประสงค์
          เว้นแต่มีความจำเป็นต้องเก็บเพื่อเหตุอื่น เช่น ปฏิบัติตามกฎหมาย
          หรือการตรวจสอบกรณีเกิดข้อพิพาท
        </li>
        <li>
          เมื่อพ้นระยะเวลาจัดเก็บ
          ผู้วิจัยจะดำเนินการทำลายหรือทำให้ข้อมูลเป็นนิรนามภายใน 30
          วันนับจากวันสิ้นสุดระยะเวลาดังกล่าว
        </li>
      </ol>

      <h2 className="font-bold">สิทธิของเจ้าของข้อมูลส่วนบุคคล</h2>
      <p>
        ในฐานะเจ้าของข้อมูลส่วนบุคคล
        ท่านมีสิทธิ์ร้องขอให้ผู้วิจัยดำเนินการเกี่ยวกับข้อมูลส่วนบุคคลของท่านตามขอบเขตที่กฎหมายอนุญาตให้กระทำได้
        ดังนี้
      </p>
      <ol>
        <li>
          <strong>
            สิทธิในการเพิกถอนความยินยอม (Right to Withdraw Consent):
          </strong>
          ท่านมีสิทธิในการเพิกถอนความยินยอมในการประมวลผลข้อมูลส่วนบุคคลที่ท่านได้ให้ความยินยอมกับผู้วิจัย
          ได้ตลอดระยะเวลาที่ข้อมูลส่วนบุคคลของท่านอยู่กับผู้วิจัย
        </li>
        <li>
          <strong>สิทธิในการเข้าถึงข้อมูลส่วนบุคคล (Right of Access):</strong>
          ท่านมีสิทธิในการเข้าข้อมูลส่วนบุคคลของท่านและขอให้ผู้วิจัยทำสำเนาข้อมูลส่วนบุคคลดังกล่าว
          รวมถึงขอให้ผู้วิจัยเปิดเผยการได้มาซึ่งข้อมูลส่วนบุคคลที่ท่านไม่ได้ให้ความยินยอมต่อผู้วิจัยให้แก่ท่านได้
        </li>
        <li>
          <strong>
            สิทธิในการแก้ไขข้อมูลส่วนบุคคลให้ถูกต้อง (Right to Rectification):
          </strong>
          ท่านมีสิทธิ์ในการขอให้ผู้วิจัยแก้ไขข้อมูลที่ไม่ถูกต้อง
          หรือเพิ่มเติมข้อมูลที่ไม่สมบูรณ์
        </li>
        <li>
          <strong>สิทธิในการลบข้อมูลส่วนบุคคล (Right to Erasure):</strong>
          ท่านมีสิทธิ์ในการขอให้ผู้วิจัยทำการลบข้อมูลของท่านด้วยเหตุบางประการได้
        </li>
        <li>
          <strong>
            สิทธิในการระงับการใช้ข้อมูลส่วนบุคคล (Right to Restriction of
            Processing):
          </strong>
          ท่านมีสิทธิ์ในการให้ผู้วิจัยระงับการใช้ข้อมูลส่วนบุคคลของท่านด้วยเหตุบางประการได้
        </li>
        <li>
          <strong>
            สิทธิในการให้โอนย้ายข้อมูลส่วนบุคคล (Right to Data Portability):
          </strong>
          ท่านมีสิทธิ์ในการโอนย้ายข้อมูลส่วนบุคคลของท่านที่ท่านให้ไว้กับผู้วิจัย
          ไปยังผู้ควบคุมข้อมูลรายอื่น หรือตัวท่านเองด้วยเหตุบางประการได้
        </li>
        <li>
          <strong>
            สิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคล (Right to Object):
          </strong>
          ท่านมีสิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคลของท่านด้วยเหตุบางประการได้
        </li>
      </ol>
    </article>
  );
};
const Page = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [name, setName] = useState('');
  useEffect(() => {
    if (isPolicyOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isPolicyOpen]);

  function handleOpenPolicy() {
    setIsPolicyOpen(true);
    setAgreed(false);
  }

  /*function handleConfirmLogin() {
    if (!agreed) return;
    signInWithGoogle();
  }*/

  function handleConfirmLogin(name: string) {
    if (!agreed) return;
    signInWithName(name);
  }

  return (
    <div className="flex flex-col mobile  items-center justify-center gap-8 pt-12 pb-9">
      <img
        src="assets/5.webp"
        alt="frame"
        className="absolute top-0 object-cover w-[447.96px] h-[36.5px]"
      />
      <img
        alt="center mama care"
        src="assets/4.webp"
        width={320}
        height={0}
      ></img>
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[24px] leading-[24px] font-semibold font-sarabun">
          กรุณากรอกชื่อของคุณ
        </h2>
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          className="text-lg font-semibold py-2 px-4 text-[#DD6774] font-sarabun text-center border border-pinky rounded-full bg-white focus:outline-none shadow-md"
          placeholder="ชื่อของคุณ"
          onChange={e => setName(e.target.value)}
        />
        <button
          onClick={handleOpenPolicy}
          className="px-6 py-3 bg-pinky text-white font-baloo text-[12px] leading-[12px] text-center font-medium rounded-full shadow-md border border-[#DD6774] hover:text-[#DD6774] hover:bg-[#FFDDE6] transition-colors"
        >
          Submit
        </button>
      </div>
      <img alt="foot" src="assets/3.webp" width={200} />
      <img
        alt="curve"
        src="assets/1.webp"
        className="absolute bottom-0 object-cover w-[447.96px] h-[36.5px]"
      />
      {isPolicyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="absolute inset-0 z-50 flex items-center justify-center px-[20px]"
          onClick={() => setIsPolicyOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative z-10 max-h-[70vh] bg-white rounded-2xl shadow-xl flex flex-col p-3 gap-3"
            onClick={e => e.stopPropagation()}
          >
            <h1 className="font-bold">
              นโยบายความเป็นส่วนตัว (Privacy Policy)
            </h1>
            <div className="flex-1 max-h-[60vh] overflow-y-auto rounded-2xl p-1">
              <Privacy />
            </div>

            <div className="p-4 border-t">
              <div className="flex items-start gap-3 mb-4">
                <input
                  id="agree"
                  type="checkbox"
                  className="mt-1 h-5 w-5 accent-[#DD6774] cursor-pointer"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                />
                <label
                  htmlFor="agree"
                  className="text-sm md:text-base leading-snug cursor-pointer"
                >
                  ฉันได้อ่านและยอมรับนโยบายความเป็นส่วนตัวข้างต้น
                </label>
              </div>

              <div className="flex justify-between gap-3">
                <button
                  onClick={() => setIsPolicyOpen(false)}
                  className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition"
                >
                  ยกเลิก
                </button>
                <button
                  onClick={() => handleConfirmLogin(name)}
                  disabled={!agreed}
                  className={`px-5 py-2 rounded-full transition shadow
              ${
                agreed
                  ? 'bg-pinky text-white hover:bg-[#c65a67]'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
                >
                  ยืนยันและเข้าสู่ระบบ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
