'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealTextProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  threshold?: number;
  useBlur?: boolean;
}

export default function ScrollRevealText({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  threshold = 0.1,
  useBlur = true,
}: ScrollRevealTextProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center', 'end start'],
  });

  // Make animations reversible based on scroll position
  // When scrolling down: fade in, when scrolling back up: fade out
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [10, 0, 0, 10]);
  
  // Position transforms based on direction
  const yTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    direction === 'up' ? [50, 0, 0, -50] : direction === 'down' ? [-50, 0, 0, 50] : [0, 0, 0, 0]
  );
  const xTransform = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    direction === 'left' ? [50, 0, 0, -50] : direction === 'right' ? [-50, 0, 0, 50] : [0, 0, 0, 0]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        opacity,
        y: yTransform,
        x: xTransform,
        filter: useBlur ? blur : undefined,
        transition: useBlur
          ? 'filter 0.3s cubic-bezier(0.25,0.46,0.45,0.94)'
          : undefined,
      }}
    >
      {children}
    </motion.div>
  );
}
