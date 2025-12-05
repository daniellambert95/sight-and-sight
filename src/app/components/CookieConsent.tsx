'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CookieModal from './CookieModal';
import { hasConsent, acceptAllCookies, rejectAllCookies } from '../utils/cookieConsent';
import { useTheme } from '../utils/ThemeProvider';

export default function CookieConsent() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  // Don't render anything until mounted (prevents hydration mismatch)
  useEffect(() => {
    // Ensure we're on the client before checking localStorage
    setMounted(true);

    // Check if user has already made a choice
    const userHasConsent = hasConsent();
    setShowBanner(!userHasConsent);

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

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    setShowBanner(false);
  };

  const handleCustomize = () => {
    setShowBanner(false);
    setIsModalOpen(true);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Compact Cookie Banner - Only shows on first visit */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-[95] p-4 md:p-6"
          >
            <div
              className={`max-w-5xl mx-auto rounded-2xl shadow-2xl border-2 backdrop-blur-md ${
                theme === 'dark'
                  ? 'bg-gray-900/95 border-gray-700 text-white'
                  : 'bg-white/95 border-gray-200 text-gray-900'
              }`}
            >
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Cookie Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#ff5500]/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#ff5500]"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                          fill="currentColor"
                        />
                        <circle cx="8" cy="8" r="1.5" fill="#8B4513" />
                        <circle cx="16" cy="9" r="1.5" fill="#8B4513" />
                        <circle cx="10" cy="12" r="1.5" fill="#8B4513" />
                        <circle cx="15" cy="14" r="1.5" fill="#8B4513" />
                        <circle cx="9" cy="16" r="1.5" fill="#8B4513" />
                      </svg>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-bold mb-1 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}
                    >
                      Cookie Preferences
                    </h3>
                    <p
                      className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      We use cookies to enhance your experience. Choose your preferences.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                    <button
                      onClick={handleCustomize}
                      className={`px-6 py-2.5 rounded-lg border-2 border-[#ff5500] text-[#ff5500] hover:bg-[#ff5500]/10 transition-colors font-semibold text-sm whitespace-nowrap ${
                        theme === 'dark' ? 'bg-transparent' : 'bg-white'
                      }`}
                    >
                      Customize
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className={`px-6 py-2.5 rounded-lg transition-colors font-semibold text-sm whitespace-nowrap ${
                        theme === 'dark'
                          ? 'bg-gray-700 hover:bg-gray-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                      }`}
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2.5 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors font-semibold text-sm whitespace-nowrap"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

