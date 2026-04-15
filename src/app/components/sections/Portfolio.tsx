"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, PanInfo } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/app/utils/ThemeProvider';

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  client: string;
  year: string;
  category: string[];
  websiteUrl: string;
  liveUrl?: string;
  imageUrl: string;
  mobileImageUrl?: string;
  route: string;
  metrics?: string;
  featured?: boolean;
}


interface ProjectCardProps {
  project: Project;
  index: number;
  isDark: boolean;
}

// Mobile stacked deck view
interface MobileDeckProps {
  projects: Project[];
  isDark: boolean;
}

const MobileDeckView: React.FC<MobileDeckProps> = ({ projects, isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => setCurrentIndex((i) => (i + 1) % projects.length);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -60) goNext();
    else if (info.offset.x > 60) goPrev();
  };

  const CARD_WIDTH = 300;
  // Side cards sit almost directly behind — only ~16px peeking out on each side
  const PEEK = 16;

  const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
  const nextIndex = (currentIndex + 1) % projects.length;

  const cards = [
    { project: projects[prevIndex], position: -1 },
    { project: projects[currentIndex], position: 0 },
    { project: projects[nextIndex], position: 1 },
  ];

  return (
    <div className="block sm:hidden w-full">
      {/* Overflow-hidden viewport */}
      <div className="relative w-full overflow-hidden" style={{ height: 600 }}>
        <div className="relative w-full h-full flex items-center justify-center">
          {cards.map(({ project, position }) => {
            const isFront = position === 0;
            // side cards are offset just enough so their edge peeks behind the front card
            const translateX = position * (CARD_WIDTH / 2 - PEEK);

            return (
              <motion.div
                key={project.id + '-' + position}
                className="absolute"
                animate={{
                  x: translateX,
                  scale: isFront ? 1 : 0.92,
                  opacity: isFront ? 1 : 0.6,
                  zIndex: isFront ? 10 : 5,
                }}
                transition={{ type: 'spring', stiffness: 320, damping: 32 }}
              >
                {isFront ? (
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.25}
                    onDragEnd={handleDragEnd}
                    className="rounded-3xl overflow-hidden cursor-grab active:cursor-grabbing"
                    style={{
                      width: CARD_WIDTH,
                      boxShadow: '0 30px 70px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div className="relative" style={{ width: CARD_WIDTH, height: 540 }}>
                      <Image
                        src={project.mobileImageUrl || project.imageUrl}
                        alt={`${project.title} Mobile Preview`}
                        fill
                        className="object-cover object-top"
                        sizes={`${CARD_WIDTH}px`}
                        priority
                      />
                      {/* Bottom info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 pt-14">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-[#FF5500] uppercase tracking-wider">
                            {project.category[0]}
                          </span>
                          <span className="text-xs font-bold text-white bg-[#FF5500] px-2 py-0.5 rounded-full">
                            {project.year}
                          </span>
                        </div>
                        <h3
                          className="text-white font-bold text-lg leading-tight"
                          style={{ fontFamily: 'var(--font-league-spartan)' }}
                        >
                          {project.title}
                        </h3>
                        <p className="text-white/70 text-xs mt-0.5">{project.subtitle}</p>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 mt-2 text-xs text-white/80 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Visit site
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  // Side peek card — tappable to jump to it
                  <button
                    onClick={position === -1 ? goPrev : goNext}
                    className="rounded-3xl overflow-hidden focus:outline-none"
                    style={{
                      width: CARD_WIDTH,
                      boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
                    }}
                  >
                    <div className="relative" style={{ width: CARD_WIDTH, height: 540 }}>
                      <Image
                        src={project.mobileImageUrl || project.imageUrl}
                        alt={`${project.title} Mobile Preview`}
                        fill
                        className="object-cover object-top"
                        sizes={`${CARD_WIDTH}px`}
                      />
                    </div>
                  </button>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              i === currentIndex
                ? "w-6 h-2 bg-[#FF5500]"
                : isDark
                ? "w-2 h-2 bg-gray-600 hover:bg-gray-400"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-500"
            )}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, isDark }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const cardY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ y: cardY }}
      whileHover={{ scale: 1.03, z: 10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-3xl cursor-pointer"
    >
      {/* Image Container — desktop only */}
      <div className={cn(
        "relative w-full overflow-hidden rounded-3xl border-2",
        "h-96",
        isDark ? "border-gray-700/50 bg-gray-800" : "border-gray-200/50 bg-gray-100"
      )}>
        <Image
          src={project.imageUrl}
          alt={`${project.title} Preview`}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 30, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center"
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#FF5500] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#e64d00] transition-colors"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                View Live Site
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Year Badge */}
        <div className="absolute top-6 right-6">
          <span className="px-3 py-1 text-xs font-bold text-white bg-[#FF5500] rounded-full backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        {/* Category Badge */}
        <div className="absolute top-6 left-6">
          <span className={cn(
            "px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-sm",
            isDark
              ? "bg-black/40 text-white border-white/30"
              : "bg-white/40 text-black border-black/20"
          )}>
            {project.category[0]}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className={cn(
        "absolute bottom-0 left-0 right-0 text-white p-6",
        "bg-gradient-to-t from-black/80 via-black/60 to-transparent"
      )}>
        <div className="space-y-2">
          <h3
            className="font-bold text-xl text-[#FF5500] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            {project.title}
          </h3>
          <p className="text-white/80 text-sm">{project.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const sectionRef = useRef<HTMLElement>(null);

  // Section-wide parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const sectionY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projects: Project[] = [
    {
      id: "cartertreecare",
      title: "Carter Tree Care",
      subtitle: "Tree Surgery & Maintenance",
      client: "Carter Tree Care",
      description: "Professional website for tree surgery services featuring an intuitive consultation booking system and comprehensive service information for Ireland.",
      imageUrl: "/images/work/cartertreecare/cartertreecare.webp",
      mobileImageUrl: "/images/work/cartertreecare/mobile.webp",
      category: ["Web Design", "SEO", "Branding"],
      year: "2025",
      route: "/work/cartertreecare",
      websiteUrl: "cartertreecare.ie",
      liveUrl: "https://www.cartertreecare.ie",
      metrics: "+200% closed deals",
      featured: true
    },
    {
      id: "dignifiedlife",
      title: "Dignified Life",
      subtitle: "Divorce Guidance & Support Services",
      client: "Dignified Life",
      description: "Online presence and workflow automations for a divorce guidance and support service, helping clients navigate a difficult process with clarity.",
      imageUrl: "/images/work/dignifiedlife/dignifiedlife.webp",
      mobileImageUrl: "/images/work/dignifiedlife/mobile.webp",
      category: ["Web Design", "SEO", "Branding"],
      year: "2026",
      route: "/work",
      websiteUrl: "dignifiedlife.ie",
      liveUrl: "https://www.dignified-life.com/",
      featured: false
    },
    {
      id: "miller-design",
      title: "MDZN",
      subtitle: "Miller Design Studio",
      client: "Miller Design",
      description: "A clean and minimal website for a premium Dubai design studio showcasing their expert services and creative portfolio.",
      imageUrl: "/images/work/mdzn/millerdzn.webp",
      mobileImageUrl: "/images/work/mdzn/mobile.webp",
      category: ["Web Design", "SEO", "Branding"],
      year: "2025",
      route: "/work",
      websiteUrl: "millerdesign.ai",
      liveUrl: "https://www.millerdesign.ai",
      metrics: "3 new clients in month 1",
      featured: true
    },
    {
      id: "streamline-hr",
      title: "Streamline HR",
      subtitle: "AI-Powered HR Management",
      client: "Streamline HR",
      description: "Cutting-edge employee management and applicant tracking system that utilizes artificial intelligence to speed up HR processes.",
      imageUrl: "/images/work/streamline-hr/streamlinehr.webp",
      mobileImageUrl: "/images/work/streamline-hr/mobile.webp",
      category: ["Web App Development", "AI Integration", "UI/UX"],
      year: "2025",
      route: "/work/streamline-hr",
      websiteUrl: "streamline-hr.vercel.app",
      liveUrl: "https://streamline-hr.vercel.app",
      metrics: "+500 waitlist signups",
      featured: true
    },
    {
      id: "momentum",
      title: "Momentum",
      subtitle: "Content Creation & Digital Marketing",
      client: "Momentum",
      description: "Dynamic website for a content creation agency featuring portfolio showcases and client testimonials, optimized for lead generation.",
      imageUrl: "/images/work/momentum/mo-mentum.webp",
      mobileImageUrl: "/images/work/momentum/mobile.webp",
      category: ["Web Design", "SEO", "Strategy"],
      year: "2025",
      route: "/work/momentum",
      websiteUrl: "mo-mentum.ie",
      liveUrl: "https://www.mo-mentum.ie",
      metrics: "+200% client inquiries",
      featured: true
    },
    {
      id: "mademates",
      title: "MadeMates",
      subtitle: "Global branded products",
      client: "MadeMates",
      description: "Vibrant platform connecting creatives and makers, with a bold identity and intuitive community-driven design.",
      imageUrl: "/images/work/mademates/mademates.webp",
      mobileImageUrl: "/images/work/mademates/mobile.webp",
      category: ["Web Design", "UI/UX", "Branding"],
      year: "2026",
      route: "/work",
      websiteUrl: "mademates.io",
      liveUrl: "https://www.made-mates.com/",
      featured: false
    },
    {
      id: "paolotortone",
      title: "Paolo Tortone",
      subtitle: "Web Developer Portfolio",
      client: "Paolo Tortone",
      description: "Custom-built portfolio website for a web developer, showcasing his projects and technical expertise with a clean, performant design.",
      imageUrl: "/images/work/paolotortone/paolotortone.webp",
      mobileImageUrl: "/images/work/paolotortone/mobile.webp",
      category: ["Web Development", "Portfolio"],
      year: "2026",
      route: "/work",
      websiteUrl: "paolotortone.com",
      liveUrl: "https://www.paolotortone.com",
      featured: false
    },
    {
      id: "jadefrisch",
      title: "Jade Frisch",
      subtitle: "German to English Translation Services",
      client: "Jade Frisch",
      description: "Professional website for a German to English translator, clearly communicating her services and expertise to attract direct clients.",
      imageUrl: "/images/work/jadefrisch/jadefrisch.webp",
      mobileImageUrl: "/images/work/jadefrisch/mobile.webp",
      category: ["Web Design", "Branding"],
      year: "2026",
      route: "/work",
      websiteUrl: "jadefrisch.com",
      liveUrl: "https://jadefrisch.vercel.app/",
      featured: false
    }
  ];

  const displayedProjects = projects;

  const bgColor = isDark ? 'bg-[#0F0F0F]' : 'bg-[#FAFAFA]';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const subtextColor = isDark ? 'text-gray-300' : 'text-gray-600';

  return (
    <section ref={sectionRef} className={cn("relative w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden", bgColor)}>
      {/* Animated Background Elements */}
      <motion.div
        style={{ y: sectionY }}
        className="absolute inset-0 opacity-30"
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={cn("absolute w-1 h-1 rounded-full", isDark ? "bg-white" : "bg-gray-400")}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          style={{ y: headerY }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <motion.span
            className="inline-block text-sm font-medium uppercase tracking-widest mb-4 text-[#4F46E5]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Selected Works
          </motion.span>
          <h2 className={cn(
            "text-4xl sm:text-5xl lg:text-7xl font-black",
            textColor
          )}
          style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Our{" "}
            <span className="text-[#FF5500]">
              Portfolio
            </span>
          </h2>
          <motion.p 
            className={cn("text-lg md:text-xl max-w-3xl mx-auto leading-relaxed", subtextColor)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="text-[#4F46E5]">Real</span> projects, <span className="text-[#4F46E5]">real</span> results. See how we've helped businesses <span className="text-[#4F46E5]">transform</span>{" "}
            with beautiful websites, smart integrations, and strategies that <span className="text-[#4F46E5]">deliver</span>.
          </motion.p>
        </motion.div>

        {/* Mobile: Stacked Deck */}
        <div className="mb-16">
          <MobileDeckView projects={displayedProjects} isDark={isDark} />
        </div>

        {/* Desktop: Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden sm:grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16"
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isDark={isDark}
            />
          ))}
        </motion.div>

        {/* View All Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center space-y-6"
        >
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF5500] to-[#e64d00] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            View All Our Work
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className={cn("text-sm", subtextColor)}>
            Explore our complete portfolio and see how we can help your business grow
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;