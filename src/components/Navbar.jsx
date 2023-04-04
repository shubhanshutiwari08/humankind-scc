import React, {useState} from 'react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import logo from "../assets/logo.svg"

export default function Navbar() {
    const [nav,setnav]=useState(false)
    const handleClick = () => setnav(!nav)


  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed drop-shadow-sm'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center pl-2'>
                {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Dribbble</h1> */}
                <img className='w-[50px] cursor-pointer font-semibold' src={logo} alt="" /> <span className='font-bold cursor-pointer'>humankind</span>
            </div>
            <div className='hidden md:flex pr-2 mt-2'>
                <ul className='hidden md:flex pl-8 space-x-8 '>
                    <li className='cursor-pointer font-semibold'>Art</li>
                    <li className='cursor-pointer font-semibold'>Collectibles</li>
                    <li className='cursor-pointer font-semibold'>Stdios</li>
                    <li className='cursor-pointer font-semibold'>Community</li>
                    <li className='cursor-pointer font-semibold'>Subscribe</li>
                    <button className='border-none font-semibold bg-black rounded-full mb-2 text-white p-2'>Burn a Lunchbox</button>
                </ul>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5' />:<XIcon className='w-5'/>}
            </div>
        </div>


        <ul className={!nav?'hidden':'absolute bg-white w-full px-8 space-y-4'}>
            <li className='border-b-2 border-zinc-500 w-full text-center'>Art</li>
            <li className='border-b-2 border-zinc-500 w-full text-center'>Collectibles</li>
            <li className='border-b-2 border-zinc-500 w-full text-center'>Stdios</li>
            <li className='border-b-2 border-zinc-500 w-full text-center'>Community</li>
            <li className='border-b-2 border-zinc-500 w-full text-center'>Subcribe</li>

            <div className='flex flex-col my-4'>
                <button className='bg-black text-white  px-8 py-3 mb-4'>Burn a Lunchbox</button>
            </div>
        </ul>
    </div>
   
  )
}
