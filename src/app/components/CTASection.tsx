'use client';

import { motion } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "../utils/ThemeProvider";

export default function CTASection() {
  const { theme } = useTheme();

  return (
    <section className={`relative py-24 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-white via-orange-50 to-white'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-48 h-48 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
        }`}></div>
        <div className={`absolute bottom-10 left-20 w-32 h-32 rotate-45 opacity-15 ${
          theme === 'dark' ? 'bg-blue-400' : 'bg-blue-300'
        }`}></div>
        <div className={`absolute top-1/3 left-1/4 w-12 h-12 rounded-full opacity-20 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/3 w-8 h-8 rotate-45 opacity-25 ${
          theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
        }`}></div>
      </div>

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
            theme === 'dark'
              ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
              : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
          }`}>
            🚀 Ready to Start?
          </span>
          <div className="w-12 h-0.5 bg-[#ff5500]"></div>
        </div>

        {/* Main Heading */}
        <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          <span className="block">Ready to transform</span>
          <span className="block">your <span className="text-[#ff5500]">digital presence?</span></span>
        </h2>

        <p className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          Let's create something <span className="font-semibold text-[#ff5500]">extraordinary</span> together.
          <span className="block mt-2">Your success story starts with a conversation.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <span className="relative z-10">Start Your Project</span>
            <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          </Link>
          
          <Link 
            href="/pricing" 
            className={`group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm ${
              theme === 'dark' 
                ? 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50' 
                : 'bg-black/5 text-gray-900 border-gray-900/30 hover:bg-black/10 hover:border-gray-900/50'
            } shadow-xl hover:shadow-2xl transform hover:scale-105`}
          >
            <span className="relative z-10">View Pricing</span>
            <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Free consultation</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Custom solutions</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Proven results</span>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Berlin-based team</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 