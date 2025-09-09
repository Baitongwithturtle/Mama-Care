'use client';
import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface Form {
  title: string;
  detail: formDetail[];
}

interface formDetail {
  text: string;
  star: number;
}

const Assessment = ({ prop }: { prop: Form[] }) => {
  const [form, setForm] = useState<Form[]>(prop);
  const [comment, setComment] = useState<string>('');

  async function handleSubmit() {
    if (form.some(f => f.detail.some(d => d.star === 0))) {
      alert('กรุณาให้คะแนนทุกข้อก่อนส่งแบบประเมิน');
      return;
    }

    try {
      const sections = form.map(f => ({
        title: f.title,
        items: f.detail.map(d => ({ text: d.text, star: d.star })),
      }));

      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          uid: localStorage.getItem('uID'),
          sections,
          comment,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || 'ส่งแบบประเมินไม่สำเร็จ');
        return;
      }
      alert('ขอบคุณสำหรับการประเมินค่ะ');
    } catch (e) {
      console.error(e);
      alert('เกิดข้อผิดพลาด');
    }
  }
  function handleStar(formIndex: number, detailIndex: number, star: number) {
    const updatedForm = form.map((f, i) => {
      if (i === formIndex) {
        const updatedDetail = f.detail.map((item, j) => {
          if (j === detailIndex) {
            return { ...item, star };
          }
          return item;
        });
        return { ...f, detail: updatedDetail };
      }
      return f;
    });
    setForm(updatedForm);
    let nextForm = formIndex;
    let nextDetail = detailIndex + 1;

    if (nextDetail >= form[formIndex].detail.length) {
      nextForm = formIndex + 1;
      nextDetail = 0;
    }

    // ถ้ายังมีข้อถัดไปให้เลื่อนไป
    const nextId = `q-${nextForm}-${nextDetail}`;
    // ใช้ setTimeout หรือ requestAnimationFrame ให้ DOM อัปเดตก่อน
    requestAnimationFrame(() => {
      document.getElementById(nextId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    });
  }

  return (
    <div className="flex flex-col" style={{ gap: '32px' }}>
      {form.map((f, formIndex) => (
        <div key={formIndex} className="flex flex-col gap-2">
          <h4 className="font-bold font-sarabun text-[18px]">{f.title}</h4>
          <div className="flex flex-col" style={{ gap: '28px' }}>
            {f.detail.map((item, detailIndex) => (
              <div
                key={detailIndex}
                id={`q-${formIndex}-${detailIndex}`}
                className="flex flex-col gap-2"
              >
                <p className="font-sarabun text-[16px]">
                  {item.text}
                  <span className="text-red-400">*</span>
                </p>
                <div className="flex items-center justify-between">
                  <p>น้อยที่สุด</p>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        onClick={() =>
                          handleStar(formIndex, detailIndex, i + 1)
                        }
                        fill={item.star > i ? '#FFD87D' : 'none'}
                        strokeWidth={1}
                        className="cursor-pointer"
                      />
                    ))}
                  </div>
                  <p>มากที่สุด</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex flex-col w-full gap-2">
        <p>แสดงความคิดเห็นเพิ่มเติม</p>
        <textarea
          className="bg-white w-full min-h-[100px] p-2 rounded-md"
          placeholder="แสดงความคิดเห็นเพิ่มเติม"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </div>
      <button
        className="bg-[#F0818C] font-sarabun text-white h-[32px] w-full px-[24px] rounded-md self-center mb-4 hover:bg-[#F0818C]/80 cursor-pointer"
        onClick={() => {
          handleSubmit();
        }}
      >
        ส่ง
      </button>
    </div>
  );
};

export default Assessment;
