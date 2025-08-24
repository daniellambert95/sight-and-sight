'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../utils/ThemeProvider';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Close modal after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1
    },
    exit: { 
      opacity: 0,
      scale: 0.8
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariants}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gray-900 text-white' 
                : 'bg-white text-gray-900'
            }`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
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
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Contact Form */}
              <div className="flex-1 p-6 lg:p-8">
                <div className="max-w-sm mx-auto lg:mx-0">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    How can we <span className="text-[#ff5500]">help?</span>
                  </h2>
                  
                  <p className={`mb-6 text-sm lg:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Ready to transform your digital presence? Fill out the form below and we&apos;ll get back to you within 24 hours.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                        We&apos;ll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2.5 rounded-lg border transition-colors text-sm ${
                            theme === 'dark'
                              ? 'bg-gray-800 border-gray-700 focus:border-[#ff5500] text-white'
                              : 'bg-gray-50 border-gray-300 focus:border-[#ff5500] text-gray-900'
                          } focus:outline-none focus:ring-2 focus:ring-[#ff5500]/20`}
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2.5 rounded-lg border transition-colors text-sm ${
                            theme === 'dark'
                              ? 'bg-gray-800 border-gray-700 focus:border-[#ff5500] text-white'
                              : 'bg-gray-50 border-gray-300 focus:border-[#ff5500] text-gray-900'
                          } focus:outline-none focus:ring-2 focus:ring-[#ff5500]/20`}
                          placeholder="your.email@company.com"
                        />
                      </div>


                      <div>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={3}
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2.5 rounded-lg border transition-colors resize-none text-sm ${
                            theme === 'dark'
                              ? 'bg-gray-800 border-gray-700 focus:border-[#ff5500] text-white'
                              : 'bg-gray-50 border-gray-300 focus:border-[#ff5500] text-gray-900'
                          } focus:outline-none focus:ring-2 focus:ring-[#ff5500]/20`}
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-4 py-2.5 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        style={{ fontFamily: 'var(--font-league-spartan)' }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Divider */}
              <div className={`hidden lg:block w-px ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`} />

              {/* Right Side - Calendly */}
              <div className={`flex-1 p-6 lg:p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    Schedule a <span className="text-[#ff5500]">Discovery Call</span>
                  </h2>
                  
                  <p className={`mb-6 text-sm lg:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Prefer to talk? Book a 30-minute discovery call to discuss your project in detail and explore how we can help.
                  </p>

                  {/* Calendly Embed Placeholder */}
                  <div className={`rounded-lg border-2 border-dashed p-4 lg:p-6 text-center ${
                    theme === 'dark' 
                      ? 'border-gray-600 bg-gray-900/50' 
                      : 'border-gray-300 bg-white'
                  }`}>
                    <div className="mb-4">
                      <svg className={`w-12 h-12 mx-auto ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-base lg:text-lg font-semibold mb-2">Calendly Integration</h3>
                    <p className={`text-xs lg:text-sm mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                      Replace this section with your Calendly embed code
                    </p>
                    <div className="text-xs font-mono bg-gray-100 dark:bg-gray-800 p-2 lg:p-3 rounded text-left overflow-x-auto">
                      {`<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/your-link"
     style="min-width:320px;height:400px;">
</div>
<script type="text/javascript" 
        src="https://assets.calendly.com/assets/external/widget.js">
</script>
<!-- Calendly inline widget end -->`}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}