"use client"
import { motion } from 'framer-motion';
const Hero = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <div
            className="flex justify-center">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }} className="flex flex-col w-full max-w-6xl px-8 text-white h-[calc(100vh-5rem)] bg-purple-800 items-center justify-center">
                {children}
            </motion.div>
        </div>
    )
}

export default Hero
