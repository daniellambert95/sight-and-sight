'use client';

import { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../utils/ThemeProvider';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  UserIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import TestimonialsSection from '../components/TestimonialsSection';

export default function Work() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('all');
  
  // Refs for parallax effects
  const heroRef = useRef(null);
  const filterRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Parallax scroll animations
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  // Transform values for parallax
  const backgroundY = useTransform(heroScrollProgress, [0, 1], ['0%', '50%']);
  const heroContentY = useTransform(heroScrollProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.5], [1, 0]);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Real projects
  const projects = [
    {
      id: "carter-tree-care",
      title: "Carter Tree Care & Der Baumchirurg",
      subtitle: "Bilingual Tree Surgery Service Websites",
      client: "James Carter",
      year: "2025",
      duration: "2 months",
      category: "Service Business",
      description: "Professional websites for tree surgery services operating across Ireland and Germany, establishing market presence in both countries.",
      longDescription: "James Carter required professional digital presence for his tree surgery business operating in both Ireland and Germany. We developed two complementary websites that maintain brand consistency while serving distinct markets with localized content.",
      challenge: "Creating separate but cohesive websites for two markets while establishing credibility and generating qualified leads for a specialized service business.",
      solution: "Two professionally designed websites with localized content, service showcases, and seamless booking systems that establish expertise and trust in both markets.",
      results: {
        primary: "First client in 1 week",
        secondary: [
          { metric: "2", label: "Market-specific websites" },
          { metric: "100%", label: "Lead quality score" },
          { metric: "1 week", label: "To first inquiry & client" }
        ]
      },
      technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      services: ["Web Design", "Dual-Market Strategy", "Lead Generation", "Local SEO"],
      image: "/images/work/cartertreecare/cartertreecare.webp",
      color: "from-green-600 to-emerald-600",
      featured: true,
      liveUrl: "https://cartertreecare.com",
      germanUrl: "https://derbaumchirurg.de"
    },
    {
      id: "miller-dzn",
      title: "Miller DZN",
      subtitle: "Creative Portfolio & Brand Showcase",
      client: "Geoff Miller Design",
      year: "2025",
      duration: "2 months",
      category: "Creative/Agency",
      description: "Stunning portfolio website for a Dubai-based graphic designer and content creator, showcasing creative excellence.",
      longDescription: "Geoff Miller needed a portfolio website that would match the quality of his graphic design and content creation work while attracting high-value clients in Dubai's competitive creative market.",
      challenge: "Creating a portfolio that showcases creative work while maintaining fast performance and professional presentation for Dubai's luxury market.",
      solution: "A visually striking portfolio website with optimized image galleries, case study presentations, and seamless client inquiry system.",
      results: {
        primary: "Premium portfolio",
        secondary: [
          { metric: "Fast", label: "Performance optimized" },
          { metric: "Luxury", label: "Dubai market ready" },
          { metric: "Stunning", label: "Visual presentation" }
        ]
      },
      technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
      services: ["Web Design", "Portfolio Development", "CMS Integration", "Brand Showcase"],
      image: "/images/work/mdzn/millerdzn.webp",
      color: "from-purple-600 to-pink-600",
      featured: true,
      liveUrl: "https://millerdzn.com"
    },
    {
      id: "momentum",
      title: "Momentum",
      subtitle: "Content Creation & Social Media Agency",
      client: "Momentum",
      year: "2025",
      duration: "1.5 months",
      category: "Creative/Agency",
      description: "Dynamic website for an Irish content creation and social media management agency based in Wicklow.",
      longDescription: "Momentum needed a website that would reflect their creative energy while effectively communicating their content creation and social media management services to potential clients.",
      challenge: "Building a website that captures the dynamic nature of social media and content creation while converting visitors into clients.",
      solution: "An engaging website with portfolio showcases, service breakdowns, and integrated client onboarding system.",
      results: {
        primary: "Agency presence",
        secondary: [
          { metric: "Dynamic", label: "Brand presentation" },
          { metric: "Engaging", label: "User experience" },
          { metric: "Wicklow", label: "Local market leader" }
        ]
      },
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      services: ["Web Design", "Agency Branding", "Portfolio System", "Client Onboarding"],
      image: "/images/work/momentum/mo-mentum.webp",
      color: "from-blue-600 to-indigo-600",
      featured: true,
      liveUrl: "https://momentum.ie"
    },
    {
      id: "pink-pizza-berlin",
      title: "Pink Pizza Berlin",
      subtitle: "Local Pizzeria Digital Transformation",
      client: "Pink Pizza Berlin",
      year: "2025",
      duration: "1 month",
      category: "Gastronomy",
      description: "Complete digital transformation for a Prenzlauer Berg pizzeria, dramatically increasing local visibility and customer traffic.",
      longDescription: "Pink Pizza Berlin needed to establish a strong digital presence in the competitive Berlin food scene. We created a website and implemented a comprehensive local SEO strategy.",
      challenge: "Increasing foot traffic and brand visibility for a local pizzeria in Berlin's competitive Prenzlauer Berg neighborhood.",
      solution: "Website launch with Google Maps optimization and local SEO strategy that transformed their digital presence and customer acquisition.",
      results: {
        primary: "100+ 5-star reviews",
        secondary: [
          { metric: "Massive", label: "Store traffic increase" },
          { metric: "Top 3", label: "Google Maps ranking" },
          { metric: "5-star", label: "Review rating" }
        ]
      },
      technologies: ["Next.js", "Google Maps API", "Tailwind CSS", "Local SEO"],
      services: ["Web Design", "Google Maps Optimization", "Local SEO", "Review Management"],
      image: "/images/work/pinkpizzaberlin/pinkpizzaberlin.webp",
      color: "from-pink-500 to-red-500",
      featured: false,
      liveUrl: "https://pinkpizzaberlin.de"
    },
    {
      id: "streamline-hr",
      title: "Streamline HR",
      subtitle: "Enterprise HR Management System",
      client: "Streamline HR",
      year: "2025",
      duration: "6 months",
      category: "Enterprise/SaaS",
      description: "Comprehensive employee management system and applicant tracking platform for modern HR departments.",
      longDescription: "Streamline HR required a full-featured HR management system combining employee management with applicant tracking capabilities for growing businesses.",
      challenge: "Building a complex, enterprise-grade HR system that remains intuitive and easy to use while handling sensitive employee data securely.",
      solution: "A comprehensive platform combining employee management, applicant tracking, and HR workflows with robust security and user-friendly interface.",
      results: {
        primary: "Full HR platform",
        secondary: [
          { metric: "Secure", label: "Enterprise-grade security" },
          { metric: "Complete", label: "Full HR workflow" },
          { metric: "Intuitive", label: "User experience" }
        ]
      },
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
      services: ["Full-Stack Development", "Database Design", "Security Implementation", "UI/UX Design"],
      image: "/images/work/streamline-hr/streamlinehr.webp",
      color: "from-blue-500 to-cyan-500",
      featured: false,
      liveUrl: "https://streamlinehr.com"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  const categories = ['all', 'Service Business', 'Creative/Agency', 'Gastronomy', 'Enterprise/SaaS'];


  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="work" />

      {/* Hero Section - Modern Graphic Design with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center overflow-hidden pt-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-24">

          {/* Main Typography */}
          <div className="relative">

            {/* Large "WORK" text as background - Parallax Effect */}
            <motion.div 
              style={{ y: backgroundY, opacity: heroOpacity }}
              className="absolute -top-32 md:-top-40 lg:-top-20 -left-8 md:-left-12 lg:-left-16 pointer-events-none select-none"
            >
              <h2 className={`text-[12rem] sm:text-[16rem] md:text-[20rem] lg:text-[25rem] xl:text-[28rem] font-black leading-none tracking-tighter ${
                theme === 'dark'
                  ? 'text-gray-800'
                  : 'text-black/[0.03]'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}>
                WORK
              </h2>
            </motion.div>

            {/* Main Content - Parallax Effect */}
            <motion.div 
              style={{ y: heroContentY }}
              className="relative z-10 space-y-8 md:space-y-10 lg:space-y-12"
            >
              {/* Hero Title */}
              <div>
                <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.9] tracking-tighter ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  <span className="block">Our</span>
                  <span className="block text-[#ff5500] italic">Work</span>
                </h1>
              </div>

              {/* Description & CTAs */}
              <div className="max-w-2xl space-y-6">
                <p className={`text-lg md:text-xl lg:text-2xl font-light leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                style={{ fontFamily: 'var(--font-inter)' }}>
                  Real projects, real results. From local businesses to enterprise solutions,
                  we craft digital experiences that deliver measurable impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
                  >
                    <span>Start Your Project</span>
                    <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="#projects"
                    className={`group inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 ${
                      theme === 'dark'
                        ? 'bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                        : 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
                    } shadow-xl`}
                  >
                    <span>View Work</span>
                    <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="flex items-center gap-4 pt-6">
                <div className={`h-0.5 w-16 md:w-24 ${
                  theme === 'dark' ? 'bg-white/50' : 'bg-black/50'
                }`} />
                <div className={`text-xs md:text-sm font-semibold uppercase tracking-widest ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  Scroll to Explore
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section ref={filterRef} className={`py-16 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#ff5500] text-white'
                    : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                {category === 'all' ? 'All Projects' : category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} id="projects" className={`relative py-32 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Featured <span className="text-[#ff5500]">Projects</span>
            </h2>
            <p className={`text-xl max-w-3xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore how we've transformed businesses through strategic design and development
            </p>
          </motion.div>

          {/* Projects Grid - Clean Cards with Images */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => openModal(project)}
                className={`group relative cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-500 shadow-xl`}
              >
                {/* Project Image */}
                <div className={`relative h-64 overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm bg-[#ff5500]/90 text-white">
                      {project.category}
                    </span>
                  </div>
                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity ${
                      theme === 'dark' ? 'bg-gray-900/80' : 'bg-white/80'
                    }`}>
                      <ArrowTopRightOnSquareIcon className={`w-5 h-5 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Project Info */}
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold mb-2 group-hover:text-[#ff5500] transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-base mb-4 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {project.subtitle}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className={`pt-6 border-t ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xl font-black text-[#ff5500]">
                          {project.results.primary}
                        </div>
                        <div className={`text-xs ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          Key Result
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-semibold ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {project.client}
                        </div>
                        <div className={`text-xs ${
                          theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                        }`}>
                          {project.year}
                        </div>
                      </div>
                    </div>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.services.slice(0, 3).map((service, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            theme === 'dark'
                              ? 'bg-gray-800 text-gray-400'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action */}
      <section ref={ctaRef} className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center space-y-12"
        >
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to join our
            <br />
            <span className="text-[#ff5500]">success stories?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let&apos;s discuss how we can help you achieve similar results and transform your digital presence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
            >
              <span>Start Your Project</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/services"
              className={`group inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 ${
                theme === 'dark'
                  ? 'bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                  : 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              } shadow-xl`}
            >
              <span>View Services</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Enhanced Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-700'
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with gradient background */}
            <div className={`relative p-8 bg-gradient-to-br ${selectedProject.color} text-white rounded-t-3xl`}>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-colors text-xl"
              >
                ×
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-4 flex-wrap">
                  <div className="text-sm font-medium opacity-90">{selectedProject.category}</div>
                  <div className="text-sm font-medium opacity-90">•</div>
                  <div className="text-sm font-medium opacity-90">{selectedProject.year}</div>
                  <div className="text-sm font-medium opacity-90">•</div>
                  <div className="text-sm font-medium opacity-90">{selectedProject.duration}</div>
                </div>

                <div>
                  <h3 className="text-4xl font-black mb-2" style={{ fontFamily: 'var(--font-league-spartan)' }}>{selectedProject.title}</h3>
                  <p className="text-xl opacity-90 mb-4">{selectedProject.subtitle}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black">{selectedProject.results.primary}</div>
                    <div className="text-sm opacity-75">Key Result</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">Client</div>
                    <div className="text-sm opacity-90">{selectedProject.client}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Project Image */}
              <div className={`relative w-full h-[400px] rounded-2xl overflow-hidden ${
                theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
              }`}>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>

              {/* Project Overview */}
              <div>
                <h4 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Project Overview</h4>
                <p className={`text-lg leading-relaxed mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-lg font-bold mb-3 text-red-500`}>Challenge</h4>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedProject.challenge}
                  </p>
                </div>
                <div>
                  <h4 className={`text-lg font-bold mb-3 text-green-500`}>Solution</h4>
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className={`text-xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Results & Impact</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  {selectedProject.results.secondary.map((result, index) => (
                    <div key={index} className={`p-4 rounded-2xl ${
                      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                    }`}>
                      <div className="text-2xl font-black text-[#ff5500] mb-1">{result.metric}</div>
                      <div className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services & Technologies */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-lg font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Services Provided</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm ${
                        theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className={`text-lg font-bold mb-3 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className={`px-3 py-1 rounded-full text-sm border ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300'
                          : 'border-gray-300 text-gray-700'
                      }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Site Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className={`text-lg font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>View Live Project</h4>
                <div className="flex flex-wrap gap-4">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-2xl transition-colors"
                    >
                      <GlobeAltIcon className="w-5 h-5" />
                      <span>Visit Website</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  )}
                  {selectedProject.germanUrl && (
                    <a
                      href={selectedProject.germanUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-colors border-2 ${
                        theme === 'dark'
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <GlobeAltIcon className="w-5 h-5" />
                      <span>German Site</span>
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-2xl transition-colors"
                    onClick={closeModal}
                  >
                    <span>Start Similar Project</span>
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
