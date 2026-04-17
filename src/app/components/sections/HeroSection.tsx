"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';
import { ArrowRight, Globe, Bot, Database, Search, Mail } from 'lucide-react';
import { useTheme } from '@/app/utils/ThemeProvider';
import FloatingParticles from '../FloatingParticles';
import QuoteModal from '../QuoteModal';

// Main Hero Component
const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [wipeScope, wipeAnimate] = useAnimate();
  const phraseIndex = useRef(0);
  const wipePhrases = ['things that work', 'automations that never sleep', 'workflows that run themselves', 'things that scale',];
  const [wipePhrase, setWipePhrase] = useState(wipePhrases[0]);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Clip wipe color cycle — matches the 8s background gradient timing
  useEffect(() => {
    let cancelled = false;
    const runWipe = async () => {
      while (!cancelled) {
        // Wait 8s before each wipe
        await new Promise(r => setTimeout(r, 6000));
        if (cancelled) break;
        // Sweep wipe bar left-to-right (reveal new color)
        await wipeAnimate('[data-wipe-bar]', { scaleX: [0, 1] }, { duration: 0.45, ease: [0.4, 0, 0.2, 1] });
        if (cancelled) break;
        // Advance to next phrase and alternate colors
        phraseIndex.current = (phraseIndex.current + 1) % wipePhrases.length;
        const isIndigo = phraseIndex.current % 2 !== 0;
        wipeAnimate('[data-wipe-color]', { color: isIndigo ? '#4F46E5' : '#FF5500' }, { duration: 0 });
        setWipePhrase(wipePhrases[phraseIndex.current]);
        // Sweep wipe bar off to the right
        await wipeAnimate('[data-wipe-bar]', { scaleX: [1, 0], x: ['0%', '100%'] }, { duration: 0.35, ease: [0.4, 0, 0.2, 1] });
        if (cancelled) break;
        // Reset bar position
        wipeAnimate('[data-wipe-bar]', { x: '0%' }, { duration: 0 });
      }
    };
    runWipe();
    return () => { cancelled = true; };
  }, [wipeAnimate]);

  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const bgColor = isDark ? 'bg-[#0F0F0F]' : 'bg-[#FAFAFA]';

  return (
    <motion.section
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-500 ${bgColor}`}
    >
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Floating Particles */}
      <FloatingParticles
        particleCount={isMobile ? 20 : 40}
        particleColor="#FF5500"
        particleColors={["#FF5500", "#4F46E5"]}
        colorCycleDuration={8000}
        backgroundColor="transparent"
        particleSize={10}
        duration={5000}
        className="z-[1]"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 pt-40 pb-24">
        <div className="max-w-6xl w-full text-center space-y-8">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-black ${textColor} leading-none`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            <span className="block mb-1 uppercase">We build digital</span>
            <span ref={wipeScope} className="block uppercase relative">
              {/* Colored text layer */}
              <span
                data-wipe-color
                className="relative z-10"
                style={{ color: '#FF5500' }}
              >
                {wipePhrase}
              </span>
              {/* Wipe bar that sweeps across */}
              <motion.span
                data-wipe-bar
                className="absolute inset-0 z-20 origin-left"
                style={{
                  background: isDark
                    ? 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)'
                    : 'linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)',
                  scaleX: 0,
                  transformOrigin: 'left center',
                }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`text-xl md:text-2xl ${subtextColor} max-w-3xl mx-auto font-light mb-6`}
          >
            From high-converting websites to smart automations, data pipelines to content that ranks, we connect your tools and grow your business.
          </motion.p>
          

          {/* Service Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {[
              { icon: Globe, text: "Web Design", color: "#4F46E5" },
              { icon: Bot, text: "AI & Automation", color: "#4F46E5" },
              { icon: Database, text: "Data Pipelines", color: "#4F46E5" },
              { icon: Search, text: "SEO & Content", color: "#4F46E5" },
              { icon: Mail, text: "Email Marketing", color: "#4F46E5" }
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.7 + (index * 0.1),
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isDark
                      ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                      : 'bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200'
                  } backdrop-blur-sm`}
                  style={{ 
                    borderColor: service.color + '20',
                    boxShadow: `0 0 0 1px ${service.color}15`
                  }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                    className="group-hover:scale-110 transition-transform duration-200"
                    style={{ color: service.color }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.div>
                  <span className="group-hover:text-opacity-90">{service.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
          

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-row gap-3 justify-center items-center pt-4"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-5 py-3 sm:px-8 sm:py-4 rounded-3xl bg-gradient-to-r from-[#FF5500] to-[#e64d00] text-white font-bold text-sm sm:text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Start a project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-3 sm:px-8 sm:py-4 rounded-3xl border-2 ${
                  isDark
                    ? 'border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/10'
                    : 'border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5]/5'
                } font-bold text-sm sm:text-lg transition-all flex items-center gap-2 cursor-pointer`}
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Book a Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-black/50 via-transparent to-black/30' : 'bg-gradient-to-t from-white/30 via-transparent to-white/20'} pointer-events-none`} />

      {/* Project Modal */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </motion.section>
  );
};

export default HeroSection;