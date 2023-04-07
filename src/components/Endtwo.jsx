import React from 'react'
import endtwo from "../assets/endtwo.png"
import twi from "../assets/twi.svg"
import os from "../assets/os.svg"
import link from "../assets/link.svg"
import ins from "../assets/ins.svg"
import disc from "../assets/disc.svg"

export default function Endtwo() {
  return (
    <div className='flex p-10'>
        <div className='p-5'>
            <h1>humankind</h1>
            <p>stay human. be kind.</p>
            <div className="flex space-between">
                <a className='mx-2' href="#"> <img src={disc} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={ins} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={link} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={os} alt="" /> </a>
                <a className='mx-2' href="#"> <img src={twi} alt="" /> </a>
            </div>
            <div className='flex '>
                <button className="border-4 border-black  p-3 rounded-full pointer-cursor bg-black text-white hover:bg-red-500" >Bur a Lunchbox</button>
                <button className="border-4 border-black  p-3 rounded-full pointer-cursor  text-black">Join our Discord</button>
            </div>
            <p>Humankind Industries Inc. 2023</p>
        </div>
        <img className='w-[50%]' src={endtwo} alt="" />       
    </div>
  )
}
