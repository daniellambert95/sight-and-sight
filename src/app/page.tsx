"use client"

import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SubscribeNow from "./components/SubscribeNow";
import HeroSection from "./components/sections/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesGrid from "./components/sections/ServicesGrid";
import WhySiteAndSight from "./components/sections/WhySiteAndSight";
import HowItWorks from "./components/sections/HowItWorks";
import Portfolio from "./components/sections/Portfolio";
// import SEOContentSection from "./components/sections/SEOContentSection"; // Moved to services subpage
import TestimonialsSection from "./components/TestimonialsSection";
import ContactForm from "./components/sections/ContactForm";
import TrustedPartnersSection from "./components/TrustedPartnersSection";
import AnimatedIntro from "./components/AnimatedIntro";
import SimpleFooter from "./components/sections/SimpleFooter";
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
      // Clear intro-complete flag since we're showing animation
      sessionStorage.removeItem('intro-complete');
    } else {
      // Animation already shown this session - skip directly to main content
      setShowMainContent(true);
      // Mark that homepage is ready (no animation to wait for)
      sessionStorage.setItem('intro-complete', 'true');
    }

    // Reset animation state when user leaves the site
    const handleBeforeUnload = () => {
      sessionStorage.removeItem('intro-shown');
      sessionStorage.removeItem('intro-complete');
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sessionStorage.removeItem('intro-shown');
        sessionStorage.removeItem('intro-complete');
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
    setTimeout(() => {
      setShowMainContent(true);
      // Mark that intro animation has completed and homepage is visible
      sessionStorage.setItem('intro-complete', 'true');
    }, 100);
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
          <ServicesGrid />

          {/* Why Site & Sight Section */}
          <WhySiteAndSight />

          {/* How It Works Section */}
          <HowItWorks />

          {/* Portfolio Section */}
          <Portfolio />

          {/* SEO & Content Section - Moved to services subpage for better homepage flow */}
          {/* <SEOContentSection /> */}

          {/* Trusted Partners Section */}
          <TrustedPartnersSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Cinematic Project Carousel - Commented out (redundant with Portfolio) */}
          {/* <ProjectCarousel /> */}

          {/* How We Work Section - Commented out (covered in HowItWorks) */}
          {/* <HowWeWork /> */}
          
          {/* Contact Form Section */}
          <ContactForm />
          
          {/* Subscribe Now Section */}
          <SubscribeNow />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

