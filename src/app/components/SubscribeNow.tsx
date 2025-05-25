'use client';

import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeProvider';
import { motion } from 'framer-motion';

const SubscribeNow = ({ text = "SUBSCRIBE NOW" }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  
  return (
    <section className={`relative py-24 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' : 'bg-gradient-to-br from-white via-gray-50 to-orange-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-48 h-48 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
        }`}></div>
        <div className={`absolute bottom-10 left-20 w-32 h-32 rotate-45 opacity-15 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute top-1/3 left-1/4 w-16 h-16 rounded-full opacity-20 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-12 h-12 rotate-45 opacity-25 ${
          theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
        }`}></div>
      </div>
      
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
          <div className={`rounded-full flex items-center p-2 shadow-2xl backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-gray-800/80 border border-gray-700/50' 
              : 'bg-white/90 border border-white/50'
          }`}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={`bg-transparent flex-1 px-4 py-2 outline-none placeholder:text-gray-500 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
            />
            <button 
              className="group relative bg-[#ff5500] hover:bg-[#ff6600] text-white font-bold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10">SUBSCRIBE</span>
              <div className="absolute inset-0 bg-[#ff5500] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SubscribeNow; 