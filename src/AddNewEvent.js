import React from 'react'

function AddNewEvent() {
    return (
        <div className='m-8 flex flex-col bg-NeutralSurfaceBgUp rounded-lg p-8 drop-shadow-md'>
            <div className='flex mb-8'>
                <label htmlFor="" className='pr-8 text-OnNeutralButtons '>
                    <input type="radio" name="online event" id="" className='mr-2 checked:bg-OnNeutralActive' />
                    Online Event
                </label>
                <label className='pr-8 text-OnNeutralButtons '>
                    <input type="radio" name="online event" id="" className='mr-2 checked:bg-OnNeutralActive' />
                    Offline Event
                </label>

            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Name Of The Event</label>
                <input type="text" className='mb-8 h-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface'>
                </input>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Description Of The Event</label>
                <input type="text" className='mb-8 h-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface'>

                </input>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Tag Of The Event</label>
                <input type="text" className='mb-8 h-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface'>
                </input>
            </div>



        </div>
    )
}

export default AddNewEvent