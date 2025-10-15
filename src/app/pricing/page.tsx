'use client';

import { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useTheme } from '../utils/ThemeProvider';
import { 
  BoltIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

// Animated Counter Component with AOS
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const progress = (currentTime - startTime) / (duration * 1000);
            
            if (progress < 1) {
              setCount(Math.floor(target * progress));
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl font-black text-[#ff5500] mb-2">
      {count}{suffix}
    </div>
  );
}

export default function Pricing() {
  const { theme } = useTheme();
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  const openQuoteModal = () => {
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };

  const pricingFeatures = [
    {
      icon: <BoltIcon className="w-8 h-8 text-white" />,
      title: "Lightning Fast",
      description: "Get your project delivered faster than you can say 'responsive design'",
      highlight: true
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
      title: "Custom Design",
      description: "Tailored specifically to your brand and vision",
      highlight: false
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      title: "Mobile First",
      description: "Optimized for every device imaginable",
      highlight: false
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
      title: "Performance",
      description: "Blazing fast load times guaranteed",
      highlight: true
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-white" />,
      title: "Maintenance",
      description: "Ongoing support and updates included",
      highlight: false
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-white" />,
      title: "Premium Quality",
      description: "Award-winning designs that convert",
      highlight: true
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-white" />,
      title: "SEO Optimized",
      description: "Built-in search engine optimization to boost your visibility",
      highlight: false
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      title: "Analytics Ready",
      description: "Comprehensive tracking and insights to measure success",
      highlight: true
    }
  ];

  const stats = [
    { target: 10, suffix: "+", label: "Projects Delivered", duration: 2.5 },
    { target: 100, suffix: "%", label: "Client Satisfaction", duration: 2 },
    { target: 24, suffix: "h", label: "Response Time", duration: 1.5 },
    { target: 100, suffix: "%", label: "Custom Built", duration: 2 }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="pricing" />
      

      {/* Hero Section */}
      <section ref={heroRef} className={`relative flex-1 flex items-center justify-center px-6 py-34 md:py-42 overflow-hidden ${
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
              Let&apos;s build something{' '}
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
                  <AnimatedCounter 
                    target={stat.target} 
                    suffix={stat.suffix} 
                    duration={stat.duration}
                  />
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
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ rotate: [0, 15, 0] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <RocketLaunchIcon className="w-5 h-5" />
                </motion.div>
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
      <section className={`py-20 px-6 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="max-w-6xl mx-auto">
          <h2 
            className={`text-4xl md:text-5xl font-black text-center mb-16 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            data-aos="fade-up" 
            data-aos-duration="800"
          >
            Why Choose 
            <span className="text-[#ff5500]"> Site</span> &
            <span className="text-[#ff5500]"> Sight</span>?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-3xl backdrop-blur-sm transition-all duration-1000 ease-out cursor-pointer border-2 border-[#ff5500] hover:scale-105 hover:-translate-y-2 ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10' 
                    : 'bg-white/80 hover:bg-white'
                }`}
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay={index * 100}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center mb-4 shadow-lg transition-transform duration-700 ease-out ${
                    hoveredCard === index ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                  }`}
                >
                  {feature.icon}
                </div>
                
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
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div 
            className="text-center mt-20"
            data-aos="fade-up" 
            data-aos-duration="800" 
            data-aos-delay="400"
          >
            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Ready to transform your digital presence?
            </p>
            
            <button
              onClick={openQuoteModal}
              className="px-10 py-4 bg-transparent border-2 border-[#ff5500] text-[#ff5500] rounded-2xl hover:bg-[#ff5500] hover:text-white transition-all duration-300 text-lg font-bold hover:scale-105 active:scale-95"
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={closeQuoteModal} />

      <Footer />
    </div>
  );
} 