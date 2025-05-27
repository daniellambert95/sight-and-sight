'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from "next/link";
import { useTheme } from "../utils/ThemeProvider";

export default function ProjectsSection() {
  const { theme } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

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

  // Project data
  const projects = [
    {
      id: "miller-design",
      title: "MDZN - Miller Design", 
      description: "A modern website for a design studio showcasing their expert services and portfolio.",
      imageUrl: "/pink-hero.jpg",
      category: ["Web Design", "SEO", "Branding", "Logo Design"],
      year: "2025",
      route: "/work",
      color: "bg-gradient-to-br from-purple-500 to-purple-700"
    },
    {
      id: "derbaumchirurg",
      title: "Der Baumchirurg",
      description: "A professional website for a tree surgery and garden maintenance company showcasing their expert services and portfolio.",
      imageUrl: "/pink-hero.jpg", 
      category: ["Web Design", "SEO", "Branding", "Logo Design"],
      year: "2025",
      route: "/work",
      color: "bg-gradient-to-br from-green-500 to-green-700"
    },
    {
      id: "pinkpizzaberlin",
      title: "Pink Pizza Berlin",
      description: "A modern website for a trendy Berlin pizzeria featuring online ordering, menu design, and Google Maps integration.",
      imageUrl: "/pink-hero.jpg",
      category: ["Web Design", "Branding", "Google Maps"],
      year: "2025",
      route: "/work/pinkpizzaberlin",
      color: "bg-gradient-to-br from-pink-500 to-red-600"
    }
  ];

  return (
    <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
    }`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-36 h-36 rounded-full opacity-10 ${
          theme === 'dark' ? 'bg-red-500' : 'bg-red-300'
        }`}></div>
        <div className={`absolute bottom-20 left-20 w-28 h-28 rotate-45 opacity-15 ${
          theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
        }`}></div>
      </div>

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
              🎯 Our Work
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects that <span className="text-[#ff5500]">make an impact</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            See how we've helped businesses transform their digital presence
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeIn}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                  : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-white/50 shadow-2xl shadow-gray-200/50'
              } backdrop-blur-sm`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Project Image Area */}
                <div className={`h-48 ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-primary bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/40 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.year}
                    </span>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{project.title}</h3>
                  
                  <p className={`text-sm mb-4 leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description.length > 80 
                      ? `${project.description.substring(0, 80)}...` 
                      : project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.category.map((cat) => (
                      <span 
                        key={cat} 
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={project.route}
                    className="inline-flex items-center text-[#ff5500] font-semibold hover:text-[#ff6600] transition-colors group/link"
                  >
                    <span>View Project</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link 
            href="/work"
            className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <span className="relative z-10">View All Projects</span>
            <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 