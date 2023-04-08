import React from 'react'
import endtwo from "../assets/endtwo.png"
import twi from "../assets/twi.svg"
import os from "../assets/os.svg"
import link from "../assets/link.svg"
import ins from "../assets/ins.svg"
import disc from "../assets/disc.svg"

export default function Endtwo() {
  return (
    <div className='flex p-20'>
        <div className='p-10'>
            <h1 className='font-bold text-7xl font-mono'>humankind</h1>
            <p className='font-serif text-2xl my-3'>stay human. be kind.</p>
            <div className="flex space-evenly">
                <a className='mx-2' href="#"> <img src={disc} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={ins} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={link} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={os} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={twi} alt="" /> </a>
            </div>
            <div className='flex my-3 '>
                <button className="border-4 border-black  p-3 rounded-full pointer-cursor bg-black text-white hover:bg-red-500" >Bur a Lunchbox</button>
                <button className="border-4 border-black  p-3 mx-5 rounded-full pointer-cursor  text-black">Join our Discord</button>
            </div>
            <p className='font-serif text-xl my-3'>Humankind Industries Inc. 2023</p>
        </div>
        <img className='w-[50%] mx-[150px]' src={endtwo} alt="" />       
    </div>
  )
}
