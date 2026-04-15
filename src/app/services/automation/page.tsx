'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import QuoteModal from '../../components/QuoteModal';
import SEOContentSection from '../../components/sections/SEOContentSection';
import { useTheme } from '../../utils/ThemeProvider';
import Link from 'next/link';
import { 
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentListIcon,
  BoltIcon,
  LinkIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  ClockIcon,
  CogIcon,
  CircleStackIcon,
  CloudIcon,
  CodeBracketIcon,
  ServerIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

export default function Automation() {
  const { theme } = useTheme();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const services = [
    {
      id: 'ai-chatbots',
      title: 'AI Chatbots & Implementation',
      description: 'Intelligent chatbots for 24/7 customer support, lead generation, and appointment booking that provide seamless user experiences and reduce operational costs.',
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      features: ['24/7 Customer Support', 'Lead Generation', 'Appointment Booking', 'Multi-language Support', 'CRM Integration', 'Analytics Dashboard'],
      deliverables: [
        'Custom AI chatbot development',
        'Natural language processing setup',
        'Integration with existing systems',
        'Training data optimization',
        'Performance analytics dashboard',
        'Ongoing support & optimization'
      ],
      results: ['80% reduction in response time', '300% more qualified leads', '24/7 availability']
    },
    {
      id: 'data-pipelines',
      title: 'Data Pipelines & Analytics',
      description: 'Custom data pipelines to collect, process, and analyze your business data for actionable insights and automated decision-making.',
      icon: <CircleStackIcon className="w-8 h-8" />,
      features: ['Data Collection', 'Real-time Processing', 'Custom Analytics', 'Automated Reports', 'Predictive Insights', 'Data Visualization'],
      deliverables: [
        'Custom data pipeline architecture',
        'Real-time data processing setup',
        'Analytics dashboard',
        'Automated reporting system',
        'Data visualization tools',
        'Performance monitoring'
      ],
      results: ['90% faster data processing', '60% better decision making', 'Real-time insights']
    },
    {
      id: 'web-integrations',
      title: 'Web Integrations',
      description: 'Connect CRMs, email services, payment systems, and other business tools to create seamless workflows and eliminate manual data entry.',
      icon: <LinkIcon className="w-8 h-8" />,
      features: ['CRM Integration', 'Email Service Connections', 'Payment Processing', 'API Development', 'Data Synchronization', 'Error Handling'],
      deliverables: [
        'System integration planning',
        'API connections & webhooks',
        'Data mapping & synchronization',
        'Custom middleware development',
        'Testing & quality assurance',
        'Documentation & training'
      ],
      results: ['50% time savings', '95% data accuracy', 'Seamless workflows']
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and optimize business processes to increase efficiency, reduce errors, and free up your team for strategic work.',
      icon: <BoltIcon className="w-8 h-8" />,
      features: ['Task Automation', 'Process Optimization', 'Workflow Design', 'Error Reduction', 'Scalability', 'Performance Monitoring'],
      deliverables: [
        'Process analysis & mapping',
        'Automation workflow design',
        'Custom automation scripts',
        'Testing & optimization',
        'Training & documentation',
        'Performance monitoring setup'
      ],
      results: ['70% efficiency increase', '90% error reduction', '40% cost savings']
    }
  ];

  const automationTools = [
    { name: 'Zapier', icon: <BoltIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Make.com', icon: <CogIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'OpenAI', icon: <CpuChipIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'HubSpot', icon: <ChartBarIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Salesforce', icon: <CloudIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Python', icon: <CodeBracketIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'Node.js', icon: <ServerIcon className="w-6 h-6 text-[#ff5500]" /> },
    { name: 'PostgreSQL', icon: <CircleStackIcon className="w-6 h-6 text-[#ff5500]" /> }
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
                <CpuChipIcon className="w-5 h-5 text-[#ff5500]" />
                <span className="text-[#ff5500] font-semibold">Automation & AI Solutions</span>
              </div>

              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                <span className="block">AUTOMATION THAT</span>
                <span className="block text-[#ff5500]">SCALES</span>
                <span className={`block text-2xl md:text-3xl font-light mt-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  & transforms your operations
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                From <span className="text-[#ff5500] font-semibold">AI chatbots</span> to 
                <span className="text-[#ff5500] font-semibold"> data pipelines</span> – we build 
                intelligent automation that saves time, reduces costs, and scales your business.
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
                    Automate Your Business
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
                    View Automation Examples
                    <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Automation Tools Visual */}
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
                  Automation Stack
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {automationTools.map((tool, index) => (
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

                {/* Floating automation icon */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-[#ff5500] rounded-full flex items-center justify-center"
                >
                  <CpuChipIcon className="w-6 h-6 text-white" />
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
              <span className="text-[#ff5500]">AI & Automation</span>
              <br />Solutions That Work
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Smart solutions that eliminate manual work, reduce errors, and scale your operations automatically.
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
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff7800] flex items-center justify-center text-white shadow-lg">
                      {service.icon}
                    </div>
                    <div className="inline-block px-3 py-1 rounded-full bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20 text-sm font-semibold">
                      Automation Service
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
                        <CheckCircleIcon className="w-4 h-4 text-[#ff5500]" />
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
                        theme === 'dark' ? 'bg-gray-900/30' : 'bg-[#ff5500]/5'
                      }`}>
                        <div className="text-lg font-black text-[#ff5500]" style={{ fontFamily: 'var(--font-league-spartan)' }}>
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
                          <div className="w-6 h-6 rounded-full bg-[#ff5500]/20 flex items-center justify-center">
                            <CheckCircleIcon className="w-4 h-4 text-[#ff5500]" />
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
              Why Choose <span className="text-[#ff5500]">Site & Sight</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We don't just automate processes – we transform how your business operates for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <RocketLaunchIcon className="w-8 h-8 text-[#ff5500]" />,
                title: 'Rapid Implementation',
                description: 'Quick deployment with minimal disruption to your existing workflows.',
                stats: '2-4 week setup'
              },
              {
                icon: <CogIcon className="w-8 h-8 text-[#ff5500]" />,
                title: 'Custom Solutions',
                description: 'Tailored automation that fits your specific business requirements.',
                stats: '100% customized'
              },
              {
                icon: <ClockIcon className="w-8 h-8 text-[#ff5500]" />,
                title: 'Ongoing Support',
                description: '24/7 monitoring and support to ensure your automation runs smoothly.',
                stats: '24/7 monitoring'
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
              Ready to automate
              <br />
              <span className="text-[#ff5500]">your success</span>?
            </h2>

            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Let's build intelligent automation that saves time, reduces costs, and scales your operations.
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
                Automate Now
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