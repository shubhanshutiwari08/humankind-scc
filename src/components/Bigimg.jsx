import React from 'react'
import bigimg from "../assets/bigimg.png"

export default function Bigimg() {
  return (
    <div className='flex'>
      <img className='w-[50%]' src={bigimg} alt="" />
      <div>
        <h1>Building together</h1>
        <p>Our mission is to entertain and inspire people all over the globe through the power of art, kindness, and unique storytelling in web3.</p>
        <button className="border-4 border-black border-yellow p-3 rounded-full pointer-cursor  text-black hover:border-3">Explore Careers</button>
      </div>
    </div>
  )
}
