'use client';

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import DotPattern from "./DotPattern";
import FloatingParticles from "./FloatingParticles";
import ProjectModal from "./ProjectModal";
import { useTheme } from "../utils/ThemeProvider";

export default function HeroSection() {
  const heroRef = useRef(null);
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Shared animation values
  const entranceTransition = {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1.0],
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen md:min-h-screen overflow-hidden"
    >

      {/* Floating particles */}
      <FloatingParticles 
        particleCount={40}
        particleColor="#ff5500"
        backgroundColor="transparent"
        particleSize={10}
        duration={5000}
        className="z-[1]"
      />
      
      <div className="relative z-20 max-w-7xl mx-auto px-8 md:px-16 w-full flex items-center justify-center pt-40 md:pt-72 pb-20 lg:py-0 lg:min-h-screen">
        {/* Content Column - Centered */}
        <motion.div 
          className="w-full max-w-4xl text-center"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.h1 
            className="lg:mt-24 text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            variants={fadeInUp}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            <span className={`block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>PIXEL-PERFECT</span>
            <span className={`block ${theme === 'dark' ? 'text-white' : 'text-black'}`}>PAGES.</span>
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
          
          {/* Simplified subtitle */}
          <motion.p 
            variants={fadeInUp}
            className={`text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Pixel-perfect websites & data-driven SEO that 
            <span className="text-[#ff5500] font-semibold block"> convert & captivate</span>
          </motion.p>

          {/* Service highlights - simplified */}
          {/* <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { icon: "🌐", text: "Web Dev" },
              { icon: "📈", text: "SEO" },
              { icon: "🎨", text: "Design" },
              { icon: "🤖", text: "AI" }
            ].map((service, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium ${
                  theme === 'dark'
                    ? 'bg-white/10 text-white border border-white/20'
                    : 'bg-gray-100 text-gray-700 border border-gray-200'
                } backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
              >
                <span className="text-base">{service.icon}</span>
                <span>{service.text}</span>
              </div>
            ))}
          </motion.div> */}
          
          {/* CTA buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Link 
              href="/work" 
              className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 inline-block text-center font-bold text-base transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Our Work
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`group w-full sm:w-auto px-8 py-4 border-2 border-[#ff5500] rounded-xl text-[#ff5500] transition-all duration-300 text-center font-bold text-base transform hover:scale-105 shadow-lg hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                  : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center justify-center gap-2">
                Start Project
                <svg className="w-4 h-4 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
          </motion.div>

          {/* Compact stats */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center gap-6 text-center"
          >
            {[
              { number: "150+", label: "Projects" },
              { number: "100%", label: "Satisfaction" },
              { number: "5★", label: "Rating" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className={`text-xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  {stat.number}
                </span>
                <span className={`text-xs ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
} 