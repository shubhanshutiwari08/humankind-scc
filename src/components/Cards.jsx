import React from 'react'
import cone from "../assets/cone.png"
import ctwo from "../assets/ctwo.png"

export default function Cards() {
  return (
    <div className=' h-screen bg-slate-200 p-20 flex items-center justify-center '>
        <div className='bg-white p-8 border-4 border-black'>
            <img className='w-[20%]' src={cone} alt="" />
            <h1>Humankind Studios</h1>
            <p>A creative studio designing the stories, world, and brand of Human kind</p>
        </div> 
        <div className='bg-white p-8 mx-5 border-4 border-black'>
            <img className='w-[25%]' src={ctwo} alt="" />
            <h1>Humankind Fund</h1>
            <p>A fund that helps artists conceive their creations free of economic dependencies</p>
        </div>      
    </div>
  )
}
