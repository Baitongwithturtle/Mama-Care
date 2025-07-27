'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
const state = () => {
  const router = useRouter();
  function handleState(state: number) {
    router.push(`quiz/${state}`);
  }
  return (
    <div className="relative flex w-[350px] h-[502px]">
      <img
        src="/assets/state/finish.webp"
        alt="Finish"
        width={84}
        className="absolute top-[10px] left-[182px]"
      />
      <img
        src="/assets/state/start.webp"
        alt="Start"
        width={76}
        className="absolute top-[422px] left-[0px]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[73px] left-[150px] rotate-[173deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[108px] left-[65px] rotate-[175deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[180px] left-[16px] rotate-[122deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[245px] left-[55px] rotate-[44deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[250px] left-[140px] rotate-[177deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[248px] left-[242px] rotate-[224deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[320px] left-[270px] rotate-[-44deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[395px] left-[206px] rotate-[7deg]"
      />
      <img
        src="/assets/state/rope.webp"
        alt="Rope"
        width={57}
        className="absolute top-[422px] left-[128px] "
      />
      <button
        className="absolute top-[48px] left-[182px] hover:rotate-12"
        onClick={() => handleState(10)}
      >
        <img src="/assets/state/10.webp" alt="State 10" width={84} />
      </button>
      <button
        className="absolute top-[70px] left-[100px] hover:rotate-12"
        onClick={() => handleState(9)}
      >
        <img src="/assets/state/9.webp" alt="State 9" width={84} />
      </button>
      <button
        className="absolute top-[120px] left-[20px] hover:rotate-12"
        onClick={() => handleState(8)}
      >
        <img src="/assets/state/8.webp" alt="State 8" width={84} />
      </button>
      <button
        className="absolute top-[214px] left-[10px] hover:rotate-12"
        onClick={() => handleState(7)}
      >
        <img src="/assets/state/7.webp" alt="State 7" width={84} />{' '}
      </button>
      <button
        className="absolute top-[248px] left-[90px] hover:rotate-12"
        onClick={() => handleState(6)}
      >
        <img src="/assets/state/6.webp" alt="State 6" width={84} />
      </button>
      <button
        className="absolute top-[224px] left-[182px] hover:rotate-12"
        onClick={() => handleState(5)}
      >
        <img src="/assets/state/5.webp" alt="State 5" width={84} />{' '}
      </button>
      <button
        className="absolute top-[258px] left-[266px] hover:rotate-12"
        onClick={() => handleState(4)}
      >
        <img src="/assets/state/4.webp" alt="State 4" width={84} />
      </button>
      <button
        className="absolute top-[350px] left-[246px] hover:rotate-12"
        onClick={() => handleState(3)}
      >
        <img src="/assets/state/3.webp" alt="State 3" width={84} />
      </button>
      <button
        className="absolute top-[410px] left-[160px] hover:rotate-12"
        onClick={() => handleState(2)}
      >
        <img src="/assets/state/2.webp" alt="State 2" width={84} />
      </button>
      <button
        className="absolute top-[410px] left-[74px] hover:rotate-12"
        onClick={() => handleState(1)}
      >
        <img src="/assets/state/1.webp" alt="State 1" width={84} />
      </button>
    </div>
  );
};

export default state;
