'use client';

import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import { useTheme } from "../utils/ThemeProvider";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { cn } from "@/lib/utils";

export default function HowWeWork() {
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

  const workSteps = [
    { 
      num: 1, 
      title: "Discovery", 
      desc: "We learn about your business, goals, and requirements to create the perfect foundation.",
      icon: "🔍",
      color: "blue"
    },
    { 
      num: 2, 
      title: "Strategy", 
      desc: "We develop a tailored strategy to meet your specific needs and objectives.",
      icon: "🎯",
      color: "green"
    },
    { 
      num: 3, 
      title: "Implementation", 
      desc: "We bring your project to life with expert execution and attention to detail.",
      icon: "⚡",
      color: "purple"
    },
    { 
      num: 4, 
      title: "Support", 
      desc: "We provide ongoing support to ensure continued success and growth.",
      icon: "🚀",
      color: "orange"
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
              Our Process
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            How we <span className="text-[#ff5500]">work</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Our proven 4-step process ensures your project is delivered on time, on budget, and exceeds expectations
          </p>
        </motion.div>

        {/* Process Flow Timeline */}
        <div className="relative max-w-6xl mx-auto">
          <ProcessFlowWithBeams theme={theme} staggerContainer={staggerContainer} fadeIn={fadeIn} workSteps={workSteps} />
        </div>
      </div>
    </section>
  );
}

// ProcessFlowWithBeams component
function ProcessFlowWithBeams({ theme, staggerContainer, fadeIn, workSteps }: any) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const step4Ref = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref];

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Full screen width start point */}
      <div ref={startRef} className="absolute left-0 top-1/2 w-1 h-1 -translate-y-1/2"></div>
      
      {/* Full screen width end point */}
      <div ref={endRef} className="absolute right-0 top-1/2 w-1 h-1 -translate-y-1/2"></div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 px-8 md:px-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {workSteps.map((step: any, index: number) => (
          <motion.div 
            key={step.num}
            ref={stepRefs[index]}
            variants={fadeIn}
            className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
            } backdrop-blur-sm`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 text-center">
              {/* Step number circle */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#ff5500] to-[#ff6600] text-white text-lg font-bold rounded-full mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.num}
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-black mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>{step.title}</h3>

              {/* Description */}
              <p className={`leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Single Continuous Animated Beam - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block">
        {/* One smooth continuous beam from far left to far right */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={startRef}
          toRef={endRef}
          className="opacity-90"
          gradientStartColor="#ff5500"
          gradientStopColor="#ff6600"
          duration={4}
          pathWidth={6}
        />
      </div>
    </div>
  );
}