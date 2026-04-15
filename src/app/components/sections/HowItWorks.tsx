"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hammer, Rocket } from "lucide-react";
import { useTheme } from '@/app/utils/ThemeProvider';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  details: string[];
}

interface HowItWorksProps {
  steps?: ProcessStep[];
  autoPlay?: boolean;
  interval?: number;
}

const HowItWorks: React.FC<HowItWorksProps> = ({
  autoPlay = true,
  interval = 6000,
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Discovery",
      description: "We dive deep to understand your goals, audience, and what success looks like for you.",
      details: [
        "Strategy session & requirements gathering",
        "Competitor analysis & market research", 
        "Technical architecture planning"
      ],
      icon: Search,
      color: "#FF5500",
      glowColor: "rgba(255, 85, 0, 0.3)",
    },
    {
      id: 2,
      title: "Build", 
      description: "Our team crafts your digital solution with precision, keeping you in the loop every step.",
      details: [
        "Design & development in parallel",
        "Weekly progress updates & demos",
        "Testing & optimization cycles"
      ],
      icon: Hammer,
      color: "#4F46E5",
      glowColor: "rgba(79, 70, 229, 0.3)",
    },
    {
      id: 3,
      title: "Launch",
      description: "We deploy, monitor, and support your project to ensure everything runs smoothly.",
      details: [
        "Smooth deployment & go-live",
        "Performance monitoring & analytics",
        "Ongoing support & maintenance"
      ],
      icon: Rocket,
      color: "#FF5500", 
      glowColor: "rgba(255, 85, 0, 0.3)",
    },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    setProgress(0);

    const increment = 100 / (interval / 50);
    let current = 0;

    const progressInterval = setInterval(() => {
      current += increment;

      if (current >= 100) {
        clearInterval(progressInterval);
        setProgress(100);
        setActiveStep((prev) => (prev + 1) % steps.length);
      } else {
        setProgress(current);
      }
    }, 50);

    return () => clearInterval(progressInterval);
  }, [activeStep, autoPlay, interval, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgress(0);
  };

  const bgColor = isDark ? 'bg-gradient-to-b from-[#0F0F0F] to-[#1C1C1C]' : 'bg-gradient-to-b from-[#FAFAFA] to-white';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-900/50' : 'bg-white/50';

  return (
    <section className={cn("relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden", bgColor)}>
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className={cn(
          "absolute inset-0",
          isDark 
            ? "bg-gradient-to-br from-[#FF5500]/5 via-[#4F46E5]/5 to-[#FF5500]/5" 
            : "bg-gradient-to-br from-[#FF5500]/10 via-[#4F46E5]/10 to-[#FF5500]/10"
        )} />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={cn("absolute w-1 h-1 rounded-full", isDark ? "bg-white" : "bg-gray-400")}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            className="inline-block text-sm font-medium uppercase tracking-widest mb-4 text-[#4F46E5]"
          >
            Our Process
          </motion.span>
          <h2 className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-black mb-6",
            textColor
          )}
          style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            How{" "}
            <span className="text-[#FF5500]">
              It Works
            </span>
          </h2>
          <p className={cn("text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", subtextColor)}>
            Our proven 3-step process takes you from idea to launch — 
            with clear communication and zero surprises along the way.
          </p>
        </motion.div>

        {/* Step Indicators */}
        <div className="flex justify-center items-center gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const isPast = index < activeStep;

            return (
              <motion.div
                key={step.id}
                className="relative cursor-pointer"
                onClick={() => handleStepClick(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className={cn(
                    "absolute left-full top-1/2 w-8 h-0.5 -translate-y-1/2",
                    isDark ? "bg-gray-700" : "bg-gray-300"
                  )}>
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: step.color }}
                      initial={{ width: 0 }}
                      animate={{ width: isPast || isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}

                {/* Step Circle */}
                <motion.div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center border-2"
                  style={{
                    borderColor: isActive ? step.color : isPast ? step.color : isDark ? "#374151" : "#9CA3AF",
                    backgroundColor: isActive ? `${step.color}20` : "transparent",
                  }}
                  animate={{
                    boxShadow: isActive
                      ? `0 0 30px ${step.glowColor}, 0 0 60px ${step.glowColor}`
                      : "none",
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: isActive || isPast ? step.color : isDark ? "#9CA3AF" : "#6B7280" }}
                  />

                  {/* Progress Ring */}
                  {isActive && (
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="30"
                        fill="none"
                        stroke={step.color}
                        strokeWidth="2"
                        strokeDasharray={`${2 * Math.PI * 30}`}
                        strokeDashoffset={`${2 * Math.PI * 30 * (1 - progress / 100)}`}
                        className="transition-all duration-100"
                      />
                    </svg>
                  )}
                </motion.div>

                {/* Step Number */}
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-bold"
                  style={{ 
                    color: isActive ? step.color : isDark ? "#6B7280" : "#9CA3AF",
                    fontFamily: 'var(--font-league-spartan)'
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className={cn(
              "backdrop-blur-lg border rounded-3xl p-8 md:p-12",
              cardBg,
              isDark ? "border-gray-800" : "border-gray-200"
            )}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Icon */}
                <motion.div
                  className="flex-shrink-0"
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${steps[activeStep].color}20`,
                      boxShadow: `0 0 40px ${steps[activeStep].glowColor}`,
                    }}
                  >
                    {React.createElement(steps[activeStep].icon, {
                      className: "w-12 h-12",
                      style: { color: steps[activeStep].color },
                    })}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-4">
                  <motion.h3
                    className="text-3xl md:text-4xl font-bold"
                    style={{ 
                      color: steps[activeStep].color,
                      fontFamily: 'var(--font-league-spartan)'
                    }}
                  >
                    {steps[activeStep].title}
                  </motion.h3>
                  <motion.p className={cn("text-lg leading-relaxed", subtextColor)}>
                    {steps[activeStep].description}
                  </motion.p>
                  <ul className="space-y-2 mt-4">
                    {steps[activeStep].details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={cn(
                          "text-sm flex items-center gap-2",
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        )}
                      >
                        <div 
                          className="w-1.5 h-1.5 rounded-full" 
                          style={{ backgroundColor: steps[activeStep].color }}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Progress Bar */}
              <div className={cn(
                "mt-8 h-1 rounded-full overflow-hidden",
                isDark ? "bg-gray-800" : "bg-gray-200"
              )}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: steps[activeStep].color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => handleStepClick(index)}
              className="group relative"
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: index === activeStep ? step.color : isDark ? "#374151" : "#9CA3AF",
                }}
                whileHover={{ scale: 1.5 }}
                animate={{
                  scale: index === activeStep ? 1.2 : 1,
                }}
              />
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center space-y-6 mt-16"
        >
          <div className={cn(
            "inline-flex items-center gap-3 px-6 py-3 rounded-full border",
            isDark 
              ? 'bg-white/5 border-white/10 backdrop-blur-sm' 
              : 'bg-gray-100/50 border-gray-200/50 backdrop-blur-sm'
          )}>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            <span className={cn("text-sm font-medium", isDark ? 'text-gray-300' : 'text-gray-600')}>
              Ready to start?
            </span>
          </div>
          <p className={cn("text-sm", subtextColor)}>
            
            <span className="text-[#FF5500] font-medium cursor-pointer hover:underline">
              Let's chat about your project
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;