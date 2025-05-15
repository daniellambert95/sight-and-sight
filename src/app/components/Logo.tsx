'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

export default function Logo({ size = 'medium' }: LogoProps) {
  const { theme } = useTheme();
  
  // Size classes mapping
  const sizeClasses = {
    small: 'h-10',
    medium: 'h-14',
    large: 'h-20',
  };
  
  const logoSrc = theme === 'dark' 
    ? "/logo/Site&Sight logo banner/light.svg" 
    : "/logo/Site&Sight logo banner/dark.svg";

  return (
    <div className="font-bold">
      <Link href="/">
        <Image
          src={logoSrc}
          alt="Site & Sight Logo"
          width={480}
          height={150}
          className={`${sizeClasses[size]} w-auto`}
          priority
        />
      </Link>
    </div>
  );
} 