import React from "react";
import AirWave from "./air-wave-animation/AirWave";

const Footer = () => {
  return (
    <footer className="mb-20 px-4 text-center text-gray-500 h-[150px] relative overflow-hidden">
      <AirWave />
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Rahul R V. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
};

export default Footer;
