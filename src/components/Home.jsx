import React from 'react'
// import human from "../assets/human.png"
import kind from "../assets/kind.png"


export default function Home() {
  return (
    <>
    <div className=" items-center justify-center">
        <img src={kind} className="mx-auto p-20 " alt='' />
    </div>
    <h3 className="text-center justify-center my-4 font-serif text-3xl">Creating a magical world for the kid in all of us.</h3>
    <div className='flex items-center text-center justify-center '>
        <button className="mx-4 border-4 border-black p-4 rounded-full pointer-cursor text-xl font-bold">Get a Lunchbox</button>
        <button className="mx-4 border-4 border-black p-4 rounded-full pointer-cursor text-xl font-bold bg-black text-white hover:bg-red-500">Burn a Lunchbox</button>
    </div>
    <h4 className="text-center justify-center my-3 font-serif text-xl font-light">Lunchbox burn starts on Dec 13th, 2022</h4>
    </>
  )
}
