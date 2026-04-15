'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import Breadcrumb from '../../components/Breadcrumb';
import SEOContentSection from '../../components/sections/SEOContentSection';
import { useTheme } from '../../utils/ThemeProvider';
import Link from 'next/link';
import { 
  ChartBarIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  EnvelopeIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  GlobeAltIcon,
  EyeIcon,
  CursorArrowRaysIcon,
  LinkIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

export default function DigitalMarketing() {
  const { theme } = useTheme();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      id: 'seo-audits',
      title: 'SEO Optimization & Audits',
      description: 'Comprehensive SEO strategies to improve your search rankings, increase organic traffic, and enhance online visibility through technical optimization and content strategy.',
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      features: ['Keyword Research', 'Technical SEO', 'On-page Optimization', 'Content Strategy', 'Link Building', 'Performance Tracking'],
      deliverables: [
        'Complete SEO audit report',
        'Keyword research & strategy',
        'Technical optimization',
        'Content optimization',
        'Monthly performance reports',
        'Competitor analysis'
      ],
      results: ['300% avg traffic increase', '85% higher engagement', '50+ ranking keywords']
    },
    {
      id: 'content-strategy',
      title: 'Content Marketing & Strategy',
      description: 'Strategic content creation including blog writing, social media content, and copywriting that engages your audience and drives conversions.',
      icon: <DocumentTextIcon className="w-8 h-8" />,
      features: ['Blog Writing', 'Social Media Content', 'Email Copywriting', 'Content Calendar', 'SEO Content', 'Brand Messaging'],
      deliverables: [
        'Content strategy document',
        'Editorial calendar',
        'Blog posts & articles',
        'Social media content',
        'Email campaigns',
        'Performance analytics'
      ],
      results: ['200% more qualified leads', '150% engagement boost', '60% higher conversion rate']
    },
    {
      id: 'email-automation',
      title: 'Email Marketing & Automation',
      description: 'Targeted email campaigns with automation and personalization to nurture leads, retain customers, and drive repeat business.',
      icon: <EnvelopeIcon className="w-8 h-8" />,
      features: ['Email Automation', 'Segmentation', 'A/B Testing', 'Personalization', 'Analytics', 'CRM Integration'],
      deliverables: [
        'Email automation workflows',
        'Campaign templates',
        'Segmentation strategy',
        'A/B testing setup',
        'Performance dashboard',
        'ROI reporting'
      ],
      results: ['400% ROI average', '25% open rate improvement', '35% click-through increase']
    }
  ];

  const marketingTools = [
    { name: 'Google Analytics', icon: <ChartBarIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'SEMrush', icon: <MagnifyingGlassIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'Mailchimp', icon: <EnvelopeIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'HubSpot', icon: <ArrowTrendingUpIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'Ahrefs', icon: <LinkIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'Google Ads', icon: <CursorArrowRaysIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'Facebook Ads', icon: <DevicePhoneMobileIcon className="w-6 h-6 text-[#6366f1]" /> },
    { name: 'Hotjar', icon: <EyeIcon className="w-6 h-6 text-[#6366f1]" /> }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="services" />
      <Breadcrumb items={[
        { label: 'Services', href: '/services' },
        { label: 'Digital Marketing' }
      ]} />

      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-32 overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-gray-950 to-black' 
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#6366f1] rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/20">
                <ChartBarIcon className="w-5 h-5 text-[#6366f1]" />
                <span className="text-[#6366f1] font-semibold">Digital Marketing</span>
              </div>

              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                <span className="block">MARKETING THAT</span>
                <span className="block text-[#6366f1]">CONVERTS</span>
                <span className={`block text-2xl md:text-3xl font-light mt-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  & scales your business growth
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                From <span className="text-[#6366f1] font-semibold">SEO optimization</span> to 
                <span className="text-[#6366f1] font-semibold"> content strategy</span> – we create 
                data-driven marketing campaigns that deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-2xl hover:from-[#5b5ae0] hover:to-[#7c3aed] transition-all duration-300 text-lg font-bold shadow-2xl hover:shadow-[#6366f1]/25"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="flex items-center gap-3">
                    Start Your Campaign
                    <SparklesIcon className="w-5 h-5" />
                  </span>
                </motion.button>
                
                <Link 
                  href="/work"
                  className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                      : 'bg-white/80 hover:bg-white backdrop-blur-sm'
                  }`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="flex items-center gap-3">
                    View Case Studies
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Marketing Tools Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className={`relative rounded-3xl border-2 p-8 backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-white/5 border-gray-700/50' 
                  : 'bg-white/60 border-gray-200/50'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  Marketing Stack
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {marketingTools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        theme === 'dark' 
                          ? 'bg-gray-800/50 hover:bg-gray-800/80' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    >
                      <div className="text-2xl">{tool.icon}</div>
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>{tool.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating marketing icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#6366f1] rounded-full flex items-center justify-center"
                >
                  <ChartBarIcon className="w-6 h-6 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className={`py-32 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-20"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              <span className="text-[#6366f1]">Marketing Services</span>
              <br />That Drive Results
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Data-driven strategies that increase visibility, attract qualified leads, and grow your business.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center text-white shadow-lg">
                      {service.icon}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20 text-sm font-semibold">
                      Marketing Service
                    </div>
                  </div>
                  
                  <h3 className={`text-3xl md:text-4xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#6366f1]" />
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {service.results.map((result, idx) => (
                      <div key={idx} className={`text-center p-3 rounded-xl ${
                        theme === 'dark' ? 'bg-gray-900/30' : 'bg-[#6366f1]/5'
                      }`}>
                        <div className="text-lg font-black text-[#6366f1]" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                          {result.split(' ')[0]}
                        </div>
                        <div className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {result.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`relative p-8 rounded-3xl ${
                    theme === 'dark' 
                      ? 'bg-gray-900/30 border border-gray-800/50' 
                      : 'bg-white/50 border border-gray-200/50'
                  } backdrop-blur-sm`}>
                    <h4 className={`text-xl font-bold mb-6 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      What You Get:
                    </h4>
                    <div className="space-y-3">
                      {service.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-[#6366f1]/20 flex items-center justify-center">
                            <CheckCircleIcon className="w-4 h-4 text-[#6366f1]" />
                          </div>
                          <span className={`${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                          }`}>
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`py-32 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-20"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Why Choose <span className="text-[#6366f1]">Site & Sight</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We don't just run campaigns – we create marketing strategies that deliver real business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ArrowTrendingUpIcon className="w-8 h-8 text-[#6366f1]" />,
                title: 'Data-Driven Results',
                description: 'Every strategy is backed by analytics and optimized for maximum ROI.',
                stats: '300% avg growth'
              },
              {
                icon: <UserGroupIcon className="w-8 h-8 text-[#6366f1]" />,
                title: 'Targeted Audiences',
                description: 'Precision targeting to reach your ideal customers at the right time.',
                stats: '85% better targeting'
              },
              {
                icon: <EyeIcon className="w-8 h-8 text-[#6366f1]" />,
                title: 'Full Transparency',
                description: 'Monthly reports with clear metrics and actionable insights.',
                stats: '100% transparency'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`text-center p-8 rounded-3xl ${
                  theme === 'dark' 
                    ? 'bg-gray-900/30 hover:bg-gray-900/50' 
                    : 'bg-gray-50/50 hover:bg-gray-50/80'
                } transition-all duration-300 group`}
              >
                <div className="mb-6">
                  {benefit.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  {benefit.title}
                </h3>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {benefit.description}
                </p>
                <div className="text-2xl font-black text-[#6366f1]" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  {benefit.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <div className={theme === 'dark' ? '[&_section]:!bg-gradient-to-br [&_section]:!from-gray-950 [&_section]:!to-black' : ''}>
        <SEOContentSection />
      </div>

      {/* CTA Section */}
      <section className={`py-32 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-950 to-black' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          <div className="space-y-6">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Ready to grow your
              <br />
              <span className="text-[#6366f1]">online presence</span>?
            </h2>

            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let's create a marketing strategy that drives traffic, generates leads, and scales your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <motion.button 
              onClick={() => setIsQuoteModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white rounded-2xl hover:from-[#5b5ae0] hover:to-[#7c3aed] transition-all duration-300 text-xl font-bold shadow-2xl hover:shadow-[#6366f1]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                Get Your Strategy
                <SparklesIcon className="w-6 h-6" />
              </span>
            </motion.button>
            
            <Link 
              href="/services"
              className={`px-12 py-6 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-xl font-bold transform hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                  : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                All Services
                <ArrowRightIcon className="w-6 h-6" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Quote Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />
    </div>
  );
}