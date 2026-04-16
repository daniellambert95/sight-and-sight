'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '../utils/ThemeProvider';
import QuoteModal from '../components/QuoteModal';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  CpuChipIcon,
  ComputerDesktopIcon,
  ShoppingCartIcon,
  RocketLaunchIcon,
  CogIcon,
  MagnifyingGlassIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  LinkIcon,
  CircleStackIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

export default function Services() {
  const { theme } = useTheme();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Updated service categories based on new structure
  const serviceCategories = [
    {
      id: "web-development",
      category: "Web Development & Design",
      slug: "web-development",
      color: "orange",
      icon: <CodeBracketIcon className="w-12 h-12" />,
      description: "Custom websites and applications built with cutting-edge technology for optimal performance and user experience",
      services: [
        {
          title: "Custom Website Development",
          description: "Modern, responsive websites built with React, Next.js and the latest web technologies.",
          icon: <ComputerDesktopIcon className="w-6 h-6" />,
        },
        {
          title: "E-commerce Solutions",
          description: "Complete online stores with secure payment processing and inventory management.",
          icon: <ShoppingCartIcon className="w-6 h-6" />,
        },
        {
          title: "Web Applications",
          description: "Custom web apps with user authentication, database integration, and scalable architecture.",
          icon: <CogIcon className="w-6 h-6" />,
        },
        {
          title: "Hosting & Deployment",
          description: "Reliable hosting solutions with 99.9% uptime, SSL certificates, and ongoing maintenance.",
          icon: <RocketLaunchIcon className="w-6 h-6" />,
        }
      ]
    },
    {
      id: "digital-marketing",
      category: "Digital Marketing",
      slug: "digital-marketing",
      color: "purple",
      icon: <ChartBarIcon className="w-12 h-12" />,
      description: "Data-driven strategies to boost your online visibility, drive qualified traffic, and convert visitors into customers",
      services: [
        {
          title: "SEO Optimization & Audits",
          description: "Comprehensive SEO strategies to improve search rankings and increase organic traffic.",
          icon: <MagnifyingGlassIcon className="w-6 h-6" />,
        },
        {
          title: "Content Marketing & Strategy",
          description: "Strategic content creation including blog writing and social media that drives conversions.",
          icon: <DocumentTextIcon className="w-6 h-6" />,
        },
        {
          title: "Email Marketing & Automation",
          description: "Targeted email campaigns with automation and personalization to nurture leads.",
          icon: <EnvelopeIcon className="w-6 h-6" />,
        }
      ]
    },
    {
      id: "automation",
      category: "Automation & AI Solutions",
      slug: "automation",
      color: "orange",
      icon: <CpuChipIcon className="w-12 h-12" />,
      description: "Smart solutions that streamline your business processes, integrate systems, and enhance customer experience with AI",
      services: [
        {
          title: "AI Chatbots & Implementation",
          description: "Intelligent chatbots for 24/7 customer support, lead generation, and appointment booking.",
          icon: <ChatBubbleLeftRightIcon className="w-6 h-6" />,
        },
        {
          title: "Data Pipelines & Analytics",
          description: "Custom data pipelines to collect, process, and analyze your business data for insights.",
          icon: <CircleStackIcon className="w-6 h-6" />,
        },
        {
          title: "Web Integrations",
          description: "Connect CRMs, email services, payment systems, and other tools to streamline workflows.",
          icon: <LinkIcon className="w-6 h-6" />,
        },
        {
          title: "Workflow Automation",
          description: "Automate repetitive tasks and optimize business processes to increase efficiency.",
          icon: <BoltIcon className="w-6 h-6" />,
        }
      ]
    }
  ];



  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="services" />
      
      {/* Hero Section - Homepage Quality */}
      <section className={`relative flex items-center justify-center px-6 md:px-12 lg:px-24 pt-28 md:pt-20 pb-8 transition-colors duration-300 overflow-hidden ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-950 to-black'
          : 'bg-gradient-to-br from-white to-gray-50'
      }`} style={{ minHeight: 'calc(100svh)' }}>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ff5500] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: Math.random() * 4 + 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="text-center space-y-8">
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                <span className="block">DIGITAL</span>
                <span className="block text-[#ff5500]">SOLUTIONS</span>
                <span className={`block text-2xl md:text-3xl lg:text-4xl font-light mt-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  that scale & convert
                </span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-xl md:text-2xl font-light max-w-4xl mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                From <span className="text-[#ff5500] font-semibold">pixel-perfect websites</span> to 
                <span className="text-[#6366f1] font-semibold"> intelligent automation</span> – 
                we build digital experiences that drive real business results.
              </motion.p>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="group relative px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Project
                  <SparklesIcon className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
              
              <Link 
                href="#services" 
                className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                    : 'bg-white/80 hover:bg-white backdrop-blur-sm'
                }`}
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <span className="flex items-center gap-3">
                  Explore Services
                  <ArrowRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>

            {/* Enhanced Statistics */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-4"
            >
              {[
                { number: "3", label: "Core Specializations", sublabel: "Web • Marketing • AI" },
                { number: "20+", label: "Projects Delivered", sublabel: "Across multiple industries" },
                { number: "24/7", label: "Support & Maintenance", sublabel: "Always here when you need us" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className={`text-center p-4 rounded-2xl backdrop-blur-sm ${
                    theme === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-gray-200/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`text-2xl md:text-3xl font-black mb-1 ${
                    index === 0 ? 'text-[#ff5500]' : index === 1 ? 'text-[#6366f1]' : 'text-[#ff5500]'
                  }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    {stat.number}
                  </div>
                  <div className={`text-sm font-semibold mb-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {stat.label}
                  </div>
                  <div className={`text-xs ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {stat.sublabel}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-none ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our
                <br />
                <span className="text-[#ff5500]">Approach</span>
              </h2>
              
              <p className={`text-lg md:text-xl font-light leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We believe in creating digital solutions that are not just visually powerful, 
                but functionally effective. Our collaborative, research-driven approach ensures 
                every project delivers exceptional results.
              </p>
            </div>
            
            {/* Right Column - Service Areas Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {[
                  {
                    title: "Discovery",
                    description: "Understanding your brand, audience, and goals to create a strong foundation.",
                    number: "01"
                  },
                  {
                    title: "Strategy & Design",
                    description: "Translating insights into striking visuals and cohesive brand identities.",
                    number: "02"
                  },
                  {
                    title: "Execution",
                    description: "Bringing designs to life with seamless digital experiences and high-performance builds.",
                    number: "03"
                  },
                  {
                    title: "Iteration & Refinement",
                    description: "Ensuring every project is fine-tuned for maximum impact and performance.",
                    number: "04"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-800"
                  >
                    <div className="text-4xl md:text-5xl font-black" style={{ color: 'rgba(255, 85, 0, 0.7)' }}>
                      {item.number}
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-lg font-light leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section id="services" className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-20"
          >
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              <span className="text-[#ff5500]">Services</span> That
              <br />Scale Your Business
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              From concept to conversion, we provide end-to-end digital solutions 
              that grow with your ambitions.
            </p>
          </motion.div>
          
          {/* Service Categories Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                whileHover={{ y: -10 }}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/50' 
                    : 'bg-white/80 border border-gray-200/50'
                } backdrop-blur-sm shadow-2xl hover:shadow-3xl`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                  category.color === 'orange' ? 'bg-gradient-to-br from-[#ff5500] to-[#ff7800]' : 'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6]'
                }`} />
                
                <div className="relative z-10 space-y-8">
                  {/* Icon & Badge */}
                  <div className="space-y-4">
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl shadow-lg ${
                      category.color === 'orange' 
                        ? 'bg-gradient-to-br from-[#ff5500] to-[#ff7800] text-white' 
                        : 'bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] text-white'
                    }`}>
                      {category.icon}
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      category.color === 'orange'
                        ? 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
                        : 'bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/20'
                    }`}>
                      {category.services.length} Services
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className={`text-2xl md:text-3xl font-black ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                      {category.category}
                    </h3>
                    
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                  
                  {/* Service List */}
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          category.color === 'orange'
                            ? 'bg-[#ff5500]/10 text-[#ff5500]'
                            : 'bg-[#6366f1]/10 text-[#6366f1]'
                        }`}>
                          {service.icon}
                        </div>
                        <span className={`font-medium ${
                          theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                          {service.title}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA */}
                  <div className="pt-4">
                    <Link 
                      href={`/services/${category.slug}`}
                      className={`group/link inline-flex items-center gap-2 text-lg font-bold transition-all duration-300 ${
                        category.color === 'orange'
                          ? 'text-[#ff5500] hover:text-[#ff6600]'
                          : 'text-[#6366f1] hover:text-[#7c3aed]'
                      }`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 ${
            theme === 'dark' 
              ? 'bg-[radial-gradient(circle_at_50%_50%,#ff5500_1px,transparent_1px)]' 
              : 'bg-[radial-gradient(circle_at_50%_50%,#ff5500_1px,transparent_1px)]'
          } bg-[length:50px_50px]`} />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center space-y-12 relative z-10"
        >
          <div className="space-y-8">
            <h2 className={`text-5xl md:text-6xl lg:text-8xl font-black leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Ready to build
              <br />
              something <span className="text-[#ff5500]">extraordinary</span>?
            </h2>

            <p className={`text-xl md:text-2xl font-light max-w-4xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              From initial concept to final launch, we're your strategic partner 
              in creating digital experiences that drive real business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <motion.button 
              onClick={() => setIsQuoteModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-xl font-bold shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Your Quote
                <SparklesIcon className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </motion.button>
            
            <Link 
              href="/work"
              className={`group inline-flex items-center justify-center px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-white transform hover:scale-105 shadow-xl ${
                theme === 'dark' 
                  ? 'bg-white/5 backdrop-blur-sm' 
                  : 'bg-white/80 backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                View Our Work
                <ArrowRightIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto"
          >
            {[
              { icon: <RocketLaunchIcon className="w-8 h-8 text-[#ff5500]" />, text: "Fast Delivery", desc: "2-6 week launches" },
              { icon: <CheckCircleIcon className="w-8 h-8 text-[#ff5500]" />, text: "Quality Assured", desc: "100% satisfaction" },
              { icon: <BoltIcon className="w-8 h-8 text-[#ff5500]" />, text: "Modern Tech", desc: "Latest frameworks" },
              { icon: <ArrowTrendingUpIcon className="w-8 h-8 text-[#ff5500]" />, text: "Results Driven", desc: "ROI focused" }
            ].map((item, index) => (
              <div key={index} className={`text-center p-4 rounded-xl backdrop-blur-sm ${
                theme === 'dark' ? 'bg-white/5' : 'bg-gray-50/50'
              }`}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className={`font-bold mb-1 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{item.text}</div>
                <div className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>{item.desc}</div>
              </div>
            ))}
          </motion.div>
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