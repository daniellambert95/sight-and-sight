'use client';

import Link from 'next/link';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeProvider';

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-10% 0px" });
  const { theme } = useTheme();
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const footerItems = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  return (
    <motion.footer 
      ref={footerRef}
      className={`relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-zinc-900 to-black text-white' 
          : 'bg-gradient-to-br from-slate-50 via-white to-gray-100 text-gray-900 border-t border-gray-200'
      }`}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={staggerContainer}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className={`absolute -top-40 -right-40 w-80 h-80 bg-[#ff5500] rounded-full blur-3xl ${
            theme === 'dark' ? 'opacity-10' : 'opacity-5'
          }`}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        />
        <motion.div 
          className={`absolute -bottom-40 -left-40 w-80 h-80 bg-[#ff5500] rounded-full blur-3xl ${
            theme === 'dark' ? 'opacity-5' : 'opacity-3'
          }`}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "linear"
          }}
        />
        {/* Additional light mode background pattern */}
        {theme === 'light' && (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-50/50 via-transparent to-orange-100/30"></div>
            <svg className="absolute top-10 right-10 w-32 h-32 text-orange-100" fill="currentColor" viewBox="0 0 100 100">
              <circle cx="20" cy="20" r="2" opacity="0.5"/>
              <circle cx="80" cy="40" r="1.5" opacity="0.3"/>
              <circle cx="40" cy="80" r="1" opacity="0.4"/>
              <circle cx="70" cy="70" r="1.5" opacity="0.2"/>
              <circle cx="30" cy="50" r="1" opacity="0.6"/>
            </svg>
          </div>
        )}
      </div>

      <div className="relative z-10 px-8 md:px-16 py-20">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto">
         

          {/* Footer links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand section */}
            <motion.div variants={footerItems} className="lg:col-span-1">
              <motion.div 
                className="text-3xl font-bold mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-[#ff5500]">Site</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>&</span>
                <span className="text-[#ff5500]">Sight</span>
              </motion.div>
              <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Award-winning digital agency crafting exceptional web experiences that drive results and inspire action.
              </p>
              <div className={`flex items-center space-x-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
            </motion.div>
            
            {/* Services */}
            <motion.div variants={footerItems}>
              <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Services</h3>
              <ul className="space-y-3">
                {['Web Design', 'Development', 'Branding', 'E-commerce', 'SEO', 'Consulting'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      href={`/services#${item.toLowerCase().replace(' ', '-')}`}
                      className={`hover:text-[#ff5500] transition-colors duration-300 interactive ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Site Map */}
            <motion.div variants={footerItems}>
              <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Site Map</h3>
              <ul className="space-y-3">
                {['About', 'Work', 'Process', 'Careers', 'Blog', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      href={item === 'About' ? '/about' : `/${item.toLowerCase()}`}
                      className={`hover:text-[#ff5500] transition-colors duration-300 interactive ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Contact & Connect */}
            <motion.div variants={footerItems}>
              <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
              <div className="space-y-4 mb-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a 
                    href="mailto:hello@siteandsight.com" 
                    className={`hover:text-[#ff5500] transition-colors duration-300 interactive flex items-center ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    hello@siteandsight.com
                  </a>
                </motion.div>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a 
                    href="tel:+353123456789" 
                    className={`hover:text-[#ff5500] transition-colors duration-300 interactive flex items-center ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +353 (0)1 234 5678
                  </a>
                </motion.div>
                <div className={`flex items-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Dublin, Ireland
                </div>
              </div>
              
              {/* Social links */}
              <div>
                <h4 className={`text-sm font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { 
                      name: 'Facebook',
                      href: 'https://facebook.com/siteandsight',
                      svg: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'Instagram',
                      href: 'https://instagram.com/siteandsight',
                      svg: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )
                    },
                    { 
                      name: 'LinkedIn',
                      href: 'https://linkedin.com/company/siteandsight',
                      svg: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )
                    },
                    {
                      name: 'TikTok',
                      href: 'https://tiktok.com/@siteandsight',
                      svg: (
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                        </svg>
                      )
                    }
                  ].map((social) => (
                    <motion.a 
                      key={social.name}
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${theme === 'dark' ? 'text-white' : 'text-black'} hover:text-[#ff5500] transition-colors duration-300 interactive p-2 rounded-lg hover:bg-[#ff5500]/10 group`}
                      aria-label={`Follow us on ${social.name}`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="group-hover:drop-shadow-lg transition-all duration-300">
                        {social.svg}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div 
            className={`flex flex-col md:flex-row justify-between items-center pt-8 border-t text-sm ${
              theme === 'dark' 
                ? 'border-gray-700 text-gray-400' 
                : 'border-gray-300 text-gray-500'
            }`}
            variants={footerItems}
          >
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Site & Sight. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="hover:text-[#ff5500] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#ff5500] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-[#ff5500] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
} 