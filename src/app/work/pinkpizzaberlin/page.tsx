'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useTheme } from "../../utils/ThemeProvider";

export default function PinkPizzaBerlinCaseStudy() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <Navigation currentPage="work" />

      {/* Hero Section - Modern Creative Design */}
      <section className={`relative min-h-[80vh] flex items-center overflow-hidden transition-colors duration-300 pt-24 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-orange-50 to-orange-100'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
          }`}></div>
          {/* Medium Circle */}
          <div className={`absolute top-1/2 -left-20 w-40 h-40 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-300'
          }`}></div>
          {/* Small Squares */}
          <div className={`absolute bottom-20 right-1/4 w-6 h-6 rotate-45 opacity-40 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-[#ff5500]'
          }`}></div>
          <div className={`absolute top-1/3 left-1/3 w-4 h-4 rotate-45 opacity-30 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-400'
          }`}></div>
          {/* Gradient Overlay for better text readability */}
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-black/40 via-transparent to-transparent' 
              : 'bg-gradient-to-r from-white/60 via-white/20 to-transparent'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-8">
              {/* Breadcrumb Tags */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                  theme === 'dark'
                    ? 'bg-[#ff5500] text-white'
                    : 'bg-[#ff5500] text-white'
                }`}>
                  ✨ Featured Case Study
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  theme === 'dark'
                    ? 'bg-gray-800/80 border-gray-600 text-orange-300'
                    : 'bg-white/80 border-orange-200 text-[#ff5500]'
                }`}>
                  Web Design & Development
                </span>
              </div>

              {/* Main Heading */}
              <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block">Pink</span>
                <span className="block text-[#ff5500]">Pizza</span>
                <span className={`block text-3xl md:text-4xl lg:text-5xl font-bold mt-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Berlin
                </span>
              </h1>

              {/* Subtitle */}
              <p className={`text-xl md:text-2xl lg:text-3xl font-light mb-8 max-w-3xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Transforming a local Berlin pizzeria into a 
                <span className="font-semibold text-[#ff5500]"> digital success story</span> with a 
                <span className="font-bold text-green-600"> 300% increase</span> in online orders
              </p>

              {/* Stats Cards */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg border ${
                  theme === 'dark' 
                    ? 'bg-black/40 border-gray-700/50' 
                    : 'bg-white/70 border-white/50'
                }`}>
                  <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Timeline</div>
                  <div className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>6 weeks</div>
                </div>
                <div className={`px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg border ${
                  theme === 'dark' 
                    ? 'bg-black/40 border-gray-700/50' 
                    : 'bg-white/70 border-white/50'
                }`}>
                  <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Result</div>
                  <div className="text-2xl font-bold text-green-600">+300%</div>
                </div>
                <div className={`px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg border ${
                  theme === 'dark' 
                    ? 'bg-black/40 border-gray-700/50' 
                    : 'bg-white/70 border-white/50'
                }`}>
                  <div className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>Rating Improvement</div>
                  <div className="text-2xl font-bold text-yellow-500">4.2 → 4.8★</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  View Live Site
                </button>
                <button className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-white text-white hover:bg-white hover:text-black'
                    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white'
                }`}>
                  Jump to Results
                </button>
              </div>
            </div>

            {/* Right Column - Visual Element */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Device Mockup */}
                <div className={`w-80 h-96 rounded-3xl p-6 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                    : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
                }`}>
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center relative overflow-hidden">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">Pink Pizza</div>
                      <div className="text-lg opacity-90">Berlin</div>
                      <div className="mt-4 text-sm opacity-75">Order Now →</div>
                    </div>
                    {/* Pizza emoji decoration */}
                    <div className="absolute -bottom-4 -right-4 text-6xl opacity-30">🍕</div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  +300% Orders
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 bg-[#ff5500]/20 rounded-3xl blur-3xl transform scale-150 -z-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className={`w-6 h-10 border-2 rounded-full p-1 ${
            theme === 'dark' ? 'border-gray-600' : 'border-gray-400'
          }`}>
            <div className={`w-1 h-3 rounded-full mx-auto animate-bounce ${
              theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'
            }`}></div>
          </div>
        </div>
      </section>

      {/* Key Results Section - Modern Creative Style */}
      <section className={`relative px-8 md:px-16 py-20 transition-colors duration-300 overflow-hidden ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-32 h-32 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute bottom-20 left-20 w-20 h-20 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header with Modern Styling */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                📊 Project Impact
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Measurable Results
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Real impact delivered through strategic design and development
            </p>
          </div>

          {/* Enhanced Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
            }`}>
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-orange-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  📈
                </div>
                <div className="text-5xl font-black text-[#ff5500] mb-3">300%</div>
                <div className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Increase in Online Orders</div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Within 3 months of launch
                </p>
                <div className="mt-4 text-sm text-[#ff5500] font-semibold">↗ 300% Growth</div>
              </div>
            </div>

            <div className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
            }`}>
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  📱
                </div>
                <div className="text-5xl font-black text-blue-500 mb-3">85%</div>
                <div className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Mobile Usage</div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Mobile-first design paid off
                </p>
                <div className="mt-4 text-sm text-blue-500 font-semibold">📱 Mobile Optimized</div>
              </div>
            </div>

            <div className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-white shadow-2xl shadow-gray-200/50'
            }`}>
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 text-white text-2xl font-bold mb-6 shadow-lg">
                  ⭐
                </div>
                <div className="text-5xl font-black text-yellow-500 mb-3">4.8★</div>
                <div className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Google Rating</div>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Improved from 4.2 stars
                </p>
                <div className="mt-4 text-sm text-yellow-500 font-semibold">⭐ +0.6 Rating</div>
              </div>
            </div>
          </div>

          {/* Additional Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className={`text-center p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/60'
            }`}>
              <div className="text-2xl font-bold text-green-600 mb-1">60%</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Reduced Cart Abandonment
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/60'
            }`}>
              <div className="text-2xl font-bold text-purple-600 mb-1">400%</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                More Reviews
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/60'
            }`}>
              <div className="text-2xl font-bold text-red-600 mb-1">40%</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Revenue Increase
              </div>
            </div>
            <div className={`text-center p-6 rounded-2xl ${
              theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/60'
            }`}>
              <div className="text-2xl font-bold text-indigo-600 mb-1">6</div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Week Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution - Modern Creative Style */}
      <section className={`relative px-8 md:px-16 py-20 transition-colors duration-300 overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-40 left-10 w-24 h-24 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-red-500' : 'bg-red-300'
          }`}></div>
          <div className={`absolute bottom-40 right-10 w-16 h-16 rotate-45 opacity-15 ${
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
                🚀 Strategy & Solutions
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              From Challenge to Success
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Challenge Side */}
            <div className={`relative p-8 md:p-12 rounded-3xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-800/30' 
                : 'bg-gradient-to-br from-red-50 to-red-100/50 border border-red-200'
            }`}>
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white text-2xl font-bold mb-8 shadow-lg">
                ⚠️
              </div>

              <h3 className={`text-3xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>The Challenge</h3>
              
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Pink Pizza was a popular local spot but struggled with digital presence. They were losing potential customers to competitors with better online ordering systems.
              </p>

              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-500 text-lg">✗</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      No Online Ordering
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Customers had to call during busy hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-500 text-lg">✗</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Poor Mobile Experience
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Outdated website wasn't mobile-friendly
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-500 text-lg">✗</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Limited Visibility
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Poor SEO and online presence
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-red-500 text-lg">✗</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Review Management
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Difficulty getting customer feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className={`relative p-8 md:p-12 rounded-3xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-800/30' 
                : 'bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200'
            }`}>
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-white text-2xl font-bold mb-8 shadow-lg">
                ✨
              </div>

              <h3 className={`text-3xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Our Solution</h3>
              
              <p className={`text-lg mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We created a comprehensive digital solution that addressed each pain point while reflecting Pink Pizza's unique brand personality.
              </p>

              <div className="space-y-4">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Smart Online Ordering
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Custom system with real-time updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Mobile-First Design
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Responsive design optimized for all devices
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Local SEO Optimization
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Targeted for Berlin pizza searches
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-4 mt-1">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <div>
                    <h4 className={`font-semibold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      QR Review System
                    </h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Easy review collection system
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Deep Dive - Enhanced */}
      <section className={`px-8 md:px-16 py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Our Process</h2>
          <div className="space-y-16">
            
            {/* Week 1-2: Discovery */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">1</div>
                  <h3 className={`text-2xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>Discovery & Research</h3>
                </div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  We conducted in-depth interviews with the Pink Pizza team and analyzed competitor landscapes. We also studied local customer behavior and ordering patterns.
                </p>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <li>• Customer journey mapping</li>
                  <li>• Competitor analysis (5 local pizzerias)</li>
                  <li>• Technical requirements gathering</li>
                  <li>• Brand identity assessment</li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700 shadow-lg shadow-gray-900/30' 
                  : 'bg-white border border-gray-200 shadow-lg shadow-gray-200/50'
              }`}>
                <h4 className={`font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Key Insights</h4>
                <div className="space-y-2 text-sm">
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-orange-900/30 border border-orange-800/50' : 'bg-orange-50 border border-orange-200'
                  }`}>80% of orders came via phone</div>
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-orange-900/30 border border-orange-800/50' : 'bg-orange-50 border border-orange-200'
                  }`}>Main competitors had poor mobile UX</div>
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-orange-900/30 border border-orange-800/50' : 'bg-orange-50 border border-orange-200'
                  }`}>Brand had strong local recognition</div>
                </div>
              </div>
            </div>

            {/* Week 3-4: Design & Prototyping */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 lg:order-1 p-6 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700 shadow-lg shadow-gray-900/30' 
                  : 'bg-white border border-gray-200 shadow-lg shadow-gray-200/50'
              }`}>
                <h4 className={`font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Design Decisions</h4>
                <div className="space-y-2 text-sm">
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-orange-900/30 border border-orange-800/50' : 'bg-orange-50 border border-orange-200'
                  }`}>Pink & white color scheme</div>
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-orange-900/30 border border-orange-800/50' : 'bg-orange-50 border border-orange-200'
                  }`}>Large, appetizing food photography</div>
                  <div className={`p-3 rounded ${
                    theme === 'dark' ? 'bg-orange-900/30 border border-orange-800/50' : 'bg-orange-50 border border-orange-200'
                  }`}>One-click ordering system</div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-4">
                  <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">2</div>
                  <h3 className={`text-2xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>Design & Prototyping</h3>
                </div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  We created wireframes and prototypes focusing on the ordering flow. Multiple design iterations were tested with real customers.
                </p>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <li>• User experience wireframing</li>
                  <li>• Visual design mockups</li>
                  <li>• Interactive prototypes</li>
                  <li>• Usability testing with 8 customers</li>
                </ul>
              </div>
            </div>

            {/* Week 5-6: Development & Launch */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-4">3</div>
                  <h3 className={`text-2xl font-semibold ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}>Development & Launch</h3>
                </div>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Built with performance and scalability in mind. We integrated with their existing POS system and trained staff on the new processes.
                </p>
                <ul className={`space-y-2 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  <li>• Custom Next.js development</li>
                  <li>• POS system integration</li>
                  <li>• Payment gateway setup</li>
                  <li>• Staff training & documentation</li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl transition-all duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700 shadow-lg shadow-gray-900/30' 
                  : 'bg-white border border-gray-200 shadow-lg shadow-gray-200/50'
              }`}>
                <h4 className={`font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Technical Stack</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className={`p-2 rounded text-center ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Next.js</div>
                  <div className={`p-2 rounded text-center ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>TypeScript</div>
                  <div className={`p-2 rounded text-center ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Tailwind CSS</div>
                  <div className={`p-2 rounded text-center ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Stripe</div>
                  <div className={`p-2 rounded text-center ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Vercel</div>
                  <div className={`p-2 rounded text-center ${
                    theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>Google APIs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Showcase */}
      <section className={`px-8 md:px-16 py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>Key Features</h2>
          
          <div className="space-y-16">
            {/* Online Ordering System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className={`text-2xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Smart Online Ordering</h3>
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  A streamlined ordering process that reduced cart abandonment by 60%. Customers can customize pizzas, track orders in real-time, and save favorites.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#ff5500] mr-3 text-xl">•</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>One-click reordering for regular customers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff5500] mr-3 text-xl">•</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>Real-time order tracking</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff5500] mr-3 text-xl">•</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>Multiple payment options (Card, PayPal, Cash)</span>
                  </li>
                </ul>
              </div>
              <div className={`rounded-xl p-6 h-80 flex items-center justify-center border-2 border-dashed transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-600 hover:border-[#ff5500]' 
                  : 'bg-gray-100 border-gray-300 hover:border-[#ff5500]'
              }`}>
                <span className={`text-center ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="text-lg font-medium mb-2">📱 Online Ordering Interface</div>
                  <div className="text-sm">Interactive screenshot coming soon</div>
                </span>
              </div>
            </div>

            {/* QR Code Review System */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`order-2 lg:order-1 rounded-xl p-6 h-80 flex items-center justify-center border-2 border-dashed transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border-gray-600 hover:border-[#ff5500]' 
                  : 'bg-gray-100 border-gray-300 hover:border-[#ff5500]'
              }`}>
                <span className={`text-center ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="text-lg font-medium mb-2">📱 QR Code & Review System</div>
                  <div className="text-sm">Interactive demo coming soon</div>
                </span>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className={`text-2xl font-semibold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>QR Review Collection</h3>
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Innovative QR code system placed on tables and receipts that made it easy for customers to leave reviews, improving their Google rating from 4.2 to 4.8 stars.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#ff5500] mr-3 text-xl">•</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>Increased review volume by 400%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff5500] mr-3 text-xl">•</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>Automated review follow-up system</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ff5500] mr-3 text-xl">•</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-black'}>Integrated with Google My Business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonial */}
      <section className={`px-8 md:px-16 py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-16 h-16 text-[#ff5500] mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32">
            <path d="M14 4.34v4.66c-1.72 0-3.196.493-4.428 1.477C8.34 11.46 7.724 12.837 7.724 14.6c0 .127.005.252.016.375h4.976v9.375H0V15.525c0-3.403.553-6.142 1.66-8.217C2.767 5.235 4.267 3.619 6.16 2.46 8.054 1.3 10.34.59 13.016.33L14 4.34zm18 0v4.66c-1.72 0-3.196.493-4.428 1.477-1.233 .983-1.848 2.36-1.848 4.123 0 .127.005.252.016.375h4.976v9.375H18V15.525c0-3.403.553-6.142 1.66-8.217.813-2.073 2.313-3.69 4.207-4.848C25.76 1.3 28.054.59 30.73.33L32 4.34z" />
          </svg>
          <blockquote className={`text-2xl md:text-3xl font-light italic mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            "The new website transformed our business. We went from struggling with phone orders to having a smooth digital operation. Our revenue increased by 40% in the first quarter alone."
          </blockquote>
          <div className={`border-t pt-8 ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <p className={`font-semibold text-xl ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>Maria Schneider</p>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>Owner & Manager, Pink Pizza Berlin</p>
            <div className="flex justify-center mt-4">
              <div className="flex text-yellow-400">
                ★★★★★
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Learned - NEW Section */}
      <section className={`px-8 md:px-16 py-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>What We Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className={`p-8 rounded-xl ${
              theme === 'dark' ? 'bg-green-900/20 border border-green-800/30' : 'bg-green-50 border border-green-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-green-400' : 'text-green-800'
              }`}>What Worked</h3>
              <ul className={`space-y-3 ${
                theme === 'dark' ? 'text-green-300' : 'text-green-700'
              }`}>
                <li>• Mobile-first approach was crucial (85% mobile traffic)</li>
                <li>• QR code strategy exceeded expectations</li>
                <li>• One-click reordering drove customer retention</li>
                <li>• Local SEO optimization brought in new customers</li>
              </ul>
            </div>
            <div className={`p-8 rounded-xl ${
              theme === 'dark' ? 'bg-blue-900/20 border border-blue-800/30' : 'bg-blue-50 border border-blue-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-800'
              }`}>Key Insights</h3>
              <ul className={`space-y-3 ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              }`}>
                <li>• Restaurant customers value speed over complex features</li>
                <li>• Visual menu design impacts order values significantly</li>
                <li>• Integration with existing systems is critical</li>
                <li>• Staff training is as important as the technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-8 md:px-16 py-16 bg-gradient-to-br from-[#ff5500] to-[#ff7b00] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your restaurant?</h2>
          <p className="text-xl mb-8 text-orange-100">
            Let's create a digital solution that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?project=restaurant" 
              className="px-8 py-4 bg-white text-[#ff5500] rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start Your Project
            </Link>
            <Link 
              href="/work" 
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-semibold"
            >
              View More Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 