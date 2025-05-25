'use client';

import { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  particleCount?: number;
  particleColor?: string;
  backgroundColor?: string;
  particleSize?: number;
  duration?: number;
  className?: string;
}

const FloatingParticles = ({ 
  particleCount = 50,
  particleColor = '#ff5500',
  backgroundColor = 'transparent',
  particleSize = 8,
  duration = 5000,
  className = ''
}: FloatingParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    const initParticles = async () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear any existing particles
      container.innerHTML = '';

      // Create CSS-animated particles (since they're working well)
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `css-particle-${i}`;
        particle.style.cssText = `
          position: absolute;
          width: ${particleSize}px;
          height: ${particleSize}px;
          background: radial-gradient(circle, ${particleColor}, ${particleColor}dd);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          z-index: 1;
          animation: floatUp ${duration + Math.random() * 2000}ms ease-in-out infinite;
          animation-delay: ${Math.random() * 2000}ms;
        `;
        container.appendChild(particle);
      }
      
      // Add CSS keyframes if not already added
      if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
          @keyframes floatUp {
            0% { 
              transform: translateY(0px) translateX(0px) scale(0); 
              opacity: 0; 
            }
            10% { 
              opacity: 0.8; 
              transform: scale(0.5);
            }
            50% { 
              transform: translateY(-150px) translateX(${Math.random() * 60 - 30}px) scale(1); 
              opacity: 0.8; 
            }
            90% { 
              opacity: 0.6; 
            }
            100% { 
              transform: translateY(-250px) translateX(${Math.random() * 80 - 40}px) scale(0); 
              opacity: 0; 
            }
          }
        `;
        document.head.appendChild(style);
      }
    };

    initParticles();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [particleCount, particleColor, particleSize, duration]);

  return (
    <div 
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ 
        backgroundColor, 
        zIndex: 1
      }}
    >
      <div 
        ref={containerRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
};

export default FloatingParticles; 