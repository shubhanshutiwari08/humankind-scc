import React from 'react'
import one from "../assets/one.png"
import two from "../assets/two.png"

export default function About() {
  return (
    <div className='items-center justify-center p-5'>
        <div className=' flex border-4 border-black p-5 '>
            <img className='w-[50%]' src={one}  alt="" />
            <div className='jusify-center'>
                <h1>Bring your ideas to life with the Humankind Fund</h1>
                <p>The Humankind Fund is a community-driven platform that supports and empowers projects that align with the values and mission of the Humankind brand. Join us in bringing creative ideas to life and making a positive impact in the world.</p>
                <button className="border border-yellow p-3 rounded-full pointer-cursor bg-[#ffd91a] text-black hover:bg-[#eeff00]">Learn More</button>
            </div>
        </div>
        <img className='p-5 my-3' src={two} alt="" />
        <div className='flex p-10 '>
            <h1>The lands of kind is in danger</h1>
            <div>
                <p>Chiquito Village has been attacked by the giant Mechas. Maya and Dallas need you to join the adventure.</p>
                <button className="border-4 border-black border-yellow p-3 rounded-full pointer-cursor  text-black hover:border-3">Go help them!</button>
            </div>
        </div>
    </div>
  )
}
