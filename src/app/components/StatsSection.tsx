'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { useTheme } from "../utils/ThemeProvider";
import { RocketLaunchIcon, StarIcon, ChatBubbleLeftRightIcon, TrophyIcon } from '@heroicons/react/24/solid';

// Animated Counter Component
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
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
  }, [isInView, target, duration]);

  return (
    <div ref={ref} className="text-4xl font-black">
      {count}{suffix}
    </div>
  );
}

export default function StatsSection() {
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

  // Statistics data with animated counters
  const stats = [
    { 
      number: 50, 
      suffix: "+", 
      label: "Projects Completed", 
      icon: <RocketLaunchIcon className="w-8 h-8 text-[#ff5500]" />, 
      duration: 2.5 
    },
    { 
      number: 100, 
      suffix: "%", 
      label: "Client Satisfaction", 
      icon: <StarIcon className="w-8 h-8 text-[#ff5500]" />, 
      duration: 2 
    },
    { 
      number: 24, 
      suffix: "/7", 
      label: "Support Available", 
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-[#ff5500]" />, 
      duration: 1.5 
    },
    { 
      number: 6, 
      suffix: "+", 
      label: "Years Experience", 
      icon: <TrophyIcon className="w-8 h-8 text-[#ff5500]" />, 
      duration: 1 
    }
  ];

  return (
    <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
    }`}>

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
            Our Impact
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Results that <span className="text-[#ff5500]">speak volumes</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className={`group relative text-center p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
              } backdrop-blur-sm`}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className={`mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix} 
                    duration={stat.duration}
                  />
                </div>
                <div className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 