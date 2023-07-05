import React from 'react'
import { useState } from 'react';
import ScrollText from './ScrollText';
import DropDown from './DropDown';
import energy from '../assets/icons/energy.png';

const SubForm = () => {

    const [openSubForm, setOpenSubForm] = useState(false);

    return (
        <div className='flex items-center absolute'>
            <div>
                <button
                    onClick={() => setOpenSubForm((event) => !event)}                >
                    <img className='w-4 h-4 rounded-full' src={energy} alt="" />
                </button>
            </div>
            {openSubForm && (
                <div className=' mt-56 rounded bg-black bg-opacity-20 w-80'>
                    <div className='text-sm py-4 px-2 cursor-pointer rounded flex flex-col gap-4'>
                        <div className='flex justify-between items-center'>
                            <p className='font-bold text-sm'>Genset</p>
                            <button onClick={() => setOpenSubForm((event) => !event)} >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex flex-col gap-4 p-6 bg-white rounded-md'>
                            <div className='flex flex-col items-center'>
                                <ScrollText />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-16'>
                                    <p className='flex items-center gap-1 font-semibold'>Genset <p className='text-xs'>Pré-acheminement</p></p>
                                    <div className='flex text-xs gap-1'>
                                        <p className='text-green-500 font-semibold'>OUI</p>
                                        <div className='relative'>
                                            <DropDown />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-14'>
                                    <p className='flex items-center gap-1 font-semibold'>Genset <p className='text-xs'>Post-acheminement</p></p>
                                    <div className='flex text-xs gap-1'>
                                        <p className='text-red-500 font-semibold'>NON</p>
                                        <div className='relative'>
                                            <DropDown />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SubForm