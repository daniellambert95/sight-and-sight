'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';

export default function Services() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<any>(null);

  // Animation variants
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
        staggerChildren: 0.1
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  };

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Organized services by category with updated content
  const serviceCategories = [
    {
      id: "web-development",
      category: "Web Development",
      color: "orange",
      icon: "🌐",
      description: "Custom websites built with cutting-edge technology and optimized for performance",
      services: [
        {
          title: "Custom Website Development",
          description: "Modern, responsive websites built with React, Next.js and the latest web technologies for optimal performance and user experience.",
          icon: "💻",
          features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Foundation"]
        },
        {
          title: "E-commerce Solutions",
          description: "Complete online store development with secure payment processing, inventory management, and customer-friendly interfaces.",
          icon: "🛒",
          features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics Dashboard"]
        },
        {
          title: "Website Deployment & Hosting",
          description: "Seamless deployment with reliable hosting solutions, 99.9% uptime guarantee, SSL certificates, and ongoing maintenance.",
          icon: "🚀",
          features: ["99.9% Uptime", "SSL Certificates", "Regular Backups", "Performance Monitoring"]
        },
        {
          title: "Web Applications",
          description: "Custom web applications tailored to your business needs with user authentication, database integration, and scalable architecture.",
          icon: "⚙️",
          features: ["User Authentication", "Database Integration", "API Development", "Scalable Architecture"]
        }
      ]
    },
    {
      id: "creative-services",
      category: "Creative Design & Video",
      color: "orange",
      icon: "🎨",
      description: "Eye-catching visuals, brand identity, and professional video content that makes your business unforgettable",
      services: [
        {
          title: "Brand Identity Design",
          description: "Complete brand identity packages including logo design, color schemes, typography, and brand guidelines that reflect your unique voice.",
          icon: "🎯",
          features: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography System"]
        },
        {
          title: "UI/UX Design",
          description: "User-centered design solutions that create intuitive interfaces and seamless user experiences across all digital platforms.",
          icon: "🎨",
          features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"]
        },
        {
          title: "Video Editing & Production",
          description: "Professional video editing services that transform raw footage into compelling visual stories with perfect pacing and seamless transitions.",
          icon: "🎬",
          features: ["Professional Editing", "Color Correction", "Audio Enhancement", "Multi-format Delivery"]
        },
        {
          title: "Motion Graphics & Animation",
          description: "Dynamic motion graphics and animations that bring your brand to life and enhance your storytelling across all platforms.",
          icon: "✨",
          features: ["2D/3D Animation", "Motion Graphics", "Visual Effects", "Brand Animation"]
        },
        {
          title: "Graphic Design",
          description: "Eye-catching print and digital graphics including marketing materials, social media content, and promotional designs.",
          icon: "📐",
          features: ["Marketing Materials", "Social Media Graphics", "Print Design", "Digital Assets"]
        }
      ]
    },
    {
      id: "digital-marketing",
      category: "Digital Marketing & SEO",
      color: "orange",
      icon: "📈",
      description: "Data-driven strategies to boost your online visibility and drive qualified traffic",
      services: [
        {
          title: "Search Engine Optimization (SEO)",
          description: "Comprehensive SEO strategies to improve your search rankings, increase organic traffic, and enhance online visibility.",
          icon: "📊",
          features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Performance Tracking"]
        },
        {
          title: "Search Engine Marketing (SEM)",
          description: "Strategic paid advertising campaigns including Google Ads management, conversion tracking, and ROI optimization.",
          icon: "🎯",
          features: ["Google Ads", "Conversion Tracking", "ROI Optimization", "Campaign Management"]
        },
        {
          title: "Email Marketing",
          description: "Targeted email campaigns that convert leads into customers and foster brand loyalty through strategic automation and personalization.",
          icon: "📧",
          features: ["Campaign Design", "Automation", "Segmentation", "Performance Analytics"]
        },
        {
          title: "Content Marketing",
          description: "Strategic content creation including blog writing, social media content, and copywriting that engages your audience and drives conversions.",
          icon: "📝",
          features: ["Blog Writing", "Social Media Content", "Copywriting", "Content Strategy"]
        },
        {
          title: "PR & Communications",
          description: "Strategic public relations to enhance your brand image, manage reputation, and reach your target audience effectively.",
          icon: "📣",
          features: ["Press Releases", "Media Relations", "Brand Messaging", "Crisis Communication"]
        }
      ]
    },
    {
      id: "automation",
      category: "Automation & AI Solutions",
      color: "orange",
      icon: "🤖",
      description: "Smart solutions that streamline your business processes and enhance customer experience",
      services: [
        {
          title: "AI Chatbots",
          description: "Intelligent chatbots for customer support, lead generation, and appointment booking that provide 24/7 assistance to your customers.",
          icon: "🤖",
          features: ["24/7 Customer Support", "Lead Generation", "Appointment Booking", "Multi-language Support"]
        },
        {
          title: "Workflow Automation",
          description: "Custom automation solutions that streamline repetitive tasks, improve efficiency, and reduce manual work across your business operations.",
          icon: "⚡",
          features: ["Task Automation", "Process Optimization", "Integration Setup", "Performance Monitoring"]
        },
        {
          title: "AI Integration",
          description: "Integration of AI tools and technologies into your existing systems to enhance productivity and decision-making capabilities.",
          icon: "🧠",
          features: ["AI Tool Integration", "Data Analysis", "Predictive Analytics", "Custom AI Solutions"]
        },
        {
          title: "Business Process Optimization",
          description: "Analysis and optimization of your business processes using automation tools to increase efficiency and reduce operational costs.",
          icon: "📋",
          features: ["Process Analysis", "Efficiency Optimization", "Cost Reduction", "Training & Support"]
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    return {
      bg: 'bg-orange-500',
      text: 'text-orange-500',
      border: 'border-orange-500',
      bgLight: 'bg-orange-500/20',
      bgGradient: 'from-orange-500/10 to-transparent'
    };
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="services" />
      
      {/* Hero Section - Modern Creative Design */}
      <section className={`relative min-h-[80vh] flex items-center overflow-hidden transition-colors duration-300 pt-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-orange-50 to-orange-100'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          {/* Medium Circle */}
          <div className={`absolute bottom-20 -left-16 w-48 h-48 rounded-full opacity-15 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-300'
          }`}></div>
          {/* Small geometric shapes */}
          <div className={`absolute top-1/4 right-1/4 w-8 h-8 rotate-45 opacity-30 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-[#ff5500]'
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/4 w-6 h-6 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-400'
          }`}></div>
          <div className={`absolute top-1/2 left-1/3 w-4 h-4 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-[#ff5500]'
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
                🛠️ Our Services
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
              <span className="block">Digital</span>
              <span className="block text-[#ff5500]">solutions</span>
              <span className={`block text-4xl md:text-5xl lg:text-6xl font-bold mt-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                that deliver results
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
              We offer a <span className="font-semibold text-[#ff5500]">comprehensive range</span> of digital services to help your business thrive in the online world.
            </motion.p>

            {/* Service Tags */}
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {['Web Development', 'Creative Design', 'Video Production', 'Digital Marketing', 'SEO & PR', 'Automation & AI'].map((service, index) => (
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

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="relative z-10">Get Started Today</span>
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Categories - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-36 h-36 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          <div className={`absolute bottom-20 left-10 w-28 h-28 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-12 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-200'
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
                💼 What We Offer
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
              Our <span className="text-[#ff5500]">comprehensive</span> services
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              From web development to creative design, video production, digital marketing, and AI automation
            </p>
          </div>

          {/* Service Categories */}
          <motion.div 
            className="space-y-20"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {serviceCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <motion.div 
                  key={categoryIndex}
                  id={category.id}
                  variants={fadeIn}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="text-center mb-12">
                    <div className={`w-20 h-20 rounded-3xl ${colorClasses.bg} flex items-center justify-center text-white text-3xl shadow-lg mx-auto mb-6`}>
                      {category.icon}
                    </div>
                    <h3 className={`text-3xl md:text-4xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {category.category}
                    </h3>
                    <p className={`text-lg max-w-2xl mx-auto mb-6 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {category.description}
                    </p>
                    <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold ${colorClasses.bgLight} ${colorClasses.text}`}>
                      {category.services.length} SERVICES AVAILABLE
                    </div>
                  </div>

                  {/* Services Grid - Smaller Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div 
                        key={serviceIndex}
                        variants={fadeIn}
                        className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-pointer ${
                          theme === 'dark' 
                            ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-xl shadow-gray-900/50' 
                            : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-xl shadow-gray-200/50'
                        } backdrop-blur-sm`}
                        onClick={() => openModal(service)}
                      >
                        {/* Card Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10 text-center">
                          {/* Service Icon */}
                          <div className={`w-12 h-12 rounded-xl ${colorClasses.bg} flex items-center justify-center text-white text-xl shadow-lg mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                            {service.icon}
                          </div>
                          
                          <h4 className={`text-lg font-black mb-3 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>{service.title}</h4>
                          
                          <p className={`text-sm leading-relaxed mb-4 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {service.description.substring(0, 80)}...
                          </p>

                          <div className={`inline-flex items-center gap-2 text-sm font-semibold ${colorClasses.text} hover:gap-3 transition-all duration-300`}>
                            Learn More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-orange-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          <div className={`absolute top-1/3 right-1/3 w-8 h-8 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-400' : 'bg-orange-200'
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
                ⚙️ Our Process
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
              How we <span className="text-[#ff5500]">deliver</span> excellence
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Our proven four-step process ensures exceptional results every time
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and requirements through detailed consultations.",
                icon: "search"
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a tailored strategy to meet your specific needs and objectives.",
                icon: "clipboard"
              },
              {
                step: "03",
                title: "Implementation",
                description: "We bring your project to life with expert execution and attention to detail.",
                icon: "zap"
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support to ensure continued success and optimization.",
                icon: "settings"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`group relative text-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:scale-105`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Step Icon */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl text-white mb-6 shadow-lg mx-auto bg-gradient-to-br from-orange-500 to-orange-600">
                    {item.icon === "search" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    )}
                    {item.icon === "clipboard" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    )}
                    {item.icon === "zap" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {item.icon === "settings" && (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </div>

                  {/* Step Number */}
                  {/* <div className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold mb-4 bg-orange-500/20 text-orange-500">
                    STEP {item.step}
                  </div> */}

                  <h3 className={`text-2xl font-black mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  
                  <p className={`leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Connection Arrow (except for last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <svg className={`w-8 h-8 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action - Modern Creative Style */}
      <section className={`relative py-24 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' : 'bg-gradient-to-br from-white via-orange-50 to-white'
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
              🚀 Get Started
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>

          {/* Main Heading */}
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Ready to elevate</span>
            <span className="block">your <span className="text-[#ff5500]">digital presence?</span></span>
          </h2>

          <p className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's discuss how our <span className="font-semibold text-[#ff5500]">comprehensive services</span> can help you achieve your business goals.
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
              href="/pricing" 
              className={`group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50' 
                  : 'bg-black/5 text-gray-900 border-gray-900/30 hover:bg-black/10 hover:border-gray-900/50'
              } shadow-xl hover:shadow-2xl transform hover:scale-105`}
            >
              <span className="relative z-10">View Pricing</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Custom solutions</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Expert team</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Proven results</span>
            </div>
          </div>
        </motion.div>
      </section>
      
      <Footer />

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
              } shadow-2xl`}
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeModal}
                className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                } transition-colors`}
              >
                ×
              </button>

              {/* Service icon and title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{selectedService.title}</h3>
                  <p className="text-lg font-semibold text-orange-500">Professional Service</p>
                </div>
              </div>

              {/* Detailed description */}
              <p className={`mb-6 text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedService.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h4 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>What's included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.features.map((item: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-orange-500/20">
                        <span className="text-xs text-orange-500">✓</span>
                      </div>
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary CTA + subtle secondary link */}
              <div className="text-center">
                <Link 
                  href="/contact"
                  className="w-full bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center block mb-3"
                  onClick={closeModal}
                >
                  Get a Quote
                </Link>
                <Link 
                  href="/pricing"
                  className="text-sm text-orange-500 hover:text-orange-600 underline"
                  onClick={closeModal}
                >
                  View general pricing
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 