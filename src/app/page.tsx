"use client"

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HowWeWork from "./components/HowWeWork";
import SubscribeNow from "./components/SubscribeNow";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import AnimatedIntro from "./components/AnimatedIntro";
import { useTheme } from "./utils/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setShowMainContent(true), 100);
  };

  return (
    <>
      {/* Animated Intro */}
      {showIntro && <AnimatedIntro onComplete={handleIntroComplete} />}
      
      {/* Main Website Content */}
      {showMainContent && (
        <div className={`relative overflow-hidden transition-colors duration-300 ${
          theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
        }`}>
          {/* Navigation */}
          <Navigation currentPage="home" />

          {/* Hero Section */}
          <HeroSection />

          {/* Stats Section */}
          <StatsSection />

          {/* Services Section */}
          <ServicesSection />

          {/* Projects Section */}
          <ProjectsSection />

          {/* How We Work Section */}
          <HowWeWork />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Call to Action Section */}
          <CTASection />
          
          {/* Subscribe Now Section */}
          <SubscribeNow />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

