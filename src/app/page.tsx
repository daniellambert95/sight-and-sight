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
import AnimatedIntro from "./components/AnimatedIntro";
import { useTheme } from "./utils/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();
  const [showIntro, setShowIntro] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Check if animation has already been shown this session
    const hasShownIntro = sessionStorage.getItem('intro-shown');
    
    if (!hasShownIntro) {
      // First time visiting in this session - show animation
      setShowIntro(true);
      // Mark as shown for this session
      sessionStorage.setItem('intro-shown', 'true');
    } else {
      // Animation already shown this session - skip directly to main content
      setShowMainContent(true);
    }

    // Reset animation state when user leaves the site
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('intro-shown');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sessionStorage.removeItem('intro-shown');
      }
    };

    // Add event listeners for when user leaves the site
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

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
          theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950 text-white' : 'bg-gradient-to-br from-white to-gray-50 text-black'
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
          
          {/* Subscribe Now Section */}
          <SubscribeNow />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

