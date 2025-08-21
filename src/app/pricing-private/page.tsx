'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';
import PricingCalculator from '../components/PricingCalculator';
import ProjectModal from '../components/ProjectModal';

export default function PricingPrivate() {
  const { theme } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const scrollToPricingCalculator = () => {
    const element = document.getElementById('pricing-calculator');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="pricing" />
      
      {/* Hero Section - Modern Creative Design */}
      <section className={`relative min-h-[70vh] flex items-center overflow-hidden transition-colors duration-300 pt-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-orange-50 to-orange-100'
      }`}>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full py-16">
          <div className="text-center">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                💰 Detailed Pricing
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">Simple,</span>
              <span className="block text-[#ff5500]">transparent</span>
              <span className={`block text-4xl md:text-5xl lg:text-6xl font-bold mt-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                pricing
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Choose the perfect plan for your business needs with our 
              <span className="font-semibold text-[#ff5500]"> comprehensive digital solutions</span>
            </motion.p>

            {/* Service Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {['Web Design', 'SEO', 'Copywriting', 'Consultations', 'Automation'].map((service, index) => (
                <span 
                  key={service}
                  className={`px-4 py-2 rounded-xl text-sm font-medium backdrop-blur-md shadow-lg border ${
                    theme === 'dark' 
                      ? 'bg-black/40 border-gray-700/50 text-gray-300' 
                      : 'bg-white/70 border-white/50 text-gray-700'
                  }`}
                >
                  {service}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                onClick={scrollToPricingCalculator}
                className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View Pricing Plans
              </button>
              <button 
                onClick={openModal}
                className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}
              >
                Get Custom Quote
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      
      
      {/* Interactive Pricing Calculator - Modern Creative Style */}
      <section 
        id="pricing-calculator"
        className={`relative py-20 px-6 md:px-16 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}
      >

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                🧮 Pricing Calculator
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Build Your Perfect <span className="text-[#ff5500]">Package</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Customize your digital solution with our interactive pricing calculator
            </p>
          </div>

          <PricingCalculator theme={theme} />
        </div>
      </section>
      
      {/* Additional Services - Modern Creative Style */}
      <section className={`relative py-20 px-6 md:px-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                🚀 Additional Services
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>
            <motion.h2 
              className={`text-4xl md:text-5xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Expand Your <span className="text-[#ff5500]">Digital Presence</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Take your business to the next level with our specialized services
            </p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* SEO Service */}
            <motion.div 
              variants={fadeIn}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  🔍
                </div>
                <h3 className={`text-2xl font-black mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>SEO Optimization</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Comprehensive search engine optimization to improve your visibility and rankings.
                </p>
                <div className="space-y-3 mb-8">
                  {['Keyword research', 'On-page optimization', 'Technical SEO'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                        <span className="text-orange-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Starting at <span className="text-orange-500">€298</span>
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* SEM Service */}
            <motion.div 
              variants={fadeIn}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  📊
                </div>
                <h3 className={`text-2xl font-black mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Search Engine Marketing</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Strategic paid advertising campaigns to drive targeted traffic to your site.
                </p>
                <div className="space-y-3 mb-8">
                  {['Google Ads management', 'Conversion tracking', 'ROI optimization'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                        <span className="text-orange-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Starting at <span className="text-orange-500">€398</span>
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Content Writing */}
            <motion.div 
              variants={fadeIn}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  ✍️
                </div>
                <h3 className={`text-2xl font-black mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Blog & Content Writing</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Professional content creation to engage your audience and boost your SEO.
                </p>
                <div className="space-y-3 mb-8">
                  {['SEO-optimized articles', 'Industry-specific content', 'Regular publishing schedule'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                        <span className="text-orange-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <span className="text-orange-500">€60</span> per article
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Web Consultations */}
            <motion.div 
              variants={fadeIn}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  💡
                </div>
                <h3 className={`text-2xl font-black mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Web Consultations</h3>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Expert guidance on web strategy, technology choices, and digital transformation.
                </p>
                <div className="space-y-3 mb-8">
                  {['Strategy planning', 'Technology audit', 'Performance optimization'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                        <span className="text-orange-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <span className="text-orange-500">€198</span> per hour
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Chatbot & Automation - Spanning 2 columns on large screens */}
            <motion.div 
              variants={fadeIn}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 lg:col-span-2 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
              }`}
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row xl:items-center gap-8">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold mb-6 shadow-lg">
                    🤖
                  </div>
                  <h3 className={`text-2xl font-black mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Chatbot & Automation Solutions</h3>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Enhance your website with intelligent chatbots and business automation tools that streamline operations and improve customer experience.
                  </p>
                  <div className="space-y-4 mb-8">
                    {[
                      'AI-powered customer support chatbots',
                      'Lead generation and qualification bots',
                      'Workflow automation solutions',
                      'Custom integrations with your existing tools'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-orange-500 text-xs">✓</span>
                        </div>
                        <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="xl:w-80 xl:flex-shrink-0">
                  <p className={`font-medium mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Pricing varies based on complexity and specific requirements.
                  </p>
                  <Link 
                    href="/contact?inquiry=automation" 
                    className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Contact Sales
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Custom Solutions Banner - Modern Creative Style */}
      <section className={`relative py-20 px-6 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-orange-50 via-white to-orange-100'
      }`}>

        <motion.div 
          className="relative z-10 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className={`p-12 rounded-3xl backdrop-blur-sm shadow-2xl border ${
            theme === 'dark' 
              ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50' 
              : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-white/50'
          }`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-8 h-0.5 bg-[#ff5500]"></div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    theme === 'dark'
                      ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                      : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
                  }`}>
                    💡 Custom Solutions
                  </span>
                  <div className="w-8 h-0.5 bg-[#ff5500]"></div>
                </div>

                <h3 className={`text-3xl md:text-4xl font-black mb-4 leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Have a <span className="text-[#ff5500]">unique idea</span><br />
                  or requirement?
                </h3>

                <p className={`text-lg md:text-xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  We love creative challenges! Reach out to discuss your custom project needs and let's build something amazing together.
                </p>
              </div>

              
              
              <div className="lg:w-80 flex-shrink-0">
                <Link 
                  href="/contact?inquiry=custom" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 w-full"
                >
                  <span className="relative z-10">Let's Discuss Your Idea</span>
                  <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  {/* Button glow effect */}
                  <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      
     
      
     
      
      <Footer />
      
      {/* Project Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
} 