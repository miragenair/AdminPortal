import React from 'react'
import { DatePicker, Upload } from 'antd';
import DatePickerCustom from './DatePickerCustom';

function AddNewEvent() {
    return (
        <div className='flex flex-col m-8 bg-NeutralSurfaceBgUp rounded-lg p-8 drop-shadow-md'>
            <div className='flex mb-8'>
                <label htmlFor="" className='pr-8 text-OnNeutralButtons '>
                    <input type="radio" name="type of event" id="" className='mr-2
                    checked:bg-OnNeutralActive' />
                    Online Event
                </label>
                <label className='pr-8 text-OnNeutralButtons '>
                    <input type="radio" name="type of event" id="" className='mr-2 
                    checked:bg-OnNeutralActive' />
                    Offline Event
                </label>
            </div>

            <div className="datetimeetc">
                <div className='mb-8'>
                    <DatePickerCustom />
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Link Of The Event</label>
                <input type="text" className='mb-8 h-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface focus:border-OnNeutralActive
                hover:border-OnNeutralActive
                '>
                </input>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Name Of The Event</label>
                <input type="text" className='mb-8 h-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface focus:border-OnNeutralActive
                hover:border-OnNeutralActive
                '>
                </input>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Description Of The Event</label>
                <textarea name=""
                    className='mb-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface
                focus:border-OnNeutralActive
                hover:border-OnNeutralActive'
                    id=""
                    cols="30"
                    rows="10"></textarea>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="" className='mb-2'>Tag Of The Event</label>
                <select name="" id="" className='mb-8 h-8 p-4 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface
                focus:border-OnNeutralActive
                hover:border-OnNeutralActive
                '>
                    <option value="">organic pesticide</option>
                    <option value="">this</option>
                    <option value="">that</option>
                </select>

                <div className="hostdetails flex">
                    <div className='flex flex-col w-1/3'>
                        <label htmlFor="" className='mb-2'>Name Of The Host</label>
                        <input type="text" className='mb-8 h-8 p-4 mr-8 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface focus:border-OnNeutralActive
                        hover:border-OnNeutralActive'>
                        </input>
                    </div>
                    <div className='flex flex-col w-1/3'>
                        <label htmlFor="" className='mb-2'>Phone Number Of The Host</label>
                        <input type="number" className='mb-8 h-8 p-4 mr-8 border-2 rounded-lg border-NeutralButtonShadowLight bg-NeutralButtonSurface focus:border-OnNeutralActive
                        hover:border-OnNeutralActive'>
                        </input>
                    </div>
                </div>
            </div>
            <div className="uploadingimages mb-4 pb-4 align-middle rounded-lg">
                <div className="title">
                </div>
                <div className="containerforupload">
                    <Upload.Dragger
                    multiple 
                    listType='picture'
                    action={"http://localhost:3000/"}>
                        <button className='btn-form'>
                            Upload Images
                        </button>
                    </Upload.Dragger>
                </div>
            </div>

            <button class="btn-addevent">
                Add This Event
            </button>
        </div>
    )
}

export default AddNewEvent