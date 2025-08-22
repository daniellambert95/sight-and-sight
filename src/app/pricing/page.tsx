'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useTheme } from '../utils/ThemeProvider';

export default function Pricing() {
  const { theme } = useTheme();
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isCardsInView = useInView(cardsRef, { once: true });

  const openQuoteModal = () => {
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };

  const pricingFeatures = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description: "Get your project delivered faster than you can say 'responsive design'",
      highlight: true
    },
    {
      icon: "🎨",
      title: "Custom Design",
      description: "Tailored specifically to your brand and vision",
      highlight: false
    },
    {
      icon: "📱",
      title: "Mobile First",
      description: "Optimized for every device imaginable",
      highlight: false
    },
    {
      icon: "🚀",
      title: "Performance",
      description: "Blazing fast load times guaranteed",
      highlight: true
    },
    {
      icon: "🔧",
      title: "Maintenance",
      description: "Ongoing support and updates included",
      highlight: false
    },
    {
      icon: "💎",
      title: "Premium Quality",
      description: "Award-winning designs that convert",
      highlight: true
    }
  ];

  const stats = [
    { value: "10+", label: "Projects Delivered" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24h", label: "Response Time" },
    { value: "100%", label: "Custom Built" }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="pricing" />
      

      {/* Hero Section */}
      <section ref={heroRef} className={`relative flex-1 flex items-center justify-center px-6 py-32 md:py-42 overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-orange-50 to-orange-100'
      }`}>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className={`text-6xl md:text-8xl font-black mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            >
              Let's build something{' '}
              <motion.span 
                className="relative inline-block text-[#ff5500]"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                amazing
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#ff5500] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isHeroInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 1 }}
                />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl mb-12 max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Tell us about your project in just a few steps and get a{' '}
              <span className="font-bold text-[#ff5500]">custom proposal</span> that will blow your mind
            </motion.p>

            {/* Stats Row */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 40 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl backdrop-blur-sm ${
                    theme === 'dark' 
                      ? 'bg-white/10 border border-white/20' 
                      : 'bg-white/50 border border-orange-200'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-black text-[#ff5500] mb-2">{stat.value}</div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={openQuoteModal}
              className="group relative px-12 py-6 bg-gradient-to-r from-[#ff5500] to-[#ff6600] text-white rounded-2xl text-xl font-bold shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(255, 85, 0, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-[#ff5500] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative z-10 flex items-center">
                Get Your Custom Quote 
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  🚀
                </motion.span>
              </span>
              
              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-[#ff5500] opacity-0 group-hover:opacity-100"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Cards Section */}
      <section ref={cardsRef} className={`py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className={`text-4xl md:text-5xl font-black text-center mb-16 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Why Choose 
            <span className="text-[#ff5500]"> Site</span> &
            <span className="text-[#ff5500]"> Sight</span>?
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className={`relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 cursor-pointer border-2 border-[#ff5500] ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10' 
                    : 'bg-white/80 hover:bg-white'
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={isCardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -8
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={hoveredCard === index ? { 
                    scale: 1.1,
                    rotate: 5
                  } : { 
                    scale: 1,
                    rotate: 0
                  }}
                  transition={{ 
                    duration: 0.3
                  }}
                >
                  {feature.icon}
                </motion.div>
                
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                
                <p className={`${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={isCardsInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to transform your digital presence?
            </p>
            
            <motion.button
              onClick={openQuoteModal}
              className="px-10 py-4 bg-transparent border-2 border-[#ff5500] text-[#ff5500] rounded-2xl hover:bg-[#ff5500] hover:text-white transition-all duration-300 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={closeQuoteModal} />

      <Footer />
    </div>
  );
} 