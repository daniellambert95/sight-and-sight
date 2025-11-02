'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../utils/ThemeProvider';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const { theme } = useTheme();
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeHeading, setActiveHeading] = useState<string>('');

  // Extract headings from the page content
  useEffect(() => {
    const extractHeadings = () => {
      // Wait for content to render
      setTimeout(() => {
        // Find the main article content
        const article = document.querySelector('article');
        if (!article) return;
        
        // Find sections that contain related articles (look for "More Insights" heading)
        const allSections = document.querySelectorAll('section');
        let relatedArticlesSection: Element | null = null;
        allSections.forEach(section => {
          const sectionText = section.textContent || '';
          if (sectionText.includes('More Insights') || sectionText.includes('Continue exploring')) {
            relatedArticlesSection = section;
          }
        });
        
        const allHeadings = article.querySelectorAll('h1, h2, h3, h4');
        
        // Filter out headings that are in the related articles section or after "Conclusion"
        const headingList: Heading[] = [];
        let foundConclusion = false;
        
        Array.from(allHeadings).forEach((heading, index) => {
          const text = heading.textContent?.trim() || '';
          const level = parseInt(heading.tagName.charAt(1));
          
          // Check if this heading is inside the related articles section
          const isInRelatedSection = relatedArticlesSection?.contains(heading) || false;
          
          // Check if heading is in a section that contains related posts grid
          const parentSection = heading.closest('section');
          const hasRelatedGrid = parentSection?.querySelector('[class*="grid"][class*="gap-8"]') || false;
          const isInRelatedArea = hasRelatedGrid && parentSection !== article.closest('section');
          
          // Check if we've reached "Conclusion" - stop after it
          if (text.toLowerCase().includes('conclusion')) {
            foundConclusion = true;
            // Include conclusion itself
            const id = `toc-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${index}`;
            heading.id = id;
            headingList.push({ id, text, level });
            return;
          }
          
          // If we found conclusion, don't add any more headings
          if (foundConclusion) {
            return;
          }
          
          // Skip headings in related articles section or related area
          if (isInRelatedSection || isInRelatedArea) {
            return;
          }
          
          // Skip common blog post title patterns that might appear as headings
          const blogTitlePatterns = [
            /mobile-first design/i,
            /brand identity design/i,
            /high-converting landing/i,
            /more insights/i,
            /related articles/i,
            /continue exploring/i,
            /view all articles/i
          ];
          
          const isBlogTitle = blogTitlePatterns.some(pattern => pattern.test(text));
          if (isBlogTitle) {
            return;
          }
          
          // Include this heading
          const id = `toc-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${index}`;
          heading.id = id;
          headingList.push({ id, text, level });
        });
        
        setHeadings(headingList);
      }, 1000); // Increased timeout to ensure content is fully rendered
    };

    extractHeadings();
    
    // Re-extract if content changes (e.g., dynamic content loading)
    const observer = new MutationObserver(() => {
      extractHeadings();
    });
    
    const article = document.querySelector('article');
    if (article) {
      observer.observe(article, { childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (headings.length === 0) return;

      const scrollPosition = window.scrollY;
      let currentActiveId = '';
      const offset = 150;

      for (let i = 0; i < headings.length; i++) {
        const element = document.getElementById(headings[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;

          if (scrollPosition >= elementTop - offset) {
            currentActiveId = headings[i].id;
          }
        }
      }

      if (scrollPosition < 100 && headings.length > 0) {
        currentActiveId = headings[0].id;
      }

      if (currentActiveId !== activeHeading) {
        setActiveHeading(currentActiveId);
      }
    };

    if (headings.length > 0) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings, activeHeading]);

  const scrollToHeading = (headingId: string) => {
    console.log('Button clicked! Attempting to scroll to:', headingId);
    
    // Wait a bit for any pending renders
    setTimeout(() => {
      const element = document.getElementById(headingId);
      if (element) {
        console.log('Element found:', element);
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update active heading immediately
        setActiveHeading(headingId);
      } else {
        console.log('Element not found with ID:', headingId);
        // Try alternative approach - re-extract headings and try again
        const headingElements = document.querySelectorAll('article h1, article h2, article h3, article h4');
        console.log('All headings found:', headingElements);
        
        // Force re-extraction and try again with filtering
        const article = document.querySelector('article');
        const allSections = document.querySelectorAll('section');
        let relatedArticlesSection: Element | null = null;
        allSections.forEach(section => {
          const sectionText = section.textContent || '';
          if (sectionText.includes('More Insights') || sectionText.includes('Continue exploring')) {
            relatedArticlesSection = section;
          }
        });
        
        let foundConclusion = false;
        const headingList: Heading[] = [];
        
        Array.from(headingElements).forEach((heading, index) => {
          const text = heading.textContent?.trim() || '';
          const level = parseInt(heading.tagName.charAt(1));
          
          const isInRelatedSection = relatedArticlesSection?.contains(heading) || false;
          const parentSection = heading.closest('section');
          const hasRelatedGrid = parentSection?.querySelector('[class*="grid"][class*="gap-8"]') || false;
          const isInRelatedArea = hasRelatedGrid && parentSection !== article?.closest('section');
          
          if (text.toLowerCase().includes('conclusion')) {
            foundConclusion = true;
            const id = `toc-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${index}`;
            heading.id = id;
            headingList.push({ id, text, level });
            return;
          }
          
          if (foundConclusion || isInRelatedSection || isInRelatedArea) {
            return;
          }
          
          const blogTitlePatterns = [
            /mobile-first design/i,
            /brand identity design/i,
            /high-converting landing/i,
            /more insights/i,
            /related articles/i,
            /continue exploring/i,
            /view all articles/i
          ];
          
          if (blogTitlePatterns.some(pattern => pattern.test(text))) {
            return;
          }
          
          const id = `toc-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}-${index}`;
          heading.id = id;
          headingList.push({ id, text, level });
        });
        
        setHeadings(headingList);
        
        // Try scrolling again after extraction
        setTimeout(() => {
          const retryElement = document.getElementById(headingId);
          if (retryElement) {
            const headerOffset = 120;
            const elementPosition = retryElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            setActiveHeading(headingId);
          }
        }, 100);
      }
    }, 50);
  };

  if (headings.length === 0) {
    console.log('No headings available for TableOfContents');
    return null;
  }

  return (
    <div className={`sticky top-8 rounded-xl border p-8 mb-8 ${
      theme === 'dark' 
        ? 'bg-gray-900/95 border-gray-700/50 shadow-xl' 
        : 'bg-white border-gray-200 shadow-lg'
    }`}>
      <h3 className={`text-sm font-semibold mb-6 uppercase tracking-wider ${
        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
      }`}>
        Table of Contents
      </h3>
      
      <nav className="space-y-2">
        {headings.map((heading, index) => (
          <div key={heading.id}>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log('Button clicked for heading:', heading.text, 'ID:', heading.id);
                scrollToHeading(heading.id);
              }}
              className={`w-full text-left block py-3 px-4 rounded-lg transition-all duration-200 text-sm leading-relaxed cursor-pointer ${
                activeHeading === heading.id 
                  ? 'text-[#ff5500] bg-[#ff5500]/10 font-medium border-l-2 border-[#ff5500]' 
                  : theme === 'dark'
                    ? 'text-gray-300 hover:text-[#ff5500] hover:bg-gray-800/50 border-l-2 border-transparent'
                    : 'text-gray-700 hover:text-[#ff5500] hover:bg-gray-50 border-l-2 border-transparent'
              } ${
                heading.level === 1 ? 'font-semibold text-base' :
                heading.level === 2 ? 'font-medium text-sm' :
                heading.level === 3 ? 'ml-4 text-sm' :
                'ml-8 text-xs'
              }`}
            >
              <span className="block transition-transform duration-200 hover:translate-x-1">
                {heading.text}
              </span>
            </button>
            
            {/* Add spacing between sections */}
            {index < headings.length - 1 && heading.level <= 2 && (
              <div className="h-1"></div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}