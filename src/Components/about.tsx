import useActiveSection from "@/Hooks/useActiveSection";
import { motion } from "framer-motion";
import React from "react";
import SectionHeading from "./section-heading";

const About = () => {
  const { ref } = useActiveSection({ sectionName: "About", threshold: 1 });

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {" "}
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  After graduating with a <span className="font-medium">B.Tech</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and gained expertise in <span className="font-medium">full-stack web development</span>. <span className="italic">What I enjoy most about programming</span> is the problem-solving aspect. I <span className="underline">love</span> the satisfaction of finally arriving at a solution. My core stack includes <span className="font-medium">React.js, Next.js and Node.js</span>. I am also familiar with TypeScript and Java. I am constantly eager to learn new technologies and am currently seeking a <span className="font-medium">full-time position</span> as a software developer.
</p>
<p>
  <span className="italic">When I’m not coding</span>, I enjoy playing video games, watching movies, and <span className="font-medium">learning new things</span>.
</p>
      {/* <p className="mb-3">
        After graduating <span className="font-medium">B.Tech</span>, I decided
        to pursue my passion for programming. I enrolled in a coding bootcamp
        and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React js, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript , java and Prisma. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p> */}
    </motion.section>
  );
};

export default About;
