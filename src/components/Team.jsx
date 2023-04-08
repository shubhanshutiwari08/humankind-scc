import React from 'react'

export default function Team() {
  return (
    <div className='bg-slate-300 h-screen items-center justify-center p-10'>
      <div className='bg-black rounded-lg h-auto p-20 items-center justify-center'>
        <div>
          <h1 className='text-white text-center font-bold font-sans text-4xl p-5 '>Humankind Collectibles</h1>
          <p className='text-white  text-center font-serif text-2xl p-5 '>We're launching a set of diverse and unique art collectibles featuring the Humankind species, the most prevalent in The Land of Kinds.</p>\
        </div>
        <div className='flex items-center justify-center my-3'>
            <button className="border-4 border-white p-3 rounded-full pointer-cursor  font-bold font-mono text-white">Learn More</button>
            <button className="border-4 border-white mx-4 p-3 rounded-full pointer-cursor font-bold font-mono bg-white text-black" >Get one from opensea</button>
        </div>
      </div>
    </div>
  )
}
