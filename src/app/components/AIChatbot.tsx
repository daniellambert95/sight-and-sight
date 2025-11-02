'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AIChatModal from './AIChatModal';
import { usePathname } from 'next/navigation';

const VISIBILITY_DELAY = 5000;

export default function AIChatbot() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setIsVisible(true), VISIBILITY_DELAY);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  if (!mounted || !isVisible) return null;

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isModalOpen ? 0.5 : 1,
          scale: 1,
        }}
        whileHover={{ scale: isModalOpen ? 1 : 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleOpenModal}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-[#ff5500]/40 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group backdrop-blur-sm"
        aria-label="Chat with Aimee AI Assistant"
        disabled={isModalOpen}
      >
        <svg
          className="w-7 h-7 text-white transition-transform group-hover:scale-110"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Robot head */}
          <path d="M17.5 6h-11C5.67 6 5 6.67 5 7.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z" />
          {/* Eyes */}
          <circle cx="9" cy="11" r="1.5" fill="#ff5500" />
          <circle cx="15" cy="11" r="1.5" fill="#ff5500" />
          {/* Mouth */}
          <path d="M9 14h6v1H9z" fill="#ff5500" />
          {/* Antenna */}
          <path d="M11.5 2v2h1V2h-1z" />
          <circle cx="12" cy="1.5" r="0.75" />
          {/* Body */}
          <path d="M7 18h10v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3z" />
          {/* Arms */}
          <rect x="4" y="8" width="1" height="4" rx="0.5" />
          <rect x="19" y="8" width="1" height="4" rx="0.5" />
        </svg>
        
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

      <AIChatModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

