import React from 'react'

function EventsList() {
  return (
    <div className='m-8 flex flex-col'>
        <button className='btn-addevent'>
            Add New Event
        </button>
        <div className='bg-NeutralSurfaceBgUp rounded-lg p-8 drop-shadow-md'>
          this is the list of tables
        </div>
    </div>
  )
}

export default EventsList