'use client'
import About from '@/Components/about';
import Intro from '@/Components/intro';
import SectionDivider from '@/Components/section-divider';
import React from 'react';

export default function Home() {

  return (
    <main className='flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-900 dark:text-gray-100 gap-20'>
        <Intro  />
      <SectionDivider />
      <About />
    </main>
  );
}

