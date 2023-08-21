import React from 'react'
import Navbar from './Navbar'
import EventsNavbar from './EventsNavbar'
import EventsList from './EventsList'
import AddNewEvent from './AddNewEvent'

function Events() {
    return (
        <div className='flex font-mainfont bg-NeutralButtonSurface'>
            <Navbar />
            <div className='w-full flex flex-col'>
                <EventsNavbar />
                <AddNewEvent/>
            </div>
        </div>
    )
}

export default Events