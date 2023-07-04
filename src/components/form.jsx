import React from 'react'
import { useState } from 'react'
import wifi from '../assets/icons/wifi.png'
import lamp from '../assets/icons/lamp.png'
import energy from '../assets/icons/energy.png'

function DropDown() {

    const [open, setOpen] = useState(false);

    function handleMouseEnter() {
        setOpen(true);
    }

    function handleMouseLeave() {
        setTimeout(() => {
            setOpen(false);
        }, 200);
    }

    return (
        <div className='absolute'>
            <button
                className=''
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
            // onClick={() => setOpen((event) => !event)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                </svg>
            </button>
            {open && (
                <div className='bg-white border rounded p-1 absolute bottom-full'>
                    <p className='text-xs break-words text-blue-900 font-semibold'>
                        Modifier
                    </p>
                </div>
            )}
        </div>
    );
}

function SubForm() {

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
                                <p>Lorem ipsum dolor sit amet ipsum dolor</p>
                                <p>Lorem ipsum dolor sit amet ipsum dolor</p>
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
};

function form () {
    return (
        <div className="py-16 px-96 w-full bg-gray-100 flex flex-col gap-4 items-center">
            <div className='bg-white shadow-md p-4 rounded flex flex-col gap-5 w-10/12'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-1'>
                        <labe className='text-sm'>N° Booking</labe>
                        <p className='font-bold text-sm'>C2122-000734</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <labe className='text-sm'>C2122-000734</labe>
                        <p className='font-bold text-sm'>P2122-87996</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <labe className='text-sm'>Navire</labe>
                        <p className='text-sm'>SC MONTREUX</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <labe className='text-sm'>Statut</labe>
                        <p className='font-bold text-sm'>Booking Envoyé</p>
                    </div>
                </div>
                <div className='flex justify-between gap-12'>
                    <div className='flex justify-between gap-1 items-center'>
                        <div className='flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='font-bold text-sm'>AGADIR</p>
                        </div>
                        <p className='text-xs'>15 juin</p>
                        <p>..................................................</p>
                        <h1 className='text-sm font-semibold'>SAINT PETERSBURG</h1>
                    </div>
                    <button className='px-5 py-1 bg-green-500 rounded items-center text-sm text-white'>Approuvez</button>
                </div>
            </div>
            <div className=' bg-white shadow-md rounded flex flex-col w-9/12 ml-16'>
                <div className='flex justify-between p-4'>
                    <div className='flex flex-col'>
                        <labe className='text-sm'>N° Container</labe>
                        <p className='font-bold text-sm'>C2122-000734</p>
                    </div>
                    <div className='flex flex-col'>
                        <labe className='text-sm'>C2122-000734</labe>
                        <p className='font-bold text-sm'>P2122-87996</p>
                    </div>
                    <div className='flex flex-col'>
                        <labe className='text-sm'>40P FRIG</labe>
                        <p className='text-sm'>Mandarine</p>
                    </div>
                    <div className='flex flex-col'>
                        <labe className='text-sm'>Statut</labe>
                        <p className='font-bold text-sm'>Lorem ipsum dolor...</p>
                    </div>
                </div>
                <div className='flex justify-between bg-slate-200 h-8 pl-4'>
                    <div className='flex gap-2 items-center'>
                        <img src={wifi} alt="wifi"  className='w-3 h-3'/>
                        <img src={lamp} alt="wifi" className='w-4 h-4' />
                        <div className='flex gap-2 items-center'>
                            <SubForm />
                        </div>
                    </div>
                    <div className='flex gap-1'>
                        <p className='font-extrabold text-blue-500'>...</p>
                        <button className='px-5 bg-blue-500 rounded-br items-center text-sm text-white'>Approuvez</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default form