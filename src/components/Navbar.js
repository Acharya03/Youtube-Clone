import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMicrophone } from "react-icons/fa";
import { RiVideoAddLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";


export default function Navbar() {
  return (
    <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95  text-white'>
        <div className='flex gap-8 items-center text-2x1'>
            <div>
                <GiHamburgerMenu/>
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <BsYoutube className='text3x1 text-red-600'/>
                <span className='font-bold text-2xl'>Youtube </span>
            </div>
        </div>
            <div className='flex items-center justify-center gap-5'>
              <form>
                <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                  <div className='flex gap-5 items-center pr-5'>
                    <input type='text' placeholder='search' 
                    className='w-96 bg-zinc-900 focus: outline-none border-none'/>
                  </div>
                  <button className='h-10 w-16 flex items-center justify-center
                   bg-zinc-800 rounded-r-3xl'>
                    <AiOutlineSearch className='text-xl'/>
                  </button>
                </div>
              </form>
              <div className='text-x1 p-3 bg-zinc-900 rounded-full'>
                <FaMicrophone />
              </div>
            </div>
        
              <div className='flex gap-5 items-center text-xl'>
                <RiVideoAddLine />
                <div className='relative'>
                  <BsBell />
                  <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
                    9+
                  </span>
                </div>
                <img src='https://w0.peakpx.com/wallpaper/427/278/HD-wallpaper-madara-madara-uchiha-naruto-uchiha-thumbnail.jpg'
                 alt='profile-logo' className='h-9 w-9 rounded-full'/>
              </div>
    </div>
  )
}
