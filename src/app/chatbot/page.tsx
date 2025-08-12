'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowBigUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import MenuBar from '@/component/menu_bar';

const Page = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<
    { role: 'user' | 'assistant'; content: string }[]
  >([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage(prompt: string) {
    setMessages(prev => [...prev, { role: 'user', content: prompt }]);
    setPrompt('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();

    if (data.message) {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: data.message },
      ]);
    } else {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: '❌ ไม่มีคำตอบ' },
      ]);
    }
  }

  return (
    <div className="mobile max-h-screen flex flex-col pb-9 pt-12 relative">
      <img
        src="assets/5.webp"
        alt="frame"
        className="fixed top-0 object-cover w-[447.96px] h-[36.5px]"
      />

      {/* หัวข้อแชท */}
      <div className="text-[32px] font-extrabold font-sarabun text-center text-[#F0818C]">
        Chat with AI
      </div>
      <MenuBar />

      {/* พื้นที่แสดงข้อความ */}
      <div className="flex flex-col flex-1 overflow-y-auto py-4 px-[20px] space-y-3 max-h-full">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`py-2 px-4 w-fit rounded-full ${
              msg.role === 'user'
                ? 'bg-white border-2 border-[#F0818C] text-black self-end rounded-br-none'
                : ' text-black self-start'
            }`}
            style={{
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* พื้นที่กรอกข้อความ + ปุ่มส่ง */}
      <div className="px-[20px]">
        <div className="p-2 border-2 border-[#F0818C] bg-white  rounded-3xl flex flex-col">
          <textarea
            className="flex-grow resize-none rounded-md p-2 focus:outline-none"
            rows={2}
            value={prompt}
            placeholder="ถามคำถามกับ AI..."
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (prompt.trim()) sendMessage(prompt.trim());
              }
            }}
          />
          <button
            onClick={() => prompt.trim() && sendMessage(prompt.trim())}
            className="w-fit self-end text-[#F0818C] p-1 rounded-full border-2 border-[#F0818C] bg-white hover:bg-[#F0818C] hover:text-white transition"
            disabled={!prompt.trim()}
          >
            <ArrowBigUp />
          </button>
        </div>
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
