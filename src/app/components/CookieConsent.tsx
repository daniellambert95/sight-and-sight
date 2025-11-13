'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CookieModal from './CookieModal';
import { hasConsent, acceptAllCookies } from '../utils/cookieConsent';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Don't render anything until mounted (prevents hydration mismatch)
  useEffect(() => {
    // Ensure we're on the client before checking localStorage
    setMounted(true);
    
    // Auto-accept all cookies if no consent has been given
    if (!hasConsent()) {
      // Auto-save preferences to accept all cookies
      acceptAllCookies();
    }
    
    // Check if we're on the home page and need to wait for intro animation
    const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
    
    // Check if intro animation has completed and homepage is visible
    const introComplete = typeof window !== 'undefined' ? sessionStorage.getItem('intro-complete') : null;
    
    // If on home page and intro hasn't completed yet, wait for it
    if (isHomePage && !introComplete) {
      // Listen for when intro completes and homepage is visible
      const checkInterval = setInterval(() => {
        const currentIntroComplete = sessionStorage.getItem('intro-complete');
        if (currentIntroComplete === 'true') {
          setIsVisible(true);
          clearInterval(checkInterval);
        }
      }, 100);
      
      return () => {
        clearInterval(checkInterval);
      };
    } else {
      // On other pages or if intro already completed, show immediately
      setIsVisible(true);
    }
  }, []);

  // Don't render anything until mounted (prevents hydration mismatch)
  if (!mounted) return null;

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Cookie Icon - Always visible, reduced opacity when modal is open */}
      <motion.button
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ 
          opacity: isModalOpen ? 0.5 : 1, 
          y: 0, 
          scale: 1 
        }}
        whileHover={{ scale: isModalOpen ? 1 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpenModal}
        className="fixed bottom-6 left-6 z-[90] w-14 h-14 bg-[#ff5500]/40 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group backdrop-blur-sm"
        aria-label="Cookie preferences"
        disabled={isModalOpen}
      >
            {/* Cookie Icon SVG */}
            <svg
              className="w-7 h-7 text-white transition-transform group-hover:rotate-12"
              fill="none"
              viewBox="0 0 24 24"
            >
              {/* Cookie base */}
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                fill="currentColor"
              />
              {/* Chocolate chips - darker circles */}
              <circle cx="8" cy="8" r="1.5" fill="#8B4513" />
              <circle cx="16" cy="9" r="1.5" fill="#8B4513" />
              <circle cx="10" cy="12" r="1.5" fill="#8B4513" />
              <circle cx="15" cy="14" r="1.5" fill="#8B4513" />
              <circle cx="9" cy="16" r="1.5" fill="#8B4513" />
            </svg>
            {/* Pulse animation ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#ff5500]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.button>

      {/* Cookie Modal */}
      <CookieModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}

