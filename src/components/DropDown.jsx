import React from 'react'
import { useState } from 'react';

const DropDown = () => {

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

export default DropDown