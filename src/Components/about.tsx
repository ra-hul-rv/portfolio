import useActiveSection from '@/Hooks/useActiveSection';
import React from 'react'

const About = () => {
const {ref}=useActiveSection({sectionName:'About',threshold:1})

  return (
    <section ref={ref} id='about' className='w-[50%] leading-7 text-center text-gray-500 scroll-mt-28 text-xl'>
        <h2 className='text-4xl text-gray-900 mb-5 '  >
            About Me
        </h2>
        <p className="mb-3">
        After graduating {" "}
        <span className="font-medium">B.Tec</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </section>
  )
}

export default About