"use client"
import { useScrollAppear } from '@/hooks/useScrollAppear';
import { motion } from 'framer-motion';
const Section = ({
    children, bgColor, paddingX
}: {
    children: React.ReactNode, bgColor: string | null, paddingX: number | null
}) => {
    const { isVisible, targetRef } = useScrollAppear();
    return (
        <div
            className={`flex justify-center ${bgColor}`}>
            <motion.div ref={targetRef}
            initial={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            animate={isVisible && {y:0, opacity:1}}
            className={`flex flex-col w-full max-w-6xl overflow-hidden px-${paddingX} text-black py-12 md:py-24 gap-20 items-center justify-between`}>
                {children}
            </motion.div>
        </div>
    )
}
Section.defaultProps ={
    bgColor : "bg-white",
    paddingX : 8
}

export default Section