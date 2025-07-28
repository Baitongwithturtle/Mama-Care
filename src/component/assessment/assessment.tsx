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
  function handleSubmit() {
    alert('Form submitted');
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
  }

  return (
    <div className="flex flex-col" style={{ gap: '32px' }}>
      {form.map((f, formIndex) => (
        <div key={formIndex} className="flex flex-col gap-2">
          <h4 className="font-bold font-sarabun text-[18px]">{f.title}</h4>
          <div className="flex flex-col" style={{ gap: '28px' }}>
            {f.detail.map((item, detailIndex) => (
              <div key={detailIndex} className="flex flex-col gap-2">
                <p className="font-sarabun text-[16px]">{item.text}</p>
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
