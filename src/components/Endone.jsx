import React from 'react'
import endone from "../assets/endone.png"

export default function Endone() {
  return (
    <div className='items-center justify-center p-20'>
        <img className=' w-[50%] mx-auto' src={endone} alt="" />
        <h1 className='text-center font-bold font-sans text-4xl my-2'>Join Our Adventure</h1>
        <p className='text-center font-serif text-xl my-5'>Despite the many evil forces in the world, there is hope. We can still make a positive difference through art and community. We're looking for other geeks, punks, and freaks like us who believe in the power of storytelling to be a part of our quest.</p>
        <button className=" mx-[570px] font-bold font-mono text-lg border-4 border-black  p-3 rounded-full pointer-cursor bg-black text-white " >Join our Discord</button>
    </div>
  )
}
