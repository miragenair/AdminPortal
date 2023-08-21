import React from 'react'
import back from './images/back.svg'
import profileimg from './images/profileimg.jpg'

function EventsNavbar() {
    return (
        <div className='h-16 w-full border-none bg-NeutralSurfaceBgUp flex justify-between items-center p-8 drop-shadow-sm'>
            <div className='flex flex-row'>
                <button className='backbutton'>
                    <img src={back} alt="" className='pr-2' />
                </button>
                <div className='text-OnNeutralActive pr-4 pl-4 font-extrabold text-base'>
                    Events
                </div>
            </div>
            <div>
                this is center
            </div>
            <div className='flex flex-row items-center'>
                <div className='text-OnNeutralActive pr-4 pl-4 font-extrabold text-base'>
                    Aayush Agrawal
                </div>
                <div className='h-8 w-8 flex object-cover'>
                    <img src={profileimg} alt="" className='rounded-full' />
                </div>

            </div>
        </div>
    )
}

export default EventsNavbar