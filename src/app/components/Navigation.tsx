'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavigationProps {
  currentPage: 'home' | 'work' | 'about' | 'services' | 'contact';
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 px-8 md:px-16 flex items-center justify-between relative bg-white shadow-sm">
      <div className="text-2xl font-bold">
        <Link href="/">
          <span className="text-[#ff5500]">Site</span>
          <span className="text-secondary">&</span>
          <span className="text-[#ff5500]">Sight</span>
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        <Link 
          href="/" 
          className={`transition-colors ${currentPage === 'home' ? 'text-[#ff5500] font-medium' : 'hover:text-[#ff5500]'}`}
        >
          HOME
        </Link>
        <Link 
          href="/services" 
          className={`transition-colors ${currentPage === 'services' ? 'text-[#ff5500] font-medium' : 'hover:text-[#ff5500]'}`}
        >
          SERVICES
        </Link>
        <Link 
          href="/work" 
          className={`transition-colors ${currentPage === 'work' ? 'text-[#ff5500] font-medium' : 'hover:text-[#ff5500]'}`}
        >
          WORK
        </Link>
        <Link 
          href="/about" 
          className={`transition-colors ${currentPage === 'about' ? 'text-[#ff5500] font-medium' : 'hover:text-[#ff5500]'}`}
        >
          ABOUT
        </Link>
        <Link 
          href="/contact" 
          className={`transition-colors ${currentPage === 'contact' ? 'text-[#ff5500] font-medium' : 'hover:text-[#ff5500]'}`}
        >
          CONTACT
        </Link>
      </nav>
      
      {/* CTA Button - Desktop */}
      <div className="hidden md:block">
        <Link
          href="/contact"
          className="px-6 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors"
        >
          Book an intro call
        </Link>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="p-2" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden">
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
              className="mt-4 px-6 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book an intro call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 