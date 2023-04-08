import React from 'react'
import one from "../assets/one.png"

export default function MoreAbout() {
  return (
    <div className=' h-screen bg-slate-100 items-center justify-center p-20 mx-auto my-auto'>
        <div className=' flex border-4 border-black p-5 items-center justify-center rounded-[20px] bg-white  '>
            <img className='w-[40%]' src={one}  alt="" />
            <div className='jusify-center p-10 '>
                <h1 className='font-mono font-bold text-5xl'>Grab your lunchbox. it will be a long journey.</h1>
                <p className='font-serif text-xl my-5'>We are delighted you're finally joining our adventure alongside Maya and Dallas. It all starts with a simple and nostalgic object: a lunchbox. A lunchbox? What for? Well, it's gonna be a long journey! Every lunchbox will unlock a Humankind on a brave quest. You'll be able to claim your Kind with them. We've made our generative lunchboxes with art we've been creating for the last year..</p>
                <div className='flex '>
                    <button className="border-4 border-black font-bold text-lg  p-3 rounded-full pointer-cursor bg-black text-white hover:bg-red-500" >Get one from opensea</button>
                    <button className="border-4 border-black font-bold text-lg p-3 mx-5 rounded-full pointer-cursor  text-black">Learn More</button>
                </div>
            </div>
        </div>      
    </div>
  )
}
