'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "../utils/ThemeProvider";
import { ShineBorder } from "@/components/magicui/shine-border";

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

  // Enhanced service data with modern icons
  const services = [
    {
      id: "web-development",
      title: "Web Development",
      description: "Custom websites built with cutting-edge technology and optimized for performance.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "orange",
      features: ["Mobile Responsive", "SEO Optimized", "Fast Loading"],
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
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
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
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: "orange",
      features: ["Brand Identity", "Logos", "Print Design"],
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
      id: "automation",
      title: "Automation & AI",
      description: "Smart solutions that streamline your business processes and enhance customer experience.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
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
      <section className={`relative py-24 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#ff5500]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
              <span className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border-2 border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border-2 border-[#ff5500]/20'
              } shadow-2xl backdrop-blur-sm`}>
                Our Services
              </span>
              <motion.div 
                className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#ff5500]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <h2 className={`text-5xl md:text-7xl font-black mb-8 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Digital solutions for{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ff6600] to-[#ff8800]">
                  modern businesses
                </span>
                <motion.div
                  className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#ff5500]/30 via-[#ff6600]/30 to-[#ff8800]/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h2>
            <p className={`text-2xl max-w-4xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From stunning websites to powerful SEO strategies, we've got everything you need to succeed online
            </p>
          </motion.div>

          {/* Services Grid - 4 cards in one row */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={fadeIn}
                className={`group relative p-8 rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50'
                } backdrop-blur-sm hover:scale-[1.02] shadow-xl hover:shadow-2xl`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => openModal(service)}
              >
                <ShineBorder shineColor={["#ff5500", "#ff6600", "#ff7700"]} />
                
                
                
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white shadow-xl bg-gradient-to-br from-orange-500 to-orange-600 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-black mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{service.title}</h3>
                  <p className={`mb-6 text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-lg text-xs font-medium ${
                        theme === 'dark' ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 font-bold text-orange-500 hover:text-orange-600 transition-colors">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link 
              href="/services"
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#ff5500] via-[#ff6600] to-[#ff7700] text-white rounded-2xl hover:shadow-2xl transition-all duration-500 text-xl font-bold transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">View All Services</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-2 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-[#ff8800] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div 
              className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-700' 
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
                className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                } transition-colors text-xl font-bold`}
              >
                ×
              </button>

              {/* Service icon and title */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className={`text-3xl font-black ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{selectedService.title}</h3>
                  <p className="text-xl font-bold text-orange-500">{selectedService.pricing}</p>
                </div>
              </div>

              {/* Detailed description */}
              <p className={`mb-8 text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {selectedService.detailedDescription}
              </p>

              {/* Deliverables */}
              <div className="mb-8">
                <h4 className={`text-2xl font-bold mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>What's included:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.deliverables.map((item: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center mr-4 bg-orange-500/20">
                        <span className="text-sm text-orange-500 font-bold">✓</span>
                      </div>
                      <span className={`${
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
                  className="flex-1 bg-gradient-to-r from-[#ff5500] to-[#ff6600] hover:from-[#ff6600] hover:to-[#ff7700] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center text-lg"
                  onClick={closeModal}
                >
                  Get a Quote
                </Link>
                <Link 
                  href={selectedService.servicePageSection}
                  className={`flex-1 font-bold py-4 px-6 rounded-xl border-2 transition-all duration-300 text-center text-lg ${
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