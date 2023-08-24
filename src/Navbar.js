import React from 'react'
import ramuimg from './images/Farmer-head.svg'

function Navbar() {
  return (
    <div className='bg-PrimarySurfaceDimmer w-1/5 h-screen flex flex-col justify-between sticky top-0'>
      <div className="">
        <div className="p-4 text-center text-OnNeutralButtons font-bold font text-xl">
          NAVACHAR
        </div>
        <div className="flex flex-col justify-around p-8">
          <button className="btn-navbar">
            Home
          </button>
          <button className="btn-navbar">
            Events
          </button>
        </div>
        </div>
        <div className="opacity-60">
          <div className=" pl-8 pr-8 flex flex-col items-center">
            <img src={ramuimg} alt=""  />
          </div>
          <div className="text-center text-OnNeutralButtons font-medium pb-8">
            connect, learn, grow!
          </div>
        </div>
    </div>
  )
}

export default Navbar