import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div className='bg-[#FCF9DA] flex-col mobile flex gap-10 items-center'>
    <img alt='curve' src="assets/1.webp" className='rotate-180'></img>
    <img alt='center mama care' src="assets/4.webp" width={350} height={0}></img>

    <div>
    <h1 className='text-3xl font-bold text black flex flex-col items-center'>Login Here</h1>
    <h2 className='text-lg font-semibold text-black flex flex-col items-center'>Welcome to planner</h2>
    </div>

    <button className='flex items-center gap-2 px-20 py-2 bg-white border border-[#DD6774] rounded-full shadow hover:bg-gray-100 transition'>
      <img alt="google icon" src="assets/5.webp" width={20} height={20}></img>
      <span className='text-nowrap'>Login with Google</span>
    </button>

    <img alt= "foot" src= "assets/3.webp" className="mt-12" width={200} ></img>
     <img alt='curve' src="assets/1.webp"></img>
    </div>
  )
}

export default page