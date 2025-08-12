"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function Nav_bar() {
    const router=useRouter()
function handlehome () {
    router.push("/menu")
}
  return (
    <div className='nav_bar flex'> 
        <button onClick={handlehome} className='nav- button items-center flex bg-[#B7E0DD] gap-2 px-8 py-2 border-2 border-white' >
            <img alt='Home' src="assets/7.webp" width={40}/>
        <p className='font-baloo'>HOME</p>
        </button>
        <button className='nav- button items-center  flex justify-center bg-[#B7E0DD] gap-2 px-4 py-2 border-2 border-white'>
            <img alt='content' src="assets/6.webp" width={40} />
        <p className='font-baloo'>CONTENT</p>
        </button>
        <button  className="nav- button items-center  flex bg-[#B7E0DD] gap-2 px-8 py-2 border-2 border-white">
            <img alt="back" src="assets/8.webp" width={40} />
        <p className='font-baloo'>BACK</p>
        </button>
    </div>
  )
}