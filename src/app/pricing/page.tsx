'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';
import PricingCalculator from '../components/PricingCalculator';

export default function Pricing() {
  const { theme } = useTheme();
  const [isAnnual, setIsAnnual] = useState(false);
  
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
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className={`absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
          }`}></div>
          {/* Medium Circle */}
          <div className={`absolute bottom-20 -left-16 w-32 h-32 rounded-full opacity-15 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-300'
          }`}></div>
          {/* Small Squares */}
          <div className={`absolute top-1/4 right-1/4 w-6 h-6 rotate-45 opacity-30 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-[#ff5500]'
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/4 w-4 h-4 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-400'
          }`}></div>
          {/* Gradient Overlay for better text readability */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-black/30 via-transparent to-transparent' 
              : 'bg-gradient-to-r from-white/50 via-white/10 to-transparent'
          }`}></div>
        </div>

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
                💰 Transparent Pricing
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
              <button className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                View Pricing Plans
              </button>
              <button className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-white text-white hover:bg-white hover:text-black'
                  : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
              }`}>
                Get Custom Quote
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      
      
      {/* Interactive Pricing Calculator - Modern Creative Style */}
      <section className={`relative py-20 px-6 md:px-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute top-20 left-10 w-20 h-20 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-300'
          }`}></div>
        </div>

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
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-28 h-28 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute bottom-20 left-20 w-16 h-16 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
        </div>

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
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white text-2xl font-bold mb-6 shadow-lg">
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
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                        <span className="text-green-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Starting at <span className="text-green-500">€298</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold mb-6 shadow-lg">
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
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
                        <span className="text-blue-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Starting at <span className="text-blue-500">€398</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg">
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
                      <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                        <span className="text-purple-500 text-xs">✓</span>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className={`font-bold text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    <span className="text-purple-500">€60</span> per article
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
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col xl:flex-row xl:items-center gap-8">
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white text-2xl font-bold mb-6 shadow-lg">
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
                        <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-red-500 text-xs">✓</span>
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
                    className="inline-flex items-center px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
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
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-10 right-20 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          <div className={`absolute bottom-10 left-10 w-24 h-24 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute top-1/2 left-1/3 w-8 h-8 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-[#ff5500]'
          }`}></div>
        </div>

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
      
      {/* FAQ Section - Modern Creative Style */}
      <section className={`relative py-20 px-6 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-20 h-20 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute top-1/3 right-1/4 w-6 h-6 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/4 w-4 h-4 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-400'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                ❓ FAQ
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
              Frequently Asked <span className="text-[#ff5500]">Questions</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Everything you need to know about our services and packages
            </p>
          </div>
          
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                question: "What's included in the design and development?",
                answer: "Our design and development services include custom website design, responsive layouts, interactive elements, and implementation of your brand identity across the site.",
                icon: "🎨"
              },
              {
                question: "How long does it take to build a website?",
                answer: "Typically, our websites take 4-6 weeks from concept to launch, depending on the complexity and your feedback timeline.",
                icon: "⏱️"
              },
              {
                question: "Can I upgrade from One-Time to Monthly later?",
                answer: "Yes, you can upgrade to our Monthly package at any time. We'll apply a prorated credit for any unused portion of add-on services.",
                icon: "📈"
              },
              {
                question: "What does 'Unlimited Edits' include?",
                answer: "Unlimited Edits covers content updates, image changes, and minor design adjustments. Major redesigns or new features may require additional quotes.",
                icon: "✏️"
              },
              {
                question: "Do you provide hosting for all websites?",
                answer: "Yes, all our packages include professional hosting with 99.9% uptime guarantee, SSL certificates, and regular backups.",
                icon: "🌐"
              },
              {
                question: "What kind of chatbot solutions do you offer?",
                answer: "We offer AI-powered chatbots for customer support, lead generation, appointment booking, and custom solutions tailored to your specific business needs. All chatbots are fully integrated with your website and can be customized to match your brand.",
                icon: "🤖"
              },
              {
                question: "Can you build custom features not listed in your packages?",
                answer: "Absolutely! We love creative challenges and can build custom solutions for unique requirements. Contact our sales team to discuss your specific needs and we'll provide a custom quote.",
                icon: "⚡"
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff5500] to-orange-600 flex items-center justify-center text-white text-xl shadow-lg">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </h3>
                    <p className={`leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action - Modern Creative Style */}
      <section className={`relative py-24 px-6 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-white via-orange-50 to-white'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-10 w-48 h-48 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
          }`}></div>
          <div className={`absolute bottom-10 left-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute top-1/3 left-1/4 w-12 h-12 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-[#ff5500]'
          }`}></div>
          <div className={`absolute bottom-1/3 right-1/3 w-8 h-8 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-400'
          }`}></div>
          {/* Gradient overlay */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-transparent via-black/20 to-transparent' 
              : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
          }`}></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              theme === 'dark'
                ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
            }`}>
              🚀 Ready to Start?
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>

          {/* Main Heading */}
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Ready to</span>
            <span className="block text-[#ff5500]">get started?</span>
          </h2>

          <p className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Contact us today for a <span className="font-semibold text-[#ff5500]">free consultation</span> and let's bring your vision to life.
            <span className="block mt-2">Whether you need a standard package or a custom solution, we're here to help.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <span className="relative z-10">Get in Touch</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/contact?inquiry=custom" 
              className={`group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50' 
                  : 'bg-black/5 text-gray-900 border-gray-900/30 hover:bg-black/10 hover:border-gray-900/50'
              } shadow-xl hover:shadow-2xl transform hover:scale-105`}
            >
              <span className="relative z-10">Request Custom Quote</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Free consultation</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>No commitment required</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Custom solutions available</span>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  );
} 