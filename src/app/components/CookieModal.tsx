'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../utils/ThemeProvider';
import {
  cookieCategories,
  type CookiePreferences,
  type CookieCategory,
  saveCookiePreferences,
  acceptAllCookies,
  rejectAllCookies,
  getCookiePreferences,
} from '../utils/cookieConsent';

interface CookieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieModal({ isOpen, onClose }: CookieModalProps) {
  const { theme } = useTheme();
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
    timestamp: 0,
    version: '1.0.0',
  });
  const [showCustomize, setShowCustomize] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const stored = getCookiePreferences();
      if (stored) {
        setPreferences(stored);
      }
    }
  }, [isOpen]);

  const handleToggle = (category: CookieCategory) => {
    if (category === 'essential') return; // Essential cannot be disabled
    
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleAcceptAll = () => {
    acceptAllCookies();
    onClose();
  };

  const handleRejectAll = () => {
    rejectAllCookies();
    onClose();
  };

  const handleSavePreferences = () => {
    saveCookiePreferences(preferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
            theme === 'dark'
              ? 'bg-gray-900 text-white'
              : 'bg-white text-gray-900'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-6 right-6 z-10 p-2 rounded-full transition-colors ${
              theme === 'dark'
                ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
            }`}
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Modal Content */}
          <div className="p-6 lg:p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {/* Cookie Icon */}
                <div className="w-12 h-12 bg-[#ff5500]/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#ff5500]"
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
                </div>
                <h2
                  className="text-2xl lg:text-3xl font-bold"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  Cookie Preferences
                </h2>
              </div>
              <p
                className={`text-sm lg:text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                You can choose which cookies to accept or reject.
              </p>
            </div>

            {!showCustomize ? (
              /* Quick Actions View */
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-xl border-2 ${
                    theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <h3
                    className={`text-lg font-semibold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    Quick Actions
                  </h3>
                  <p
                    className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    Choose to accept all cookies, reject non-essential cookies, or customize your preferences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAcceptAll}
                      className="flex-1 px-6 py-3 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors font-semibold text-sm"
                    >
                      Accept All
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className={`flex-1 px-6 py-3 rounded-lg transition-colors font-semibold text-sm ${
                        theme === 'dark'
                          ? 'bg-gray-700 hover:bg-gray-600 text-white'
                          : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                      }`}
                    >
                      Reject All
                    </button>
                    <button
                      onClick={() => setShowCustomize(true)}
                      className={`flex-1 px-6 py-3 rounded-lg border-2 border-[#ff5500] text-[#ff5500] hover:bg-[#ff5500]/10 transition-colors font-semibold text-sm ${
                        theme === 'dark' ? 'bg-transparent' : 'bg-white'
                      }`}
                    >
                      Customize
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Customize View */
              <div className="space-y-6">
                {Object.values(cookieCategories).map((category) => (
                  <div
                    key={category.id}
                    className={`p-6 rounded-xl border-2 ${
                      category.required
                        ? theme === 'dark'
                          ? 'bg-gray-800/30 border-gray-700'
                          : 'bg-orange-50/50 border-orange-200'
                        : theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-700'
                        : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3
                            className={`text-lg font-semibold ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {category.name}
                          </h3>
                          {category.required && (
                            <span
                              className="px-2 py-0.5 text-xs font-medium rounded bg-[#ff5500]/20 text-[#ff5500]"
                            >
                              Required
                            </span>
                          )}
                        </div>
                        <p
                          className={`text-sm mb-3 ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {category.description}
                        </p>
                        <div
                          className={`text-xs space-y-1 ${
                            theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                          }`}
                        >
                          <div className="font-medium mb-1">Cookies used:</div>
                          {category.cookies.map((cookie, idx) => (
                            <div key={idx}>• {cookie}</div>
                          ))}
                        </div>
                      </div>
                      {/* Toggle Switch */}
                      <div className="flex-shrink-0">
                        <button
                          type="button"
                          onClick={() => handleToggle(category.id)}
                          disabled={category.required}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff5500] focus:ring-offset-2 ${
                            preferences[category.id]
                              ? 'bg-[#ff5500]'
                              : theme === 'dark'
                              ? 'bg-gray-600'
                              : 'bg-gray-300'
                          } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                              preferences[category.id] ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => setShowCustomize(false)}
                    className={`px-6 py-3 rounded-lg transition-colors font-semibold text-sm ${
                      theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 px-6 py-3 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors font-semibold text-sm"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

