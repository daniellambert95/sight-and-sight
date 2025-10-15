'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';
import { 
  ComputerDesktopIcon, 
  ShoppingCartIcon,
  CpuChipIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  PlayIcon,
  ArrowTopRightOnSquareIcon,
  EyeIcon,
  CalendarIcon,
  UserIcon
} from '@heroicons/react/24/outline';

export default function Work() {
  const { theme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);
  const [filter, setFilter] = useState('all');

  const openModal = (project: typeof featuredProjects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Featured work with enhanced storytelling
  const featuredProjects = [
    {
      id: "pink-pizza-berlin",
      title: "Pink Pizza Berlin",
      subtitle: "Digital Transformation & E-commerce",
      client: "Pink Pizza Berlin",
      year: "2024",
      duration: "3 months",
      category: "E-commerce & Local Business",
      description: "Complete digital transformation for a beloved Berlin pizzeria, creating an engaging online presence that increased digital orders by 300%.",
      longDescription: "Pink Pizza Berlin needed to adapt to the digital-first world while maintaining their authentic neighborhood charm. We developed a comprehensive e-commerce solution that seamlessly blended their vibrant brand personality with powerful functionality.",
      challenge: "Creating an online ordering system that captures the warmth and authenticity of a local Berlin pizzeria while driving significant business growth.",
      solution: "A vibrant, user-friendly website with integrated online ordering, dynamic menu management, and customer engagement features that reflect the brand's personality.",
      results: {
        primary: "+300% online orders",
        secondary: [
          { metric: "85%", label: "Customer retention" },
          { metric: "45%", label: "Average order value increase" },
          { metric: "2.3x", label: "Monthly revenue growth" }
        ]
      },
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "Vercel", "Sanity CMS"],
      services: ["UI/UX Design", "E-commerce Development", "Payment Integration", "Content Management"],
      image: "/images/work/pinkpizzaberlin/hero.jpg",
      color: "from-pink-500 to-red-500",
      featured: true
    },
    {
      id: "der-baumchirurg",
      title: "Der Baumchirurg",
      subtitle: "Professional Service Website",
      client: "Der Baumchirurg",
      year: "2024",
      duration: "2 months",
      category: "Service Business",
      description: "Professional website for tree surgery services that positioned them as Berlin's premier arborist company.",
      longDescription: "Der Baumchirurg required a professional digital presence that would establish trust and expertise in the competitive Berlin market while generating qualified leads.",
      challenge: "Building credibility and trust for a specialized service business while making technical services accessible to homeowners and property managers.",
      solution: "A clean, professional website showcasing expertise through detailed service descriptions, portfolio gallery, and seamless booking system.",
      results: {
        primary: "+150% leads",
        secondary: [
          { metric: "92%", label: "Lead quality score" },
          { metric: "60%", label: "Booking conversion rate" },
          { metric: "4.8/5", label: "Customer satisfaction" }
        ]
      },
      technologies: ["React", "Node.js", "Google APIs", "MongoDB"],
      services: ["Web Design", "Local SEO", "Lead Generation", "Content Strategy"],
      image: "/images/work/derbaumchirurg/hero.jpg",
      color: "from-green-600 to-emerald-600",
      featured: true
    },
    {
      id: "techflow-growth",
      title: "TechFlow Startup",
      subtitle: "Series A Growth Strategy",
      client: "TechFlow",
      year: "2023",
      duration: "6 months",
      category: "Fintech Startup",
      description: "Strategic digital marketing campaign that positioned a Berlin fintech startup for successful Series A funding.",
      longDescription: "TechFlow needed to establish market credibility and attract investors while building a strong brand presence in the competitive fintech space.",
      challenge: "Building investor confidence and market presence for an early-stage fintech startup in a crowded market.",
      solution: "Comprehensive brand strategy, content marketing, and investor outreach campaign that demonstrated traction and market potential.",
      results: {
        primary: "Series A secured",
        secondary: [
          { metric: "€2.5M", label: "Funding raised" },
          { metric: "150%", label: "Brand awareness increase" },
          { metric: "25+", label: "Media mentions" }
        ]
      },
      technologies: ["Google Analytics", "HubSpot", "LinkedIn APIs", "Content CMS"],
      services: ["Brand Strategy", "Content Marketing", "Investor Relations", "Growth Analytics"],
      image: "/images/work/techflow/hero.jpg",
      color: "from-blue-600 to-indigo-600",
      featured: false
    },
    {
      id: "greenthread-optimization",
      title: "GreenThread Fashion",
      subtitle: "E-commerce Optimization",
      client: "GreenThread",
      year: "2023",
      duration: "4 months",
      category: "Sustainable Fashion",
      description: "Conversion rate optimization that transformed a sustainable fashion brand's online performance.",
      longDescription: "GreenThread's sustainable fashion message was strong, but their e-commerce experience wasn't converting visitors into customers effectively.",
      challenge: "Improving conversion rates while maintaining the brand's sustainability message and values-driven customer experience.",
      solution: "UX optimization, A/B testing, and conversion funnel improvements that aligned with sustainable values while driving performance.",
      results: {
        primary: "+85% conversion rate",
        secondary: [
          { metric: "40%", label: "Cart abandonment reduction" },
          { metric: "65%", label: "Return customer rate" },
          { metric: "30%", label: "Average order value increase" }
        ]
      },
      technologies: ["Google Optimize", "Hotjar", "Google Ads", "Shopify Plus"],
      services: ["UX Optimization", "A/B Testing", "Conversion Tracking", "Performance Analytics"],
      image: "/images/work/greenthread/hero.jpg",
      color: "from-emerald-500 to-green-600",
      featured: false
    },
    {
      id: "motion-graphics-portfolio",
      title: "Berlin Motion Collective",
      subtitle: "Video & Motion Graphics",
      client: "Multiple Clients",
      year: "2024",
      duration: "Ongoing",
      category: "Creative Services",
      description: "A collection of promotional videos and motion graphics that brought Berlin businesses to life.",
      longDescription: "Our motion graphics work spans across multiple Berlin businesses, creating engaging visual content that drives brand awareness and customer engagement.",
      challenge: "Creating distinctive motion graphics that capture each brand's unique personality while maintaining high production standards.",
      solution: "Custom motion graphics and video content tailored to each client's brand identity and marketing objectives.",
      results: {
        primary: "50M+ views",
        secondary: [
          { metric: "15+", label: "Client campaigns" },
          { metric: "3.2M", label: "Average video views" },
          { metric: "8.5%", label: "Engagement rate" }
        ]
      },
      technologies: ["After Effects", "Premiere Pro", "Cinema 4D", "DaVinci Resolve"],
      services: ["Motion Graphics", "Video Production", "Brand Videos", "Social Media Content"],
      image: "/images/work/motion/hero.jpg",
      color: "from-purple-600 to-pink-600",
      featured: false
    },
    {
      id: "berlin-premier-properties",
      title: "Berlin Premier Properties",
      subtitle: "Real Estate CRM Integration",
      client: "Berlin Premier Properties",
      year: "2023",
      duration: "5 months",
      category: "Real Estate",
      description: "Custom CRM integration that streamlined operations for Berlin's premium real estate agency.",
      longDescription: "Berlin Premier Properties needed to modernize their client management and property showcase systems to compete in the digital real estate market.",
      challenge: "Integrating complex property data with client management while maintaining the luxury brand experience.",
      solution: "Custom CRM integration with property showcase, client tracking, and automated workflows that enhanced both agent efficiency and client experience.",
      results: {
        primary: "+200% qualified leads",
        secondary: [
          { metric: "75%", label: "Process efficiency gain" },
          { metric: "90%", label: "Client satisfaction" },
          { metric: "40%", label: "Faster deal closure" }
        ]
      },
      technologies: ["Salesforce", "React", "API Integration", "AWS"],
      services: ["CRM Integration", "Property Management", "Client Tracking", "Workflow Automation"],
      image: "/images/work/properties/hero.jpg",
      color: "from-orange-600 to-red-600",
      featured: false
    }
  ];

  const filteredProjects = filter === 'all' ? featuredProjects : featuredProjects.filter(p => p.category.toLowerCase().includes(filter));

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
                  speaks for itself
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Each project tells a story of transformation. From concept to execution, 
                we craft digital experiences that deliver measurable results.
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
            
            {/* Right Column - Statistics */}
            <div className="space-y-12 lg:space-y-16">
              {[
                { number: "6+", label: "Case Studies", sublabel: "Documented successes" },
                { number: "300%", label: "Average Growth", sublabel: "Client results achieved" },
                { number: "100%", label: "Client Satisfaction", sublabel: "Happy partnerships" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="border-l-2 border-[#ff5500] pl-8"
                >
                  <div className={`text-4xl md:text-5xl font-black mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-lg font-semibold mb-1 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    {stat.sublabel}
                  </div>
                </div>
              ))}
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
            {['all', 'e-commerce', 'service', 'fintech', 'fashion', 'creative', 'real estate'].map((category) => (
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
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Asymmetric Projects Grid */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-20">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Featured <span className="text-[#ff5500]">Case Studies</span>
            </h2>
            <p className={`text-xl max-w-3xl ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore how we've transformed businesses through strategic design and development
            </p>
          </div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 auto-rows-auto">
            {filteredProjects.map((project, index) => {
              // Define different grid sizes for visual interest
              const gridLayouts = [
                'lg:col-span-8 lg:row-span-2', // Large
                'lg:col-span-4 lg:row-span-1', // Small
                'lg:col-span-5 lg:row-span-1', // Medium
                'lg:col-span-7 lg:row-span-1', // Medium-Large
                'lg:col-span-6 lg:row-span-2', // Medium-Tall
                'lg:col-span-6 lg:row-span-1', // Medium
              ];
              
              const isLarge = index === 0 || index === 4;
              const gridClass = gridLayouts[index % gridLayouts.length];
              
              return (
                <div
                  key={project.id}
                  className={`${gridClass} group relative overflow-hidden rounded-3xl cursor-pointer`}
                  onClick={() => openModal(project)}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}></div>
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white min-h-[300px]">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <CalendarIcon className="w-4 h-4 opacity-75" />
                          <span className="text-sm font-medium opacity-90">{project.year}</span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                        </div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium opacity-75 mb-2">{project.category}</div>
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
                          {project.title}
                        </h3>
                        <p className="text-lg opacity-90 mb-4">{project.subtitle}</p>
                        {isLarge && (
                          <p className="text-base opacity-80 max-w-md">
                            {project.description}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-black">{project.results.primary}</div>
                          <div className="text-sm opacity-75">Primary Result</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <UserIcon className="w-4 h-4 opacity-75" />
                          <span className="text-sm font-medium opacity-90">{project.client}</span>
                        </div>
                      </div>
                      
                      {isLarge && (
                        <div className="flex flex-wrap gap-2">
                          {project.services.slice(0, 3).map((service, idx) => (
                            <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                              {service}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
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
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center bg-white/20 hover:bg-white/30 text-white transition-colors"
              >
                ×
              </button>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
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
                    <div className="text-sm opacity-75">Primary Result</div>
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
                  <div>
                    <Link 
                      href="/services"
                      className="text-sm text-[#ff5500] hover:text-[#ff6600] underline"
                      onClick={closeModal}
                    >
                      View all services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}