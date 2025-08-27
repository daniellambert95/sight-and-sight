'use client';

import Link from 'next/link';
import { useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeProvider';
import Logo from './Logo';
import ProjectModal from './ProjectModal';
import { ChatBubbleLeftRightIcon, SwatchIcon, TrophyIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  const footerRef = useRef(null);
  const headlineRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-10% 0px" });
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Scroll-based animation for headline
  const { scrollYProgress } = useScroll({
    target: headlineRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress into opacity and y values for each word (finishing by 60%)
  const word1Opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const word1Y = useTransform(scrollYProgress, [0.1, 0.25], [50, 0]);
  
  const word2Opacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const word2Y = useTransform(scrollYProgress, [0.15, 0.3], [50, 0]);
  
  const word3Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const word3Y = useTransform(scrollYProgress, [0.2, 0.35], [50, 0]);
  
  const uniqueOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const uniqueY = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);
  const uniqueScale = useTransform(scrollYProgress, [0.25, 0.4], [0.8, 1]);
  
  const togetherOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const togetherY = useTransform(scrollYProgress, [0.4, 0.6], [50, 0]);
  
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
        duration: 0.6
      }
    }
  };

  
  return (
    <motion.footer 
      ref={footerRef}
      className="relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={staggerContainer}
    >
      {/* Hero Section with Bold Message */}
      <section className="relative min-h-screen bg-[#ff5500] flex items-center justify-center px-8 md:px-16 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Headline with Scroll-Synced Word Reveal */}
          <div ref={headlineRef} className="mb-16">
            <h2 className={`text-6xl md:text-8xl lg:text-9xl ${theme === 'dark' ? 'text-black' : 'text-white'} font-black leading-none mb-4`}>
              <span className="block mb-4">
                <motion.span
                  className="inline-block mr-4"
                  style={{ opacity: word1Opacity, y: word1Y }}
                >
                  Let's
                </motion.span>
                <motion.span
                  className="inline-block mr-4"
                  style={{ opacity: word2Opacity, y: word2Y }}
                >
                  create
                </motion.span>
                <motion.span
                  className="inline-block mr-4"
                  style={{ opacity: word3Opacity, y: word3Y }}
                >
                  something
                </motion.span>
              </span>
              <span className="block">
                <motion.em 
                  className="italic mr-6"
                  style={{ 
                    opacity: uniqueOpacity, 
                    y: uniqueY, 
                    scale: uniqueScale 
                  }}
                >
                  unique
                </motion.em>
                <motion.span
                  style={{ opacity: togetherOpacity, y: togetherY }}
                >
                  together
                </motion.span>
              </span>
            </h2>
          </div>

          {/* Contact Info Grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16"
          >
            {/* Contact Us */}
            <motion.div variants={footerItems} className="text-center">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-black' : 'text-white'} mb-6 uppercase tracking-wide`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                Contact Us
              </h3>
              <div className={`space-y-3 ${theme === 'dark' ? 'text-black/90' : 'text-white/90'} text-lg`}>
                <motion.a 
                  href="mailto:hello@siteandsight.com"
                  className={`block ${theme === 'dark' ? 'hover:text-black' : 'hover:text-white'} transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                >
                  hello@siteandsight.com
                </motion.a>
                <motion.a 
                  href="tel:+353123456789"
                  className={`block ${theme === 'dark' ? 'hover:text-black' : 'hover:text-white'} transition-colors duration-300`}
                  whileHover={{ y: -2 }}
                >
                  +353 (0)1 234 5678
                </motion.a>
              </div>
            </motion.div>

            {/* Visit Us */}
            <motion.div variants={footerItems} className="text-center">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-black' : 'text-white'} mb-6 uppercase tracking-wide`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                Visit Us
              </h3>
              <div className={`${theme === 'dark' ? 'text-black/90' : 'text-white/90'} text-lg`}>
                <p>Dublin, Ireland</p>
                <p className="mt-2 text-base">Available worldwide</p>
              </div>
            </motion.div>

            {/* Follow Us */}
            <motion.div variants={footerItems} className="text-center">
              <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-black' : 'text-white'} mb-6 uppercase tracking-wide`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                Follow Us
              </h3>
              <div className="flex justify-center space-x-6">
                {[
                  { 
                    name: 'Facebook', 
                    href: 'https://www.facebook.com/profile.php?id=61579735626790',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'Instagram', 
                    href: 'https://instagram.com/site_and_sight',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'X', 
                    href: 'https://x.com/site_and_sight',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )
                  },
                  { 
                    name: 'LinkedIn', 
                    href: 'https://www.linkedin.com/company/site-and-sight',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  }
                ].map((social) => (
                  <motion.a 
                    key={social.name}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${theme === 'dark' ? 'bg-black/10' : 'bg-white/20'} rounded-full flex items-center justify-center ${theme === 'dark' ? 'text-black' : 'text-white'} ${theme === 'dark' ? 'hover:bg-white hover:text-black' : 'hover:bg-white hover:text-[#ff5500]'} transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={footerItems}
            className="flex flex-col sm:flex-row justify-center gap-6 mb-12"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className={`group relative inline-flex items-center justify-center px-10 py-5 ${theme === 'dark' ? 'bg-black text-white hover:bg-gray-800' : 'bg-white text-[#ff5500] hover:bg-gray-100'} rounded-2xl transition-all duration-300 text-xl font-semibold shadow-2xl transform hover:scale-105`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10">Start Your Project</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <Link 
              href="/pricing" 
              className={`group relative inline-flex items-center justify-center px-10 py-5 border-2 ${theme === 'dark' ? 'border-black text-black hover:bg-black hover:text-white' : 'border-white text-white hover:bg-white hover:text-[#ff5500]'} rounded-2xl transition-all duration-300 text-xl font-semibold transform hover:scale-105`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10">View Pricing</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
          </motion.div>

          {/* Features List */}
          <motion.div 
            variants={footerItems}
            className={`flex flex-wrap justify-center gap-8 ${theme === 'dark' ? 'text-black/90' : 'text-white/90'} text-lg mb-16`}
          >
            <div className="flex items-center">
              <ChatBubbleLeftRightIcon className={`w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'} mr-3`} />
              <span>Free consultation</span>
            </div>
            <div className="flex items-center">
              <SwatchIcon className={`w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'} mr-3`} />
              <span>Custom solutions</span>
            </div>
            <div className="flex items-center">
              <TrophyIcon className={`w-6 h-6 ${theme === 'dark' ? 'text-black' : 'text-white'} mr-3`} />
              <span>Proven results</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Footer Section */}
      <section className={`transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black text-white' 
          : 'bg-gradient-to-br from-slate-50 via-white to-gray-100 text-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
          {/* Footer links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand section */}
            <motion.div variants={footerItems} className="lg:col-span-1">
              <motion.div 
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Logo size="medium" />
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
                {[
                  { name: 'Web Development', href: '/services#web-development' },
                  { name: 'Creative Design', href: '/services#creative-services' },
                  { name: 'Digital Marketing', href: '/services#digital-marketing' },
                  { name: 'SEO Services', href: '/services#digital-marketing' },
                  { name: 'AI & Automation', href: '/services#automation' },
                  { name: 'All Services', href: '/services' }
                ].map((item) => (
                  <motion.li 
                    key={item.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      href={item.href}
                      className={`hover:text-[#ff5500] transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Site Map */}
            <motion.div variants={footerItems}>
              <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Site Map</h3>
              <ul className="space-y-3">
                {['About', 'Work', 'FAQ', 'Pricing', 'Services', 'Contact'].map((item) => (
                  <motion.li 
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link 
                      href={item === 'About' ? '/about' : `/${item.toLowerCase()}`}
                      className={`hover:text-[#ff5500] transition-colors duration-300 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            {/* Get in Touch */}
            <motion.div variants={footerItems}>
              <h3 className={`text-lg font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
              <div className="space-y-4 mb-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <a 
                    href="mailto:hello@siteandsight.com" 
                    className={`hover:text-[#ff5500] transition-colors duration-300 flex items-center ${
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
                    className={`hover:text-[#ff5500] transition-colors duration-300 flex items-center ${
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
            </motion.div>
          </div>

          {/* Bottom section with large brand name */}
          <motion.div 
            variants={footerItems}
            className="text-center mb-8"
          >
            <h2 className={`text-6xl md:text-8xl lg:text-9xl font-black leading-none ${
              theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Site&Sight
            </h2>
          </motion.div>

          {/* Copyright and links */}
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
      </section>

      {/* Project Modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.footer>
  );
}