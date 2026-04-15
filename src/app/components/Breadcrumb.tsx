'use client';

import Link from 'next/link';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../utils/ThemeProvider';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { theme } = useTheme();

  return (
    <nav className={`py-4 px-4 md:px-8 lg:px-16 ${theme === 'dark' ? 'bg-gray-900/50' : 'bg-gray-50/50'}`}>
      <ol className="flex items-center space-x-2 text-sm">
        <li>
          <Link
            href="/"
            className={`flex items-center ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-600 hover:text-gray-900'
            } transition-colors duration-200`}
          >
            <HomeIcon className="w-4 h-4" />
            <span className="ml-1">Home</span>
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRightIcon className={`w-4 h-4 mx-2 ${theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`} />
            
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className={`${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ) : (
              <span className={`${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              } font-medium`}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}