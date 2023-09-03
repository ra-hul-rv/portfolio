'use client'
import About from '@/Components/about';
import Contact from '@/Components/contact';
import Experience from '@/Components/experience';
import Intro from '@/Components/intro';
import SectionDivider from '@/Components/section-divider';
import Skills from '@/Components/skills';
import React from 'react';

export default function Home() {

  return (
<main className="flex flex-col items-center px-4">
          <Intro  />
      <SectionDivider />
      <About />
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  );
}

