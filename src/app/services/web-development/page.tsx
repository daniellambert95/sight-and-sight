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
  CodeBracketIcon,
  ComputerDesktopIcon,
  ShoppingCartIcon,
  CogIcon,
  RocketLaunchIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  BoltIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  ServerIcon,
  CircleStackIcon,
  CloudArrowUpIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function WebDevelopment() {
  const { theme } = useTheme();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      id: 'website',
      title: 'Custom Website Development',
      description: 'Modern, responsive websites built with React, Next.js and the latest web technologies for optimal performance and user experience.',
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
      features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO Foundation', 'CMS Integration', 'Analytics Setup'],
      deliverables: [
        'Fully responsive website',
        'Custom design & branding',
        'Content management system',
        'SEO optimization',
        'Performance optimization',
        'Mobile-first approach'
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment processing, inventory management, and customer-friendly interfaces.',
      icon: <ShoppingCartIcon className="w-8 h-8" />,
      features: ['Payment Integration', 'Inventory Management', 'Mobile Commerce', 'Analytics Dashboard', 'Customer Accounts', 'Order Management'],
      deliverables: [
        'Complete online store',
        'Payment gateway integration',
        'Inventory management system',
        'Customer account portal',
        'Order tracking system',
        'Admin dashboard'
      ]
    },
    {
      id: 'webapp',
      title: 'Web Applications',
      description: 'Custom web applications tailored to your business needs with user authentication, database integration, and scalable architecture.',
      icon: <CogIcon className="w-8 h-8" />,
      features: ['User Authentication', 'Database Integration', 'API Development', 'Scalable Architecture', 'Real-time Features', 'Third-party Integrations'],
      deliverables: [
        'Custom web application',
        'User authentication system',
        'Database design & setup',
        'API development',
        'Admin panel',
        'Documentation'
      ]
    },
    {
      id: 'hosting',
      title: 'Hosting & Deployment',
      description: 'Reliable hosting solutions with 99.9% uptime guarantee, SSL certificates, and ongoing maintenance.',
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      features: ['99.9% Uptime', 'SSL Certificates', 'Regular Backups', 'Performance Monitoring', 'Security Updates', '24/7 Support'],
      deliverables: [
        'Production deployment',
        'SSL certificate setup',
        'Automated backups',
        'Monitoring dashboard',
        'Security configuration',
        'Maintenance schedule'
      ]
    }
  ];

  const techStack = [
    { name: 'React', icon: <CodeBracketIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Next.js', icon: <RocketLaunchIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'TypeScript', icon: <DocumentTextIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Tailwind CSS', icon: <PaintBrushIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Node.js', icon: <ServerIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'PostgreSQL', icon: <CircleStackIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Vercel', icon: <CloudArrowUpIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'AWS', icon: <CloudIcon className="w-6 h-6 text-[#ff5500]" /> }
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
        { label: 'Web Development & Design' }
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
              className="absolute w-1 h-1 bg-[#ff5500] rounded-full opacity-40"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff5500]/10 border border-[#ff5500]/20">
                <CodeBracketIcon className="w-5 h-5 text-[#ff5500]" />
                <span className="text-[#ff5500] font-semibold">Web Development & Design</span>
              </div>

              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                <span className="block">WEBSITES THAT</span>
                <span className="block text-[#ff5500]">PERFORM</span>
                <span className={`block text-2xl md:text-3xl font-light mt-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  & convert visitors into customers
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We build <span className="text-[#ff5500] font-semibold">lightning-fast</span>, 
                <span className="text-[#ff5500] font-semibold"> pixel-perfect websites</span> using 
                the latest technologies that scale with your business growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <motion.button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold shadow-2xl hover:shadow-[#ff5500]/25"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="flex items-center gap-3">
                    Start Your Project
                    <SparklesIcon className="w-5 h-5" />
                  </span>
                </motion.button>
                
                <Link 
                  href="/work"
                  className={`group px-8 py-4 border-2 border-[#ff5500] rounded-2xl text-[#ff5500] transition-all duration-300 text-lg font-bold transform hover:scale-105 ${
                    theme === 'dark' 
                      ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                      : 'bg-white/80 hover:bg-white backdrop-blur-sm'
                  }`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span className="flex items-center gap-3">
                    View Portfolio
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Tech Stack Visual */}
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
                  Modern Tech Stack
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        theme === 'dark' 
                          ? 'bg-gray-800/50 hover:bg-gray-800/80' 
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                    >
                      <div className="text-2xl">{tech.icon}</div>
                      <span className={`font-medium ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Floating tech icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff5500] rounded-full flex items-center justify-center"
                >
                  <CodeBracketIcon className="w-6 h-6 text-white" />
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
              Complete <span className="text-[#ff5500]">Web Solutions</span>
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              From simple landing pages to complex web applications, we deliver solutions that grow with your business.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`p-8 rounded-3xl border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-gray-900/50 border-gray-800/50 hover:border-[#ff5500]/30' 
                    : 'bg-white/60 border-gray-200/50 hover:border-[#ff5500]/30'
                } backdrop-blur-sm hover:shadow-2xl group`}
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff7800] flex items-center justify-center text-white shadow-lg">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-2 group-hover:text-[#ff5500] transition-colors ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                        {service.title}
                      </h3>
                      <p className={`text-lg leading-relaxed ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircleIcon className="w-4 h-4 text-[#ff5500]" />
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
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
              Why Choose <span className="text-[#ff5500]">Site & Sight</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We don't just build websites – we create digital experiences that drive real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BoltIcon className="w-8 h-8 text-[#ff5500]" />,
                title: 'Lightning Fast',
                description: 'Optimized for speed with 90+ PageSpeed scores and sub-2s load times.',
                stats: '< 2s load time'
              },
              {
                icon: <DevicePhoneMobileIcon className="w-8 h-8 text-[#ff5500]" />,
                title: 'Mobile-First Design',
                description: 'Responsive designs that look perfect on every device and screen size.',
                stats: '100% responsive'
              },
              {
                icon: <ShieldCheckIcon className="w-8 h-8 text-[#ff5500]" />,
                title: 'Secure & Reliable',
                description: 'Bank-level security with SSL, automated backups, and 99.9% uptime.',
                stats: '99.9% uptime'
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
                <div className="text-2xl font-black text-[#ff5500]" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  {benefit.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section - Customized for Web Development */}
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
              Ready to build your
              <br />
              <span className="text-[#ff5500]">dream website</span>?
            </h2>

            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let's create a digital experience that converts visitors into customers and grows your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <motion.button 
              onClick={() => setIsQuoteModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-xl font-bold shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                Get Your Quote
                <SparklesIcon className="w-6 h-6" />
              </span>
            </motion.button>
            
            <Link 
              href="/services"
              className={`px-12 py-6 border-2 border-[#ff5500] rounded-2xl text-[#ff5500] transition-all duration-300 text-xl font-bold transform hover:scale-105 ${
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