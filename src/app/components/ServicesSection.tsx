'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "../utils/ThemeProvider";

export default function ServicesSection() {
  const { theme } = useTheme();
  const [hoveredService, setHoveredService] = useState<string | null>(null);

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

  // Service data with modern icons
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites built with cutting-edge technology and optimized for performance.",
      icon: "🌐",
      color: "blue",
      features: ["React & Next.js", "Mobile Responsive", "Fast Loading", "SEO Ready"]
    },
    {
      id: "seo-marketing",
      title: "SEO & Marketing",
      description: "Data-driven strategies to boost your online visibility and drive qualified traffic.",
      icon: "📈",
      color: "green",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Analytics"]
    },
    {
      id: "creative-design",
      title: "Creative Design",
      description: "Eye-catching visuals and brand identity that makes your business unforgettable.",
      icon: "🎨",
      color: "purple",
      features: ["Brand Identity", "UI/UX Design", "Motion Graphics", "Print Design"]
    },
    {
      id: "automation",
      title: "Automation & AI",
      description: "Smart solutions that streamline your business processes and enhance customer experience.",
      icon: "🤖",
      color: "orange",
      features: ["Chatbots", "Workflow Automation", "AI Integration", "Process Optimization"]
    }
  ];

  return (
    <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
        }`}></div>
        <div className={`absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-15 ${
          theme === 'dark' ? 'bg-green-500' : 'bg-green-300'
        }`}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              theme === 'dark'
                ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
            }`}>
              🛠️ Our Services
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Digital solutions for <span className="text-[#ff5500]">modern businesses</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            From stunning websites to powerful SEO strategies, we've got everything you need to succeed online
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              variants={fadeIn}
              className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
              } backdrop-blur-sm hover:scale-[1.02]`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                service.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 to-transparent' :
                service.color === 'green' ? 'bg-gradient-to-br from-green-500/10 to-transparent' :
                service.color === 'purple' ? 'bg-gradient-to-br from-purple-500/10 to-transparent' :
                'bg-gradient-to-br from-orange-500/10 to-transparent'
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg ${
                    service.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                    service.color === 'green' ? 'bg-gradient-to-br from-green-500 to-green-600' :
                    service.color === 'purple' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                    'bg-gradient-to-br from-orange-500 to-orange-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-black mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{service.title}</h3>
                    <p className={`mb-6 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${
                            service.color === 'blue' ? 'bg-blue-500' :
                            service.color === 'green' ? 'bg-green-500' :
                            service.color === 'purple' ? 'bg-purple-500' :
                            'bg-orange-500'
                          }`}></div>
                          <span className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link 
                    href="/services"
                    className={`inline-flex items-center gap-2 font-semibold transition-all duration-300 ${
                      service.color === 'blue' ? 'text-blue-500 hover:text-blue-600' :
                      service.color === 'green' ? 'text-green-500 hover:text-green-600' :
                      service.color === 'purple' ? 'text-purple-500 hover:text-purple-600' :
                      'text-orange-500 hover:text-orange-600'
                    }`}
                  >
                    Learn more
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 