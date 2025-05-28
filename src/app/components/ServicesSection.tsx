'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "../utils/ThemeProvider";

export default function ServicesSection() {
  const { theme } = useTheme();
  const [hoveredService, setHoveredService] = useState<string | null>(null);
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

  // Enhanced service data with detailed information - all using orange color scheme
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites built with cutting-edge technology and optimized for performance.",
      icon: "🌐",
      color: "orange",
      features: ["React & Next.js", "Mobile Responsive", "Fast Loading", "SEO Ready"],
      detailedDescription: "We create modern, responsive websites using the latest technologies like React and Next.js. Our development process focuses on performance, user experience, and scalability to ensure your website grows with your business.",
      pricing: "Starting from €1,200",
      deliverables: [
        "Custom responsive design",
        "Content management system",
        "Performance optimization",
        "SEO foundation",
        "Mobile-first approach",
        "Cross-browser compatibility"
      ],
      servicePageSection: "/services#web-development"
    },
    {
      id: "seo-marketing",
      title: "SEO & Marketing",
      description: "Data-driven strategies to boost your online visibility and drive qualified traffic.",
      icon: "📈",
      color: "orange",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Analytics"],
      detailedDescription: "Our comprehensive SEO and digital marketing services help your business rank higher in search results and attract more qualified leads through strategic optimization and data-driven campaigns.",
      pricing: "Starting from €300/month",
      deliverables: [
        "Comprehensive SEO audit",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Content marketing strategy",
        "Monthly performance reports"
      ],
      servicePageSection: "/services#digital-marketing"
    },
    {
      id: "creative-design",
      title: "Creative Design",
      description: "Eye-catching visuals and brand identity that makes your business unforgettable.",
      icon: "🎨",
      color: "orange",
      features: ["Brand Identity", "Logos", "Motion Graphics", "Print Design"],
      detailedDescription: "From brand identity to user interface design, we create visually stunning and strategically crafted designs that communicate your brand message effectively and engage your target audience.",
      pricing: "Starting from €300",
      deliverables: [
        "Brand identity design",
        "Logo design & brand guidelines",
        "Marketing materials",
        "Motion graphics",
        "Print design solutions"
      ],
      servicePageSection: "/services#creative-services"
    },
    {
      id: "video-editing",
      title: "Video & Motion Graphics",
      description: "Professional video editing and motion graphics that bring your stories to life.",
      icon: "🎬",
      color: "orange",
      features: ["Video Editing", "Motion Graphics", "Animation", "Post Production"],
      detailedDescription: "Our video production team creates engaging video content and motion graphics that captivate your audience and effectively communicate your brand message through dynamic visual storytelling.",
      pricing: "Starting from €200/video",
      deliverables: [
        "Professional video editing",
        "Motion graphics animation",
        "Color correction & grading",
        "Audio enhancement",
        "Custom animations",
        "Multiple format delivery"
      ],
      servicePageSection: "/services#creative-services"
    },
    {
      id: "automation",
      title: "Automation & AI",
      description: "Smart solutions that streamline your business processes and enhance customer experience.",
      icon: "🤖",
      color: "orange",
      features: ["Chatbots", "Workflow Automation", "AI Integration", "Process Optimization"],
      detailedDescription: "Implement intelligent automation solutions including AI-powered chatbots, workflow automation, and custom integrations that reduce manual work and improve efficiency across your business operations.",
      pricing: "Custom pricing",
      deliverables: [
        "AI chatbot development",
        "Workflow automation setup",
        "Custom integrations",
        "Process optimization",
        "Training & documentation",
        "Ongoing support"
      ],
      servicePageSection: "/services#automation"
    }
  ];

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
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

          {/* Improved grid layout - 3 columns on larger screens, more compact cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                variants={fadeIn}
                className={`group relative p-6 rounded-3xl transition-all duration-500 cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm hover:scale-105`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => openModal(service)}
              >
                {/* Glow effect - now all orange */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  {/* Icon - now all orange */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-black mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{service.title}</h3>

                  {/* Description */}
                  <p className={`mb-4 text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-1 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center">
                        <span className={`text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button - now all orange */}
                  <div className="inline-flex items-center gap-2 font-semibold transition-all duration-300 text-orange-500 hover:text-orange-600">
                    Learn more
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
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

              {/* Service icon and title - now all orange */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className={`text-2xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{selectedService.title}</h3>
                  <p className="text-lg font-semibold text-orange-500">{selectedService.pricing}</p>
                </div>
              </div>

              {/* Detailed description */}
              <p className={`mb-6 text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedService.detailedDescription}
              </p>

              {/* Deliverables - now all orange */}
              <div className="mb-8">
                <h4 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>What's included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedService.deliverables.map((item: string, index: number) => (
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

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="flex-1 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center"
                  onClick={closeModal}
                >
                  Get a Quote
                </Link>
                <Link 
                  href={selectedService.servicePageSection}
                  className={`flex-1 font-semibold py-3 px-6 rounded-xl border-2 transition-colors text-center ${
                    theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={closeModal}
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 