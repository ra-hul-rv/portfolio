import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated",
    location: "Kerala (Kollam)",
    description:
      "In 2018, I graduated with a B.Tech degree and completed a course in front-end development, focusing on languages like HTML, CSS, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Front-End Developer",
    location: "Kerala (Trivandrum)",
    description:
      "From 2019 to 2020, I worked as a front-end developer for 2 years, split between two companies. I spent 6 months at one company and 13 months at another. During this time, I transitioned into a full-stack engineer, gaining expertise in React, Node.js, and even learning Flutter.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Kerala (Trivandrum)",
    description:
      "Since 2021, I've been working as a React developer for two different companies. Initially, I was contracted by VanillaNetwork to work with Explore AI on the Theams Water project as a front-end developer. After a year, I transitioned to InApp and worked on the Hyphen Solutions project as a React developer. I'm actively exploring new full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;


export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Flutter",
  "D3",
  // "Prisma",
  // "MongoDB",
  "Redux",
  // "GraphQL",
  // "Apollo",
  "Express",
  // "PostgreSQL",
  // "Python",
  // "Django",
  "Framer Motion",
] as const;
