import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../Components/header";
import ActiveSectionContextProvider from "@/Context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/Components/footer";
import ThemeSwitch from "@/Components/theme-switch";
import ThemeContextProvider from "@/Context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul R V | Personal Portfolio",
  description: "Rahul RV is a fullstack developer with 4+ years of experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth ">
      <div className="absolute inset-0 z-[-2] h-full w-full bg-gradient-pattern bg-transparent"></div>

      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#c7e3ff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#fbb5b5]"></div>
        <div className="bg-[#fbb5b5] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Header />
            <Toaster position="top-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
