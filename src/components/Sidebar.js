import React from 'react'
import { GrHomeRounded } from "react-icons/gr";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";


export default function Sidebar() {
    const mainLinks = [
        {
            icon: <GrHomeRounded />,
            name: 'Home'
        },
        {
            icon: <SiYoutubeshorts />,
            name: 'Shorts'
        },
        {
            icon: <MdOutlineSubscriptions />,
            name: 'Subscriptions'
        }
    ]
    const otherLinks = [
        {
            icon: <GoHistory />,
            name: 'History'
        },
        {
            icon: <MdOutlineWatchLater />,
            name: 'Watch later'
        }
    ]
  return (
    <div className='w-2/12 bg-[#212121] pr-5 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-2'>
            {mainLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-2 hover:bg-zinc-500 ${name === "Home" ? "bg-slate-600" : " "}`}>
                             <a href='#' className='flex items-center gap-5'>
                                {icon}
                             </a>
                             <span className='text-sm tracking-wider'>
                                  {name}
                            </span>
                        </li>
                    )
                }
            )}
        </ul>
        <ul className='flex flex-col border-b-2'>
            {otherLinks.map(
                ({icon,name}) => {
                    return(
                        <li key={name} className={`pl-6 py-2 hover:bg-zinc-500 ${name === "Home" ? "bg-slate-600" : " "}`}>
                             <a href='#' className='flex items-center'>
                                {icon}
                             </a>
                             <span>
                                  {name}
                            </span>
                        </li>
                    )
                }
            )}
        </ul>
    </div>
  )
}
