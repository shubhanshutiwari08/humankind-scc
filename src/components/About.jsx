import React from 'react'
import one from "../assets/one.png"
import two from "../assets/two.png"

export default function About() {
  return (
    <div className='items-center justify-center p-20 mx-auto my-auto '>
        <div className=' flex border-4 border-black p-10 rounded-[20px]  '>
            <img className='w-[40%]' src={one}  alt="" />
            <div className=' items-center jusify-center'>
                <h1 className='font-bold font-mono text-4xl p-5'>Bring your ideas to life with the Humankind Fund</h1>
                <p className='text-xl p-5 font-serif '>The Humankind Fund is a community-driven platform that supports and empowers projects that align with the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact in the world.</p>
                <button className="border border-yellow p-3 mx-5 rounded-full pointer-cursor bg-[#ffd91a] text-black hover:bg-[#eeff00]">Learn More</button>
            </div>
        </div>
        <img className='p-10 my-3' src={two} alt="" />
        <div className='flex p-20 '>
            <h1 className='font-bold font-sans text-5xl'>The lands of kind is in danger!</h1>
            <div>
                <p className='font-serif text-2xl p-2 mx-4'>Chiquito Village has been attacked by the giant Mechas. Maya and Dallas need you to join the adventure.</p>
                <button className="border-4 border-black border-yellow p-3 mx-5 my-5 rounded-full pointer-cursor font-bold font-mono  text-black hover:border-3">Go help them!</button>
            </div>
        </div>
    </div>
  )
}
