"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Zap, Link2 } from 'lucide-react';
import { useTheme } from '@/app/utils/ThemeProvider';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: 'orange' | 'indigo';
  size: 'large' | 'medium';
  index: number;
  isDark: boolean;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  title, 
  description, 
  icon, 
  accentColor, 
  size,
  index, 
  isDark 
}) => {
  const isOrange = accentColor === 'orange';
  const cardBg = isDark ? 'bg-gradient-to-br from-[#1C1C1C] to-[#0F0F0F]' : 'bg-gradient-to-br from-white to-gray-50';
  const borderColor = isOrange
    ? 'border-[#FF5500]/40'
    : 'border-[#4F46E5]/40';
  const iconBg = isOrange
    ? 'bg-gradient-to-br from-[#FF5500]/10 to-[#FF5500]/5'
    : 'bg-gradient-to-br from-[#4F46E5]/10 to-[#4F46E5]/5';
  const iconColor = isOrange
    ? 'text-[#FF5500]'
    : 'text-[#4F46E5]';
  const glowColor = isOrange
    ? 'bg-[#FF5500]/5'
    : 'bg-[#4F46E5]/5';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border",
        size === 'large' ? 'p-8' : 'p-6',
        size === 'large' ? 'col-span-1 md:col-span-2 row-span-1' : 'col-span-1 row-span-1',
        cardBg,
        borderColor
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className={cn(
          "inline-flex items-center justify-center rounded-2xl mb-6",
          iconBg,
          size === 'large' ? 'w-16 h-16' : 'w-12 h-12',
        )}>
          <div className={cn(iconColor)}>
            {icon}
          </div>
        </div>

        <div className="space-y-4 flex-1">
          <h3 className={cn(
            "font-bold leading-tight transition-colors duration-300",
            size === 'large' ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl',
            isDark ? 'text-gray-100' : 'text-gray-900'
          )}>
            {title}
          </h3>
          <p className={cn(
            "leading-relaxed",
            size === 'large' ? 'text-base md:text-lg' : 'text-sm md:text-base',
            isDark ? 'text-gray-300' : 'text-gray-600'
          )}>
            {description}
          </p>
        </div>

      </div>

      {/* Background glow effect */}
      <div className={cn(
        "absolute -inset-px rounded-3xl blur-xl",
        glowColor
      )} />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/[0.02] dark:to-white/[0.02] rounded-3xl" />
    </motion.div>
  );
};

const WhySiteAndSight: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const benefits = [
    {
      title: "One studio, full stack",
      description: "From pixel-perfect design to backend pipelines, we handle every layer of your digital presence. No handoffs, no miscommunication — just seamless end-to-end solutions.",
      icon: <Users className="w-8 h-8" />,
      accentColor: 'orange' as const,
      size: 'large' as const
    },
    {
      title: "We speak human",
      description: "No jargon, no confusing tech-speak. Clear communication and transparent processes so you always know what's happening with your project.",
      icon: <MessageSquare className="w-6 h-6" />,
      accentColor: 'indigo' as const,
      size: 'medium' as const
    },
    {
      title: "Built to perform",
      description: "Fast sites, clean code, and real results. Every project is optimized for performance, conversion, and long-term success.",
      icon: <Zap className="w-6 h-6" />,
      accentColor: 'orange' as const,
      size: 'medium' as const
    },
    {
      title: "Your tools, connected",
      description: "CRMs, email platforms, analytics — we make all your tools talk to each other so your data flows seamlessly and your workflow becomes effortless.",
      icon: <Link2 className="w-8 h-8" />,
      accentColor: 'indigo' as const,
      size: 'large' as const
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
          className="text-center mb-16 space-y-6"
        >
          <h2 className={cn(
            "text-4xl sm:text-5xl lg:text-6xl font-black",
            textColor
          )}
          style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Why{" "}
            <span className="text-[#FF5500]">
              Site&Sight?
            </span>
          </h2>
          <p className={cn("text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", subtextColor)}>
            We're not just another agency. We're your digital partners who get stuff done — 
            with skill, speed, and a smile.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Large card - One studio, full stack */}
          <BentoCard 
            {...benefits[0]} 
            index={0} 
            isDark={isDark}
          />
          
          {/* Medium card - We speak human */}
          <BentoCard 
            {...benefits[1]} 
            index={1} 
            isDark={isDark}
          />
          
          {/* Medium card - Built to perform */}
          <BentoCard 
            {...benefits[2]} 
            index={2} 
            isDark={isDark}
          />
          
          {/* Large card - Your tools, connected */}
          <BentoCard 
            {...benefits[3]} 
            index={3} 
            isDark={isDark}
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className={cn("text-sm", subtextColor)}>
            Ready to work with a team that gets it?{" "}
            <span className="text-[#FF5500] font-medium cursor-pointer hover:underline">
              Let's start something great
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySiteAndSight;