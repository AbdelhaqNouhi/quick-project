import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';


const ScrollText = ({ content, onMouseEnter, onMouseleave }) => {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

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

    return (
        <div className="w-full overflow-hidden">
            <style>{animationStyles}</style>
            <motion.span
                className="inline-block"
                style={{
                    whiteSpace: 'nowrap',
                    paddingLeft: '100%',
                    animation: `scrollText ${content.props.children.length * 3.5}s linear infinite`,
                }}
            >
                {content}
            </motion.span>
        </div>
    );
}

export default ScrollText