"use client"
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { useScrollAppear } from "@/hooks/useScrollAppear";
import Image from "next/image"
import { useState } from "react";
import image from "./assets/port1.png"
import image2 from "./assets/port2.png"
export default function Home() {
  // const draw = {
  //   hidden: { pathLength: 0, opacity: 1 },
  //   visible: (i:number) => {
  //     const delay = 1 + i * 0.5;
  //     return {
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: {
  //         pathLength: { delay, type: "spring", duration: 5.5, bounce: 0 },
  //         opacity: { delay, duration: 0.01 }
  //       }
  //     };
  //   }
  // };
  return (
    <main className="flex-col items-center justify-center">
      <Hero>
        <div className="flex  flex-[3] items-center justify-center gap-12 flex-col">
          <span className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-center">MAKE A LIVING AS A WEB
            DESIGNER</span>
          <p className="text-center">Create a successful and fulfilling career as a freelance web designer. We"ll teach you the in-demand skills you need to get there.</p>
          <div> <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.05 }} className="px-8 py-4 bg-red-100 font-bold  text-purple-800 ">Book a Free
            Call</motion.button> </div>
        </div>
        <div className="flex flex-wrap w-full justify-between  flex-1">
          <div className="flex flex-col gap-2 ">
            <i className="bi bi-globe text-5xl"></i>
            <span className="text-xl md:text-2xl font-bold text leading-6">JOIN A <br />COMMUNITY</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <i className="bi bi-globe text-5xl"></i>
            <span className="text-xl md:text-2xl font-bold text leading-6">JOIN A <br />COMMUNITY</span>
          </div>
          <div className="flex flex-col gap-2 ">
            <i className="bi bi-globe text-5xl"></i>
            <span className="text-xl md:text-2xl font-bold text leading-6">JOIN A <br />COMMUNITY</span>
          </div>
        </div>
      </Hero>
      <Section paddingX={0}>
        <div className="flex flex-col-reverse md:flex-row items-center p-10 w-full bg-red-200  gap-12 md:gap-36">
          <div className="flex flex-col gap-4">
            <span className="text-2xl font-extrabold text-purple-800">HIRE PROFESSIONALS FOR
              YOUR WORK</span>
            <p className="text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod
              tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className="flex">
            <iframe className="w-[360px] h-[203px]  aspect-video" src="https://www.youtube.com/embed/qQk94CjRvIs"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            ></iframe>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-purple-800 font-extrabold text-3xl">SERVICES WE OFFER</h2>
        <div className="flex flex-col md:flex-row w-full justify-between gap-20">
          <div className="flex flex-col gap-6 flex-1">
            <i className="bi bi-globe text-5xl text-purple-800"></i>
            <span className="text-2xl font-extrabold text leading-6">UI/UX<br /> DESIGN</span>
            <p className="text-sm leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed
              do eiusmod
              tempor incididunt ut
              labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <i className="bi bi-globe text-5xl text-purple-800"></i>
            <span className="text-2xl font-extrabold text leading-6">WEB/APP<br /> DEVELOPMENT</span>
            <p className="text-sm leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed
              do eiusmod
              tempor incididunt ut
              labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <i className="bi bi-globe text-5xl text-purple-800"></i>
            <span className="text-2xl font-extrabold text leading-6">WEB 3.0<br /> DEVELOPMENT</span>
            <p className="text-sm leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed
              do eiusmod
              tempor incididunt ut
              labore et dolore magna aliqua.</p>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="text-purple-800 font-extrabold text-3xl">OUR WORK</h2>
        <div className="flex flex-col gap-20">
          <div className="flex flex-col md:flex-row w-full justify-between gap-10 md:gap-20 items-center">
            <div className="flex flex-1 flex-col gap-4 ">
              <span className="text-2xl font-extrabold text leading-6">TRNR<br /> APP</span>
              <p className="text-sm leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed
                do eiusmod
                tempor incididunt ut
                labore et dolore magna aliqua.</p>
            </div>
            <div className="flex flex-2">
              <Image
                src={image}
                width={720}
                height={320}
                alt="Picture of the author"
              />
            </div>

          </div>
          <div className="flex flex-col md:flex-row-reverse w-full justify-between gap-10 md:gap-20 items-center ">
            <div className="flex flex-col gap-4 ">
              <span className="text-2xl font-extrabold text leading-6">TAPFO<br /> ALL IN ONE APP</span>
              <p className="text-sm leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed
                do eiusmod
                tempor incididunt ut
                labore et dolore magna aliqua.</p>
            </div>
            <div className="flex ">
              <Image
                src={image2}
                width={720}
                height={320}
                alt="Picture of the author"
              />
            </div>

          </div>
          <div className="flex flex-col md:flex-row w-full justify-between gap-10 md:gap-20 items-center">
            <div className="flex flex-col gap-4 flex-1">
              <span className="text-2xl font-extrabold text leading-6">CAMPUS<br /> MONK</span>
              <p className="text-sm leading-relaxed text-gray-500">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed
                do eiusmod
                tempor incididunt ut
                labore et dolore magna aliqua.</p>
            </div>
            <div className="flex flex-2">
              <Image
                src={image}
                width={720}
                height={320}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </Section>
      <Section bgColor={"bg-red-200"}>
        <h2 className="text-purple-800 font-extrabold text-3xl">WHAT PEOPLE SAY
          ABOUT US</h2>
        <div className="flex gap-20">
          <div className="w-96 h-56 bg-white"></div>
          <div className="w-96 h-56 bg-white"></div>
          <div className="w-96 h-56 bg-white"></div>
          <div className="w-96 h-56 bg-white"></div>
        </div>

      </Section>
      <Section>
        <h2 className="text-purple-800 font-extrabold text-3xl">CONTACT US</h2>
        {/* <motion.svg width="330" height="465" viewBox="0 0 66 93" initial="hidden" animate="visible" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path variants={draw}
        custom={1} stroke="#ff0055" d="M65.5 76.75H66.5V75.75H65.5V76.75ZM65.5 93V94H66.5V93H65.5ZM2 93H1V94H2V93ZM2 79.25L1.27544 78.5608L1 78.8504V79.25H2ZM31.25 48.5L31.9746 49.1892L31.9892 49.1738L32.0032 49.1578L31.25 48.5ZM37.5 40.5625L38.3275 41.124L38.3321 41.1172L37.5 40.5625ZM40.9375 34.125L40.0063 33.7606L40.0028 33.7694L39.9995 33.7783L40.9375 34.125ZM40.875 22.375L39.9526 22.7611L39.958 22.7742L39.9639 22.7872L40.875 22.375ZM37.5 18.3125L36.9678 19.1592L36.9785 19.1658L37.5 18.3125ZM22.5625 23.9375L21.6415 23.5479L21.6383 23.5554L21.6353 23.563L22.5625 23.9375ZM21.25 31.25V32.25H22.25V31.25H21.25ZM0.125 31.25H-0.875V32.25H0.125V31.25ZM4.1875 15.9375L3.32794 15.4264L3.32457 15.4322L4.1875 15.9375ZM15.625 4.875L16.1163 5.746L16.1219 5.74279L15.625 4.875ZM59.6875 12.875L58.822 13.3761L58.8284 13.3868L59.6875 12.875ZM57.375 44.875L58.209 45.4269L58.2126 45.4213L57.375 44.875ZM50.5 53.625L49.7577 52.9549L49.7526 52.9606L50.5 53.625ZM41.375 63.1875L40.6722 62.4761L40.6446 62.5034L40.6192 62.5327L41.375 63.1875ZM29.625 76.75L28.8692 76.0952L27.4355 77.75H29.625V76.75ZM64.5 76.75V93H66.5V76.75H64.5ZM65.5 92H2V94H65.5V92ZM3 93V79.25H1V93H3ZM2.72456 79.9392L31.9746 49.1892L30.5254 47.8108L1.27544 78.5608L2.72456 79.9392ZM32.0032 49.1578C34.6037 46.1798 36.7145 43.501 38.3275 41.124L36.6725 40.001C35.1188 42.2906 33.0629 44.9036 30.4968 47.8422L32.0032 49.1578ZM38.3321 41.1172C39.943 38.7008 41.1318 36.484 41.8755 34.4717L39.9995 33.7783C39.3265 35.5993 38.2237 37.6742 36.6679 40.0078L38.3321 41.1172ZM41.8687 34.4894C42.6498 32.4933 43.0625 30.6379 43.0625 28.9375H41.0625C41.0625 30.3204 40.7252 31.9234 40.0063 33.7606L41.8687 34.4894ZM43.0625 28.9375C43.0625 26.2194 42.6537 23.8806 41.7861 21.9628L39.9639 22.7872C40.6797 24.3694 41.0625 26.4056 41.0625 28.9375H43.0625ZM41.7974 21.9889C40.9752 20.0245 39.7197 18.497 38.0215 17.4592L36.9785 19.1658C38.2803 19.9613 39.2748 21.1421 39.9526 22.7611L41.7974 21.9889ZM38.0322 17.4659C36.378 16.4261 34.3692 15.9375 32.0625 15.9375V17.9375C34.0891 17.9375 35.7053 18.3656 36.9678 19.1591L38.0322 17.4659ZM32.0625 15.9375C29.6887 15.9375 27.5754 16.6274 25.7653 18.0199L26.9847 19.6051C28.4246 18.4976 30.103 17.9375 32.0625 17.9375V15.9375ZM25.7653 18.0199C23.9844 19.3898 22.6154 21.246 21.6415 23.5479L23.4835 24.3271C24.3429 22.2957 25.5156 20.7352 26.9847 19.6051L25.7653 18.0199ZM21.6353 23.563C20.7052 25.8661 20.25 28.4335 20.25 31.25H22.25C22.25 28.6498 22.6698 26.3423 23.4897 24.312L21.6353 23.563ZM21.25 30.25H0.125V32.25H21.25V30.25ZM1.125 31.25C1.125 25.8366 2.43569 20.908 5.05043 16.4428L3.32457 15.4322C0.522646 20.217 -0.875 25.4968 -0.875 31.25H1.125ZM5.04704 16.4486C7.70415 11.9798 11.387 8.4138 16.1163 5.74598L15.1337 4.00402C10.113 6.8362 6.17085 10.6452 3.32796 15.4264L5.04704 16.4486ZM16.1219 5.74279C20.8252 3.04946 26.295 1.6875 32.5625 1.6875V-0.3125C25.9967 -0.3125 20.1748 1.11721 15.1281 4.00721L16.1219 5.74279ZM32.5625 1.6875C39.1737 1.6875 44.6464 2.71494 49.0206 4.72143L49.8544 2.90357C45.1453 0.743392 39.368 -0.3125 32.5625 -0.3125V1.6875ZM49.0206 4.72143C53.3924 6.72686 56.6437 9.61344 58.8221 13.376L60.5529 12.374C58.1479 8.21989 54.5659 5.06481 49.8544 2.90357L49.0206 4.72143ZM58.8284 13.3868C61.0515 17.1184 62.1875 21.6622 62.1875 27.0625H64.1875C64.1875 21.3795 62.9902 16.4649 60.5466 12.3632L58.8284 13.3868ZM62.1875 27.0625C62.1875 30.1218 61.7048 33.0537 60.7416 35.8632L62.6334 36.5118C63.6702 33.4879 64.1875 30.3365 64.1875 27.0625H62.1875ZM60.7416 35.8632C59.7712 38.6934 58.3723 41.5152 56.5374 44.3287L58.2126 45.4213C60.1277 42.4848 61.6038 39.5149 62.6334 36.5118L60.7416 35.8632ZM56.5411 44.3231C54.6982 47.1079 52.4387 49.9852 49.7577 52.9549L51.2423 54.2951C53.978 51.2648 56.3018 48.3088 58.2089 45.4269L56.5411 44.3231ZM49.7526 52.9606C47.1028 55.9417 44.0764 59.1134 40.6722 62.4761L42.0778 63.8989C45.5069 60.5116 48.5639 57.3083 51.2474 54.2894L49.7526 52.9606ZM40.6192 62.5327L28.8692 76.0952L30.3808 77.4048L42.1308 63.8423L40.6192 62.5327ZM29.625 77.75H65.5V75.75H29.625V77.75Z"  />
        </motion.svg> */}

      </Section>
      <footer className="bg-purple-900 w-full h-96">

      </footer>


    </main>
  )
}
