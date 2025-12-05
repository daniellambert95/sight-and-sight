'use client';

import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeProvider';
import { motion } from 'framer-motion';
import { isValidEmail } from '@/lib/utils';
import NamePopupModal from './NamePopupModal';

const SubscribeNow = ({ text = "SUBSCRIBE NOW" }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  const [showNameModal, setShowNameModal] = useState(false);
  const [tempEmail, setTempEmail] = useState('');
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !isValidEmail(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // Store email and show name modal directly (no Supabase)
    setTempEmail(email.toLowerCase().trim());
    setShowNameModal(true);
    setEmail('');
    setIsLoading(false);
  };

  const handleNameSubmit = async (name: string) => {
    try {
      const response = await fetch('/api/brevo/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: tempEmail, name }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Brevo API error:', data);
        throw new Error(data.error || 'Failed to complete subscription');
      }

      setShowNameModal(false);
      setMessage({
        type: 'success',
        text: 'Successfully subscribed! Check your inbox for a welcome email.'
      });
    } catch (error) {
      console.error('Brevo error:', error);
      throw error;
    }
  };
  
  return (
    <section className={`relative py-24 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex flex-wrap justify-center">
          {text.split('').map((letter, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <span
                key={index}
                className={`
                  inline-block
                  text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold
                  transition-all duration-1200 ease-[cubic-bezier(0,0,0,1)]
                  origin-center
                  ${isHovered ? 'scale-y-150 scale-x-110' : 'scale-100'}
                  cursor-pointer
                  ${letter === ' ' ? 'w-4 md:w-8 lg:w-12' : ''}
                `}
                style={{ 
                  color: theme === 'dark' ? '#ff5500' : '#ff5500',
                  fontFamily: 'var(--font-league-spartan)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {letter}
              </span>
            );
          })}
        </div>
        
        <motion.div 
          className="w-full max-w-xl mx-auto mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Secondary text above form */}
          <div className="text-center mb-6">
            <p className={`text-lg md:text-xl  ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Get free and exclusive web design tips, SEO insights, and be the first to hear about our latest projects
            </p>
          </div>
          
          <div className={`p-4 rounded-3xl backdrop-blur-sm shadow-2xl border ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50' 
              : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-white/50'
          }`}>
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address" 
                disabled={isLoading}
                className={`w-full md:flex-1 px-6 py-3 rounded-xl outline-none transition-colors disabled:opacity-50 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-white placeholder:text-gray-400 border border-gray-700 focus:border-[#ff5500]' 
                    : 'bg-white text-gray-900 placeholder:text-gray-500 border border-gray-200 focus:border-[#ff5500]'
                }`}
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto px-8 py-3 bg-[#ff5500] text-white rounded-xl hover:bg-[#ff6600] transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                {isLoading ? 'Subscribing...' : 'Subscribe Now'}
              </button>
            </form>
            
            {/* Success/Error Message */}
            {message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg text-center ${
                  message.type === 'success'
                    ? theme === 'dark'
                      ? 'bg-green-900/50 text-green-300 border border-green-700'
                      : 'bg-green-100 text-green-800 border border-green-200'
                    : theme === 'dark'
                      ? 'bg-red-900/50 text-red-300 border border-red-700'
                      : 'bg-red-100 text-red-800 border border-red-200'
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <NamePopupModal
        isOpen={showNameModal}
        email={tempEmail}
        onSubmit={handleNameSubmit}
        onClose={() => setShowNameModal(false)}
      />
    </section>
  );
};

export default SubscribeNow; 