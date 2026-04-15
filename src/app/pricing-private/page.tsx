'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';
import PricingCalculator from '../components/PricingCalculator';
import QuoteModal from '../components/QuoteModal';
import { ArrowRight } from 'lucide-react';

export default function PricingPrivate() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToPricingCalculator = () => {
    document.getElementById('pricing-calculator')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const additionalServices = [
    {
      icon: '🔍',
      title: 'SEO Optimization',
      description: 'Comprehensive search engine optimization to improve your visibility and rankings.',
      features: ['Keyword research', 'On-page optimization', 'Technical SEO'],
      price: 'Starting at €298',
    },
    {
      icon: '📊',
      title: 'Search Engine Marketing',
      description: 'Strategic paid advertising campaigns to drive targeted traffic to your site.',
      features: ['Google Ads management', 'Conversion tracking', 'ROI optimization'],
      price: 'Starting at €398',
    },
    {
      icon: '✍️',
      title: 'Blog & Content Writing',
      description: 'Professional content creation to engage your audience and boost your SEO.',
      features: ['SEO-optimized articles', 'Industry-specific content', 'Regular publishing schedule'],
      price: '€60 per article',
    },
    {
      icon: '💡',
      title: 'Web Consultations',
      description: 'Expert guidance on web strategy, technology choices, and digital transformation.',
      features: ['Strategy planning', 'Technology audit', 'Performance optimization'],
      price: '€198 per hour',
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation currentPage="pricing" />

      {/* Hero */}
      <section className={`relative flex items-center justify-center overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-black via-gray-950 to-black' : 'bg-gradient-to-br from-white to-gray-50'
      }`} style={{ minHeight: 'calc(100svh)', paddingTop: '5rem', paddingBottom: '2rem' }}>

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full text-center space-y-8">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              Pricing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-3"
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="block">SIMPLE,</span>
              <span className="block text-[#ff5500]">TRANSPARENT</span>
              <span className={`block text-2xl md:text-3xl lg:text-4xl font-light mt-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                pricing that scales with you
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            From <span className="text-[#ff5500] font-semibold">one-page sites</span> to{' '}
            <span className="text-[#6366f1] font-semibold">full digital ecosystems</span> — clear packages, no surprises.
          </motion.p>

          {/* Service tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {['Web Design', 'SEO', 'Copywriting', 'Consultations', 'Automation'].map((service) => (
              <span
                key={service}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  isDark
                    ? 'bg-white/5 border-white/10 text-gray-300'
                    : 'bg-white/80 border-gray-200 text-gray-700'
                } backdrop-blur-sm`}
              >
                {service}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={scrollToPricingCalculator}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                View Pricing Plans
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { number: '20+', label: 'Projects Delivered' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '5★', label: 'Average Rating' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-4 rounded-2xl backdrop-blur-sm ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-gray-200/50'}`}
              >
                <div
                  className={`text-2xl md:text-3xl font-black mb-1 ${i === 1 ? 'text-[#6366f1]' : 'text-[#ff5500]'}`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  {stat.number}
                </div>
                <div className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Calculator */}
      <section
        id="pricing-calculator"
        className={`relative py-24 px-6 md:px-16 ${isDark ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              Pricing Calculator
            </span>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-black leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Build Your Perfect{' '}
              <span className="text-[#ff5500]">Package</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Customise your digital solution with our interactive pricing calculator
            </p>
          </motion.div>
          <PricingCalculator theme={theme} />
        </div>
      </section>

      {/* Additional Services */}
      <section className={`relative py-24 px-6 md:px-16 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-4"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              Additional Services
            </span>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-black leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Expand Your{' '}
              <span className="text-[#ff5500]">Digital Presence</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Take your business to the next level with our specialised services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                  isDark
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
                    : 'bg-white border border-gray-200/60'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff7800] text-2xl mb-6 shadow-lg">
                    {service.icon}
                  </div>
                  <h3
                    className={`text-xl font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
                    style={{ fontFamily: 'var(--font-league-spartan)' }}
                  >
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#ff5500]/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-[#ff5500] text-[10px]">✓</span>
                        </div>
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
                    <p className={`font-black text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      <span className="text-[#ff5500]">{service.price}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chatbot & Automation — wide card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative p-8 rounded-3xl transition-all duration-300 shadow-xl ${
              isDark
                ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
                : 'bg-white border border-gray-200/60'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#ff5500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col xl:flex-row xl:items-center gap-8">
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-2xl mb-6 shadow-lg">
                  🤖
                </div>
                <h3
                  className={`text-2xl font-black mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  Chatbot & Automation Solutions
                </h3>
                <p className={`mb-6 text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Enhance your website with intelligent chatbots and business automation tools that streamline operations and improve customer experience.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'AI-powered customer support chatbots',
                    'Lead generation and qualification bots',
                    'Workflow automation solutions',
                    'Custom integrations with your existing tools',
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#6366f1]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#6366f1] text-[10px]">✓</span>
                      </div>
                      <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="xl:w-72 xl:flex-shrink-0 flex flex-col gap-4">
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pricing varies based on complexity and specific requirements.
                </p>
                <Link
                  href="/contact?inquiry=automation"
                  className="group/btn relative inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-2xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#6366f1]/25"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Contact Sales
                    <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-2xl blur-xl opacity-30 group-hover/btn:opacity-50 transition-opacity duration-300" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className={`relative py-32 px-6 md:px-16 ${isDark ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
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
            Have a unique idea
            <br />
            <span className="text-[#ff5500]">or requirement?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            We love creative challenges. Let&apos;s build something{' '}
            <span className="text-[#6366f1] font-semibold">amazing together</span>.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link
              href="/contact?inquiry=custom"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Let&apos;s Discuss Your Idea
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </Link>

            <button
              onClick={() => setIsModalOpen(true)}
              className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                Get Custom Quote
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
