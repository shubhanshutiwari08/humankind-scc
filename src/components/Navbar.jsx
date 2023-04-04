import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import logo from "../assets/logo.svg"

export default function Navbar() {
    const [nav,setnav]=useState(false)
    const handleClick = () => setnav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Dribbble</h1> */}
                <img className='w-[50px] cursor-pointer' src={logo} alt="" /> humankind
            </div>
            <div className='hidden md:flex pr-6'>
                <ul className='hidden md:flex pl-10 space-x-4 '>
                    <li className='cursor-pointer'>Art</li>
                    <li className='cursor-pointer'>Collectibles</li>
                    <li className='cursor-pointer'>Stdios</li>
                    <li className='cursor-pointer'>Community</li>
                    <li className='cursor-pointer'>Subscribe</li>
                    <button className='border-none bg-black text-white rounded-lg p-1 border-r-8  '>Burn a lunchbox</button>
                </ul>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5' />:<XIcon className='w-5'/>}
            </div>
        </div>


        <ul className={!nav?'hidden':'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>Art</li>
            <li className='border-b-2 border-zinc-300 w-full'>Collectibles</li>
            <li className='border-b-2 border-zinc-300 w-full'>Stdios</li>
            <li className='border-b-2 border-zinc-300 w-full'>Community</li>
            <li className='border-b-2 border-zinc-300 w-full'>Subcribe</li>

            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Burn a Lunchbox</button>
            </div>
        </ul>
    </div>
   
  )
}
