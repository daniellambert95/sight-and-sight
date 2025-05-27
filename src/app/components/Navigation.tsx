'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../utils/ThemeProvider';

interface NavigationProps {
  currentPage: 'home' | 'work' | 'about' | 'services' |  'blog' | 'pricing' | 'contact' | 'blog';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle scroll behavior
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show nav when at top of page
        if (currentScrollY < 10) {
          setIsVisible(true);
        }
        // Hide nav when scrolling down, show when scrolling up
        else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

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

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.1 + (custom * 0.05),
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      <motion.div 
        className="w-full flex justify-center px-4 sm:px-6 lg:px-8 fixed top-0 z-50 pt-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: (isVisible || mobileMenuOpen) ? 0 : -100, 
          opacity: (isVisible || mobileMenuOpen) ? 1 : 0 
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut" 
        }}
      >
        <div 
          className={`flex items-center justify-between w-full max-w-7xl mx-auto rounded-md py-3 px-6 backdrop-blur-sm ${
            theme === 'dark' 
              ? 'bg-black/50 text-white' 
              : 'bg-white/50 text-black'
          } shadow-lg transition-all duration-300`}
        >
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {[
              { name: 'SERVICES', path: '/services', current: currentPage === 'services' },
              { name: 'PRICING', path: '/pricing', current: currentPage === 'pricing' },
              { name: 'WORK', path: '/work', current: currentPage === 'work' },
              { name: 'BLOG', path: '/blog', current: currentPage === 'blog' },
              { name: 'ABOUT', path: '/about', current: currentPage === 'about' }
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
                className="px-7 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors text-lg font-semibold"
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
            className="p-2 relative w-10 h-10 flex items-center justify-center z-[60]" 
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
      </div>
    </motion.div>
      
      {/* Full-Screen Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 z-[55] md:hidden ${
          theme === 'dark' 
            ? 'bg-black' 
            : 'bg-white'
        }`}
        initial="closed"
        animate={mobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        {/* Header with Logo and Close Button */}
        <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-3 px-6">
            <Logo />
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <button 
                className="p-2 relative w-10 h-10 flex items-center justify-center z-[60]" 
                onClick={toggleMobileMenu} 
                aria-label="Close mobile menu"
              >
                <motion.div
                  className={`absolute w-6 h-0.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-[#333333]'}`}
                  animate={{
                    rotate: 45,
                    y: 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.div
                  className={`absolute w-6 h-0.5 rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-[#333333]'}`}
                  animate={{
                    rotate: -45,
                    y: 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full px-8 -mt-20">
          <nav className="flex flex-col items-center space-y-8 text-center">
            {[
              { name: 'SERVICES', path: '/services', current: currentPage === 'services' },
              { name: 'PRICING', path: '/pricing', current: currentPage === 'pricing' },
              { name: 'WORK', path: '/work', current: currentPage === 'work' },
              { name: 'BLOG', path: '/blog', current: currentPage === 'blog' },
              { name: 'ABOUT', path: '/about', current: currentPage === 'about' }
            ].map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial="closed"
                animate={mobileMenuOpen ? "open" : "closed"}
                variants={mobileNavItemVariants}
              >
                <Link 
                  href={item.path} 
                  className={`text-4xl font-bold tracking-wide hover:text-[#ff5500] transition-all duration-300 ${
                    item.current 
                      ? 'text-[#ff5500]' 
                      : theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              custom={6}
              initial="closed"
              animate={mobileMenuOpen ? "open" : "closed"}
              variants={mobileNavItemVariants}
              className="pt-8"
            >
              <Link
                href="/contact"
                className="px-12 py-4 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-all duration-300 text-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Let's talk
              </Link>
            </motion.div>
          </nav>
        </div>
      </motion.div>
    </>
  );
} 