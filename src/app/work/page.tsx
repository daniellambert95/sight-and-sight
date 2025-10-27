'use client';

import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';
import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  UserIcon,
  GlobeAltIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

export default function Work() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);

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
      year: "2024",
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
      image: "/images/work/carter/hero.jpg",
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
      year: "2024",
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
      image: "/images/work/millerdzn/hero.jpg",
      color: "from-purple-600 to-pink-600",
      featured: true,
      liveUrl: "https://millerdzn.com"
    },
    {
      id: "momentum",
      title: "Momentum",
      subtitle: "Content Creation & Social Media Agency",
      client: "Momentum",
      year: "2024",
      duration: "3 months",
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
      image: "/images/work/momentum/hero.jpg",
      color: "from-blue-600 to-indigo-600",
      featured: true,
      liveUrl: "https://momentum.ie"
    },
    {
      id: "pink-pizza-berlin",
      title: "Pink Pizza Berlin",
      subtitle: "Local Pizzeria Digital Transformation",
      client: "Pink Pizza Berlin",
      year: "2024",
      duration: "2 months",
      category: "E-commerce",
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
      image: "/images/work/pinkpizza/hero.jpg",
      color: "from-pink-500 to-red-500",
      featured: false,
      liveUrl: "https://pinkpizzaberlin.de"
    },
    {
      id: "streamline-hr",
      title: "Streamline HR",
      subtitle: "Enterprise HR Management System",
      client: "Streamline HR",
      year: "2024",
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
      image: "/images/work/streamline/hero.jpg",
      color: "from-blue-500 to-cyan-500",
      featured: false,
      liveUrl: "https://streamlinehr.com"
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  const categories = ['all', 'Service Business', 'Creative/Agency', 'E-commerce', 'Enterprise/SaaS'];

  // Featured projects for carousel
  const featuredProjects = projects.filter(p => p.featured);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="work" />

      {/* Hero Section - Clean & Minimal */}
      <section className={`relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 pt-36 md:pt-32 transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-950 to-black'
          : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <h1 className={`text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block">Our</span>
                <span className="block text-[#ff5500]">Work</span>
                <span className={`block text-3xl md:text-4xl lg:text-5xl font-light mt-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  real projects, real results
                </span>
              </h1>

              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                From local businesses to enterprise solutions, we craft digital experiences
                that deliver measurable results and drive real growth.
              </p>

              <div className="pt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
                >
                  <span>Start Your Project</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Featured Projects Carousel */}
            <div className="space-y-8">
              {/* Real Impact Stats - Top 2 Only */}
              <div className="grid grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm shadow-xl`}>
                  <div className="text-4xl font-black text-[#ff5500] mb-2">100+</div>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    5-Star Reviews
                  </div>
                  <div className={`text-xs mt-1 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    Pink Pizza Berlin
                  </div>
                </div>

                <div className={`p-6 rounded-2xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm shadow-xl`}>
                  <div className="text-4xl font-black text-[#ff5500] mb-2">1 Week</div>
                  <div className={`text-sm font-semibold ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    To First Client
                  </div>
                  <div className={`text-xs mt-1 ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    Carter Tree Care
                  </div>
                </div>
              </div>

              {/* Featured Projects Carousel */}
              <div className="relative">
                <div className={`overflow-hidden rounded-3xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm shadow-xl`}>
                  <div className="relative h-full min-h-[400px]">
                    {/* Slides */}
                    {featuredProjects.map((project, index) => (
                      <div
                        key={project.id}
                        className={`absolute inset-0 p-8 transition-all duration-500 ${
                          index === currentSlide
                            ? 'opacity-100 translate-x-0'
                            : index < currentSlide
                            ? 'opacity-0 -translate-x-full'
                            : 'opacity-0 translate-x-full'
                        }`}
                      >
                        <div className="h-full flex flex-col justify-between">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="px-3 py-1 bg-[#ff5500]/20 text-[#ff5500] rounded-full text-xs font-bold">
                                FEATURED PROJECT {index + 1}/{featuredProjects.length}
                              </span>
                              <span className={`text-xs font-medium ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {project.category}
                              </span>
                            </div>

                            <div>
                              <h3 className={`text-3xl font-bold mb-3 ${
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
                          </div>

                          <div className="space-y-4">
                            <div className={`pt-6 border-t ${
                              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                            }`}>
                              <div className="flex items-center justify-between mb-4">
                                <div>
                                  <div className="text-2xl font-black text-[#ff5500]">
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

                              <button
                                onClick={() => openModal(project)}
                                className="w-full py-3 bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold rounded-2xl transition-colors flex items-center justify-center gap-2"
                              >
                                <span>View Case Study</span>
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevSlide}
                    className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    <ChevronLeftIcon className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-700 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                    }`}
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {featuredProjects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentSlide
                            ? 'bg-[#ff5500] w-8'
                            : theme === 'dark'
                            ? 'bg-gray-600'
                            : 'bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={`py-16 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-gray-950' : 'bg-gray-50'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
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
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Featured <span className="text-[#ff5500]">Projects</span>
            </h2>
            <p className={`text-xl max-w-3xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore how we've transformed businesses through strategic design and development
            </p>
          </div>

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
                {/* Project Image Placeholder */}
                <div className={`relative h-64 overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
                }`}>
                  {/* Placeholder with project initial */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-8xl font-black opacity-20 ${
                      theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {project.title.charAt(0)}
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.featured
                        ? 'bg-[#ff5500]/90 text-white'
                        : theme === 'dark'
                        ? 'bg-gray-900/80 text-gray-300'
                        : 'bg-white/80 text-gray-700'
                    }`}>
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
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              What Our Clients <span className="text-[#ff5500]">Say</span>
            </h2>
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Real results from real businesses who trusted us with their digital transformation
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James Carter",
                position: "Business owner, Der Baumchirurg",
                content: "Customers are flying in after getting my site designed by Daniel. The main focus was SEO but it also looks amazing! Very satisfied!",
                rating: 5
              },
              {
                name: "Geoff Miller",
                position: "Creative Director, MDZN Dubai",
                content: "S&S creatively and expertly delivered on their promise for my new website millerdesign.ai. Their process was efficient professional and seamless as they also contributed extra help with copywriting, seo, design, analytics, and were a pleasure to work with along the way.",
                rating: 5
              },
              {
                name: "Engin",
                position: "Cofounder, PinkPizza Berlin",
                content: "Daniel really helped with our online presence by setting up and optimizing our Google Maps listing so we could start receiving reviews while also creating stunning branded menus and website.",
                rating: 5
              },
              {
                name: "Ronan Byrne",
                position: "Founder, Streamline HR",
                content: "Outstanding work! The website they created exceeded all our expectations. The design is modern, fast, and email signup rates are much better than expected.",
                rating: 5
              },
              {
                name: "Thorsten",
                position: "Owner, Restaurant Osterberger",
                content: "You have conveyed this in a totally great and understandable way, I am completely inspired and full of drive to implement your improvements. Best wishes also to Killian.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className={`group relative ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl`}
              >
                <div className="space-y-6">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#ff5500] fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className={`text-base leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    &quot;{testimonial.content}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff5500] to-orange-600 flex items-center justify-center text-white flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <div className={`text-base font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {testimonial.name}
                      </div>
                      <p className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-5xl mx-auto text-center space-y-12">
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
        </div>
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
                  <h3 className="text-4xl font-black mb-2">{selectedProject.title}</h3>
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
