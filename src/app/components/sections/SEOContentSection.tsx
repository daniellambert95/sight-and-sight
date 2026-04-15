"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle, TrendingUp, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/app/utils/ThemeProvider';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const SEOContentSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax effect for visual elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const checklistY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  const contentChecklist = [
    { icon: TrendingUp, text: "Keyword research & strategy", color: "#FF5500" },
    { icon: Target, text: "High-converting blog content", color: "#4F46E5" },
    { icon: CheckCircle, text: "SEO optimization & meta tags", color: "#FF5500" },
    { icon: TrendingUp, text: "Content calendar planning", color: "#4F46E5" },
    { icon: Target, text: "Performance tracking & analytics", color: "#FF5500" },
  ];

  const bgColor = isDark ? 'bg-gradient-to-br from-[#0F0F0F] to-[#1C1C1C]' : 'bg-gradient-to-br from-[#FAFAFA] to-white';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-600';
  const cardBg = isDark ? 'bg-gray-800/50' : 'bg-white/50';

  return (
    <section ref={sectionRef} className={cn("relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden", bgColor)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className={cn(
          "absolute inset-0",
          isDark 
            ? "bg-[radial-gradient(circle_at_50%_50%,#FF5500_0.5px,transparent_0.5px)] bg-[length:30px_30px]"
            : "bg-[radial-gradient(circle_at_50%_50%,#FF5500_0.8px,transparent_0.8px)] bg-[length:40px_40px]"
        )} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/20 backdrop-blur-sm"
            >
              <div className="w-2 h-2 bg-[#FF5500] rounded-full animate-pulse" />
              <span className="text-[#FF5500] font-medium text-sm">SEO & Content That Converts</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={cn("text-4xl sm:text-5xl lg:text-6xl font-bold", textColor)}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Great content does{" "}
              <span className="bg-gradient-to-r from-[#FF5500] to-[#4F46E5] bg-clip-text text-transparent">
                two things
              </span>
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={cn("text-xl md:text-2xl font-medium", textColor)}
            >
              It ranks, and it converts.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={cn("text-lg leading-relaxed", subtextColor)}
            >
              We write blogs that do both. Our content strategy combines keyword research, 
              compelling storytelling, and conversion optimization to drive traffic that actually 
              turns into customers.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 py-6"
            >
              {[
                { number: "300%", label: "Avg Traffic Increase" },
                { number: "85%", label: "Higher Engagement" },
                { number: "50+", label: "Ranking Keywords" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-[#FF5500] mb-1" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    {stat.number}
                  </div>
                  <div className={cn("text-xs", isDark ? 'text-gray-400' : 'text-gray-600')}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5500] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#e64d00] hover:shadow-xl transition-all transform hover:scale-105"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                See how we do it
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Checklist */}
          <motion.div
            style={{ y: checklistY }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Content Calendar Mockup */}
            <div className={cn(
              "relative rounded-3xl border-2 p-8 backdrop-blur-sm",
              cardBg,
              isDark ? "border-gray-700/50" : "border-gray-200/50"
            )}>
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className={cn("text-xl font-bold", textColor)} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  Content Strategy
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className={cn("text-sm font-medium", isDark ? 'text-gray-400' : 'text-gray-600')}>
                    Active
                  </span>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="space-y-4">
                {contentChecklist.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <IconComponent 
                          className="w-5 h-5" 
                          style={{ color: item.color }}
                        />
                      </div>
                      <span className={cn("font-medium", isDark ? 'text-gray-200' : 'text-gray-700')}>
                        {item.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress Bar */}
              <div className="mt-8 space-y-2">
                <div className="flex justify-between items-center">
                  <span className={cn("text-sm font-medium", isDark ? 'text-gray-400' : 'text-gray-600')}>
                    Content Calendar Progress
                  </span>
                  <span className={cn("text-sm font-bold", textColor)}>
                    87%
                  </span>
                </div>
                <div className={cn("w-full h-2 rounded-full", isDark ? "bg-gray-700" : "bg-gray-200")}>
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#FF5500] to-[#4F46E5] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF5500] rounded-full flex items-center justify-center shadow-lg"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-10 h-10 bg-[#4F46E5] rounded-full flex items-center justify-center shadow-lg"
            >
              <Target className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;