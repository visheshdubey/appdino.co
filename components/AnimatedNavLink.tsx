"use client"
import Image from "next/image"
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedNavLink({children}: {children: string}) {
    const [animationPlayed, setAnimationPlayed] = useState(false);
    const handleHoverStart = () => {
        if (!animationPlayed) {
            setAnimationPlayed(true);
        }
    };
    const handleHoverEnd = () => {
        setAnimationPlayed(false);
    };
    return (
        <motion.div onMouseEnter={handleHoverStart} onMouseLeave={handleHoverEnd}
            className="relative overflow-hidden h-10  flex justify-center items-center cursor-pointer">
            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={!animationPlayed ? {} : { y: [0, -20, -25, 25, 20, 0], opacity: [1, 0.7, 0, 0, 0, 1] }}
                transition={{ duration: 0.5, times: [0, 0.1, 0.1, 0.2, 0.3, 0.5] }}
                className="text-sm"
            >
               {children}
            </motion.div>
        </motion.div>
    )
}
