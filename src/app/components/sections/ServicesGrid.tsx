"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Bot, Database, Search, Mail, ArrowRight } from 'lucide-react';
import { useTheme } from '@/app/utils/ThemeProvider';
import Link from 'next/link';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: 'orange' | 'indigo';
  index: number;
  isDark: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  accentColor, 
  index, 
  isDark 
}) => {
  const isOrange = accentColor === 'orange';
  const cardBg = isDark ? 'bg-[#1C1C1C]' : 'bg-white';
  const borderColor = isOrange 
    ? 'hover:border-[#FF5500]/50' 
    : 'hover:border-[#4F46E5]/50';
  const iconBg = isOrange 
    ? 'bg-[#FF5500]/10 border-[#FF5500]/20' 
    : 'bg-[#4F46E5]/10 border-[#4F46E5]/20';
  const iconColor = isOrange 
    ? 'text-[#FF5500]' 
    : 'text-[#4F46E5]';
  const titleHoverColor = isOrange 
    ? 'group-hover:text-[#FF5500]' 
    : 'group-hover:text-[#4F46E5]';
  const accentTextColor = isOrange 
    ? 'text-[#FF5500]' 
    : 'text-[#4F46E5]';
  const dotColors = isOrange 
    ? ['bg-[#FF5500]', 'bg-[#FF5500]/70', 'bg-[#FF5500]/40'] 
    : ['bg-[#4F46E5]', 'bg-[#4F46E5]/70', 'bg-[#4F46E5]/40'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-300 hover:shadow-2xl",
        cardBg,
        isDark ? 'border-gray-700' : 'border-gray-200',
        borderColor
      )}
    >
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className={cn(
            "p-3 rounded-xl transition-all duration-300 border",
            iconBg,
            "group-hover:scale-110 group-hover:rotate-3"
          )}>
            <div className={cn("transition-colors duration-300", iconColor)}>
              {icon}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className={cn(
            "text-xl font-bold transition-colors duration-300",
            isDark ? 'text-gray-100' : 'text-gray-900',
            titleHoverColor
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-sm leading-relaxed",
            isDark ? 'text-gray-300' : 'text-gray-600'
          )}>
            {description}
          </p>
        </div>

        <div className={cn(
          "pt-4 border-t",
          isDark ? 'border-gray-700/50' : 'border-gray-200/50'
        )}>
          <Link href="/services" className="block">
            <motion.div
              className={cn(
                "flex items-center justify-center gap-2 py-2 px-4 rounded-lg border-2 transition-all duration-300 font-medium text-sm",
                isOrange 
                  ? "border-[#FF5500] text-[#FF5500] hover:bg-[#FF5500] hover:text-white" 
                  : "border-[#4F46E5] text-[#4F46E5] hover:bg-[#4F46E5] hover:text-white"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.div>
          </Link>
        </div>
      </div>

      <div className={cn(
        "absolute -bottom-2 -right-2 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        isOrange ? 'bg-[#FF5500]/10' : 'bg-[#4F46E5]/10'
      )} />
    </motion.div>
  );
};

const ServicesGrid: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const services = [
    {
      title: "Web Design & Development",
      description: "Beautiful, high-converting websites that captivate your audience and grow your business with modern design principles.",
      icon: <Palette className="w-8 h-8" />,
      accentColor: 'orange' as const
    },
    {
      title: "Automations and AI Implementation",
      description: "Smart automation solutions that streamline your workflow, eliminate repetitive tasks, and boost productivity.",
      icon: <Bot className="w-8 h-8" />,
      accentColor: 'indigo' as const
    },
    {
      title: "Data Pipelines & Web Integrations",
      description: "We connect your tools, automate the boring stuff, and make your data work harder — so you don't have to.",
      icon: <Database className="w-8 h-8" />,
      accentColor: 'orange' as const
    },
    {
      title: "SEO & Content Marketing",
      description: "Strategic content and SEO optimization that ranks high, converts visitors, and builds your authority online.",
      icon: <Search className="w-8 h-8" />,
      accentColor: 'indigo' as const
    },
    {
      title: "Email Marketing Automations",
      description: "Engaging email campaigns and automated flows that nurture leads and build lasting relationships with customers.",
      icon: <Mail className="w-8 h-8" />,
      accentColor: 'orange' as const
    }
  ];

  const bgColor = isDark ? 'bg-[#0F0F0F]' : 'bg-[#FAFAFA]';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={cn("w-full py-24 px-4 sm:px-6 lg:px-8", bgColor)}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className={cn("text-4xl sm:text-5xl font-black", textColor)}
          style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Our{" "}
            <span className="text-[#FF5500]">
              Services
            </span>
          </h2>
          <p className={cn("text-lg max-w-2xl mx-auto", subtextColor)}>
            From pixel-perfect websites to smart automations — we build digital solutions that actually work for you
          </p>
        </motion.div>

        {/* First row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard 
              key={index} 
              {...service} 
              index={index} 
              isDark={isDark}
            />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard 
              key={index + 3} 
              {...service} 
              index={index + 3} 
              isDark={isDark}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className={cn("text-2xl sm:text-3xl font-bold mb-4", textColor)}>
              Let's Create Something{" "}
              <span className="text-[#FF5500]">Unique</span>{" "}
              Together
            </h3>
            <p className={cn("text-lg mb-8", subtextColor)}>
              Need something custom? Have a unique challenge? 
              <br className="hidden sm:block" />
              We love building solutions that don't exist yet.
            </p>
            <Link href="https://wa.me/353870387525" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="inline-flex items-center gap-2 bg-[#FF5500] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#e64d00] hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;