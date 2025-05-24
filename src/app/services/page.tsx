'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';

export default function Services() {
  const { theme } = useTheme();

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

  // Organized services by category with color themes
  const serviceCategories = [
    {
      category: "Web Development",
      color: "blue",
      icon: "🌐",
      services: [
        {
          title: "Website Development",
          description: "Custom web design and development tailored to your brand's unique voice and business needs.",
          icon: "💻"
        },
        {
          title: "Website Deployment",
          description: "Seamless deployment of your website with optimized performance and security considerations.",
          icon: "🚀"
        },
        {
          title: "Web Hosting",
          description: "Reliable hosting solutions with 99.9% uptime guarantee and excellent support.",
          icon: "🌐"
        }
      ]
    },
    {
      category: "Creative Services",
      color: "purple",
      icon: "🎨",
      services: [
        {
          title: "Video Editing",
          description: "Professional video editing services that transform raw footage into compelling visual stories with perfect pacing and seamless transitions.",
          icon: "🎬"
        },
        {
          title: "Motion Graphics",
          description: "Dynamic motion graphics and animations that bring your brand to life and enhance your storytelling across all platforms.",
          icon: "✨"
        },
        {
          title: "Graphic Design",
          description: "Eye-catching visuals that communicate your brand's message and captivate your audience.",
          icon: "🎨"
        }
      ]
    },
    {
      category: "Digital Marketing",
      color: "green",
      icon: "📈",
      services: [
        {
          title: "SEO Optimization",
          description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic.",
          icon: "📊"
        },
        {
          title: "Email Marketing",
          description: "Targeted email campaigns that convert leads into customers and foster brand loyalty.",
          icon: "📧"
        },
        {
          title: "Digital Marketing",
          description: "Comprehensive digital marketing solutions to grow your online presence and business.",
          icon: "📱"
        },
        {
          title: "PR Communication",
          description: "Strategic public relations to enhance your brand image and reach your target audience effectively.",
          icon: "📣"
        }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-500',
        border: 'border-blue-500',
        bgLight: 'bg-blue-500/20',
        bgGradient: 'from-blue-500/10 to-transparent'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-500',
        border: 'border-purple-500',
        bgLight: 'bg-purple-500/20',
        bgGradient: 'from-purple-500/10 to-transparent'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-500',
        border: 'border-green-500',
        bgLight: 'bg-green-500/20',
        bgGradient: 'from-green-500/10 to-transparent'
      }
    };
    return colors[color as keyof typeof colors];
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
          : 'bg-gradient-to-br from-white via-purple-50 to-blue-50'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          {/* Medium Circle */}
          <div className={`absolute bottom-20 -left-16 w-48 h-48 rounded-full opacity-15 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          {/* Small geometric shapes */}
          <div className={`absolute top-1/4 right-1/4 w-8 h-8 rotate-45 opacity-30 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/4 w-6 h-6 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
          }`}></div>
          <div className={`absolute top-1/2 left-1/3 w-4 h-4 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-400'
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
              {['Web Development', 'Creative Design', 'Digital Marketing', 'SEO & PR'].map((service, index) => (
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
                <span className="relative z-10">Explore Our Services</span>
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-20 left-10 w-28 h-28 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-12 ${
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
              Our <span className="text-[#ff5500]">expertise</span> areas
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              From web development to creative design and digital marketing
            </p>
          </div>

          {/* Service Categories */}
          <motion.div 
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {serviceCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              return (
                <motion.div 
                  key={categoryIndex}
                  variants={fadeIn}
                  className="space-y-8"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${colorClasses.bg} flex items-center justify-center text-white text-2xl shadow-lg`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className={`text-3xl font-black ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        {category.category}
                      </h3>
                      <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold ${colorClasses.bgLight} ${colorClasses.text}`}>
                        {category.services.length} SERVICES
                      </div>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div 
                        key={serviceIndex}
                        variants={fadeIn}
                        className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                          theme === 'dark' 
                            ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-xl shadow-gray-900/50' 
                            : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-xl shadow-gray-200/50'
                        } backdrop-blur-sm`}
                      >
                        {/* Card Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        
                        <div className="relative z-10">
                          {/* Service Icon */}
                          <div className="text-3xl mb-4">{service.icon}</div>
                          
                          <h4 className={`text-xl font-bold mb-3 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>{service.title}</h4>
                          
                          <p className={`text-sm leading-relaxed mb-4 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {service.description}
                          </p>

                          <Link 
                            href={service.title === "Video Editing" || service.title === "Motion Graphics" ? "/work#video-showcase" : "/contact"} 
                            className={`inline-flex items-center gap-2 text-sm font-semibold ${colorClasses.text} hover:gap-3 transition-all duration-300`}
                          >
                            Learn more
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
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
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute top-1/3 right-1/3 w-8 h-8 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
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
                icon: "🔍",
                color: "blue"
              },
              {
                step: "02",
                title: "Strategy",
                description: "We develop a tailored strategy to meet your specific needs and objectives.",
                icon: "📋",
                color: "purple"
              },
              {
                step: "03",
                title: "Implementation",
                description: "We bring your project to life with expert execution and attention to detail.",
                icon: "⚡",
                color: "green"
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support to ensure continued success and optimization.",
                icon: "🛠️",
                color: "orange"
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
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  item.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-transparent' :
                  item.color === 'purple' ? 'bg-gradient-to-br from-purple-500/10 to-transparent' :
                  item.color === 'green' ? 'bg-gradient-to-br from-green-500/10 to-transparent' :
                  'bg-gradient-to-br from-orange-500/10 to-transparent'
                }`}></div>
                
                <div className="relative z-10">
                  {/* Step Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl text-white text-3xl font-bold mb-6 shadow-lg mx-auto ${
                    item.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    item.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    item.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    'bg-gradient-to-br from-orange-500 to-orange-600'
                  }`}>
                    {item.icon}
                  </div>

                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-bold mb-4 ${
                    item.color === 'blue' ? 'bg-blue-500/20 text-blue-500' :
                    item.color === 'purple' ? 'bg-purple-500/20 text-purple-500' :
                    item.color === 'green' ? 'bg-green-500/20 text-green-500' :
                    'bg-orange-500/20 text-orange-500'
                  }`}>
                    STEP {item.step}
                  </div>

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
        theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' : 'bg-gradient-to-br from-white via-blue-50 to-white'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-10 w-48 h-48 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
          }`}></div>
          <div className={`absolute bottom-10 left-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute top-1/3 left-1/4 w-12 h-12 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
          }`}></div>
          <div className={`absolute bottom-1/3 right-1/3 w-8 h-8 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
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
    </div>
  );
} 