'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./animations/ScrollReveal";
import { useTheme } from "../utils/ThemeProvider";

export default function HowWeWork() {
  const { theme } = useTheme();
  
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

  const workSteps = [
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
  ];

  return (
    <section className={`px-8 md:px-16 py-24 relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <ScrollReveal>
        <h2 className={`text-3xl font-bold text-center mb-12 relative z-10 ${
          theme === 'dark' ? 'text-white' : 'text-primary'
        }`}>How We Work</h2>
      </ScrollReveal>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto relative z-10">
        {workSteps.map((item, index) => (
          <motion.div 
            key={item.num} 
            className={`rounded-xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-700 shadow-gray-900/30 hover:shadow-gray-900/50' 
                : 'bg-white shadow-gray-200/70'
            }`}
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
                  className={theme === 'dark' ? 'brightness-200' : ''}
                />
              </div>
            </div>
            <div className="bg-[#ff5500] text-white text-sm px-4 py-1 rounded-full mb-4">
              Step {item.num}
            </div>
            <h3 className={`text-xl font-semibold mb-3 text-center ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>{item.title}</h3>
            <p className={`text-center ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 