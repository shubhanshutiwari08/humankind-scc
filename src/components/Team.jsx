import React from 'react'

export default function Team() {
  return (
    <div className='bg-slate-300 h-screen items-center justify-center p-10'>
      <div className='bg-black rounded-md h-auto p-20'>
        <h1 className='text-white text-center'>Humankind Collectibles</h1>
        <p className='text-white text-center'>We're launching a set of diverse and unique art collectibles featuring the Humankind species, the most prevalent in The Land of Kinds.</p>
        <div className='flex items-center justify-center my-3'>
            <button className="border-4 border-white p-3 rounded-full pointer-cursor  text-white">Learn More</button>
            <button className="border-4 border-white mx-4 p-3 rounded-full pointer-cursor bg-white text-black" >Get one from opensea</button>
        </div>
      </div>
    </div>
  )
}
