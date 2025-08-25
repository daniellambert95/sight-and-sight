'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { useTheme } from '../../utils/ThemeProvider';
import { getBlogPost, urlFor } from '../../utils/sanity';
import { PortableText, type SanityDocument } from 'next-sanity';
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function BlogPostPage() {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<SanityDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const blogPost = await getBlogPost(slug);
        if (!blogPost) {
          setError('Post not found');
        } else {
          setPost(blogPost);
        }
      } catch (err) {
        console.error('Error fetching blog post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const calculateReadTime = (body: any[]) => {
    if (!body) return 5;
    const text = body
      .filter(block => block._type === 'block')
      .map(block => 
        block.children
          .filter((child: any) => child._type === 'span')
          .map((child: any) => child.text)
          .join('')
      )
      .join(' ');
    
    const wordsPerMinute = 200;
    const wordCount = text.split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  // Clean Portable Text components without images
  const portableTextComponents = {
    types: {
      // Remove image rendering - images will not be displayed in articles
      image: () => null,
      // Handle code blocks
      code: ({ value }: any) => (
        <pre className={`my-6 p-4 rounded-lg overflow-x-auto ${
          theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
        }`}>
          <code className="text-sm">{value.code}</code>
        </pre>
      ),
    },
    block: {
      h1: ({ children }: any) => (
        <h1 className={`text-3xl md:text-4xl font-black mb-6 mt-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 mt-8 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className={`text-xl md:text-2xl font-bold mb-3 mt-6 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className={`mb-4 leading-relaxed text-lg ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className={`border-l-4 border-[#ff5500] pl-6 my-6 italic text-lg ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {children}
        </blockquote>
      ),
    },
    marks: {
      strong: ({ children }: any) => (
        <strong className="font-bold text-[#ff5500]">{children}</strong>
      ),
      em: ({ children }: any) => (
        <em className="italic">{children}</em>
      ),
      link: ({ children, value }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ff5500] hover:text-[#ff6600] underline transition-colors"
        >
          {children}
        </a>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className={`list-disc list-inside mb-4 space-y-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className={`list-decimal list-inside mb-4 space-y-2 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => <li className="mb-1">{children}</li>,
      number: ({ children }: any) => <li className="mb-1">{children}</li>,
    },
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex flex-col ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        <Navigation currentPage="blog" />
        <div className="flex-1 flex justify-center items-center">
          <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
            theme === 'dark' ? 'border-white' : 'border-gray-900'
          }`}></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={`min-h-screen flex flex-col ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        <Navigation currentPage="blog" />
        <div className="flex-1 flex flex-col justify-center items-center py-20">
          <div className={`text-6xl mb-4 ${
            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            😕
          </div>
          <h1 className={`text-3xl font-bold mb-4 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {error === 'Post not found' ? 'Post Not Found' : 'Something went wrong'}
          </h1>
          <p className={`text-lg mb-8 ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {error === 'Post not found' 
              ? "The blog post you're looking for doesn't exist." 
              : "We couldn't load the blog post. Please try again later."}
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-[#ff5500] text-white rounded-lg hover:bg-[#ff6600] transition-colors font-semibold"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="blog" />

      {/* Article Header */}
      <section className={`relative pt-32 pb-16 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-orange-50 to-red-50'
      }`}>
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute top-20 right-20 w-32 h-32 rounded-full opacity-10 ${
            theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]/30'
          }`}></div>
          <div className={`absolute bottom-20 left-10 w-24 h-24 rotate-45 opacity-15 ${
            theme === 'dark' ? 'bg-orange-500' : 'bg-orange-300'
          }`}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Back to Blog */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/blog"
              className={`inline-flex items-center text-sm font-medium transition-colors ${
                theme === 'dark' 
                  ? 'text-gray-400 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Categories */}
          {post.categories && post.categories.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {post.categories.map((category: any) => (
                <span 
                  key={category._id}
                  className="px-3 py-1 bg-[#ff5500]/20 text-[#ff5500] rounded-full text-sm font-medium"
                >
                  {category.title}
                </span>
              ))}
            </motion.div>
          )}

          {/* Title */}
          <motion.h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          {(post.excerpt || post.description) && (
            <motion.p 
              className={`text-xl leading-relaxed mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {post.excerpt || post.description}
            </motion.p>
          )}

          {/* Meta Information */}
          <motion.div 
            className={`flex flex-wrap items-center gap-6 text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center">
              <CalendarIcon className="w-4 h-4 mr-2" />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>{calculateReadTime(post.body)} min read</span>
            </div>
            
            {post.author && (
              <div className="flex items-center">
                <UserIcon className="w-4 h-4 mr-2" />
                <span>By {post.author.name}</span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

{/* Featured Image section removed */}

      {/* Article Content */}
      <section className={`py-16 px-8 md:px-16 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <motion.article 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={`prose prose-lg max-w-none ${
            theme === 'dark' ? 'prose-invert' : ''
          }`}>
            {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
          </div>
        </motion.article>
      </section>

      {/* Back to Blog CTA */}
      <section className={`py-16 px-8 md:px-16 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-gray-900 to-black' 
          : 'bg-gradient-to-r from-gray-50 to-white'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Want to read more?
          </h3>
          <p className={`text-lg mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Check out our other articles for more insights and tips.
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-[#ff5500] text-white rounded-xl hover:bg-[#ff6600] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}