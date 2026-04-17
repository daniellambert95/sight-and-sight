'use client';

import { useState, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../utils/ThemeProvider';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { ExternalLink, ArrowRight } from 'lucide-react';
import QuoteModal from '../components/QuoteModal';

const projects = [
  {
    id: "carter-tree-care",
    title: "Carter Tree Care",
    subtitle: "Tree Surgery & Maintenance",
    client: "James Carter",
    year: "2025",
    category: "Service Business",
    description: "Professional website for a tree surgery business operating in Ireland, establishing a strong digital presence and generating qualified leads.",
    longDescription: "James Carter needed a professional digital presence for his tree surgery business in Ireland. We built a clean, credible website that clearly communicates his services, builds trust with prospective clients, and drives consistent lead generation.",
    challenge: "Establishing credibility online for a specialist trade service and converting website visitors into qualified leads.",
    solution: "A professionally designed website with service showcases, trust signals, and a streamlined contact system — built to generate real enquiries from day one.",
    results: {
      primary: "Clients within weeks of launch",
      secondary: [
        { metric: "Fast", label: "Lead generation" },
        { metric: "Strong", label: "Local market presence" },
        { metric: "Growing", label: "Client base" }
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    services: ["Web Design", "Lead Generation", "Local SEO", "Copywriting"],
    image: "/images/work/cartertreecare/cartertreecare.webp",
    color: "from-green-600 to-emerald-600",
    featured: true,
    liveUrl: "https://cartertreecare.ie"
  },
  {
    id: "dignified-life",
    title: "Dignified Life",
    subtitle: "Divorce Guidance & Support Services",
    client: "Karen Campbell",
    year: "2026",
    category: "Service Business",
    description: "A fully automated client management system for a divorce guidance service — website, CRM, payments, booking, email marketing, and finance, all connected.",
    longDescription: "Karen Campbell offers divorce guidance as a service and needed more than just a website. We built a stunning online presence and integrated a complete end-to-end workflow: Kit.com for email marketing, HubSpot CRM for client management, Stripe for payments, Calendly for booking, and Xero for finance — all connected into a single automated pipeline.",
    challenge: "Delivering a compassionate, trust-building experience for clients navigating a difficult personal situation, while eliminating manual admin across every stage of the client journey.",
    solution: "A professionally designed website paired with a fully integrated automation stack — Kit.com, HubSpot, Stripe, Calendly, and Xero — working together so Karen's team can focus on clients, not admin.",
    results: {
      primary: "Fully automated client journey",
      secondary: [
        { metric: "5", label: "Platforms integrated" },
        { metric: "Zero", label: "Manual onboarding steps" },
        { metric: "End-to-end", label: "Automated workflow" }
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "HubSpot", "Stripe", "Calendly", "Kit.com", "Xero"],
    services: ["Web Design", "CRM Integration", "Payment Setup", "Email Marketing", "Workflow Automation"],
    image: "/images/work/dignifiedlife/dignifiedlife.webp",
    color: "from-teal-600 to-cyan-600",
    featured: true,
    liveUrl: "https://dignifiedlife.ie"
  },
  {
    id: "miller-dzn",
    title: "Miller DZN",
    subtitle: "Creative Portfolio & Brand Showcase",
    client: "Geoff Miller Design",
    year: "2025",
    category: "Creative / Agency",
    description: "Stunning portfolio website for a Dubai-based graphic designer and content creator, built to attract high-value clients in a competitive creative market.",
    longDescription: "Geoff Miller needed a portfolio website that matched the calibre of his graphic design and content creation work. We built a visually striking site that positions his expertise clearly, showcases his projects with impact, and continues to win him new clients.",
    challenge: "Creating a portfolio that reflects the quality of the work itself — visually compelling, fast, and professional enough to stand out in Dubai's high-end creative market.",
    solution: "A high-performance portfolio built on Next.js with Sanity CMS, featuring optimised image galleries, polished case study layouts, and a seamless client inquiry flow.",
    results: {
      primary: "Multiple new clients won",
      secondary: [
        { metric: "Fast", label: "Performance optimised" },
        { metric: "Growing", label: "Client portfolio" },
        { metric: "Dubai", label: "Market presence" }
      ]
    },
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"],
    services: ["Web Design", "Portfolio Development", "CMS Integration", "Brand Showcase"],
    image: "/images/work/mdzn/millerdzn.webp",
    color: "from-purple-600 to-pink-600",
    featured: true,
    liveUrl: "https://millerdesign.ai"
  },
  {
    id: "streamline-hr",
    title: "Streamline HR",
    subtitle: "HR Management & Applicant Tracking Platform",
    client: "Streamline HR",
    year: "2025",
    category: "Enterprise / SaaS",
    description: "A full-featured HR management platform built for a real external client, combining employee management and applicant tracking in one intuitive system.",
    longDescription: "Streamline HR needed a robust internal platform to manage their workforce and hiring pipeline. We designed and built a comprehensive HR system from the ground up — covering employee records, applicant tracking, and HR workflows — with a focus on security, usability, and scalability.",
    challenge: "Building an enterprise-grade HR system that handles sensitive employee data securely while remaining intuitive enough for everyday use across teams.",
    solution: "A full-stack platform combining employee management and applicant tracking, built with Next.js, Node.js, and PostgreSQL — secure, scalable, and easy to use.",
    results: {
      primary: "Production platform delivered",
      secondary: [
        { metric: "Secure", label: "Enterprise-grade data handling" },
        { metric: "Complete", label: "End-to-end HR workflow" },
        { metric: "Scalable", label: "Built for growth" }
      ]
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "TypeScript"],
    services: ["Full-Stack Development", "Database Design", "Security Implementation", "UI/UX Design"],
    image: "/images/work/streamline-hr/streamlinehr.webp",
    color: "from-blue-500 to-cyan-500",
    featured: true,
    liveUrl: "https://streamline-hr.vercel.app"
  },
  {
    id: "momentum",
    title: "Momentum",
    subtitle: "Content Creation & Social Media Agency",
    client: "Momentum",
    year: "2025",
    category: "Creative / Agency",
    description: "Website and automation stack for an Irish content creation and social media management agency based in Wicklow.",
    longDescription: "Momentum is a Wicklow-based content creation and social media management agency. We built a dynamic website that reflects their energy and clearly communicates their services, paired with automations to streamline client intake and team workflows.",
    challenge: "Capturing the fast-moving nature of social media in a website, while building reliable backend systems that save the team time.",
    solution: "A high-energy website with portfolio showcases and service breakdowns, combined with automated workflows for client onboarding and communication.",
    results: {
      primary: "Launch-ready with automation",
      secondary: [
        { metric: "Automated", label: "Client onboarding" },
        { metric: "Dynamic", label: "Brand presentation" },
        { metric: "Streamlined", label: "Team workflows" }
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    services: ["Web Design", "Agency Branding", "Workflow Automation", "Client Onboarding"],
    image: "/images/work/momentum/mo-mentum.webp",
    color: "from-orange-500 to-red-500",
    featured: true,
    liveUrl: "https://mo-mentum.ie"
  },
  {
    id: "mademates",
    title: "MadeMates",
    subtitle: "B2B Branded Merchandise & Products",
    client: "MadeMates",
    year: "2026",
    category: "Service Business",
    description: "Website for a B2B branded merchandise company that builds custom products and merchandise across a portfolio of brands for global clients.",
    longDescription: "MadeMates operates a portfolio of seven to eight brands, each focused on producing high-quality branded merchandise and products for companies around the world. We built a website that clearly communicates their B2B offering, showcases their brand portfolio, and makes it easy for global businesses to get in touch.",
    challenge: "Presenting a multi-brand merchandise business clearly to a B2B audience — communicating scale, quality, and variety without overwhelming the visitor.",
    solution: "A clean, professional B2B website that showcases MadeMates' brand portfolio and merchandise capabilities, with a clear path for corporate clients to start a conversation.",
    results: {
      primary: "Successfully launched",
      secondary: [
        { metric: "7-8", label: "Brands showcased" },
        { metric: "Global", label: "Client reach" },
        { metric: "5★", label: "Client review" }
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    services: ["Web Design", "B2B Positioning", "Brand Showcase", "Copywriting"],
    image: "/images/work/mademates/mademates.webp",
    color: "from-violet-600 to-indigo-600",
    featured: false,
    liveUrl: "https://www.made-mates.com/"
  },
  {
    id: "paolotortone",
    title: "Paolo Tortone",
    subtitle: "Web Developer Portfolio",
    client: "Paolo Tortone",
    year: "2026",
    category: "Service Business",
    description: "Custom-built portfolio website for a web developer, showcasing his projects and technical expertise with a clean, performant design.",
    longDescription: "Paolo Tortone is a creative director who needed a portfolio to showcase the projects he has designed and built. We developed the site from the ground up, translating his own design vision into a fast, polished web experience.",
    challenge: "Building a creative portfolio that accurately reflects technical ability while remaining visually compelling and easy to navigate for potential clients and collaborators.",
    solution: "A clean, high-performance portfolio built to Paolo's own design, with strong visual hierarchy and smooth interactions that let his projects take centre stage.",
    results: {
      primary: "Successfully launched",
      secondary: [
        { metric: "Custom", label: "Developer portfolio" },
        { metric: "Fast", label: "Performance" },
        { metric: "5★", label: "Client review" }
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    services: ["Web Development", "Portfolio Development", "Performance Optimisation"],
    image: "/images/work/paolotortone/paolotortone.webp",
    color: "from-amber-500 to-orange-600",
    featured: false,
    liveUrl: "https://www.paolotortone.com"
  },
  {
    id: "jadefrisch",
    title: "Jade Frisch",
    subtitle: "German to English Translation Services",
    client: "Jade Frisch",
    year: "2026",
    category: "Service Business",
    description: "Professional website for a German to English translator, clearly communicating her services and expertise to attract direct clients.",
    longDescription: "Jade Frisch needed a professional online presence to market her German to English translation services. We built a clean, modern site that positions her expertise clearly and makes it easy for clients to get in touch.",
    challenge: "Communicating a specialist language service clearly and professionally to attract the right clients in a competitive translation market.",
    solution: "A clean, elegant website with a clear service offering, strong professional positioning, and a straightforward contact flow that converts visitors into clients.",
    results: {
      primary: "Successfully launched",
      secondary: [
        { metric: "Elegant", label: "Visual design" },
        { metric: "Clear", label: "Service positioning" },
        { metric: "5★", label: "Client review" }
      ]
    },
    technologies: ["Next.js", "React", "Tailwind CSS"],
    services: ["Web Design", "Copywriting", "Service Positioning"],
    image: "/images/work/jadefrisch/jadefrisch.webp",
    color: "from-emerald-500 to-teal-600",
    featured: false,
    liveUrl: "https://jadefrisch.vercel.app/"
  },
  {
    id: "pink-pizza-berlin",
    title: "Pink Pizza Berlin",
    subtitle: "Local Pizzeria Digital Transformation",
    client: "Pink Pizza Berlin",
    year: "2025",
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
    liveUrl: "https://pinkpizza-berlin.de"
  }
];

const allCategories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

export default function Work() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('All');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 4;

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation currentPage="work" />

      {/* Hero */}
      <section ref={heroRef} className={`relative flex items-center justify-center overflow-hidden pt-28 md:pt-20 pb-8 ${
        isDark ? 'bg-gradient-to-br from-black via-gray-950 to-black' : 'bg-gradient-to-br from-white to-gray-50'
      }`} style={{ minHeight: 'calc(100svh)' }}>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ff5500] rounded-full opacity-20"
              style={{ left: `${(i * 17 + 5) % 100}%`, top: `${(i * 13 + 10) % 100}%` }}
              animate={{ y: [-20, 20, -20], x: [-10, 10, -10], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: (i % 4) + 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 w-full text-center space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="block">OUR</span>
              <span className="block text-[#ff5500]">WORK</span>
            </h1>
            <p className={`text-xl md:text-2xl font-light mt-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              real projects. real results.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            From <span className="text-[#ff5500] font-semibold">local businesses</span> to{' '}
            <span className="text-[#6366f1] font-semibold">enterprise platforms</span> — we build digital experiences that deliver measurable impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </button>

            <Link
              href="#projects"
              className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                View Projects
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { number: "20+", label: "Projects Delivered" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`text-center p-4 rounded-2xl backdrop-blur-sm ${isDark ? 'bg-white/5 border border-white/10' : 'bg-white/50 border border-gray-200/50'}`}
              >
                <div className={`text-2xl md:text-3xl font-black mb-1 ${i === 1 ? 'text-[#6366f1]' : 'text-[#ff5500]'}`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  {stat.number}
                </div>
                <div className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Filter + Projects */}
      <section id="projects" className={`relative py-24 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 space-y-4"
          >
            <span className="inline-block text-sm font-medium uppercase tracking-widest text-[#6366f1]">
              Selected Works
            </span>
            <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-none ${isDark ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Featured{' '}
              <span className="text-[#ff5500]">Projects</span>
            </h2>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-16"
          >
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setFilter(cat); setCurrentPage(1); }}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === cat
                    ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/25'
                    : isDark
                    ? 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#ff5500]/50 hover:text-[#ff5500]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid — mobile shows all, desktop paginates */}
          <motion.div
            key={`${filter}-${currentPage}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Mobile: all filtered projects */}
            {filteredProjects.map((project, index) => (
              <div key={project.id} className="md:hidden">
                <ProjectCard
                  project={project}
                  index={index}
                  isDark={isDark}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
            {/* Desktop: paginated */}
            {paginatedProjects.map((project, index) => (
              <div key={project.id} className="hidden md:block">
                <ProjectCard
                  project={project}
                  index={index}
                  isDark={isDark}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </motion.div>

          {/* Pagination — desktop only */}
          {totalPages > 1 && (
            <div className="hidden md:flex items-center justify-center gap-4 mt-16">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-lg ${
                  currentPage === 1
                    ? isDark ? 'text-gray-600 border border-white/5 cursor-not-allowed' : 'text-gray-300 border border-gray-200 cursor-not-allowed'
                    : isDark ? 'text-white border border-white/20 hover:border-[#ff5500] hover:text-[#ff5500]' : 'text-gray-700 border border-gray-300 hover:border-[#ff5500] hover:text-[#ff5500]'
                }`}
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-[#ff5500] text-white shadow-lg shadow-[#ff5500]/30 scale-110'
                      : isDark
                      ? 'text-gray-300 border border-white/10 hover:border-[#ff5500]/50 hover:text-[#ff5500]'
                      : 'text-gray-700 border border-gray-200 hover:border-[#ff5500]/50 hover:text-[#ff5500]'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 font-bold text-lg ${
                  currentPage === totalPages
                    ? isDark ? 'text-gray-600 border border-white/5 cursor-not-allowed' : 'text-gray-300 border border-gray-200 cursor-not-allowed'
                    : isDark ? 'text-white border border-white/20 hover:border-[#ff5500] hover:text-[#ff5500]' : 'text-gray-700 border border-gray-300 hover:border-[#ff5500] hover:text-[#ff5500]'
                }`}
              >
                ›
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${isDark ? 'bg-black' : 'bg-white'}`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#ff5500] rounded-full opacity-20"
              style={{ left: `${(i * 23 + 8) % 100}%`, top: `${(i * 19 + 15) % 100}%` }}
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.5, 1] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center space-y-10 relative z-10"
        >
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}>
            Ready to join our
            <br />
            <span className="text-[#ff5500]">success stories?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Let&apos;s build something that delivers{' '}
            <span className="text-[#6366f1] font-semibold">real results</span> for your business.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-2xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
            </button>

            <Link
              href="/services"
              className={`group px-8 py-4 border-2 border-[#6366f1] rounded-2xl text-[#6366f1] transition-all duration-300 text-lg font-bold transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDark ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center gap-3">
                View Services
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isDark={isDark}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  isDark,
  onClick,
}: {
  project: typeof projects[0];
  index: number;
  isDark: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] shadow-xl ${
        isDark
          ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-white/10'
          : 'bg-white border border-gray-200/60'
      }`}
    >
      {/* Image */}
      <div className={`relative h-64 overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#ff5500] text-white">
            {project.year}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${
            isDark ? 'bg-black/40 text-white border-white/20' : 'bg-white/70 text-gray-800 border-black/10'
          }`}>
            {project.category}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
          <div className="flex items-center gap-2 px-6 py-3 bg-[#ff5500] rounded-full text-white font-bold text-sm">
            View Project
            <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 space-y-5">
        <div>
          <h3 className={`text-2xl md:text-3xl font-black mb-1 group-hover:text-[#ff5500] transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}>
            {project.title}
          </h3>
          <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{project.subtitle}</p>
        </div>

        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {project.description}
        </p>

        <div className={`pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-100'} flex items-center justify-between`}>
          <div>
            <div className="text-lg font-black text-[#ff5500]">{project.results.primary}</div>
            <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Key Result</div>
          </div>
          <div className="flex flex-wrap gap-2 justify-end max-w-[55%]">
            {project.services.slice(0, 2).map((s, i) => (
              <span key={i} className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                isDark ? 'bg-white/5 text-gray-400 border border-white/10' : 'bg-gray-100 text-gray-600'
              }`}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-[#6366f1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
    </div>
  );
}

// ─── Project Modal ─────────────────────────────────────────────────────────────

function ProjectModal({
  project,
  isDark,
  onClose,
}: {
  project: typeof projects[0];
  isDark: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
          isDark
            ? 'bg-gradient-to-br from-gray-900 to-black border border-white/10'
            : 'bg-white border border-gray-200'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 bg-[#6366f1] text-white rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-colors text-xl font-bold"
          >
            ×
          </button>

          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20">{project.category}</span>
              <span className="text-sm opacity-75">{project.year}</span>
            </div>
            <h3 className="text-4xl font-black" style={{ fontFamily: 'var(--font-league-spartan)' }}>
              {project.title}
            </h3>
            <p className="text-xl opacity-90">{project.subtitle}</p>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-3xl font-black">{project.results.primary}</div>
                <div className="text-sm opacity-75">Key Result</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold opacity-90">Client</div>
                <div className="text-base font-bold">{project.client}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 space-y-8">
          {/* Image */}
          <div className={`relative w-full h-[360px] rounded-2xl overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Overview</h4>
            <p className={`text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{project.longDescription}</p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
              <h4 className="text-base font-bold mb-2 text-red-400">Challenge</h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.challenge}</p>
            </div>
            <div className={`p-6 rounded-2xl ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
              <h4 className="text-base font-bold mb-2 text-green-400">Solution</h4>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div>
            <h4 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Results & Impact</h4>
            <div className="grid grid-cols-3 gap-4">
              {project.results.secondary.map((r, i) => (
                <div key={i} className={`p-4 rounded-2xl text-center ${isDark ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'}`}>
                  <div className="text-2xl font-black text-[#ff5500] mb-1">{r.metric}</div>
                  <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services & Tech */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className={`text-base font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Services Provided</h4>
              <div className="flex flex-wrap gap-2">
                {project.services.map((s, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-white/10 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className={`text-base font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border ${isDark ? 'border-white/20 text-gray-300' : 'border-gray-300 text-gray-600'}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Links */}
          {project.liveUrl && (
            <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'} flex flex-wrap gap-4`}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff5500] hover:bg-[#e64d00] text-white font-semibold rounded-2xl transition-colors"
              >
                <GlobeAltIcon className="w-5 h-5" />
                Visit Website
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}

          {/* CTA */}
          <div className={`text-center pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
            <Link
              href="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ff5500] to-[#ff7800] hover:from-[#ff6600] hover:to-[#ff8800] text-white font-bold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              Start a Similar Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
