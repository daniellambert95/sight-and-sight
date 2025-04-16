"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import DotPattern from "./components/DotPattern";
import ScrollReveal from "./components/animations/ScrollReveal";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Pink Pizza Berlin",
    description: "A modern website for a trendy Berlin pizzeria featuring online ordering, menu design, and Google Maps integration.",
    imageUrl: "/pink-pizza-hero.jpg",
    category: "Web Design",
    year: "2025"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "An intuitive mobile banking application designed to simplify financial management for users on the go.",
    imageUrl: "/pink-pizza-hero.jpg", // Using existing image as fallback
    category: "App Development",
    year: "2023"
  },
  {
    id: 3,
    title: "Brand Identity System",
    description: "A comprehensive brand identity system for a tech startup that needed to establish a strong market presence.",
    imageUrl: "/pink-pizza-hero.jpg", // Using existing image as fallback
    category: "Branding",
    year: "2022"
  }
];

export default function Home() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile screens
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  
  // Project hover states
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Shared animation values
  const entranceTransition = {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1.0],
  };
  
  // Staggered animation for feature cards
  const featureCardVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.28, 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  return (
    <div className="relative overflow-hidden bg-white text-black">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-transparent">
        <Navigation currentPage="home" />
      </div>

      {/* Hero Section - fixed on desktop, normal scroll on mobile */}
      <section 
        ref={heroRef} 
        className={`${isMobile ? 'relative min-h-[120vh]' : 'fixed top-0 left-0 w-full h-screen'} bg-amber-50 overflow-hidden`}
      >
        {/* Dot pattern */}
        <DotPattern color="#B05C35" size={1.5} spacing={22} className="z-[1] opacity-25 absolute inset-0" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full flex flex-col lg:flex-row items-center justify-between pt-36 pb-20 lg:py-0 lg:min-h-screen">
          {/* Content Column */}
          <div className={`${isMobile ? 'w-full' : 'lg:w-1/2'} lg:pr-8 mb-12 lg:mb-0 flex flex-col justify-center`}>
            <h1 className="text-5xl md:text-7xl font-bold">
              <div className="flex flex-wrap">
                {
                  "Crafting Digital".split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      className="mr-3 inline-block text-secondary overflow-hidden"
                      style={{ 
                        position: 'relative',
                        display: 'inline-block',
                        paddingBottom: '0.05em'
                      }}
                    >
                      <motion.span
                        style={{ 
                          display: 'inline-block',
                          position: 'relative'
                        }}
                        initial={{ y: "100%", opacity: 1 }}
                        animate={{ y: "0%" }}
                        transition={{
                          type: "tween",
                          duration: 0.7,
                          ease: [0.19, 0.33, 0.18, 1],
                          delay: 0.2 + (i * 0.25),
                        }}
                      >
                        {word}
                      </motion.span>
                    </motion.span>
                  ))
                }
              </div>
              <motion.div 
                className="mt-1 relative overflow-hidden"
                style={{ 
                  position: 'relative',
                  display: 'inline-block'
                }}
              >
                <motion.span
                  style={{ 
                    display: 'inline-block',
                    position: 'relative',
                    fontFamily: 'var(--font-moonrocks)'
                  }}
                  initial={{ x: "-100%", opacity: 1 }}
                  animate={{ x: "0%" }}
                  transition={{
                    type: "tween",
                    duration: 0.7,
                    ease: [0.19, 0.33, 0.18, 1],
                    delay: 0.8,
                  }}
                  className="animate-gradient bg-gradient-animate bg-clip-text text-transparent font-black"
                >
                  Experiences
                </motion.span>
              </motion.div>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-2xl mb-10 text-secondary flex flex-wrap">
              {
                "Site and Sight is a creative studio focused on designing and developing unique digital experiences that captivate and inspire."
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      className="mr-1.5 inline-block"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        ...entranceTransition,
                        duration: 0.4,
                        delay: 1.9 + (i * 0.08)
                      }}
                    >
                      {word}
                    </motion.span>
                  ))
              }
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...entranceTransition, delay: 1.5 }}
            >
              <Link 
                href="/work" 
                className="px-8 py-3 bg-[#ff5500] text-white rounded-md hover:bg-[#e64d00] transition-all hover:translate-y-[-2px] duration-300 inline-block text-center"
              >
                View Our Work
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-3 border border-primary rounded-md text-black bg-white hover:bg-gray-200 hover:text-black transition-all hover:translate-y-[-2px] duration-300 inline-block text-center"
              >
                Get In Touch
              </Link>
            </motion.div>
          </div>
          
          {/* Image Column */}
          <div className={`${isMobile ? 'w-full mt-8' : 'lg:w-1/2'} flex justify-center items-center relative`}>
            <motion.div 
              className={`${isMobile ? 'w-[280px] h-[280px]' : 'w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]'} relative`}
              initial={{ opacity: 0, scale: 0.8, rotate: 15, y: 30 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotate: 0, 
                y: 0,
                transition: {
                  duration: 1.2,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }
              }}
            >
              {/* Continuous floating animation */}
              <motion.div 
                className="absolute inset-0 w-full h-full"
                animate={{ 
                  y: [0, -15, 0, 8, 0],
                  rotate: [0, 2, 0, -2, 0],
                  scale: [1, 1.04, 1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1],
                  repeat: Infinity,
                  repeatType: "reverse" as const
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full bg-orange-300 blur-2xl opacity-20 -z-10 scale-90"
                  animate={{
                    scale: [0.9, 0.95, 0.9],
                    opacity: [0.2, 0.25, 0.2]
                  }}
                  transition={{
                    duration: 8,
                    ease: "easeInOut",
                    times: [0, 0.5, 1],
                    repeat: Infinity,
                  }}
                />
                <Image
                  src="/space.png"
                  alt="Abstract 3D Shape"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                  className="drop-shadow-[0_0_15px_rgba(255,85,0,0.15)]"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrollable content container */}
      <div className={`relative ${isMobile ? '' : 'z-10'}`}>
        {/* Spacer only needed on desktop */}
        {!isMobile && <div className="h-screen"></div>}
        
        {/* Featured Projects Preview - this will overlay the hero as you scroll on desktop */}
        <section className={`px-8 md:px-16 py-24 bg-white relative ${isMobile ? 'mt-4' : ''}`}>
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1} direction={index % 2 === 0 ? 'up' : 'down'}>
                  <motion.div 
                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-500"
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <div className="h-64 bg-gray-200 relative overflow-hidden">
                      <motion.div
                        animate={{ 
                          scale: hoveredProject === project.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={project.imageUrl}
                          alt={project.title}
                          fill
                          style={{ objectFit: 'cover' }}
                          priority={project.id === 1}
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute inset-0 bg-[#ff5500] mix-blend-multiply"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 0.3 : 0
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <Link href={`/work/project-${project.id}`} className="text-[#ff5500] font-medium hover:underline flex items-center">
                        <span>View Project</span>
                        <motion.span 
                          className="ml-1"
                          animate={{ x: hoveredProject === project.id ? 4 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      </Link>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="px-8 md:px-16 py-24 bg-gray-50 relative overflow-hidden">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center mb-12 relative z-10">How We Work</h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative z-10">
            {[
              { 
                num: 1, 
                title: "Discovery", 
                desc: "We learn about your business, goals, and requirements.",
                icon: "/work_svg/planning-svgrepo-com.svg"
              },
              { 
                num: 2, 
                title: "Strategy", 
                desc: "We develop a tailored strategy to meet your specific needs.",
                icon: "/work_svg/distributed-svgrepo-com.svg"
              },
              { 
                num: 3, 
                title: "Implementation", 
                desc: "We bring your project to life with expert execution.",
                icon: "/work_svg/pie-chart-svgrepo-com.svg" 
              },
              { 
                num: 4, 
                title: "Support", 
                desc: "We provide ongoing support to ensure continued success.",
                icon: "/work_svg/chat-chat-svgrepo-com.svg"
              }
            ].map((item, index) => (
              <motion.div 
                key={item.num} 
                className="bg-white rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={index}
                variants={featureCardVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.01 }}
              >
                <div className="relative w-24 h-24 mb-6">
                  <div className="absolute inset-0 bg-amber-100 rounded-full opacity-30" />
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image 
                      src={item.icon} 
                      alt={item.title} 
                      width={60} 
                      height={60}

                    />
                  </div>
                </div>
                <div className="bg-[#ff5500] text-white text-sm px-4 py-1 rounded-full mb-4">
                  Step {item.num}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

