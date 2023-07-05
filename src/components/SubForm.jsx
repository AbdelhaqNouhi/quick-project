import React from 'react'
import { useState } from 'react';
import ScrollText from './ScrollText';
import DropDown from './DropDown';
import energy from '../assets/icons/energy.png';

const EditForm = () => {
}

const SubForm = () => {
    
    const [openSubForm, setOpenSubForm] = useState(false);
    const [openEditForm, setOpenEditForm] = useState(false);

    const handelClick = () => {
        setOpenSubForm((event) => !event);
        setOpenEditForm((event) => !event);
    }

    const AnimationContent = (
        <div className='flex w-full gap-8'>
            <div className='flex flex-col'>
                <label className='text-sm font-semibold'>N° Container</label>
                <p className='text-xs'>C2122-000734</p>
            </div>
            <div className='flex flex-col'>
                <label className='text-sm font-semibold'>C2122-000734</label>
                <p className='text-xs'>P2122-87996</p>
            </div>
            <div className='flex flex-col'>
                <label className='text-sm font-semibold'>40P FRIG</label>
                <p className='text-xs'>Mandarine</p>
            </div>
            <div className='flex flex-col'>
                <label className='text-sm font-semibold'>Statut</label>
                <p className='text-xs'>Lorem ipsum dolor...</p>
            </div>
        </div>
    );

    return (
        <div className='flex items-center'>
            {
                openEditForm ? (
                    <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-60' onClick={() => setOpenEditForm((event) => !event)}></div>
                ) : null
            }
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
                                <ScrollText content={ AnimationContent } />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='flex gap-16'>
                                    <p className='flex items-center gap-1 font-semibold'>Genset <p className='text-xs'>Pré-acheminement</p></p>
                                    <div className='flex text-xs gap-1'>
                                        <p className='text-green-500 font-semibold'>OUI</p>
                                        <div className='relative'>
                                            <DropDown  onClick={ handelClick }/>
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

            {openEditForm && (
                <>
                    <div className='rounded bg-white w-80 absolute'>
                        <div className='text-sm py-4 px-4 cursor-pointer rounded flex flex-col gap-4'>
                            <div className='flex justify-between items-center'>
                                <p className='font-bold text-sm'>Genset</p>
                                <button onClick={() => setOpenEditForm((event) => !event)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                            </div>
                            <div className='flex flex-col gap-4 bg-white rounded-md'>
                                <div className='flex flex-col gap-2'>
                                    <h1 className='font-semibold'>Lorem ipsum dolor</h1>
                                    <input className='rounded p-2 border-2' type="text" placeholder='Lorem ipsum...' />
                                </div>
                                <button className='bg-blue-500 p-2 rounded'>
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default SubForm