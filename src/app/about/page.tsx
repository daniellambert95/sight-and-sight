'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTheme } from '../utils/ThemeProvider';
import { 
  UserGroupIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  BoltIcon,
  SparklesIcon,
  HeartIcon,
  HandRaisedIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const { theme } = useTheme();

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
        staggerChildren: 0.2
      }
    }
  };

  // Sample team data - in a real app this would come from a CMS or API
  const teamMembers = [
    {
      id: 1,
      name: "Daniel Lambert",
      role: "Creative Lead",
      bio: "With over 15 years of experience in web development and creative design, Daniel is the founder and creative lead who develops all our websites and creates stunning graphics. His innovative vision and technical expertise drive our projects forward.",
      image: "/images/team/daniel.png",
      color: "blue"
    },
    {
      id: 2,
      name: "Killian Walpole",
      role: "Marketing Manager",
      bio: "Killian specializes in PR communications, email marketing, and social media strategy. With expertise in copywriting and digital marketing, he crafts compelling campaigns that engage audiences and drive results.",
      image: "/images/team/killian.png",
      color: "green"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <Navigation currentPage="about" />

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
                <span className="block">About</span>
                <span className="block text-[#ff5500]">Us</span>
                <span className={`block text-3xl md:text-4xl lg:text-5xl font-light mt-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  creative minds behind the magic
                </span>
              </h1>
              
              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We're a passionate team of designers, developers, and strategists who believe 
                in creating digital experiences that make a lasting impact.
              </p>
              
              <div className="pt-8">
                <Link 
                  href="/contact"
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
                >
                  <span>Let's Work Together</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Right Column - Statistics */}
            <div className="space-y-12 lg:space-y-16">
              {[
                { number: "2025", label: "Founded", sublabel: "Building digital dreams since" },
                { number: "10+", label: "Projects Completed", sublabel: "Across various industries" },
                { number: "100%", label: "Client Satisfaction", sublabel: "Happy partnerships always" }
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

      {/* Our Story Section */}
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
                <span className="text-[#ff5500]">Story</span>
              </h2>
              
              <p className={`text-lg md:text-xl font-light leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Founded in 2025 with a mission to bridge the gap between beautiful design 
                and functional excellence. We create digital experiences that not only look 
                incredible but deliver real results.
              </p>
            </div>
            
            {/* Right Column - Story Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                <div className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="text-2xl md:text-3xl font-black" style={{ color: 'rgba(255, 85, 0, 0.7)' }}>
                    Site & Sight
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    The Meaning Behind Our Name
                  </h3>
                  
                  <p className={`text-lg font-light leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <span className="font-semibold text-[#ff5500]">"Site"</span> represents the digital spaces we create – 
                    websites, applications, and digital experiences. <span className="font-semibold text-[#ff5500]">"Sight"</span> embodies 
                    the visual impact, user perception, and the "aha!" moments we craft for every user interaction.
                  </p>
                </div>
                
                <div className="space-y-6 pb-8 border-b border-gray-200 dark:border-gray-800">
                  <div className="text-2xl md:text-3xl font-black" style={{ color: 'rgba(255, 85, 0, 0.7)' }}>
                    Our Mission
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Form Meets Function
                  </h3>
                  
                  <p className={`text-lg font-light leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    We believe great design isn't just about aesthetics – it's about creating solutions that 
                    work beautifully for users and deliver measurable results for businesses. Every pixel serves a purpose.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="text-2xl md:text-3xl font-black" style={{ color: 'rgba(255, 85, 0, 0.7)' }}>
                    Today
                  </div>
                  
                  <h3 className={`text-2xl md:text-3xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Growing Together
                  </h3>
                  
                  <p className={`text-lg font-light leading-relaxed ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    We're a tight-knit team of creative minds who collaborate closely with our clients. 
                    Every project is an opportunity to push boundaries and create something extraordinary together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className={`relative py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] shadow-2xl">
              <LightBulbIcon className="w-10 h-10 text-white" />
            </div>
            
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Approach
            </h3>
            
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our proven three-step process ensures exceptional results every time
            </p>
          </div>
          
          {/* Approach Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Discover",
                description: "We begin by deeply understanding your business, goals, audience, and competitive landscape through research and strategic discussions.",
                icon: <MagnifyingGlassIcon className="w-8 h-8 text-white" />
              },
              {
                step: "02", 
                title: "Design",
                description: "Our creative process combines strategic thinking with innovative design, focusing on both aesthetics and functionality to create engaging experiences.",
                icon: <PaintBrushIcon className="w-8 h-8 text-white" />
              },
              {
                step: "03",
                title: "Develop", 
                description: "We bring designs to life with clean, efficient code, ensuring responsive behavior, optimal performance, and seamless interactions.",
                icon: <BoltIcon className="w-8 h-8 text-white" />
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50' 
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center text-2xl shadow-lg">
                      {item.icon}
                    </div>
                    <div className={`text-4xl font-black ${
                      theme === 'dark' ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {item.step}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-[#ff5500] transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] shadow-2xl">
              <UserGroupIcon className="w-10 h-10 text-white" />
            </div>
            
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Meet the Team
            </h3>
            
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              The talented individuals who bring your digital visions to life
            </p>
          </div>
          
          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className={`group relative cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50' 
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl text-center`}
              >
                <div className="space-y-6">
                  <div className="flex flex-col items-center">
                    {/* Profile Image */}
                    <div className="relative w-24 h-24 mb-4 rounded-2xl overflow-hidden border-2 border-[#ff5500]/60">
                      {member.image ? (
                        <Image 
                          src={member.image}
                          alt={`Photo of ${member.name}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className={`flex items-center justify-center h-full ${
                          theme === 'dark' ? 'text-gray-600 bg-gray-800' : 'text-gray-400 bg-gray-200'
                        }`}>
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                    
                    {/* Role Badge */}
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ff5500]/20 text-[#ff5500]">
                      {member.role.toUpperCase()}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-[#ff5500] transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {member.name}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {member.bio}
                    </p>
                  </div>
                </div>
                
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`relative py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] shadow-2xl">
              <SparklesIcon className="w-10 h-10 text-white" />
            </div>
            
            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Values
            </h3>
            
            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              The core principles that guide everything we do
            </p>
          </div>
          
          {/* Values Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Creativity Without Boundaries",
                description: "We believe in pushing creative boundaries while maintaining a focus on solving real problems for real users. Our designs are both innovative and purposeful.",
                icon: <PaintBrushIcon className="w-8 h-8 text-white" />
              },
              {
                title: "User-Centered Approach",
                description: "We place users at the center of our design process, ensuring that every decision enhances the user experience and meets their needs.",
                icon: <HeartIcon className="w-8 h-8 text-white" />
              },
              {
                title: "Collaborative Partnership",
                description: "We see our clients as partners and believe the best work comes from open collaboration, clear communication, and mutual respect.",
                icon: <HandRaisedIcon className="w-8 h-8 text-white" />
              },
              {
                title: "Continuous Innovation",
                description: "We stay at the forefront of industry trends and technologies, constantly learning and evolving to bring the best solutions to our clients.",
                icon: <RocketLaunchIcon className="w-8 h-8 text-white" />
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50' 
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center text-2xl shadow-lg">
                      {value.icon}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 group-hover:text-[#ff5500] transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {value.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {value.description}
                    </p>
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
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to work
            <br />
            <span className="text-[#ff5500]">together?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We're always excited to partner with forward-thinking brands and businesses. 
            Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Link 
              href="/contact" 
              className="group inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
            >
              <span>Get In Touch</span>
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

      {/* Footer */}
      <Footer />
    </div>
  );
} 