'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../utils/ThemeProvider';

interface NavigationProps {
  currentPage: 'home' | 'work' | 'about' | 'services' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Animation variants
  const navItemVariants = {
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        delay: 0.1 + (custom * 0.1),
        ease: "easeOut"
      }
    })
  };

  const ctaVariants = {
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, delay: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 fixed top-0 z-50 pt-6">
      <motion.div 
        className={`flex items-center justify-between w-full max-w-7xl mx-auto rounded-md py-3 px-6 backdrop-blur-sm ${
          theme === 'dark' 
            ? 'bg-black/50 text-white' 
            : 'bg-white/50 text-black'
        } shadow-lg transition-all duration-300`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {[
              { name: 'HOME', path: '/', current: currentPage === 'home' },
              { name: 'SERVICES', path: '/services', current: currentPage === 'services' },
              { name: 'WORK', path: '/work', current: currentPage === 'work' },
              { name: 'ABOUT', path: '/about', current: currentPage === 'about' },
              { name: 'CONTACT', path: '/contact', current: currentPage === 'contact' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
              >
                <Link 
                  href={item.path} 
                  className={`relative font-medium text-base hover:text-[#ff5500] transition-colors ${
                    item.current 
                      ? 'text-[#ff5500]' 
                      : theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  {item.name}
                  {item.current && (
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#ff5500]" />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={ctaVariants}
            >
              <Link
                href="/contact"
                className="px-5 py-2 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors text-base font-medium"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Let's talk
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button 
            className="p-2 relative w-10 h-10 flex items-center justify-center" 
            onClick={toggleMobileMenu} 
            aria-label="Toggle mobile menu"
          >
            <motion.div
              className={`absolute w-6 h-0.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-[#333333]'}`}
              animate={{
                rotate: mobileMenuOpen ? 45 : 0,
                y: mobileMenuOpen ? 0 : -6
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className={`absolute w-6 h-0.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-[#333333]'}`}
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
                x: mobileMenuOpen ? 20 : 0
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <motion.div
              className={`absolute w-6 h-0.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-[#333333]'}`}
              animate={{
                rotate: mobileMenuOpen ? -45 : 0,
                y: mobileMenuOpen ? 0 : 6
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </button>
        </div>
      </motion.div>
      
      {/* Mobile Menu */}
      <motion.div 
        className={`absolute top-24 left-4 right-4 shadow-lg rounded-xl z-50 md:hidden overflow-hidden mx-auto ${
          theme === 'dark' ? 'bg-[#333333]' : 'bg-white'
        }`}
        initial={false}
        animate={{ 
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <nav className="flex flex-col p-6">
          <Link 
            href="/" 
            className={`py-3 ${currentPage === 'home' ? 'text-[#ff5500] font-medium' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            HOME
          </Link>
          <Link 
            href="/services" 
            className={`py-3 ${currentPage === 'services' ? 'text-[#ff5500] font-medium' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            SERVICES
          </Link>
          <Link 
            href="/work" 
            className={`py-3 ${currentPage === 'work' ? 'text-[#ff5500] font-medium' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            WORK
          </Link>
          <Link 
            href="/about" 
            className={`py-3 ${currentPage === 'about' ? 'text-[#ff5500] font-medium' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            ABOUT
          </Link>
          <Link 
            href="/contact" 
            className={`py-3 ${currentPage === 'contact' ? 'text-[#ff5500] font-medium' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            CONTACT
          </Link>
          <Link
            href="/contact"
            className="mt-4 px-5 py-2 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors text-center text-base font-medium"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Let's talk
          </Link>
        </nav>
      </motion.div>
    </div>
  );
} 