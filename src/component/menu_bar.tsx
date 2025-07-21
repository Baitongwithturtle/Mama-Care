'use client';
import React from 'react'
import { Menu } from 'lucide-react';
const MenuBar = () => {
  const [hidden, setHidden] = React.useState(true);
  function toggleMenu() {
    setHidden(!hidden);
  }
  return (
    <div >
      <Menu onClick={toggleMenu}/>
    <div className='mobile absolute' hidden={hidden}>

    <h1>menu</h1>
    <button><h2 className='font-sarabun'>content</h2><h2 className='font-baloo'>ความรู้ทั่วไป</h2></button>
    <button>test</button>

    </div>    </div>


  )
}

export default MenuBar