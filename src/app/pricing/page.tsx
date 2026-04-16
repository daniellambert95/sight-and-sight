'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useTheme } from '../utils/ThemeProvider';
import {
  BoltIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { ArrowRight } from 'lucide-react';

export default function Pricing() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const pricingFactors = [
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
      title: "Design Complexity",
      description: "Custom designs tailored to your brand identity and user experience goals"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-white" />,
      title: "Features & Functionality",
      description: "E-commerce, CMS, integrations, and custom features built to your specifications"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      title: "Project Scope",
      description: "Number of pages, content volume, and overall project size"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
      title: "Timeline & Support",
      description: "Launch timeline and ongoing maintenance requirements"
    }
  ];

  const features = [
    {
      icon: <BoltIcon className="w-8 h-8 text-white" />,
      title: "Lightning Fast",
      description: "Optimized performance and blazing fast load times guaranteed"
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
      title: "Custom Design",
      description: "Tailored specifically to your brand and vision"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      title: "Mobile First",
      description: "Optimized for every device imaginable"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
      title: "Performance",
      description: "Built for speed and scalability"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-white" />,
      title: "Maintenance",
      description: "Ongoing support and updates included"
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-white" />,
      title: "Premium Quality",
      description: "Award-winning designs that convert"
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-white" />,
      title: "SEO Optimized",
      description: "Built-in search engine optimization to boost visibility"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      title: "Analytics Ready",
      description: "Comprehensive tracking and insights included"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Tell Us About Your Project",
      description: "Share your vision, goals, and requirements through our simple quote form"
    },
    {
      step: "02",
      title: "We Analyse Your Needs",
      description: "Our team reviews your project and prepares a detailed proposal"
    },
    {
      step: "03",
      title: "Receive Your Custom Quote",
      description: "Get a transparent, itemized quote tailored to your specific needs"
    },
    {
      step: "04",
      title: "Kick Off Your Project",
      description: "Once approved, we begin bringing your vision to life"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation currentPage="pricing" />

      {/* Hero */}
      <section className={`relative flex items-center justify-center overflow-hidden pt-28 md:pt-20 pb-8 ${
        isDark ? 'bg-gradient-to-br from-black via-gray-950 to-black' : 'bg-gradient-to-br from-white to-gray-50'
      }`} style={{ minHeight: 'calc(100svh)' }}>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ff5500] rounded-full opacity-20"
              style={{ left: `${(i * 17 + 5) % 100}%`, top: `${(i * 13 + 10) % 100}%` }}
              animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: (i % 4) + 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left — heading + CTAs */}
            <div className="space-y-8">
              

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className={`text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <span className="block">FLEXIBLE</span>
                <span className="block text-[#ff5500]">PRICING</span>
                <span className={`block text-2xl md:text-3xl font-light mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  tailored to your needs
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-xl md:text-2xl font-light max-w-2xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                Every project is unique. We create <span className="text-[#ff5500] font-semibold">custom proposals</span> based on your specific needs, goals, and budget — with complete{' '}
                <span className="text-[#6366f1] font-semibold">transparency</span> and no hidden fees.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Get Your Custom Quote
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                </button>

                <Link
                  href="/work"
                  className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg text-center ${
                    isDark ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' : 'bg-white/80 hover:bg-white backdrop-blur-sm'
                  }`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="flex items-center justify-center gap-3">
                    View Our Work
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right — Why Custom Pricing card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className={`p-8 rounded-3xl shadow-xl ${
                isDark
                  ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
                  : 'bg-white border border-gray-200/60'
              } backdrop-blur-sm`}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff7800] flex items-center justify-center shadow-lg">
                  <CurrencyDollarIcon className="w-8 h-8 text-white" />
                </div>

                <h3
                  className={`text-2xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  Why Custom Pricing?
                </h3>

                <div className="space-y-4">
                  {[
                    "Pay only for what you need — no unnecessary features or costs",
                    "Flexible solutions that scale with your business",
                    "Transparent breakdown of all costs and deliverables",
                    "Fair pricing based on project scope and complexity"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 flex-shrink-0 text-[#ff5500] mt-0.5" />
                      <span className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Affects Your Quote */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 space-y-4"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              What We Consider
            </span>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              What Affects <span className="text-[#ff5500]">Your Quote</span>
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We consider several factors to create a fair and accurate proposal for your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {pricingFactors.map((factor, index) => (
              <div
                key={index}
                className={`group relative ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
                    : 'bg-white border border-gray-200/60'
                } rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff7800] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {factor.icon}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black mb-3 group-hover:text-[#ff5500] transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}>
                      {factor.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {factor.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-[#6366f1]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 space-y-4"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              Our Process
            </span>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              How It <span className="text-[#ff5500]">Works</span>
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Our simple process to get you a custom quote
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className={`relative ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
                    : 'bg-white border border-gray-200/60'
                } rounded-3xl p-8 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className={`text-5xl font-black ${isDark ? 'text-white/10' : 'text-gray-100'}`}
                    style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    {item.step}
                  </div>
                  <div>
                    <h3 className={`text-xl font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}>
                      {item.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Quote Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Always Included */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20 space-y-4"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              Standard Features
            </span>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-black ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Always <span className="text-[#ff5500]">Included</span>
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Every project comes with these premium features as standard
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
                    : 'bg-white border border-gray-200/60'
                } rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff7800] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-black mb-3 group-hover:text-[#ff5500] transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}>
                      {feature.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-[#6366f1]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#ff5500] rounded-full opacity-20"
              style={{ left: `${(i * 23 + 8) % 100}%`, top: `${(i * 19 + 15) % 100}%` }}
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center space-y-10 relative z-10"
        >
          <h2
            className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Ready for your
            <br />
            <span className="text-[#ff5500]">custom quote?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Tell us about your project and we&apos;ll create a detailed proposal tailored to your needs and{' '}
            <span className="text-[#6366f1] font-semibold">budget</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button
              onClick={() => setShowQuoteModal(true)}
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Your Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </button>

            <Link
              href="/work"
              className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                View Our Work
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      <QuoteModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />
      <Footer />
    </div>
  );
}
