'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion } from "framer-motion";
import DotPattern from "./DotPattern";
import { useTheme } from "../utils/ThemeProvider";

export default function HeroSection() {
  const heroRef = useRef(null);
  const { theme } = useTheme();
  
  // Shared animation values
  const entranceTransition = {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1.0],
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-[120vh] md:min-h-screen overflow-hidden"
    >
      {/* Background image with blur - changes based on theme */}
      {/* <div 
        className="absolute inset-0"
        style={{
          backgroundImage: theme === 'light' 
            ? 'url("/background-light.png")' 
            : 'url("/background1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(1px)',
        }}
      ></div> */}
      
      {/* Dot pattern with reduced opacity for better visibility with background */}
      <DotPattern color="#B05C35" size={1.5} spacing={22} className="z-[1] opacity-50 absolute inset-0" />
      
      {/* Left side gradient overlay */}
      {/* <div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 15%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 70%)'
            : 'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 15%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 70%)'
        }}
      /> */}
      
      {/* Additional overlay for better text readability */}
      {/* <div className="absolute inset-0 z-[2] bg-black/20 pointer-events-none"></div> */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full flex items-center justify-start pt-60 md:pt-72 pb-20 lg:py-0 lg:min-h-screen">
        {/* Content Column - positioned more to the left */}
        <div className="w-full max-w-4xl text-left lg:pl-0 lg:max-w-3xl">
          <motion.h1 
            className="lg:mt-24 text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            <span className={`block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>PIXEL-PERFECT PAGES.</span>
            <span 
              className="block animate-gradient bg-gradient-animate bg-clip-text text-transparent"
              style={{ 
                fontWeight: 900,
                letterSpacing: '-0.02em',
                fontFamily: 'var(--font-league-spartan)'
              }}
            >
              SEO that delivers.
            </span>
          </motion.h1>
          
          <motion.p 
            className={`text-xl md:text-2xl max-w-2xl mb-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            We build scroll-stopping websites and search strategies that get you seen and remembered.

          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link 
              href="/work" 
              className="px-8 py-4 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-all hover:translate-y-[-2px] duration-300 inline-block text-center font-bold text-lg"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              View Our Work
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-[#ff5500] rounded-md text-[#ff5500] bg-white/80 hover:bg-white hover:text-[#e64d00] transition-all hover:translate-y-[-2px] duration-300 inline-block text-center font-bold text-lg"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 