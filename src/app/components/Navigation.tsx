'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentPage: 'home' | 'work' | 'about' | 'services' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll position for header style changes
  useEffect(() => {
    const updateScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', updateScroll);
    updateScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.2 + (custom * 0.1),
        ease: "easeOut"
      }
    })
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full py-6 px-8 md:px-16 flex items-center justify-between z-50 transition-all duration-800 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/90 shadow-md backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <motion.div 
        className="text-2xl font-bold"
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <Link href="/">
          <span className="text-[#ff5500]">Site</span>
          <span className="text-secondary">&</span>
          <span className="text-[#ff5500]">Sight</span>
        </Link>
      </motion.div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex space-x-8">
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
              className={item.current ? 'text-[#ff5500] font-medium' : ''}
            >
              {item.name}
              {item.current && (
                <div className="h-[2px] bg-[#ff5500] mt-1" />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>
      
      {/* CTA Button - Desktop */}
      <motion.div 
        className="hidden lg:block"
        initial="hidden"
        animate="visible"
        variants={ctaVariants}
      >
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors"
        >
          Book an intro call
        </Link>
      </motion.div>
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button className="p-2 relative w-10 h-10 flex items-center justify-center" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          <motion.div
            className="absolute w-6 bg-black h-0.5 rounded-full"
            animate={{
              rotate: mobileMenuOpen ? 45 : 0,
              y: mobileMenuOpen ? 0 : -6.6
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-6 bg-black h-0.5 rounded-full"
            animate={{
              opacity: mobileMenuOpen ? 0 : 1,
              x: mobileMenuOpen ? 20 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-6 bg-black h-0.5 rounded-full"
            animate={{
              rotate: mobileMenuOpen ? -45 : 0,
              y: mobileMenuOpen ? 0 : 6.6
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <motion.div 
        className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 lg:hidden overflow-hidden"
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
            className={`py-3 ${currentPage === 'home' ? 'text-[#ff5500] font-medium' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>
          <Link 
            href="/services" 
            className={`py-3 ${currentPage === 'services' ? 'text-[#ff5500] font-medium' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link 
            href="/work" 
            className={`py-3 ${currentPage === 'work' ? 'text-[#ff5500] font-medium' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            WORK
          </Link>
          <Link 
            href="/about" 
            className={`py-3 ${currentPage === 'about' ? 'text-[#ff5500] font-medium' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link 
            href="/contact" 
            className={`py-3 ${currentPage === 'contact' ? 'text-[#ff5500] font-medium' : 'text-gray-600'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            href="/contact"
            className="mt-4 px-5 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book an intro call
          </Link>
        </nav>
      </motion.div>
    </header>
  );
} 