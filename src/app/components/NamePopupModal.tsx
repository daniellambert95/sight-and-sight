'use client';

import React, { useState } from 'react';
import { useTheme } from '../utils/ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface NamePopupModalProps {
  isOpen: boolean;
  email: string;
  onSubmit: (name: string) => Promise<void>;
  onClose: () => void;
}

const NamePopupModal: React.FC<NamePopupModalProps> = ({
  isOpen,
  email,
  onSubmit,
  onClose
}) => {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await onSubmit(name.trim());
      setName('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className={`relative w-full max-w-md rounded-2xl shadow-2xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-700'
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
            }`}>
              {/* Close button */}
              <button
                onClick={onClose}
                className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
                  theme === 'dark'
                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <XMarkIcon className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8">
                <h2 className={`text-3xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  One Last Step!
                </h2>

                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Please tell us your name so we can personalize your experience.
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your first name"
                    disabled={isLoading}
                    autoFocus
                    className={`w-full px-6 py-3 rounded-xl outline-none transition-colors disabled:opacity-50 mb-4 ${
                      theme === 'dark'
                        ? 'bg-gray-800 text-white placeholder:text-gray-400 border border-gray-700 focus:border-[#ff5500]'
                        : 'bg-white text-gray-900 placeholder:text-gray-500 border border-gray-200 focus:border-[#ff5500]'
                    }`}
                  />

                  {error && (
                    <p className="text-red-500 text-sm mb-4">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-3 bg-[#ff5500] text-white rounded-xl hover:bg-[#ff6600] transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{ fontFamily: 'var(--font-league-spartan)' }}
                  >
                    {isLoading ? 'Subscribing...' : 'Complete Subscription'}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NamePopupModal;
