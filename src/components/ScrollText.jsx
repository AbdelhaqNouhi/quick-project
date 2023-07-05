import React from 'react'
import { motion } from 'framer-motion';


const ScrollText = () => {

    const animationStyles = `
        @keyframes scrollText {
            0% {
            transform: translateX(0%);
            }
            100% {
            transform: translateX(-100%);
            }
        }
    `;

    const content = (
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
        <div className="w-full overflow-hidden">
            <style>{animationStyles}</style>
            <motion.span
                className="inline-block"
                style={{
                    whiteSpace: 'nowrap',
                    paddingLeft: '100%',
                    animation: `scrollText ${content.props.children.length * 2.5}s linear infinite`,
                }}
            >
                {content}
            </motion.span>
        </div>
    );
}

export default ScrollText