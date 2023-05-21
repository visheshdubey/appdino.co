"use client"
import { motion } from "framer-motion";
import AnimatedNavLink from "@/components/AnimatedNavLink";
import { X as Cross, AlignRight } from "lucide-react"
import { useState } from "react";
const Header = () => {
     const [isSideNavOpen, setIsSideNavOpen] = useState(false)
     const toggleSideNav = () => {
          setIsSideNavOpen(!isSideNavOpen);
     }
     const variants = {
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, x: "100%" },
     }
     return (
          <nav className="relative flex justify-center">
               <div className="flex w-full max-w-6xl px-8 text-white h-20 items-center">
                    <span className="text-3xl font-extrabold flex-1">APPDINO</span>
                    <ul className="hidden md:flex flex-1 justify-center gap-10">
                         <AnimatedNavLink>About</AnimatedNavLink>
                         <AnimatedNavLink>Services</AnimatedNavLink>
                         <AnimatedNavLink>Portfolio</AnimatedNavLink>
                         <AnimatedNavLink>FAQ</AnimatedNavLink>
                    </ul>
                    <div className="hidden md:flex flex-1 justify-end">
                         Contact Us
                    </div>
                    <div className="flex w-full  md:hidden flex-1 justify-end">
                         <button type="button" onClick={toggleSideNav} className="">
                              <AlignRight />
                         </button>
                    </div>
                    <motion.div
                         initial={"closed"}
                         animate={isSideNavOpen ? "open" : "closed"}
                         variants={variants}
                         transition={{ type: "tween", stiffness: 100 }}
                         className=" absolute text-purple-800 z-50 top-0 p-4 right-0 drop-shadow-2xl w-7/12 h-screen bg-white">
                         <div className="flex w-full  md:hidden flex-1 justify-end">
                              <button type="button" onClick={toggleSideNav} className="">
                                   <Cross color="#000" />
                              </button>
                         </div>

                         <ul className="flex  items-start p-4 flex-col gap-4">
                              <li>About</li>
                              <li>Services</li>
                              <li>Portfolio</li>
                              <li>FAQ</li>
                         </ul>
                    </motion.div>
               </div>
          </nav>
     )
}

export default Header