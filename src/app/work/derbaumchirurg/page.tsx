'use client';

import Image from "next/image";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { useTheme } from "../../utils/ThemeProvider";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Safari } from "@/components/magicui/safari";

export default function DerBaumchirurgCaseStudy() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <Navigation currentPage="work" />

      {/* Hero Section - Modern Clean Design */}
      <section className={`relative min-h-screen flex items-center transition-colors duration-300 pt-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 to-black' 
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20">
                  <div className="w-2 h-2 bg-[#ff5500] rounded-full animate-pulse"></div>
                  <span className="text-[#ff5500] text-sm font-medium">Case Study</span>
                </div>
                
                <h1 className={`text-6xl md:text-7xl font-black leading-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Der<br/>
                  <span className="text-[#ff5500]">Baumchirurg</span>
                </h1>
                
                <p className={`text-2xl font-light leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Berlin's premier tree surgery service gets their first client 
                  <span className="font-bold text-[#ff5500]"> within 24 hours</span> of going live
                </p>
              </div>

              {/* Stats Cards - Redesigned */}
              <div className="grid grid-cols-2 gap-6">
                <div className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
                  theme === 'dark' 
                    ? 'bg-gray-800/40 border-gray-700/50' 
                    : 'bg-white/60 border-gray-200/50'
                }`}>
                  <div className="text-3xl font-bold text-[#ff5500] mb-1">24hrs</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    First Client Contact
                  </div>
                </div>
                
                <div className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
                  theme === 'dark' 
                    ? 'bg-gray-800/40 border-gray-700/50' 
                    : 'bg-white/60 border-gray-200/50'
                }`}>
                  <div className="text-3xl font-bold text-orange-500 mb-1">4.9★</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Customer Rating
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://www.baumpflegeberlin-brandenburg.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`px-8 py-4 font-semibold rounded-xl border-2 transition-all duration-300 ${
                    theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  View Our Work →
                </a>
                <button className="px-8 py-4 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Start Project +
                </button>
              </div>
            </div>

            {/* Right Column - Compact Mobile Display */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-auto rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/work/derbaumchirurg/mobileview.webp" 
                    alt="Der Baumchirurg Mobile Website"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-[#ff5500] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Mobile Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid - Modern Icons */}
      <section className={`px-8 md:px-16 py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>What We Built</h2>
            <p className={`text-xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>Complete digital solution for immediate impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Design */}
            <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Custom Brand Design</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Logo design, color scheme, and custom arborist icons created specifically for Der Baumchirurg</p>
            </div>

            {/* WhatsApp Integration */}
            <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>WhatsApp Integration</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Direct contact through WhatsApp for instant customer communication and booking inquiries</p>
            </div>

            {/* Animated Scroll */}
            <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Custom Animations</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Smooth animated scroll effects and interactive elements for enhanced user experience</p>
            </div>

            {/* SEO & Analytics */}
            <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl">📈</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>SEO & Analytics</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Google Analytics setup, SEO optimization, and Google Ads campaigns for immediate visibility</p>
            </div>

            {/* Blog System */}
            <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl">📝</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>SEO-Optimized Blog</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Content management system with SEO-optimized blog posts about tree care and services</p>
            </div>

            {/* Contact Forms */}
            <div className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-white text-2xl">📧</span>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Smart Contact System</h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Contact forms with instant email notifications and automated response system</p>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Showcase - Clean */}
      <section className={`px-8 md:px-16 py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className={`text-4xl font-bold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Professional Web Presence</h3>
              
              <p className={`text-xl leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A complete digital transformation that positions Der Baumchirurg as Berlin's go-to tree surgery experts.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}>
                  <div className="text-2xl font-bold text-[#ff5500] mb-1">2000+</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Trees Maintained
                  </div>
                </div>
                <div className={`p-4 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'
                }`}>
                  <div className="text-2xl font-bold text-[#ff5500] mb-1">240+</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Happy Clients
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/images/work/derbaumchirurg/webview.webp" 
                alt="Der Baumchirurg Desktop Website"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-[#ff5500] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Live Site
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial - Minimal */}
      <section className={`px-8 md:px-16 py-20 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className={`text-3xl font-light leading-relaxed mb-8 ${
            theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
          }`}>
            "Within 24 hours of our website going live, we received our first client inquiry. The professional design and easy contact options have transformed how customers find and reach us."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">JM</span>
            </div>
            <div className="text-left">
              <p className={`font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>James Carter</p>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>Owner, Der Baumchirurg</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Modern */}
      <section className="px-8 md:px-16 py-20 bg-gradient-to-r from-[#ff5500] to-[#ff6600] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for your success story?</h2>
          <p className="text-xl mb-10 text-orange-100">
            Let's create a digital solution that gets you clients within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact?project=website" 
              className="px-10 py-4 bg-white text-[#ff5500] rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg"
            >
              Start Your Project
            </Link>
            <Link 
              href="/work" 
              className="px-10 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-all duration-300 font-semibold"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 