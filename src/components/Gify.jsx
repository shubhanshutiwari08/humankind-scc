import React from 'react'
// import gif from "../assets/gif.gif"
import one from "../assets/one.png"
import three from "../assets/three.png"

export default function Gify() {
  return (
    <>
    <div className='h-screen bg-slate-400'>
        <div className='flex p-20 items-center justify-center space-evenly space-x-10 '>
            <div className='bg-white p-10 w-[500px] h-auto'>
                <h1 className='font-bold font-sans text-4xl'>Art and kindness are tools of kindness</h1>
                <p className='font-serif text-xl  my-5'>Humankind is a creative force developing relatable characters and epic stories for a global audience across various formats powered by decentralization.</p>
                <button className="border-4 border-black p-3 rounded-full pointer-cursor  text-black">Learn More</button>
            </div>
            <img className='w-[30%] ' src={one} alt="" />
        </div>
    </div>
    <img className='p-10 items-center' src={three} alt="" />
    <div className='flex p-20 items-center justify-center mx-auto '>
            <h1 className='font-bold font-sans text-4xl'>Designing a universe</h1>
            <div>
                <p className='font-serif text-xl p-4 mx-5'>We're building the Humankind brand, its world, stories, and characters. Our goal is to capture the hearts and minds of kids and adults worldwide with epic creations, a unique vision, and community-driven storytelling.</p>
                <button className="border-4 border-black border-yellow p-3 mx-5 rounded-full pointer-cursor font-bold font-mono   text-black hover:border-3">Discover the Art</button>
            </div>
    </div>
    </>
  )
}
