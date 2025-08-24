'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeProvider';

interface AnimatedIntroProps {
  onComplete?: () => void;
}

const AnimatedIntro: React.FC<AnimatedIntroProps> = ({ onComplete }) => {
  const { theme } = useTheme();
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  
  const words = ['WEB', 'SEO', 'WOW!'];
  const staticText = 'WE DO ';
  
  // Total animation time - 8 seconds
  const TOTAL_DURATION = 8000;

  useEffect(() => {
    // Sync progress bar to total duration
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Progress completes in 7 seconds, leaving 1 second for final display
        return prev + (100 / (7000 / 100)); // 100 steps over 7 seconds
      });
    }, 100);

    // Animation phases - adjusted timing
    const timer1 = setTimeout(() => setPhase(1), 300);  // Logo appears
    const timer2 = setTimeout(() => setPhase(2), 1000); // Text starts typing
    const timer3 = setTimeout(() => setPhase(3), 3000); // Loading bar appears
    const timer4 = setTimeout(() => setPhase(4), 5000); // Subtitle appears
    
    // Exit animation - synchronized with progress completion
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => onComplete?.(), 1000);
    }, TOTAL_DURATION);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(exitTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  // Fixed typewriter effect for changing words only
  useEffect(() => {
    if (phase >= 2) {
      // Stop animation if we're on the last word and finished typing
      if (currentWordIndex === words.length - 1 && charIndex >= words[currentWordIndex].length && !isDeleting) {
        return;
      }

      const typeWord = () => {
        const currentWord = words[currentWordIndex];
        
        if (!isDeleting) {
          // Typing
          if (charIndex < currentWord.length) {
            setTypedWord(currentWord.substring(0, charIndex + 1));
            setCharIndex(prev => prev + 1);
          } else {
            // Pause before deleting (except for last word)
            if (currentWordIndex < words.length - 1) {
              setTimeout(() => setIsDeleting(true), 1200);
            }
            return;
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setCharIndex(prev => prev - 1);
            setTypedWord(currentWord.substring(0, charIndex - 1));
          } else {
            // Move to next word and reset
            setIsDeleting(false);
            setCharIndex(0);
            setCurrentWordIndex(prev => prev + 1);
            return;
          }
        }
      };

      const delay = isDeleting ? 60 : 90;
      const timer = setTimeout(typeWord, delay);
      
      return () => clearTimeout(timer);
    }
  }, [phase, charIndex, isDeleting, currentWordIndex]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => onComplete?.(), 300);
  };

  // Theme-based styles
  const bgClass = theme === 'dark' 
    ? 'bg-black' 
    : 'bg-white';
  
  const textClass = theme === 'dark' 
    ? 'text-white' 
    : 'text-black';
    
  const subtitleClass = theme === 'dark' 
    ? 'text-gray-400' 
    : 'text-gray-600';
    
  const progressBgClass = theme === 'dark' 
    ? 'bg-gray-900' 
    : 'bg-gray-200';
    
  const skipButtonClass = theme === 'dark' 
    ? 'text-gray-600 hover:text-gray-400' 
    : 'text-gray-400 hover:text-gray-600';

  const dotColor = theme === 'dark' ? '#666' : '#ccc';

  return (
    <div 
      className={`fixed inset-0 z-50 ${bgClass} overflow-hidden transition-all duration-700 ${isExiting ? 'opacity-0' : 'opacity-100'} cursor-pointer`}
      onClick={handleSkip}
    >
      {/* Minimal background effect */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-black via-gray-950 to-black' : 'bg-gradient-to-b from-white via-gray-50 to-white'}`} />
        
        {/* Subtle floating dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => {
            // Use deterministic values based on index to avoid hydration mismatch
            const leftPos = (i * 17 + 13) % 100; // Deterministic left position
            const topPos = (i * 23 + 7) % 100;   // Deterministic top position
            const duration = 20 + (i % 10);      // Deterministic duration
            const delay = (i * 0.3) % 5;         // Deterministic delay
            
            return (
              <div
                key={`dot-${i}`}
                className={`absolute rounded-full transition-opacity duration-2000 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  width: '2px',
                  height: '2px',
                  backgroundColor: i % 3 === 0 ? '#ff5500' : dotColor,
                  left: `${leftPos}%`,
                  top: `${topPos}%`,
                  animation: `float ${duration}s infinite linear`,
                  animationDelay: `${delay}s`
                }}
              />
            );
          })}
        </div>
      </div>

              {/* Main Content */}
        <div className="relative h-full flex flex-col items-center justify-center px-8 pt-30">
          {/* Main Text with Typewriter Effect */}
          <div className="mb-8 min-h-[140px] flex items-center">
            <h1 className={`text-5xl md:text-8xl lg:text-9xl font-bold ${textClass} transition-opacity duration-1000 ${phase >= 2 ? 'opacity-100' : 'opacity-0'} tracking-tight`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              <span className="drop-shadow-lg">
                {staticText}
                <span className="text-[#ff5500]">{typedWord}</span>
              </span>
              <span className={`inline-block w-2 h-16 md:h-20 lg:h-24 bg-[#ff5500] ml-3 ${(currentWordIndex < words.length - 1 || isDeleting) && phase >= 2 ? 'animate-blink' : 'opacity-0'}`} />
            </h1>
          </div>

        {/* Loading Bar - Synchronized timing */}
        <div className={`w-1/4 max-w-sm transition-all duration-700 ${phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Progress percentage */}
          <div className="flex justify-between items-center mb-4 px-1">
            <span className={`text-sm ${subtitleClass} font-mono tracking-wider`} style={{ fontFamily: 'var(--font-league-spartan)' }}>LOADING</span>
            <span className="text-sm text-[#ff5500] font-mono tracking-wider" style={{ fontFamily: 'var(--font-league-spartan)' }}>{Math.round(progress)}%</span>
          </div>
          
          {/* Progress bar */}
          <div className="relative">
            <div className={`h-1 ${progressBgClass} rounded-full overflow-hidden shadow-inner`}>
              <div 
                className="h-full bg-gradient-to-r from-[#ff5500] to-[#e64d00] transition-all duration-150 ease-out rounded-full relative"
                style={{ width: `${progress}%` }}
              >
                {/* Inner glow effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#ff7733] to-[#ff5500] rounded-full"
                  style={{ opacity: 0.6 }}
                />
                {/* Animated shine effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse"
                  style={{ opacity: 0.3 }}
                />
              </div>
            </div>
            
            {/* Multiple glow layers for modern effect */}
            <div 
              className="absolute -top-1 -bottom-1 left-0 bg-gradient-to-r from-[#ff5500] to-[#e64d00] blur-sm transition-all duration-150 rounded-full"
              style={{ width: `${progress}%`, opacity: progress > 0 ? 0.4 : 0 }}
            />
            <div 
              className="absolute -top-2 -bottom-2 left-0 bg-gradient-to-r from-[#ff5500] to-[#e64d00] blur-md transition-all duration-150 rounded-full"
              style={{ width: `${progress}%`, opacity: progress > 0 ? 0.3 : 0 }}
            />
            <div 
              className="absolute -top-3 -bottom-3 left-0 bg-gradient-to-r from-[#ff5500] to-[#e64d00] blur-lg transition-all duration-150 rounded-full"
              style={{ width: `${progress}%`, opacity: progress > 0 ? 0.2 : 0 }}
            />
            
            {/* Pulsing glow that intensifies with progress */}
            <div 
              className="absolute -top-4 -bottom-4 left-0 bg-gradient-to-r from-[#ff5500] to-[#e64d00] blur-xl transition-all duration-150 rounded-full animate-pulse"
              style={{ 
                width: `${progress}%`, 
                opacity: progress > 0 ? Math.min(progress / 100 * 0.5, 0.5) : 0 
              }}
            />
          </div>
        </div>
        {/* Subtitle */}
        <p className={`pt-12 text-m md:text-xl lg:text-1xl ${subtitleClass} max-w-2xl text-center mb-20 transition-all duration-1000 ${phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} font-medium`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
          OPTIMIZED FOR HUMANS <span className="block">AND GOOGLE'S ROBOT OVERLORDS.</span> 
        </p>
      </div>

      {/* Skip Button - Minimal */}
      <button
        onClick={handleSkip}
        className={`absolute bottom-8 right-8 ${skipButtonClass} transition-all duration-300 ${phase >= 1 ? 'opacity-100' : 'opacity-0'} hover:scale-105`}
      >
        <span className="text-base font-medium tracking-wide" style={{ fontFamily: 'var(--font-league-spartan)' }}>SKIP</span>
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
          100% { transform: translate(0, 0); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedIntro; 