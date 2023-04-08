import React from 'react'
import bigimg from "../assets/bigimg.png"

export default function Bigimg() {
  return (
    <div className='flex'>
      <img className='w-[50%]' src={bigimg} alt="" />
      <div className='p-10 '>
        <h1 className='font-mono font-bold text-5xl'>Building together</h1>
        <p className='font-serif my-5 text-xl'>Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</p>
        <button className="border-4 font-mono text-lg border-black border-yellow p-3 rounded-full pointer-cursor  text-black hover:border-3">Explore Careers</button>
      </div>
    </div>
  )
}
