'use client';

import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeProvider';
import { motion } from 'framer-motion';

const SubscribeNow = ({ text = "SUBSCRIBE NOW" }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with theme support */}
      <div 
        className="absolute inset-0 transition-colors duration-800"
        style={{
          background: theme === 'light' ? 'var(--background)' : 'var(--background)'
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-wrap justify-center">
          {text.split('').map((letter, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <span
                key={index}
                className={`
                  inline-block
                  text-6xl md:text-8xl font-bold
                  transition-all duration-1200 ease-[cubic-bezier(0,0.4,0.2,1)]
                  origin-center
                  ${isHovered ? 'scale-y-150 scale-x-110' : 'scale-100'}
                  cursor-pointer
                  ${letter === ' ' ? 'w-8' : ''}
                `}
                style={{ 
                  color: theme === 'dark' ? '#ff5500' : '#ff5500',
                  fontFamily: 'var(--font-league-spartan)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {letter}
              </span>
            );
          })}
        </div>
        
        <motion.div 
          className="w-full max-w-xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.8, delay: 0.5 }}
        >
          <div className={`rounded-full flex items-center p-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`bg-transparent flex-1 px-4 py-2 outline-none ${theme === 'dark' ? 'text-white' : 'text-black'}`}
            />
            <button 
              className="bg-[#ff5500] hover:bg-[#e64d00] text-white font-bold px-6 py-2 rounded-full transition-all hover:translate-y-[-2px] duration-300"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              SUBSCRIBE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeNow; 