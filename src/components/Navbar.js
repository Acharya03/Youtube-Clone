import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";

export default function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95'>
        <div className='flex gap-8 items-center text-2x1 text-white'>
            <div>
                <GiHamburgerMenu/>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <BsYoutube className='text3x1 text-red-500'/>
                <span className='font-bold text-2xl'>Youtube </span>
            </div>
            
        </div>
    </div>
  )
}
