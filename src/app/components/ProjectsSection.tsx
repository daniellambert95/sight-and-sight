'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "../utils/ThemeProvider";
import React from 'react';

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { 
        duration: 0.6
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 100
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.5
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { 
        duration: 0.3
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  // Project data with brand-consistent colors and actual images
  const projects = [
    {
      id: "derbaumchirurg",
      title: "Der Baumchirurg",
      subtitle: "Tree Surgery & Maintenance",
      description: "Professional website for tree surgery services featuring portfolio showcase and expert consultation booking.",
      imageUrl: "/images/work/derbaumchirurg/desktop.webp",
      mockupUrl: "/images/work/derbaumchirurg/desktop.webp",
      mobileImageUrl: "/images/work/derbaumchirurg/mobile.webp",
      category: ["Web Design", "SEO", "Branding"],
      year: "2025",
      route: "/work/derbaumchirurg",
      websiteUrl: "www.baumpflegeberlin-brandenburg.de",
      gradient: "from-[#ff5500] via-[#22c55e] to-[#16a34a]", // Orange to green
      accentColor: "#22c55e",
      size: "medium"
    },
    {
      id: "miller-design",
      title: "MDZN", 
      subtitle: "Miller Design Studio",
      description: "A modern website for a design studio showcasing their expert services and creative portfolio with seamless user experience.",
      imageUrl: "/images/work/mdzn/desktop.webp",
      mockupUrl: "/images/work/mdzn/desktop.webp",
      mobileImageUrl: "/images/work/mdzn/mobile.webp",
      category: ["Web Design", "SEO", "Branding", "Logo Design"],
      year: "2025",
      route: "/work",
      websiteUrl: "www.millerdesign.ai",
      gradient: "from-[#ff5500] via-[#ff7733] to-[#ff9955]", // Orange theme
      accentColor: "#ff5500",
      size: "medium"
    },
    {
      id: "streamline-hr",
      title: "Streamline HR",
      subtitle: "AI-Powered HR Management",
      description: "Employee management and applicant tracking system that utilizes AI to speed up HR processes and streamline operations.",
      imageUrl: "/images/work/streamline-hr/desktop.webp",
      mockupUrl: "/images/work/streamline-hr/desktop.webp",
      mobileImageUrl: "/images/work/streamline-hr/mobile.webp",
      category: ["Web App Development", "AI Integration", "Web Design", "Branding"],
      year: "2025",
      route: "/work/streamline-hr",
      websiteUrl: "streamline-hr.vercel.app",
      gradient: "from-[#ff5500] via-[#8b5cf6] to-[#6366f1]", // Orange to purple
      accentColor: "#8b5cf6",
      size: "medium"
    },
    {
      id: "pinkpizzaberlin",
      title: "Pink Pizza",
      subtitle: "Berlin's Trendy Pizzeria",
      description: "Modern website with online ordering, interactive menu design, and seamless Google Maps integration.",
      imageUrl: "/images/work/pinkpizzaberlin/desktop.webp",
      mockupUrl: "/images/work/pinkpizzaberlin/desktop.webp",
      mobileImageUrl: "/images/work/pinkpizzaberlin/mobile.webp",
      category: ["Web Design", "Branding", "Maps Integration"],
      year: "2025",
      route: "/work/pinkpizzaberlin",
      websiteUrl: "www.pinkpizza-berlin.de",
      gradient: "from-[#ff5500] via-[#ec4899] to-[#be185d]", // Orange to pink
      accentColor: "#ec4899",
      size: "medium"
    }
  ];

  // Get active project data
  const getActiveProject = () => {
    return projects.find(p => p.id === activeProject);
  };

  // Handle card click
  const handleCardClick = (projectId: string) => {
    setActiveProject(projectId);
    setPreviewMode('desktop'); // Reset to desktop when opening
  };

  // Handle close modal
  const handleCloseModal = () => {
    setActiveProject(null);
  };

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (activeProject) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [activeProject]);

  const activeProjectData = getActiveProject();

  return (
    <section className={`relative py-16 px-4 md:px-8 overflow-hidden transition-all duration-700 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black' 
        : 'bg-gradient-to-br from-white via-gray-50 to-orange-50/30'
    }`}>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Compact Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div 
              className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#ff5500]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <span className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide ${
              theme === 'dark'
                ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
            } shadow-lg backdrop-blur-sm`}>
              Selected Works
            </span>
            <motion.div 
              className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#ff5500]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </div>
          <h2 className={`text-3xl md:text-5xl font-black mb-6 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects that{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] to-[#ff8844]">
                inspire
              </span>
              <motion.div
                className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#ff5500] to-[#ff8844] rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Discover how we transform ideas into digital experiences that captivate and convert
          </p>
          
          {/* Interactive hint */}
          {!activeProject && (
            <motion.p 
              className={`text-sm mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              👆 Click on any project to see the preview
            </motion.p>
          )}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group perspective-1000 cursor-pointer transition-all duration-700"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleCardClick(project.id)}
            >
              <div className={`relative h-full min-h-[500px] rounded-2xl overflow-hidden transition-all duration-700 transform-gpu ${
                hoveredProject === project.id ? 'scale-[1.02]' : ''
              } ${
                activeProject === project.id ? 'ring-2 ring-[#ff5500]/50' : ''
              } ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50'
              } backdrop-blur-xl shadow-xl`}>
                
                {/* Project Image with Orange Background */}
                <div className="relative h-48 bg-[#ff5500] pt-4 px-4 overflow-hidden">
                  {/* Project Screenshot Container */}
                  <div className="relative h-full bg-white rounded-t-lg shadow-xl overflow-hidden">
                    {/* Project image */}
                    <div className="absolute inset-0">
                      <img 
                        src={project.imageUrl} 
                        alt={`${project.title} Website Screenshot`}
                        className="w-full h-full object-cover object-top"
                        style={{ objectPosition: 'top center' }}
                      />
                    </div>
                    
                    {/* Browser mockup bars */}
                    <div className="absolute top-0 left-0 right-0 h-6 bg-gray-200 dark:bg-gray-300 flex items-center px-2 gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <div className="flex-1 mx-2 h-3 bg-white rounded text-xs flex items-center px-2">
                        <span className="text-gray-500 text-[10px]">{project.websiteUrl}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Preview indicator */}
                  <motion.div
                    className="absolute top-6 right-6 w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-lg border border-white/30 bg-white/20 transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0.8
                    }}
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-5 flex flex-col h-[calc(100%-192px)]">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-2xl font-black ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {project.title}
                      </h3>
                      <span className="bg-[#ff5500]/10 border border-[#ff5500]/20 text-[#ff5500] px-3 py-1 rounded-lg text-xs font-bold">
                        {project.year}
                      </span>
                    </div>
                    <p className={`text-lg mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex-1">
                    <p className={`text-sm leading-relaxed mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description.length > 120 ? `${project.description.substring(0, 120)}...` : project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.category.slice(0, 3).map((cat, catIndex) => (
                        <motion.span 
                          key={cat}
                          className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                            theme === 'dark' ? 'bg-white/20 text-white' : 'bg-black/10 text-gray-900'
                          } backdrop-blur-sm`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: catIndex * 0.05 }}
                        >
                          {cat}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href={project.route}
                    className="group/link inline-flex items-center justify-center w-full py-3 bg-gradient-to-r from-[#ff5500] to-[#ff8844] text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compact Call to action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link 
            href="/work"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff8844] text-white rounded-2xl hover:shadow-xl transition-all duration-500 text-lg font-bold transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Explore All Projects</span>
            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-[#ff9955] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 scale-150" />
          </Link>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {activeProject && activeProjectData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop with gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-black/80 via-[#ff5500]/20 to-black/80 backdrop-blur-sm"
              onClick={handleCloseModal}
            />
            
            {/* Modal Content */}
            <motion.div
              className="relative z-10 w-full max-w-6xl mx-auto"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {activeProjectData.title}
                  </h3>
                  <div className="hidden md:flex gap-2">
                    {activeProjectData.category.slice(0, 3).map((cat) => (
                      <span 
                        key={cat}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/20 text-white backdrop-blur-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={handleCloseModal}
                  className="group w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Preview Content */}
              <div className="relative">
                {previewMode === 'mobile' && activeProjectData.mobileImageUrl ? (
                  // Mobile view centered
                  <div className="flex items-center justify-center min-h-[60vh]">
                    {/* Toggle buttons for mobile */}
                    <div className="absolute top-4 right-4 z-20 flex gap-2 bg-black/50 backdrop-blur-sm rounded-xl p-2">
                      <button
                        onClick={() => setPreviewMode('desktop')}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all text-white/70 hover:text-white hover:bg-white/10"
                      >
                        Desktop
                      </button>
                      <button
                        onClick={() => setPreviewMode('mobile')}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white text-gray-900 shadow-sm"
                      >
                        Mobile
                      </button>
                    </div>
                    
                    {/* Phone mockup - smaller size */}
                    <div className="relative bg-gray-900 rounded-[1.8rem] p-2 shadow-2xl">
                      <div className="bg-white rounded-[1.3rem] overflow-hidden shadow-lg" style={{ width: '260px', height: '520px' }}>
                        {/* Mobile status bar */}
                        <div className="bg-white h-7 flex items-center justify-between px-5 text-xs text-gray-800 border-b border-gray-100">
                          <span className="font-semibold">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-2 border border-gray-400 rounded-sm">
                              <div className="w-3 h-1 bg-green-500 rounded-sm"></div>
                            </div>
                          </div>
                        </div>
                        {/* Mobile website content */}
                        <div className="h-[calc(100%-28px)] overflow-hidden">
                          <img 
                            src={activeProjectData.mobileImageUrl} 
                            alt={`${activeProjectData.title} Mobile Preview`}
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Desktop view - more compact width
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 max-w-4xl mx-auto">
                    {/* Browser chrome with toggle */}
                    <div className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="px-4 py-2 rounded-lg text-sm bg-white/20 text-white">
                          {activeProjectData.websiteUrl}
                        </div>
                      </div>
                      
                      {/* Toggle buttons - only show if mobile image exists */}
                      {activeProjectData.mobileImageUrl && (
                        <div className="flex gap-2 bg-black/30 rounded-xl p-2">
                          <button
                            onClick={() => setPreviewMode('desktop')}
                            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all bg-white text-gray-900 shadow-sm"
                          >
                            Desktop
                          </button>
                          <button
                            onClick={() => setPreviewMode('mobile')}
                            className="px-4 py-2 rounded-lg text-sm font-semibold transition-all text-white/70 hover:text-white hover:bg-white/10"
                          >
                            Mobile
                          </button>
                        </div>
                      )}
                    </div>
                    
                    {/* Desktop preview - balanced proportions */}
                    <div className="relative bg-white" style={{ height: '55vh', minHeight: '380px' }}>
                      <img 
                        src={activeProjectData.mockupUrl} 
                        alt={`${activeProjectData.title} Desktop Preview`}
                        className="w-full h-full object-contain object-top bg-gray-100"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="mt-6 text-center">
                <p className="text-white/80 text-lg mb-4 max-w-2xl mx-auto">
                  {activeProjectData.description}
                </p>
                <Link 
                  href={activeProjectData.route}
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#ff5500] to-[#ff8844] text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <span>View Full Project</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}