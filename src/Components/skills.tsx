"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import useActiveSection from '@/Hooks/useActiveSection'
import { motion } from 'framer-motion'
import { once } from 'events'
const fadeInAnimationsVariants = {
    initial:{
        opacity:0,
        y:100,
    },
    animate:(index:number)=>({
        opacity:1,
        y:0,
        transition:{
            delay:0.05*index,
        }

    })
}
const Skills = () => {
   const {ref}= useActiveSection({sectionName:'Skills',threshold:1})
  return (
<section id='skills' ref={ref}       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
 >
    <SectionHeading>My Skills

    </SectionHeading>
    <ul className='flex flex-wrap text-lg gap-2 justify-center text-grey-800 '>
        {
         skillsData.map((val,index)=><motion.li variants={ fadeInAnimationsVariants

         }
         custom={index}
         initial='initial'
         whileInView='animate'
         viewport={{once:true}}
         className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" key={index} >{val}</motion.li>)   
        }
    </ul>

</section>
  )
}

export default Skills