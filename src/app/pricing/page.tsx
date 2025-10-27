'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { useTheme } from '../utils/ThemeProvider';
import {
  BoltIcon,
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function Pricing() {
  const { theme } = useTheme();
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const openQuoteModal = () => {
    setShowQuoteModal(true);
  };

  const closeQuoteModal = () => {
    setShowQuoteModal(false);
  };

  const pricingFactors = [
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
      title: "Design Complexity",
      description: "Custom designs tailored to your brand identity and user experience goals"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-white" />,
      title: "Features & Functionality",
      description: "E-commerce, CMS, integrations, and custom features built to your specifications"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      title: "Project Scope",
      description: "Number of pages, content volume, and overall project size"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
      title: "Timeline & Support",
      description: "Launch timeline and ongoing maintenance requirements"
    }
  ];

  const features = [
    {
      icon: <BoltIcon className="w-8 h-8 text-white" />,
      title: "Lightning Fast",
      description: "Optimized performance and blazing fast load times guaranteed"
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
      title: "Custom Design",
      description: "Tailored specifically to your brand and vision"
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      title: "Mobile First",
      description: "Optimized for every device imaginable"
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
      title: "Performance",
      description: "Built for speed and scalability"
    },
    {
      icon: <WrenchScrewdriverIcon className="w-8 h-8 text-white" />,
      title: "Maintenance",
      description: "Ongoing support and updates included"
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-white" />,
      title: "Premium Quality",
      description: "Award-winning designs that convert"
    },
    {
      icon: <MagnifyingGlassIcon className="w-8 h-8 text-white" />,
      title: "SEO Optimized",
      description: "Built-in search engine optimization to boost visibility"
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      title: "Analytics Ready",
      description: "Comprehensive tracking and insights included"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Tell Us About Your Project",
      description: "Share your vision, goals, and requirements through our simple quote form"
    },
    {
      step: "02",
      title: "We Analyze Your Needs",
      description: "Our team reviews your project and prepares a detailed proposal"
    },
    {
      step: "03",
      title: "Receive Your Custom Quote",
      description: "Get a transparent, itemized quote tailored to your specific needs"
    },
    {
      step: "04",
      title: "Kick Off Your Project",
      description: "Once approved, we begin bringing your vision to life"
    }
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="pricing" />

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
                <span className="block">Flexible</span>
                <span className="block text-[#ff5500]">Pricing</span>
                <span className={`block text-3xl md:text-4xl lg:text-5xl font-light mt-6 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  tailored to your needs
                </span>
              </h1>

              <p className={`text-xl md:text-2xl font-light max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Every project is unique. We create custom proposals based on your specific needs,
                goals, and budget—with complete transparency and no hidden fees.
              </p>

              <div className="pt-8">
                <button
                  onClick={openQuoteModal}
                  className="group inline-flex items-center gap-4 px-8 py-4 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
                >
                  <span>Get Your Custom Quote</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right Column - Why Custom Pricing */}
            <div className="space-y-8">
              <div className={`p-8 rounded-3xl ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                  : 'bg-white/60 border border-gray-200/50'
              } backdrop-blur-sm shadow-xl`}>
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center shadow-lg">
                    <CurrencyDollarIcon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className={`text-2xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Why Custom Pricing?
                  </h3>

                  <div className="space-y-4">
                    {[
                      "Pay only for what you need—no unnecessary features or costs",
                      "Flexible solutions that scale with your business",
                      "Transparent breakdown of all costs and deliverables",
                      "Fair pricing based on project scope and complexity"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-6 h-6 flex-shrink-0 text-[#ff5500] mt-0.5" />
                        <span className={`text-base ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Affects Your Quote Section */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] shadow-2xl">
              <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
            </div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              What Affects <span className="text-[#ff5500]">Your Quote</span>
            </h2>

            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We consider several factors to create a fair and accurate proposal for your project
            </p>
          </div>

          {/* Pricing Factors Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {pricingFactors.map((factor, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {factor.icon}
                  </div>

                  <div>
                    <h3 className={`text-2xl font-bold mb-3 group-hover:text-[#ff5500] transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {factor.title}
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {factor.description}
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

      {/* How It Works Section */}
      <section className={`relative py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] shadow-2xl">
              <RocketLaunchIcon className="w-10 h-10 text-white" />
            </div>

            <h3 className={`text-4xl md:text-5xl lg:text-6xl font-black ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              How It <span className="text-[#ff5500]">Works</span>
            </h3>

            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our simple process to get you a custom quote
            </p>
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className={`group relative ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`text-5xl font-black ${
                      theme === 'dark' ? 'text-gray-800' : 'text-gray-200'
                    }`}>
                      {item.step}
                    </div>
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA in Process Section */}
          <div className="text-center mt-16">
            <button
              onClick={openQuoteModal}
              className="group inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
            >
              <span>Start Your Quote Now</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* What's Always Included Section */}
      <section className={`relative py-32 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
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
              Always <span className="text-[#ff5500]">Included</span>
            </h3>

            <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Every project comes with these premium features as standard
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm rounded-3xl p-8 hover:scale-[1.02] transition-all duration-500 shadow-xl`}
              >
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff5500] to-[#ff6600] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className={`text-xl font-bold mb-3 group-hover:text-[#ff5500] transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.description}
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
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Ready for your
            <br />
            <span className="text-[#ff5500]">custom quote?</span>
          </h2>

          <p className={`text-xl md:text-2xl font-light max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Tell us about your project and we'll create a detailed proposal tailored specifically to your needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <button
              onClick={openQuoteModal}
              className="group inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-2xl hover:shadow-[#ff5500]/25"
            >
              <span>Get Your Quote</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <Link
              href="/work"
              className={`group inline-flex items-center justify-center px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 border-2 ${
                theme === 'dark'
                  ? 'bg-transparent text-white border-gray-700 hover:bg-gray-800 hover:border-gray-600'
                  : 'bg-transparent text-gray-900 border-gray-300 hover:bg-gray-50 hover:border-gray-400'
              } shadow-xl`}
            >
              <span>View Our Work</span>
              <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal isOpen={showQuoteModal} onClose={closeQuoteModal} />

      <Footer />
    </div>
  );
}
