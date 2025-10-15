'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';
import { 
  CodeBracketIcon, 
  ChartBarIcon, 
  CpuChipIcon,
  ComputerDesktopIcon,
  ShoppingCartIcon,
  RocketLaunchIcon,
  CogIcon,
  MagnifyingGlassIcon,
  CursorArrowRaysIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  SpeakerWaveIcon,
  ChatBubbleLeftRightIcon,
  BoltIcon,
  ClipboardDocumentListIcon
} from '@heroicons/react/24/outline';

export default function Services() {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState<any>(null);

  const openModal = (service: any) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  // Organized services by category with updated content (Creative Design & Video removed)
  const serviceCategories = [
    {
      id: "web-development",
      category: "Web Development",
      color: "orange",
      icon: <CodeBracketIcon className="w-8 h-8 text-white" />,
      description: "Custom websites built with cutting-edge technology and optimized for performance",
      services: [
        {
          title: "Custom Website Development",
          description: "Modern, responsive websites built with React, Next.js and the latest web technologies for optimal performance and user experience.",
          icon: <ComputerDesktopIcon className="w-6 h-6 text-white" />,
          features: ["React & Next.js", "Responsive Design", "Performance Optimization", "SEO Foundation"]
        },
        {
          title: "E-commerce Solutions",
          description: "Complete online store development with secure payment processing, inventory management, and customer-friendly interfaces.",
          icon: <ShoppingCartIcon className="w-6 h-6 text-white" />,
          features: ["Payment Integration", "Inventory Management", "Mobile Commerce", "Analytics Dashboard"]
        },
        {
          title: "Website Deployment & Hosting",
          description: "Seamless deployment with reliable hosting solutions, 99.9% uptime guarantee, SSL certificates, and ongoing maintenance.",
          icon: <RocketLaunchIcon className="w-6 h-6 text-white" />,
          features: ["99.9% Uptime", "SSL Certificates", "Regular Backups", "Performance Monitoring"]
        },
        {
          title: "Web Applications",
          description: "Custom web applications tailored to your business needs with user authentication, database integration, and scalable architecture.",
          icon: <CogIcon className="w-6 h-6 text-white" />,
          features: ["User Authentication", "Database Integration", "API Development", "Scalable Architecture"]
        }
      ]
    },
    {
      id: "digital-marketing",
      category: "Digital Marketing & SEO",
      color: "orange",
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      description: "Data-driven strategies to boost your online visibility and drive qualified traffic",
      services: [
        {
          title: "Search Engine Optimization (SEO)",
          description: "Comprehensive SEO strategies to improve your search rankings, increase organic traffic, and enhance online visibility.",
          icon: <MagnifyingGlassIcon className="w-6 h-6 text-white" />,
          features: ["Keyword Research", "On-page Optimization", "Technical SEO", "Performance Tracking"]
        },
        {
          title: "Search Engine Marketing (SEM)",
          description: "Strategic paid advertising campaigns including Google Ads management, conversion tracking, and ROI optimization.",
          icon: <CursorArrowRaysIcon className="w-6 h-6 text-white" />,
          features: ["Google Ads", "Conversion Tracking", "ROI Optimization", "Campaign Management"]
        },
        {
          title: "Email Marketing",
          description: "Targeted email campaigns that convert leads into customers and foster brand loyalty through strategic automation and personalization.",
          icon: <EnvelopeIcon className="w-6 h-6 text-white" />,
          features: ["Campaign Design", "Automation", "Segmentation", "Performance Analytics"]
        },
        {
          title: "Content Marketing",
          description: "Strategic content creation including blog writing, social media content, and copywriting that engages your audience and drives conversions.",
          icon: <DocumentTextIcon className="w-6 h-6 text-white" />,
          features: ["Blog Writing", "Social Media Content", "Copywriting", "Content Strategy"]
        },
        {
          title: "PR & Communications",
          description: "Strategic public relations to enhance your brand image, manage reputation, and reach your target audience effectively.",
          icon: <SpeakerWaveIcon className="w-6 h-6 text-white" />,
          features: ["Press Releases", "Media Relations", "Brand Messaging", "Crisis Communication"]
        }
      ]
    },
    {
      id: "automation",
      category: "Automation & AI Solutions",
      color: "orange",
      icon: <CpuChipIcon className="w-8 h-8 text-white" />,
      description: "Smart solutions that streamline your business processes and enhance customer experience",
      services: [
        {
          title: "AI Chatbots",
          description: "Intelligent chatbots for customer support, lead generation, and appointment booking that provide 24/7 assistance to your customers.",
          icon: <ChatBubbleLeftRightIcon className="w-6 h-6 text-white" />,
          features: ["24/7 Customer Support", "Lead Generation", "Appointment Booking", "Multi-language Support"]
        },
        {
          title: "Workflow Automation",
          description: "Custom automation solutions that streamline repetitive tasks, improve efficiency, and reduce manual work across your business operations.",
          icon: <BoltIcon className="w-6 h-6 text-white" />,
          features: ["Task Automation", "Process Optimization", "Integration Setup", "Performance Monitoring"]
        },
        {
          title: "AI Integration",
          description: "Integration of AI tools and technologies into your existing systems to enhance productivity and decision-making capabilities.",
          icon: <CpuChipIcon className="w-6 h-6 text-white" />,
          features: ["AI Tool Integration", "Data Analysis", "Predictive Analytics", "Custom AI Solutions"]
        },
        {
          title: "Business Process Optimization",
          description: "Analysis and optimization of your business processes using automation tools to increase efficiency and reduce operational costs.",
          icon: <ClipboardDocumentListIcon className="w-6 h-6 text-white" />,
          features: ["Process Analysis", "Efficiency Optimization", "Cost Reduction", "Training & Support"]
        }
      ]
    }
  ];



  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="services" />
      
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
                <span className="block">Digital</span>
                <span className="block text-[#ff5500]">Solutions</span>
                <span className={`block text-3xl md:text-4xl lg:text-5xl font-light mt-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  that drive results
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We craft comprehensive digital experiences through strategic web development, 
                intelligent marketing, and cutting-edge automation solutions.
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
                { number: "3", label: "Core Service Areas", sublabel: "Web, Marketing, Automation" },
                { number: "10+", label: "Projects Delivered", sublabel: "Across various industries" },
                { number: "24/7", label: "Support Available", sublabel: "For all our clients" }
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
      
      {/* Our Approach Section */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-none ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Our
                <br />
                <span className="text-[#ff5500]">Approach</span>
              </h2>
              
              <p className={`text-lg md:text-xl font-light leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We believe in creating digital solutions that are not just visually powerful, 
                but functionally effective. Our collaborative, research-driven approach ensures 
                every project delivers exceptional results.
              </p>
            </div>
            
            {/* Right Column - Service Areas Grid */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {[
                  {
                    title: "Discovery",
                    description: "Understanding your brand, audience, and goals to create a strong foundation.",
                    number: "01"
                  },
                  {
                    title: "Strategy & Design",
                    description: "Translating insights into striking visuals and cohesive brand identities.",
                    number: "02"
                  },
                  {
                    title: "Execution",
                    description: "Bringing designs to life with seamless digital experiences and high-performance builds.",
                    number: "03"
                  },
                  {
                    title: "Iteration & Refinement",
                    description: "Ensuring every project is fine-tuned for maximum impact and performance.",
                    number: "04"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-800"
                  >
                    <div className="text-4xl md:text-5xl font-black" style={{ color: 'rgba(255, 85, 0, 0.7)' }}>
                      {item.number}
                    </div>
                    
                    <h3 className={`text-2xl md:text-3xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-lg font-light leading-relaxed ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto space-y-24">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-16">
              {/* Category Header */}
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] text-3xl shadow-2xl">
                  {category.icon}
                </div>
                
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.category}
                </h3>
                
                <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {category.description}
                </p>
              </div>
              
              {/* Services Grid */}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`group relative cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50' 
                        : 'bg-white/60 border border-gray-200/50'
                    } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl`}
                    onClick={() => openModal(service)}
                  >
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center text-2xl shadow-lg">
                          {service.icon}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className={`text-2xl font-bold mb-4 group-hover:text-[#ff5500] transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.title}
                        </h3>
                        <p className={`text-lg leading-relaxed ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className={`text-sm font-semibold uppercase tracking-wide ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>Key Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature: string, idx: number) => (
                            <span key={idx} className={`px-3 py-1 rounded-full text-sm ${
                              theme === 'dark' 
                                ? 'bg-gray-800 text-gray-300' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {feature}
                            </span>
                          ))}
                          {service.features.length > 3 && (
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              theme === 'dark' 
                                ? 'bg-[#ff5500]/20 text-[#ff5500]' 
                                : 'bg-[#ff5500]/10 text-[#ff5500]'
                            }`}>
                              +{service.features.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          ))}
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
            Ready to elevate your
            <br />
            <span className="text-[#ff5500]">digital presence?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Let's discuss how our comprehensive services can help you achieve your business goals.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
            >
              <span>Get in Touch</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/pricing" 
              className={`group inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 ${
                theme === 'dark' 
                  ? 'bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600' 
                  : 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              } shadow-xl`}
            >
              <span>View Pricing</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Service Detail Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
            } shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closeModal}
              className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              } transition-colors`}
            >
              ×
            </button>

            {/* Service icon and title */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                {selectedService.icon}
              </div>
              <div>
                <h3 className={`text-2xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{selectedService.title}</h3>
                <p className="text-lg font-semibold text-orange-500">Professional Service</p>
              </div>
            </div>

            {/* Detailed description */}
            <p className={`mb-6 text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {selectedService.description}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>What's included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedService.features.map((item: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center mr-3 bg-orange-500/20">
                      <span className="text-xs text-orange-500">✓</span>
                    </div>
                    <span className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary CTA + subtle secondary link */}
            <div className="text-center">
              <Link 
                href="/contact"
                className="w-full bg-[#ff5500] hover:bg-[#ff6600] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center block mb-3"
                onClick={closeModal}
              >
                Get a Quote
              </Link>
              <Link 
                href="/pricing"
                className="text-sm text-orange-500 hover:text-orange-600 underline"
                onClick={closeModal}
              >
                View general pricing
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 