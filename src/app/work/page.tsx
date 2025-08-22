'use client';

import { useState } from 'react';
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useTheme } from '../utils/ThemeProvider';

export default function WorkPage() {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

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

  // Enhanced project data with real metrics and better descriptions
  const projects = [
    {
      id: 'pinkpizzaberlin',
      title: "Pink Pizza Berlin",
      category: "restaurant",
      tags: ["Web Design", "E-commerce", "Local SEO"],
      description: "Transformed a local Berlin pizzeria's digital presence with online ordering, resulting in 300% increase in digital orders.",
      client: "Pink Pizza Berlin",
      year: "2024",
      metrics: "+300% online orders",
      featured: true,
      image: "/projects/pink-pizza-thumb.jpg",
      color: "bg-pink-500"
    },
    {
      id: 'derbaumchirurg',
      title: "Der Baumchirurg",
      category: "service",
      tags: ["Web Design", "Local SEO", "Lead Generation"],
      description: "Professional website for a tree surgery company, optimized for local search and lead generation.",
      client: "Der Baumchirurg",
      year: "2024",
      metrics: "+150% leads",
      featured: true,
      image: "/projects/baumchirurg-thumb.jpg",
      color: "bg-green-600"
    },
    {
      id: 'techstartup',
      title: "TechFlow Startup",
      category: "tech",
      tags: ["Branding", "Web Design", "UI/UX"],
      description: "Complete brand identity and website for a Berlin-based fintech startup securing their Series A funding.",
      client: "TechFlow",
      year: "2023",
      metrics: "Series A secured",
      featured: false,
      image: "/projects/techflow-thumb.jpg",
      color: "bg-blue-600"
    },
    {
      id: 'ecommerce',
      title: "Sustainable Fashion Store",
      category: "ecommerce",
      tags: ["E-commerce", "UI/UX", "Conversion Optimization"],
      description: "E-commerce platform redesign focusing on sustainability messaging and conversion optimization.",
      client: "GreenThread",
      year: "2023",
      metrics: "+85% conversion rate",
      featured: false,
      image: "/projects/greenthread-thumb.jpg",
      color: "bg-emerald-600"
    },
    {
      id: 'videoshowcase',
      title: "Motion Graphics Showcase",
      category: "video",
      tags: ["Video Editing", "Motion Graphics", "Brand Videos"],
      description: "Collection of promotional videos and motion graphics for various Berlin businesses.",
      client: "Multiple Clients",
      year: "2024",
      metrics: "50M+ views",
      featured: false,
      image: "/projects/video-thumb.jpg",
      color: "bg-purple-600"
    },
    {
      id: 'realestate',
      title: "Berlin Real Estate Agency",
      category: "service",
      tags: ["Web Design", "CRM Integration", "Lead Generation"],
      description: "Modern website with property showcase and CRM integration for a premium Berlin real estate agency.",
      client: "Berlin Premier Properties",
      year: "2023",
      metrics: "+200% qualified leads",
      featured: false,
      image: "/projects/realestate-thumb.jpg",
      color: "bg-orange-600"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'restaurant', name: 'Restaurants', count: projects.filter(p => p.category === 'restaurant').length },
    { id: 'service', name: 'Service Businesses', count: projects.filter(p => p.category === 'service').length },
    { id: 'tech', name: 'Tech & Startups', count: projects.filter(p => p.category === 'tech').length },
    { id: 'ecommerce', name: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'video', name: 'Video & Motion', count: projects.filter(p => p.category === 'video').length },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="work" />

      {/* Hero Section - Modern Creative Design */}
      <section className={`relative min-h-[80vh] flex items-center overflow-hidden transition-colors duration-300 pt-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-purple-50 to-blue-50'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          {/* Medium Circle */}
          <div className={`absolute bottom-20 -left-16 w-48 h-48 rounded-full opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          {/* Small geometric shapes */}
          <div className={`absolute top-1/4 right-1/4 w-8 h-8 rotate-45 opacity-30 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/4 w-6 h-6 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
          }`}></div>
          <div className={`absolute top-1/2 left-1/3 w-4 h-4 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-400'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full py-16">
          <div className="text-center">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                🎨 Our Work
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-none ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="block">Real projects,</span>
              <span className="block text-[#ff5500]">real results.</span>
              <span className={`block text-4xl md:text-5xl lg:text-6xl font-bold mt-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
               
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              See how we've helped Berlin businesses <span className="font-semibold text-[#ff5500]">grow their digital presence</span> and drive measurable success.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { number: "10+", label: "Projects Completed" },
                { number: "200%", label: "Average Growth" },
                { number: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg border ${
                    theme === 'dark' 
                      ? 'bg-black/40 border-gray-700/50 text-gray-300' 
                      : 'bg-white/70 border-white/50 text-gray-700'
                  }`}
                >
                  <div className="text-2xl font-black text-[#ff5500]">{stat.number}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button 
                onClick={() => document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="relative z-10">Explore Our Work</span>
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects - Modern Creative Style */}
      <section id="featured-projects" className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-32 h-32 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-20 left-10 w-20 h-20 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-300'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                ⭐ Featured
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>

            <motion.h2 
              className={`text-4xl md:text-5xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Case <span className="text-[#ff5500]">studies</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Deep dives into our most successful projects
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                variants={fadeIn}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Project Image Area */}
                  <div className={`h-64 ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    {/* Featured Badge */}
                    <div className="absolute top-6 left-6">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Featured
                      </span>
                    </div>
                    
                    {/* Metrics */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-3xl font-black">{project.metrics}</div>
                      <div className="text-sm opacity-80">Project Impact</div>
                    </div>

                    {/* View Button */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className={`text-2xl font-black ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{project.title}</h3>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>{project.year}</span>
                    </div>
                    
                    <div className="mb-4">
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.client}
                      </span>
                    </div>
                    
                    <p className={`mb-6 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className={`text-xs px-3 py-1 rounded-full ${
                            theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/work/${project.id}`}
                      className="inline-flex items-center text-[#ff5500] font-bold hover:text-[#ff6600] transition-colors group/link"
                    >
                      <span>View Case Study</span>
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Filter & Grid - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute top-1/3 right-1/3 w-8 h-8 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-400'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                🎯 All Projects
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>

            <motion.h2 
              className={`text-4xl md:text-5xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-[#ff5500]">portfolio</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Browse through our complete collection of projects
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category.id
                    ? 'bg-[#ff5500] text-white shadow-lg'
                    : theme === 'dark'
                    ? 'bg-gray-800/60 text-gray-300 border border-gray-700/50 hover:bg-gray-700/60'
                    : 'bg-white/80 text-gray-700 border border-white/50 hover:bg-gray-50'
                } backdrop-blur-sm`}
              >
                {category.name}
                <span className={`ml-2 text-sm ${
                  activeFilter === category.id ? 'text-white/80' : 'text-gray-500'
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                layout
                variants={fadeIn}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-white/50 shadow-xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className={`h-48 ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Featured
                        </span>
                      </div>
                    )}
                    
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="text-lg font-bold">{project.metrics}</div>
                    </div>

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
                    <div className="flex items-start justify-between mb-3">
                      <h3 className={`text-lg font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                      }`}>{project.year}</span>
                    </div>
                    
                    <div className="mb-3">
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.client}
                      </span>
                    </div>
                    
                    <p className={`text-sm mb-4 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className={`text-xs px-2 py-1 rounded-full ${
                            theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}>
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                    
                    <Link 
                      href={`/work/${project.id}`}
                      className="inline-flex items-center text-[#ff5500] font-semibold hover:text-[#ff6600] transition-colors text-sm group/link"
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
        </div>
      </section>

      {/* Video Showcase Section - Modern Creative Style */}
      <section id="video-showcase" className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-10 w-36 h-36 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-red-500' : 'bg-red-300'
          }`}></div>
          <div className={`absolute bottom-20 left-20 w-28 h-28 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                theme === 'dark'
                  ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                  : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
              }`}>
                🎬 Video & Motion
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>

            <motion.h2 
              className={`text-4xl md:text-5xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Video <span className="text-[#ff5500]">showcase</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Motion graphics and video content that brings brands to life
            </p>
          </div>

          {/* Video Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Brand Promotional Videos",
                description: "Dynamic promotional content for Berlin businesses",
                duration: "30-60 seconds",
                views: "2M+ views",
                color: "bg-gradient-to-br from-red-500 to-pink-600"
              },
              {
                title: "Motion Graphics & Animations",
                description: "Engaging animated content for social media and web",
                duration: "15-30 seconds", 
                views: "1.5M+ views",
                color: "bg-gradient-to-br from-purple-500 to-blue-600"
              }
            ].map((video, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Video Preview Area */}
                  <div className={`h-64 ${video.color} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300"></div>
                    
                    {/* Play Button */}
                    <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    
                    {/* Video Stats */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="text-2xl font-black">{video.views}</div>
                      <div className="text-sm opacity-80">{video.duration}</div>
                    </div>
                  </div>
                  
                  {/* Video Content */}
                  <div className="p-8">
                    <h3 className={`text-2xl font-black mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{video.title}</h3>
                    
                    <p className={`mb-6 leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {video.description}
                    </p>
                    
                    <button className="inline-flex items-center text-[#ff5500] font-bold hover:text-[#ff6600] transition-colors group/link">
                      <span>Watch Showcase</span>
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 01-3 3H9a3 3 0 01-3-3V4a3 3 0 013-3h8a3 3 0 013 3z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Modern Creative Style */}
      <section className={`relative py-24 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800' : 'bg-gradient-to-br from-white via-blue-50 to-white'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-10 w-48 h-48 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/20'
          }`}></div>
          <div className={`absolute bottom-10 left-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-blue-400' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute top-1/3 left-1/4 w-12 h-12 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
          }`}></div>
          <div className={`absolute bottom-1/3 right-1/3 w-8 h-8 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-400'
          }`}></div>
        </div>

        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              theme === 'dark'
                ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
            }`}>
              🚀 Start Your Project
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>

          {/* Main Heading */}
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Ready to create</span>
            <span className="block">your <span className="text-[#ff5500]">success story?</span></span>
          </h2>

          <p className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's discuss your project and create something <span className="font-semibold text-[#ff5500]">extraordinary</span> together.
            <span className="block mt-2">Your success story starts here.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/contact" 
              className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              <span className="relative z-10">Start Your Project</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              {/* Button glow effect */}
              <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/pricing" 
              className={`group relative inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 backdrop-blur-sm ${
                theme === 'dark' 
                  ? 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50' 
                  : 'bg-black/5 text-gray-900 border-gray-900/30 hover:bg-black/10 hover:border-gray-900/50'
              } shadow-xl hover:shadow-2xl transform hover:scale-105`}
            >
              <span className="relative z-10">View Pricing</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Free consultation</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Custom solutions</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Proven results</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Berlin-based team</span>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
} 