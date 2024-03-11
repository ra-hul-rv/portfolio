import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
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
    title: "Inapp Information Technologies",
    location: "Kerala (Trivandrum)",
    description:
      "Tasked with upgrading legacy wallet app, enhancing performance and modernizing UI design . Reduced the app loading time from 10 sec to 2 sec by adding code splitting and various image optimization . Improved the app performance by 50% by adding parallel api calls and using web workers fixed memory leakage by adding event delegation",
    icon: React.createElement(FaReact),
    date: "March 2022 - present",
  },
  {
    title: "Vanillanetworks ( Explore AI )",
    location: "Kerala (kollam)",
    description:
      "Worked on 2 alert managers SLAM and DAM for thames water uk .Utilized D3 to craft highly customizable, optimized charts from extensive datasets .Integrated ArcGIS maps to display sewer location",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 -  March 2022",
  },
  {
    title: "Carpedaws",
    location: "Kerala (kollam)",
    description:
      "Developed diverse websites and web apps using technologies such as Node.js, React, Flutter, and PHP",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2019 - sep 2020",
  },
  {
    title: "Dridatah",
    location: "Kerala (Attingal)",
    description:
      "Primarily specialized in website development, with expertise in HTML, CSS, JavaScript, and PHP",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2019 - july 2019",
  },
  {
    title: "Graduated",
    location: "Kerala (Kollam)",
    description:
      "In 2018, I graduated with a B.Tech degree and completed a course in front-end development, focusing on languages like HTML, CSS, and JavaScript.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    // imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    // imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    // imageUrl: wordanalyticsImg,
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
  "Java",
  // "Framer Motion",
] as const;
