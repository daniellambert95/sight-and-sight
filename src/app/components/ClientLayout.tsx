'use client';

import { useState, useEffect } from 'react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Simple layout that just renders children
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 