"use client"

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturedProjects from "./components/FeaturedProjects";
import HowWeWork from "./components/HowWeWork";
import FAQSection from "./components/FAQSection";
import SubscribeNow from "./components/SubscribeNow";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background dark:bg-background transition-colors duration-300" style={{ background: 'var(--background)' }}>
      {/* Navigation */}
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* How We Work Section */}
      <HowWeWork />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Subscribe Now Section */}
      <SubscribeNow />

      {/* Footer */}
      <Footer />
    </div>
  );
}

