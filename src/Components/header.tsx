"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import {  useActiveSectionContext } from '@/Context/active-section-context'


const Header = () => {
const {activeSection,setActiveSection}=useActiveSectionContext()

  return (
    <header className='z-[999] relative' >
        <motion.div
               className=" fixed top-0 left-1/2  h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
               initial={{y:-100,opacity:0,x:"-50%"}}
               animate={{y:0,opacity:1,x:'-50%'}}
               >
                <nav className='flex h-full items-center justify-between px-4 py-2  '>
                 
                {
                links.map(link=>(
                  <li key={link.hash} className="flex   relative items-center gap-2 px-2 py-1 text-sm font-medium">
                    <Link className={   clsx('flex justify-center text-gray-500 hover:text-gray-950 transition', {"text-gray-950":activeSection===link.name})}
                     href={link.hash}
                     onClick={()=>setActiveSection(link.name)}
                      >
                    {link.name}
                 { activeSection===link.name &&  <motion.span layoutId='activeSection' transition={{
                  type:'spring',
                  stiffness:380,
                  damping:30,
                 }} className='-z-10 absolute top-0 rounded-full py-4 inset-px bg-gray-100 '></motion.span>}
                    </Link>
                  </li>
                ))
                }
  
</nav>
        </motion.div>
    </header>
  )
}

export default Header
