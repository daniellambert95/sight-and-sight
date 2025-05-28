'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTheme } from '../utils/ThemeProvider';

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
    },
    {
      id: 3,
      name: "Bill Pierce",
      role: "Video & Motion Graphics Designer",
      bio: "Bill specializes in video editing and motion graphics design, creating dynamic visual content that brings stories to life through animation and engaging video production.",
      image: "/images/team/bill.png",
      color: "purple"
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      {/* Navigation */}
      <Navigation currentPage="about" />

      {/* Hero Section - Modern Creative Design */}
      <section className={`relative min-h-[80vh] flex items-center overflow-hidden transition-colors duration-300 pt-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
      }`}>
        {/* Geometric Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Circle */}
          <div className={`absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          {/* Medium Circle */}
          <div className={`absolute bottom-20 -left-16 w-48 h-48 rounded-full opacity-15 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          {/* Small geometric shapes */}
          <div className={`absolute top-1/4 right-1/4 w-8 h-8 rotate-45 opacity-30 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-400'
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
                👋 About Us
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
              <span className="block">Creative</span>
              <span className="block text-[#ff5500]">minds,</span>
              <span className={`block text-4xl md:text-5xl lg:text-6xl font-bold mt-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                digital solutions
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
              We combine <span className="font-semibold text-[#ff5500]">strategic thinking</span> with 
              innovative design to craft digital experiences that captivate and inspire.
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                <span className="relative z-10">Let's Work Together</span>
                <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-32 h-32 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-20 left-10 w-20 h-20 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-[#ff5500]"></div>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  theme === 'dark'
                    ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                    : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
                }`}>
                  📖 Our Story
                </span>
                <div className="w-8 h-0.5 bg-[#ff5500]"></div>
              </div>

              <h2 className={`text-4xl md:text-5xl font-black mb-8 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Building the <span className="text-[#ff5500]">future</span> of digital
              </h2>
              
              <div className="space-y-6">
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Founded in 2020, Site and Sight began with a simple mission: to create digital experiences that bridge the gap between form and function, between what looks good and what works well.
                </p>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Our name represents our dual focus – <span className="font-semibold text-[#ff5500]">"Site"</span> referring to the digital spaces we create and <span className="font-semibold text-[#ff5500]">"Sight"</span> representing the visual impact and user perception of those spaces.
                </p>
                <p className={`text-lg leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Today, we're a tight-knit team of designers, developers, and strategists who collaborate closely with our clients to bring their vision to life while pushing the boundaries of what's possible in digital design.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className={`relative rounded-3xl h-[500px] overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300'
              }`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Placeholder for studio image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`text-8xl ${theme === 'dark' ? 'text-gray-700' : 'text-gray-400'}`}>
                  🏢
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-[#ff5500] opacity-20"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 rotate-45 bg-blue-500 opacity-20"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-24 h-24 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-green-500' : 'bg-green-300'
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
                🎯 Our Approach
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
              How we <span className="text-[#ff5500]">work</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Our proven three-step process ensures exceptional results every time
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                step: "01",
                title: "Discover",
                description: "We begin by deeply understanding your business, goals, audience, and competitive landscape through research and strategic discussions.",
                color: "orange",
                icon: "🔍"
              },
              {
                step: "02",
                title: "Design",
                description: "Our creative process combines strategic thinking with innovative design, focusing on both aesthetics and functionality to create engaging experiences.",
                color: "orange",
                icon: "🎨"
              },
              {
                step: "03",
                title: "Develop",
                description: "We bring designs to life with clean, efficient code, ensuring responsive behavior, optimal performance, and seamless interactions.",
                color: "orange",
                icon: "⚡"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step Number */}
                  
                  
                  {/* Step Badge */}
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold mb-4 bg-orange-500/20 text-orange-500">
                    STEP {item.step}
                  </div>

                  <h3 className={`text-2xl font-black mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{item.title}</h3>
                  <p className={`leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-10 w-36 h-36 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-300'
          }`}></div>
          <div className={`absolute bottom-20 left-20 w-28 h-28 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-purple-500' : 'bg-purple-300'
          }`}></div>
          <div className={`absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-12 ${
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
                👥 Our Team
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
              Meet the <span className="text-[#ff5500]">creative minds</span>
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              The talented individuals who bring your digital visions to life
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={member.id}
                variants={fadeIn}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 text-center ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-3xl overflow-hidden border-4 border-orange-500/60 group-hover:border-opacity-50 transition-all duration-300">
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
                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                        </svg>
                      </div>
                    )}
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-3xl opacity-20 bg-orange-500 -z-10 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>

                  {/* Role Badge */}
                  <div className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold mb-4 bg-[#ff5500]/20 text-[#ff5500]`}>
                    {member.role.toUpperCase()}
                  </div>

                  <h3 className={`text-2xl font-black mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{member.name}</h3>
                  
                  <p className={`text-sm leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values - Modern Creative Style */}
      <section className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-purple-50'
      }`}>
        {/* Background Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 left-10 w-40 h-40 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute bottom-20 right-20 w-32 h-32 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
          <div className={`absolute top-1/3 right-1/4 w-8 h-8 rounded-full opacity-20 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-400'
          }`}></div>
          <div className={`absolute bottom-1/3 left-1/3 w-6 h-6 rotate-45 opacity-25 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-400'
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
                💎 Our Values
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
              What <span className="text-[#ff5500]">drives</span> us
            </motion.h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              The core principles that guide everything we do
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Creativity Without Boundaries",
                description: "We believe in pushing creative boundaries while maintaining a focus on solving real problems for real users. Our designs are both innovative and purposeful.",
                icon: "🎨",
                color: "orange"
              },
              {
                title: "User-Centered Approach",
                description: "We place users at the center of our design process, ensuring that every decision enhances the user experience and meets their needs.",
                icon: "👥",
                color: "orange"
              },
              {
                title: "Collaborative Partnership",
                description: "We see our clients as partners and believe the best work comes from open collaboration, clear communication, and mutual respect.",
                icon: "🤝",
                color: "orange"
              },
              {
                title: "Continuous Innovation",
                description: "We stay at the forefront of industry trends and technologies, constantly learning and evolving to bring the best solutions to our clients.",
                icon: "🚀",
                color: "orange"
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/50' 
                    : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg bg-gradient-to-br from-orange-500 to-orange-600">
                    {value.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-black mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{value.title}</h3>
                    <p className={`leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Modern Creative Style */}
      <section className={`relative py-24 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800' : 'bg-gradient-to-br from-white via-orange-50 to-white'
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
              🚀 Let's Collaborate
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>

          {/* Main Heading */}
          <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-none ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block">Ready to</span>
            <span className="block text-[#ff5500]">collaborate?</span>
          </h2>

          <p className={`text-xl md:text-2xl lg:text-3xl font-light mb-12 max-w-4xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            We're always excited to partner with <span className="font-semibold text-[#ff5500]">forward-thinking brands</span> and businesses.
            <span className="block mt-2">Let's create something amazing together.</span>
          </p>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105"
          >
            <span className="relative z-10">Get In Touch</span>
            <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
          </Link>

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
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Award-winning designs</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
} 