"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
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
  
  // Project hover states
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  // Staggered animation for feature cards
  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1, 
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-amber-50 h-screen flex items-center overflow-hidden">
        {/* Dot pattern */}
        <DotPattern color="#B05C35" size={1.5} spacing={22} className="z-[1] opacity-25" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 w-full">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Digital <br />
            <motion.span 
              className="text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experiences
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mb-10 text-secondary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Site and Sight is a creative studio focused on designing and developing unique digital experiences that captivate and inspire.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
      </section>

      {/* Featured Projects Preview */}
      <section className="px-8 md:px-16 py-24 bg-white">
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
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
          {[
            { num: 1, title: "Discovery", desc: "We learn about your business, goals, and requirements." },
            { num: 2, title: "Strategy", desc: "We develop a tailored strategy to meet your specific needs." },
            { num: 3, title: "Implementation", desc: "We bring your project to life with expert execution." },
            { num: 4, title: "Support", desc: "We provide ongoing support to ensure continued success." }
          ].map((item, index) => (
            <motion.div 
              key={item.num} 
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              variants={featureCardVariants}
            >
              <motion.div 
                className="bg-[#ff5500] text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                whileHover={{ scale: 1.1 }}
              >
                {item.num}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
