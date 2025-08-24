'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../utils/ThemeProvider';

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
  videoUrl?: string;
  route: string;
  metrics?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "streamline-hr",
    title: "Streamline HR",
    subtitle: "AI-Powered HR Management",
    client: "Streamline HR",
    description: "Cutting-edge employee management and applicant tracking system that utilizes artificial intelligence to speed up HR processes, streamline operations, and enhance recruitment efficiency.",
    imageUrl: "/images/work/streamline-hr/desktop.webp",
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
    id: "derbaumchirurg",
    title: "Der Baumchirurg",
    subtitle: "Tree Surgery & Maintenance",
    client: "Der Baumchirurg",
    description: "Professional website for tree surgery services featuring an intuitive consultation booking system and comprehensive service information for the Berlin and Brandenburg region.",
    imageUrl: "/images/work/derbaumchirurg/desktop.webp",
    mobileImageUrl: "/images/work/derbaumchirurg/mobile.webp",
    category: ["Web Design", "SEO", "Branding"],
    year: "2025",
    route: "/work/derbaumchirurg",
    websiteUrl: "baumpflegeberlin-brandenburg.de",
    liveUrl: "https://www.baumpflegeberlin-brandenburg.de",
    metrics: "+200% closed deals per month",
    featured: true
  },
  {
    id: "miller-design",
    title: "MDZN",
    subtitle: "Miller Design Studio",
    client: "Miller Design",
    description: "A clean and minimal website for a premium Dubai design studio showcasing their expert services, creative portfolio, and design philosophy with a seamless user experience and modern aesthetics.",
    imageUrl: "/images/work/mdzn/desktop.webp",
    mobileImageUrl: "/images/work/mdzn/mobile.webp",
    category: ["Web Design", "SEO", "Branding"],
    year: "2025",
    route: "/work",
    websiteUrl: "millerdesign.ai",
    liveUrl: "https://www.millerdesign.ai",
    metrics: "+150% client inquiries per month",
    featured: true
  },
  {
    id: "pinkpizzaberlin",
    title: "Pink Pizza",
    subtitle: "Berlin's Trendy Pizzeria",
    client: "Pink Pizza Berlin",
    description: "Modern website with online ordering system, interactive menu design, seamless Google Maps integration, and vibrant branding that captures the essence of Pink Pizza's brand.",
    imageUrl: "/images/work/pinkpizzaberlin/desktop.webp",
    mobileImageUrl: "/images/work/pinkpizzaberlin/mobile.webp",
    category: ["Web Design", "Branding", "E-commerce"],
    year: "2025",
    route: "/work/pinkpizzaberlin",
    websiteUrl: "pinkpizza-berlin.de",
    liveUrl: "https://www.pinkpizza-berlin.de",
    metrics: "+220% increase in restaurant traffic",
    featured: true
  }
];

export default function ProjectCarousel() {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentProject = projects[currentIndex];

  const nextProject = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);


  const prevProject = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToProject = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <section 
      className={`relative min-h-screen py-20 px-4 md:px-8 overflow-hidden transition-all duration-700 ${
        theme === 'dark' 
          ? 'bg-black' 
          : 'bg-white'
      }`}
    >

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
              theme === 'dark'
                ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
            }`}>
              Selected Works
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>

          <h2 className={`text-4xl md:text-6xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Our <span className="text-[#ff5500]">Work</span> in Action
          </h2>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience our projects like never before – see the actual websites in action
          </p>
        </motion.div>

        {/* Main Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            disabled={isTransitioning}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                : 'bg-black/10 hover:bg-black/20 text-gray-900 border border-black/20'
            } backdrop-blur-sm shadow-lg hover:scale-110 disabled:opacity-50 disabled:hover:scale-100`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextProject}
            disabled={isTransitioning}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                : 'bg-black/10 hover:bg-black/20 text-gray-900 border border-black/20'
            } backdrop-blur-sm shadow-lg hover:scale-110 disabled:opacity-50 disabled:hover:scale-100`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Main Content Area - With Margins for Scrolling */}
              <div className="w-full px-4 md:px-8 lg:px-16">
                {/* Project Preview - With margins on sides */}
                <div className="w-full mb-8 max-w-6xl mx-auto">
                  <div className="relative w-full">
                    {/* Simple URL Bar */}
                    <div className={`flex items-center justify-center p-4 rounded-t-2xl ${
                      theme === 'dark' ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-white/80 border border-gray-200/50'
                    } backdrop-blur-sm`}>
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className={`px-4 py-2 rounded-lg text-sm ${
                          theme === 'dark' ? 'bg-gray-700/80 text-[#ff5500]' : 'bg-white/90 text-[#ff5500]'
                        } backdrop-blur-sm font-semibold`}>
                          {currentProject.websiteUrl}
                        </div>
                      </div>
                    </div>

                    {/* Preview Content - With controlled width */}
                    <div className="relative rounded-b-2xl overflow-hidden" style={{ height: '70vh', minHeight: '600px' }}>
                      <div className="w-full h-full relative">
                        {currentProject.liveUrl ? (
                          <iframe
                            src={currentProject.liveUrl}
                            title={`${currentProject.title} Live Preview`}
                            className="w-full h-full border-0 rounded-b-2xl pointer-events-auto"
                            loading="lazy"
                            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                          />
                        ) : (
                          <div className="w-full h-full relative">
                            <Image 
                              src={currentProject.imageUrl} 
                              alt={`${currentProject.title} Desktop Preview`}
                              fill
                              className="object-cover object-top rounded-b-2xl"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details - Centered below preview */}
                <div className="text-center">
                  {/* Project Title & Info */}
                  <div className="mb-8">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <h3 className={`text-3xl md:text-4xl font-black ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {currentProject.title}
                      </h3>
                      <span className="bg-gradient-to-r from-[#ff5500] to-[#ff8844] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {currentProject.year}
                      </span>
                    </div>
                    
                    <p className={`text-xl font-medium mb-2 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {currentProject.subtitle}
                    </p>
                    
                    
                  </div>

                  {/* Metrics */}
                  {currentProject.metrics && (
                    <div className="mb-6">
                      <div className="text-3xl font-black text-[#ff5500] mb-1">
                        {currentProject.metrics}
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <div className="mb-8 max-w-3xl mx-auto">
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Service Tags */}
                  <div className="mb-8">
                    <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                      {currentProject.category.map((service) => (
                        <span
                          key={service}
                          className={`px-3 py-2 rounded-lg text-sm font-medium ${
                            theme === 'dark' 
                              ? 'bg-white/10 text-white border border-white/20' 
                              : 'bg-black/5 text-gray-700 border border-gray-200'
                          }`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
                    {currentProject.liveUrl && (
                      <a
                        href={currentProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 px-6 bg-gradient-to-r from-[#ff5500] to-[#ff8844] text-white text-center rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                      >
                        View Live Site
                        <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                    
                    <Link
                      href="/work"
                      className={`flex-1 py-4 px-6 text-center rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] border-2 ${
                        theme === 'dark'
                          ? 'bg-white/5 text-white border-white/20 hover:bg-white/10'
                          : 'bg-black/5 text-gray-900 border-gray-300 hover:bg-black/10'
                      }`}
                    >
                      View More Work
                      <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-12 gap-3">
          {projects.map((project, projectIndex) => (
            <button
              key={project.id}
              onClick={() => goToProject(projectIndex)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                projectIndex === currentIndex
                  ? 'bg-[#ff5500] scale-125'
                  : theme === 'dark'
                  ? 'bg-white/30 hover:bg-white/50'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}