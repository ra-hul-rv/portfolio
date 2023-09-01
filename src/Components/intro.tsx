'use strict'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import useActiveSection from '@/Hooks/useActiveSection';

const Intro = () => {
  const {ref}=useActiveSection({sectionName:'Home',threshold:0})

  return (
    <section  ref={ref} id='home' className='scroll-mt-28 mt-10'>
        <div className="flex flex-col items-center justify-center ">
           <div>
           <motion.div 
           initial={{opacity:0,scale:0}}
           animate={{opacity:1,scale:1}}
           transition={{duration:.3,
          type:"tween"
          }}
           >
            <Image 
              src="/profilepic.jpeg"
              alt="profile" width={200} height={200} quality={95} priority={true} className="h-24 w-24 rounded-full object-cover border-[.35rem] border-white shadow-xl " />
              </motion.div>

              </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl text-center w-[50%] font-medium !leading-[1.5]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Rahul RV.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4+ years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          // onClick={() => {
          //   setActiveSection("Contact");
          //   setTimeOfLastClick(Date.now());
          // }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-3 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
        </div >

    </section>
  )
}

export default Intro