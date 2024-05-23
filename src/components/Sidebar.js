import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";


export default function Sidebar() {
    const mainLinks = [
        {
            icon: <GrHomeRounded className='text-xl'/>,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts className='text-xl'/>,
            name: 'Shorts'
        },
        {
            icon: <MdOutlineSubscriptions className='text-xl'/>,
            name: 'Subscriptions'
        }
    ]
    const otherLinks = [
        {
            icon: <GoHistory className='text-xl'/>,
            name: 'History'
        },
        {
            icon: <MdOutlineWatchLater className='text-xl'/>,
            name: 'Watch later'
        }
    ]
  return (
    <div className='w-2/12 bg-[#181818] p-2 pr-5 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-2 border-gray-700'>
            {mainLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-2 hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-700" : " "} rounded-xl`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>
                                  {name}
                                </span>
                            </a>
                             
                        </li>
                    )
                }
            )}
        </ul>
        <ul className='flex flex-col border-b-2 border-gray-700'>
            {otherLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-2 hover:bg-zinc-700 ${name === "Home" ? "bg-zinc-700" : " "} rounded-xl`}>
                            <a href='#' className='flex items-center gap-5'>
                                {icon}
                                <span className='text-sm tracking-wider'>
                                  {name}
                                </span>
                            </a>
                        </li>
                    )
                }
            )}
        </ul>
    </div>
  )
}
