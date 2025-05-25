'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import { useTheme } from "../utils/ThemeProvider";

// Updated project data with correct routing
const projects = [
  {
    id: "pinkpizzaberlin",
    title: "Pink Pizza Berlin",
    description: "A modern website for a trendy Berlin pizzeria featuring online ordering, menu design, and Google Maps integration.",
    imageUrl: "/pink-hero.jpg",
    category: ["Web Design", "Branding", "Google Maps"],
    year: "2025",
    route: "/work/pinkpizzaberlin"
  },
  {
    id: "derbaumchirurg", 
    title: "Der Baumchirurg",
    description: "A professional website for a tree surgery and garden maintenance company showcasing their expert services and portfolio.",
    imageUrl: "/pink-hero.jpg",
    category: ["Web Design", "SEO", "Branding", "Logo Design"],
    year: "2025",
    route: "/work/derbaumchirurg" 
  },
  {
    id: "miller-design",
    title: "MDZN - Miller Design",
    description: "A modern website for a design studio showcasing their expert services and portfolio.",
    imageUrl: "/pink-hero.jpg",
    category: ["Web Design", "SEO"],
    year: "2025",
    route: "/work/miller-design" 
  }
];

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const { theme } = useTheme();

  return (
    <section className={`px-8 md:px-16 py-24 relative ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className={`text-3xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Featured Projects</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1} direction={index % 2 === 0 ? 'up' : 'down'}>
              <motion.div 
                className={`rounded-lg overflow-hidden border transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 border-gray-700 hover:shadow-xl hover:shadow-gray-700/30' 
                    : 'bg-white border-gray-200 hover:shadow-xl'
                }`}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="h-64 bg-primary relative overflow-hidden">
                  <motion.div
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={project.id === "pinkpizzaberlin"}
                    /> */}
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
                  <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{project.title}</h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <Link href={project.route} className="text-[#ff5500] font-medium hover:underline flex items-center">
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
  );
} 