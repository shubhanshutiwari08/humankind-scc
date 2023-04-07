import React from 'react'
// import gif from "../assets/gif.gif"
import one from "../assets/one.png"
import three from "../assets/three.png"

export default function Gify() {
  return (
    <>
    <div className='h-screen bg-slate-400'>
        <div className='flex p-10'>
            <div className='bg-white p-3'>
                <h1>Art and kindness are tools of kindness</h1>
                <p>Humankind is a creative force developing relatable characters and epic stories for a global audience across various formats powered by decentralization.</p>
                <button className="border-4 border-black p-3 rounded-full pointer-cursor  text-black">Learn More</button>
            </div>
            <img className='w-[50%] p-5' src={one} alt="" />
        </div>
    </div>
    <img className='p-20 items-center' src={three} alt="" />
    <div className='flex p-10 '>
            <h1>Designing a universe</h1>
            <div>
                <p>We're building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</p>
                <button className="border-4 border-black border-yellow p-3 rounded-full pointer-cursor  text-black hover:border-3">Discover the Art</button>
            </div>
    </div>
    </>
  )
}
