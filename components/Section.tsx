"use client"
import { useScrollAppear } from '@/hooks/useScrollAppear';
import { motion } from 'framer-motion';
const Section = ({
    children, bgColor
}: {
    children: React.ReactNode, bgColor: string | null
}) => {
    const { isVisible, targetRef } = useScrollAppear();
    return (
        <div
            className={`flex justify-center ${bgColor}`}>
            <motion.div ref={targetRef}
            initial={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            animate={isVisible && {y:0, opacity:1}}
            className="flex flex-col w-full max-w-6xl overflow-hidden px-8 text-black py-24 gap-20 items-center justify-between">
                {children}
            </motion.div>
        </div>
    )
}
Section.defaultProps ={
    bgColor : "bg-white"
}

export default Section