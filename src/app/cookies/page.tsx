'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTheme } from '../utils/ThemeProvider';
import { cookieCategories } from '../utils/cookieConsent';

export default function CookiePolicyPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navigation currentPage="cookies" />
      
      <main className={`pt-20 pb-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        <div className="max-w-4xl mx-auto px-8 md:px-16 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#ff5500]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-9 h-9 text-[#ff5500]"
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
              <h1
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Cookie Policy
              </h1>
            </div>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              What Are Cookies?
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
                They are widely used to make websites work more efficiently and provide information to the website owners.
              </p>
              <p>
                At Site & Sight, we use cookies to enhance your browsing experience, analyze site traffic, and personalize 
                content. This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
              </p>
            </div>
          </motion.section>

          {/* Cookie Categories */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {Object.values(cookieCategories).map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`p-6 rounded-xl border-2 ${
                    category.required
                      ? theme === 'dark'
                        ? 'bg-gray-800/30 border-orange-500/30'
                        : 'bg-orange-50/50 border-orange-200'
                      : theme === 'dark'
                      ? 'bg-gray-800/50 border-gray-700'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {category.name}
                    </h3>
                    {category.required && (
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-[#ff5500]/20 text-[#ff5500]">
                        Required
                      </span>
                    )}
                  </div>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {category.description}
                  </p>
                  <div>
                    <h4 className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
                      Cookies Used:
                    </h4>
                    <ul className={`space-y-1 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {category.cookies.map((cookie, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#ff5500] mr-2">•</span>
                          <span>{cookie}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Third-Party Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Third-Party Cookies
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics 
                of the website, deliver advertisements, and so on. These third-party services include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics</strong> - We use Google Analytics to understand how visitors interact with 
                  our website. This helps us improve our services and user experience.
                </li>
                <li>
                  <strong>Meta Pixel (Facebook)</strong> - We use Meta Pixel to measure the effectiveness of our 
                  advertising campaigns and to deliver relevant ads to you.
                </li>
                <li>
                  <strong>Google Search Console</strong> - We use Google Search Console to monitor and maintain our 
                  website's presence in Google search results.
                </li>
              </ul>
              <p>
                These third-party cookies are subject to the respective privacy policies of these third parties. 
                We recommend that you review their privacy policies to understand how they use cookies.
              </p>
            </div>
          </motion.section>

          {/* Managing Cookies */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Managing Your Cookie Preferences
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights 
                by clicking on the cookie icon in the bottom-left corner of our website at any time.
              </p>
              <p>
                You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject 
                cookies, you may still use our website, though your access to some functionality and areas of our 
                website may be restricted.
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  How to Manage Cookies in Your Browser:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
                  </li>
                  <li>
                    <strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data
                  </li>
                  <li>
                    <strong>Safari:</strong> Preferences → Privacy → Cookies and website data
                  </li>
                  <li>
                    <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Updates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Updates to This Cookie Policy
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other 
              operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed 
              about our use of cookies.
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:hello@siteandsight.com" 
                  className="text-[#ff5500] hover:text-[#e64d00] underline"
                >
                  hello@siteandsight.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Dublin, Ireland
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

