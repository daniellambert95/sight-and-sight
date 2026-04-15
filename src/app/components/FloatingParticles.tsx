'use client';

import { useEffect, useRef } from 'react';

interface FloatingParticlesProps {
  particleCount?: number;
  particleColor?: string;
  particleColors?: string[];
  colorCycleDuration?: number;
  backgroundColor?: string;
  particleSize?: number;
  duration?: number;
  className?: string;
}

const FloatingParticles = ({
  particleCount = 50,
  particleColor = '#ff5500',
  particleColors,
  colorCycleDuration = 8000,
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

      const colors = particleColors ?? [particleColor];
      const hasColorCycle = colors.length > 1;

      // Create CSS-animated particles (since they're working well)
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `css-particle-${i}`;
        const floatAnim = `floatUp ${duration + Math.random() * 2000}ms ease-in-out infinite`;
        const colorAnim = hasColorCycle ? `, particleColorCycle ${colorCycleDuration}ms ease-in-out infinite` : '';
        particle.style.cssText = `
          position: absolute;
          width: ${particleSize}px;
          height: ${particleSize}px;
          background: radial-gradient(circle, ${colors[0]}, ${colors[0]}dd);
          border-radius: 50%;
          opacity: 0;
          pointer-events: none;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          z-index: 1;
          animation: ${floatAnim}${colorAnim};
          animation-delay: ${Math.random() * 2000}ms;
        `;
        container.appendChild(particle);
      }

      // Remove old styles so they get regenerated with latest colors
      const existingStyle = document.getElementById('particle-styles');
      if (existingStyle) existingStyle.remove();

      const style = document.createElement('style');
      style.id = 'particle-styles';

      const colorKeyframes = hasColorCycle ? `
          @keyframes particleColorCycle {
            0%   { background: radial-gradient(circle, ${colors[0]}, ${colors[0]}dd); }
            50%  { background: radial-gradient(circle, ${colors[1]}, ${colors[1]}dd); }
            100% { background: radial-gradient(circle, ${colors[0]}, ${colors[0]}dd); }
          }
        ` : '';

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
          ${colorKeyframes}
        `;
      document.head.appendChild(style);
    };

    initParticles();

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };
  }, [particleCount, particleColor, particleColors, colorCycleDuration, particleSize, duration]);

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