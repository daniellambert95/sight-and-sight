'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from './utils/ThemeProvider';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingParticles from './components/FloatingParticles';
import { useState, useEffect } from 'react';

export default function NotFound() {
  const { theme } = useTheme();
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to prevent hydration mismatches
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fun messages that change based on click count
  const funMessages = [
    "Looks like this page went on vacation without telling us! 🏖️",
    "Still clicking? We like your persistence! 🎯",
    "Okay, you're definitely determined! 💪",
    "Alright, you win! Here's a virtual cookie 🍪",
    "You've unlocked the secret level of 404-ness! 🎮"
  ];

  const getCurrentMessage = () => {
    if (clickCount < funMessages.length) {
      return funMessages[clickCount];
    }
    return "You're officially a 404 master! 🏆";
  };

  useEffect(() => {
    if (clickCount >= 3) {
      setShowEasterEgg(true);
    }
  }, [clickCount]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const bounceAnimation = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.1, 1],
      transition: { 
        duration: 2,
        repeat: Infinity
      }
    }
  };

  const floatAnimation = {
    initial: { y: 0 },
    animate: { 
      y: [-10, 10, -10],
      transition: { 
        duration: 3,
        repeat: Infinity
      }
    }
  };

  const wiggleAnimation = {
    initial: { rotate: 0 },
    animate: { 
      rotate: [-5, 5, -5],
      transition: { 
        duration: 0.5,
        repeat: Infinity
      }
    }
  };

  // Don't render interactive elements until client-side hydration is complete
  if (!isClient) {
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        <Navigation currentPage="home" />
        
        <div className="relative z-20 min-h-screen flex items-center justify-center px-8 md:px-16 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center w-full">
            {/* Static 404 for SSR */}
            <div className="mb-6">
              <h1 
                className="text-6xl md:text-8xl lg:text-9xl font-black leading-none select-none"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <span className="text-[#ff5500]">4</span>
                <span className={theme === 'dark' ? 'text-white' : 'text-black'}>0</span>
                <span className="text-[#ff5500]">4</span>
              </h1>
            </div>

            <h2 
              className={`text-2xl md:text-4xl lg:text-5xl font-black mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              OOPS! THIS PAGE IS
              <span className="block text-[#ff5500]">OUT OF SIGHT!</span>
            </h2>

            <div className="mb-6">
              <p className={`text-base md:text-lg mb-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Looks like this page went on vacation without telling us! 🏖️
              </p>
              <p className={`text-sm md:text-base ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Don't worry, our pixel-perfect team is probably redesigning it as we speak...
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
              <Link 
                href="/" 
                className="group relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 inline-block text-center font-bold text-sm transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🏠 Back to Home
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </Link>
              
              <Link 
                href="/work" 
                className={`group w-full sm:w-auto px-6 py-3 border-2 border-[#ff5500] rounded-xl text-[#ff5500] transition-all duration-300 inline-block text-center font-bold text-sm transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  theme === 'dark' 
                    ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                    : 'bg-white/80 hover:bg-white backdrop-blur-sm'
                }`}
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <span className="flex items-center justify-center gap-2">
                  🎨 View Our Work
                </span>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="home" />
      
      {/* Floating particles for visual interest */}
      <FloatingParticles 
        particleCount={30}
        particleColor="#ff5500"
        backgroundColor="transparent"
        particleSize={8}
        duration={6000}
        className="z-[1]"
      />

      {/* Main content with proper top padding to avoid navigation overlap */}
      <div className="relative z-20 min-h-screen flex items-center justify-center px-8 md:px-16 pt-24 pb-16">
        <motion.div 
          className="max-w-4xl mx-auto text-center w-full"
          initial="initial"
          animate="animate"
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Animated 404 */}
          <motion.div 
            className="mb-6 cursor-pointer"
            variants={bounceAnimation}
            onClick={() => setClickCount(prev => prev + 1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-black leading-none select-none"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="text-[#ff5500]">4</span>
              <motion.span 
                className={theme === 'dark' ? 'text-white' : 'text-black'}
                variants={clickCount > 2 ? wiggleAnimation : floatAnimation}
                style={{ display: 'inline-block' }}
              >
                0
              </motion.span>
              <span className="text-[#ff5500]">4</span>
            </h1>
            {clickCount > 0 && (
              <motion.p 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-sm text-[#ff5500] mt-2"
              >
                Clicks: {clickCount} {clickCount > 5 ? "🔥" : ""}
              </motion.p>
            )}
          </motion.div>

          {/* Quirky headline */}
          <motion.h2 
            variants={fadeInUp}
            className={`text-2xl md:text-4xl lg:text-5xl font-black mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            OOPS! THIS PAGE IS
            <span className="block text-[#ff5500]">OUT OF SIGHT!</span>
          </motion.h2>

          {/* Dynamic funny description */}
          <motion.div 
            variants={fadeInUp}
            className="mb-6"
          >
            <motion.p 
              key={clickCount}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-base md:text-lg mb-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {getCurrentMessage()}
            </motion.p>
            <p className={`text-sm md:text-base ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Don't worry, our pixel-perfect team is probably redesigning it as we speak...
            </p>
          </motion.div>

          {/* Easter egg achievement */}
          {showEasterEgg && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`mb-4 p-3 rounded-xl border-2 border-[#ff5500] ${
                theme === 'dark' ? 'bg-[#ff5500]/10' : 'bg-[#ff5500]/5'
              }`}
            >
              <div className="text-xl mb-1">🏆</div>
              <p className="text-[#ff5500] font-bold text-sm">Achievement Unlocked!</p>
              <p className={`text-xs ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                "Persistent Clicker" - You've discovered the secret!
              </p>
            </motion.div>
          )}

          {/* Action buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6"
          >
            <Link 
              href="/" 
              className="group relative w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white rounded-xl hover:from-[#ff6600] hover:to-[#ff8800] transition-all duration-300 inline-block text-center font-bold text-sm transform hover:scale-105 shadow-2xl hover:shadow-[#ff5500]/25"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🏠 Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </Link>
            
            <Link 
              href="/work" 
              className={`group w-full sm:w-auto px-6 py-3 border-2 border-[#ff5500] rounded-xl text-[#ff5500] transition-all duration-300 inline-block text-center font-bold text-sm transform hover:scale-105 shadow-lg hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-white/5 hover:bg-white/10 backdrop-blur-sm' 
                  : 'bg-white/80 hover:bg-white backdrop-blur-sm'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className="flex items-center justify-center gap-2">
                🎨 View Our Work
              </span>
            </Link>
          </motion.div>

          {/* Easter egg - hidden message */}
          <motion.div 
            variants={fadeInUp}
            className="mt-4 absolute left-1/2 -translate-x-1/2"
          >
            <details className={`text-xs ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              <summary className="cursor-pointer hover:text-[#ff5500] transition-colors">
                🥚 Click for a secret message...
              </summary>
              <p className="mt-2 italic text-xs">
                "A website without a 404 page is like a house without a doorbell!" 📚
              </p>
              <p className="mt-1 text-[#ff5500] text-xs">
                P.S. Try clicking the big 404 numbers above! 😉
              </p>
            </details>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
} 