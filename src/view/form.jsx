import { useState, useEffect } from 'react'
import wifi from '../assets/icons/wifi.png'
import lamp from '../assets/icons/lamp.png'
import SubForm from '../components/SubForm';

function form () {

    const [isHovered, setIsHovered] = useState(false);

    const animationStyles = {
        transition: 'transform 0.50s',
        transform: isHovered ? 'translateX(-20%)' : 'none',
    };

    return (
        <div className="py-16 lg:px-96 w-full bg-gray-100 flex flex-col gap-4 items-center">
            <div className='bg-white shadow-md p-4 rounded flex flex-col gap-5 md:w-10/12'>
                <div className='flex md:justify-between'>
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
                <div className='flex max-sm:flex-col gap-4 justify-between'>
                    <div className='flex justify-between gap-1 items-center'>
                        <div className='flex gap-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='font-bold text-sm'>AGADIR</p>
                        </div>
                        <p className='text-xs'>15 juin</p>
                        <p>..................................................</p>
                        <div className='overflow-auto overflow-x-hidden whitespace-nowrap w-1/3 mx-2'>
                            <h1
                                className="text-sm font-semibold"
                                style={animationStyles}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                SAINT PETERSBURG.........
                            </h1>
                        </div>
                    </div>
                    <button className='px-5 py-1 bg-green-500 rounded items-center text-sm text-white'>Approuvez</button>
                </div>
            </div>
            <div className=' bg-white shadow-md rounded flex flex-col w-9/12 max-sm:w-full md:ml-16'>
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
                        <img src={ wifi } alt="wifi"  className='w-3 h-3'/>
                        <img src={ lamp } alt="wifi" className='w-4 h-4' />
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