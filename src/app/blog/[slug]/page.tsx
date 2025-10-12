'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import SubscribeNow from "../../components/SubscribeNow";
import TableOfContents from "../../components/TableOfContents";
import { motion } from "framer-motion";
import { useTheme } from '../../utils/ThemeProvider';
import { getBlogPost, getBlogPosts, urlFor } from '../../utils/sanity';
import { PortableText, type SanityDocument } from 'next-sanity';
import { CalendarIcon, ClockIcon, UserIcon, ArrowLeftIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function BlogPostPage() {
  const { theme } = useTheme();
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<SanityDocument | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      
      try {
        const [blogPost, allPosts] = await Promise.all([
          getBlogPost(slug),
          getBlogPosts()
        ]);
        
        if (!blogPost) {
          setError('Post not found');
        } else {
          setPost(blogPost);
          // Get related posts (excluding current post)
          const related = (allPosts || [])
            .filter((p: { slug: { current: string; }; }) => p.slug.current !== slug)
            .slice(0, 3);
          setRelatedPosts(related);
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


  // Portable Text components with image support
  const portableTextComponents = {
    types: {
      // Render images from Sanity
      image: ({ value }: any) => {
        if (!value?.asset?._ref && !value?.asset?._id) return null;
        
        const imageUrl = urlFor(value)?.width(800).url();
        if (!imageUrl) return null;
        
        return (
          <figure className="my-8 text-center">
            <img
              src={imageUrl}
              alt={value.alt || value.caption || 'Blog image'}
              className={`max-w-full h-auto rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl mx-auto ${
                theme === 'dark' ? 'shadow-gray-900/20' : 'shadow-gray-200/50'
              }`}
              loading="lazy"
            />
            {(value.caption || value.alt) && (
              <figcaption className={`text-center text-sm mt-3 italic ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {value.caption || value.alt}
              </figcaption>
            )}
          </figure>
        );
      },
      // Handle gallery blocks (if used)
      gallery: ({ value }: any) => {
        if (!value?.images || !Array.isArray(value.images)) return null;
        
        return (
          <div className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {value.images.map((image: any, index: number) => {
                const imageUrl = urlFor(image)?.width(400).url();
                if (!imageUrl) return null;
                
                return (
                  <figure key={index} className="group">
                    <img
                      src={imageUrl}
                      alt={image.alt || image.caption || `Gallery image ${index + 1}`}
                      className={`w-full h-auto rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg object-contain ${
                        theme === 'dark' ? 'shadow-gray-900/20' : 'shadow-gray-200/50'
                      }`}
                      loading="lazy"
                    />
                    {(image.caption || image.alt) && (
                      <figcaption className={`text-center text-xs mt-2 italic ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {image.caption || image.alt}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
            {value.caption && (
              <p className={`text-center text-sm mt-4 italic ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {value.caption}
              </p>
            )}
          </div>
        );
      },
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
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950 text-white' : 'bg-gradient-to-br from-white to-gray-50 text-black'
      }`}>
        <Navigation currentPage="blog" />
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className={`animate-spin rounded-full h-16 w-16 border-b-3 mb-4 ${
            theme === 'dark' ? 'border-[#ff5500]' : 'border-[#ff5500]'
          }`}></div>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className={`min-h-screen flex flex-col ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950 text-white' : 'bg-gradient-to-br from-white to-gray-50 text-black'
      }`}>
        <Navigation currentPage="blog" />
        <div className="flex-1 flex flex-col justify-center items-center py-20">
          <motion.div 
            className={`text-8xl mb-6 ${
              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
            }`}
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            😕
          </motion.div>
          <h1 className={`text-4xl font-bold mb-4 text-center ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
            {error === 'Post not found' ? 'Article Not Found' : 'Something Went Wrong'}
          </h1>
          <p className={`text-lg mb-8 text-center max-w-md ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {error === 'Post not found' 
              ? "The article you're looking for doesn't exist or may have been moved." 
              : "We couldn't load the article. Please check your connection and try again."}
          </p>
          <Link 
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-[#ff5500] text-white rounded-xl hover:bg-[#ff6600] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950 text-white' : 'bg-gradient-to-br from-white to-gray-50 text-black'
    }`}>
      <Navigation currentPage="blog" />

      {/* Main content wrapper with adjusted layout for ToC */}
      <div className="relative">
        {/* Enhanced Article Header */}
        <section className={`relative pt-40 pb-20 px-4 md:px-8 lg:px-16 ${
          theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-gradient-to-br from-white to-gray-50'
        }`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${theme === 'dark' ? '#ff5500' : '#ff5500'} 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${theme === 'dark' ? '#ff5500' : '#ff5500'} 0%, transparent 50%)`
            }}></div>
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
                className={`inline-flex items-center text-sm font-semibold transition-all duration-300 hover:translate-x-[-4px] ${
                  theme === 'dark' 
                    ? 'text-gray-400 hover:text-[#ff5500]' 
                    : 'text-gray-600 hover:text-[#ff5500]'
                }`}
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                <ArrowLeftIcon className="w-5 h-5 mr-2" />
                Back to Blog
              </Link>
            </motion.div>

            {/* Enhanced Categories */}
            {post.categories && post.categories.length > 0 && (
              <motion.div 
                className="flex flex-wrap gap-3 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                {post.categories.map((category: any) => (
                  <motion.span 
                    key={category._id}
                    className="px-4 py-2 bg-[#ff5500]/20 text-[#ff5500] rounded-full text-sm font-semibold border border-[#ff5500]/30 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    style={{ fontFamily: 'var(--font-league-spartan)' }}
                  >
                    {category.title}
                  </motion.span>
                ))}
              </motion.div>
            )}

            {/* Enhanced Title */}
            <motion.h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {post.title}
            </motion.h1>

            {/* Enhanced Excerpt */}
            {(post.excerpt || post.description) && (
              <motion.p 
                className={`text-xl md:text-2xl leading-relaxed mb-10 max-w-3xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {post.excerpt || post.description}
              </motion.p>
            )}

            {/* Enhanced Meta Information */}
            <motion.div 
              className={`flex flex-wrap items-center gap-8 text-sm font-medium ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 mr-2 text-[#ff5500]" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-[#ff5500]" />
                <span>{calculateReadTime(post.body)} min read</span>
              </div>
              
              {post.author && (
                <div className="flex items-center">
                  <UserIcon className="w-5 h-5 mr-2 text-[#ff5500]" />
                  <span>By {post.author.name}</span>
                </div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Enhanced Article Content */}
        <section className={`py-20 px-4 md:px-8 lg:px-16 ${
          theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
        }`}>
          <div className="max-w-6xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              {/* Main Content - Centered */}
              <motion.div 
                className="lg:col-span-8 lg:col-start-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <article className={`prose prose-lg md:prose-xl max-w-none mx-auto ${
                  theme === 'dark' ? 'prose-invert' : ''
                }`}>
                  {Array.isArray(post.body) && <PortableText value={post.body} components={portableTextComponents} />}
                </article>
              </motion.div>

              {/* Sidebar */}
              <motion.div 
                className="lg:col-span-4 mt-12 lg:mt-0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Table of Contents */}
                <TableOfContents />

                {/* Contact CTA */}
                <div className="bg-[#ff5500] rounded-xl p-6 text-white mb-8">
                  <h3 className="text-lg font-bold mb-3">Have More Questions?</h3>
                  <p className="text-sm mb-4 opacity-90">
                    Our team of experts is here to help you with web design, SEO, and digital strategy. 
                    Get personalized advice for your project.
                  </p>
                  <Link 
                    href="/contact"
                    className="block w-full bg-white text-[#ff5500] font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors text-center"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* Have a Question Section */}
      <section className={`py-20 px-4 md:px-8 lg:px-16 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ChatBubbleLeftRightIcon className={`w-16 h-16 mx-auto mb-6 ${
              theme === 'dark' ? 'text-[#ff5500]' : 'text-[#ff5500]'
            }`} />
            <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
              Have More Questions?
            </h3>
            <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Our team of experts is here to help you with web design, SEO, and digital strategy. Get personalized advice for your project.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-[#ff5500] text-white rounded-xl hover:bg-[#ff6600] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2" />
              Ask Us a Question
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Related Articles Section */}
      {relatedPosts.length > 0 && (
        <section className={`py-20 px-4 md:px-8 lg:px-16 ${
          theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
        }`}>
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                More <span className="text-[#ff5500]">Insights</span>
              </h3>
              <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Continue exploring our latest articles and expert insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug.current}`}>
                    <article className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer h-full hover:scale-[1.02] hover:translate-y-[-4px] ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/20 hover:shadow-gray-200/40'
                    } backdrop-blur-sm`}>
                      {/* Card Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 via-transparent to-[#ff5500]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                      
                      <div className="relative z-10">
                        {/* Image */}
                        {(relatedPost.mainImage || relatedPost.image || relatedPost.featuredImage || relatedPost.coverImage) && (
                          <div className="h-48 relative overflow-hidden">
                            <img
                              src={urlFor(relatedPost.mainImage || relatedPost.image || relatedPost.featuredImage || relatedPost.coverImage)?.width(400).height(250).url() || ''}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                        )}
                        
                        {/* No Image Fallback */}
                        {!(relatedPost.mainImage || relatedPost.image || relatedPost.featuredImage || relatedPost.coverImage) && (
                          <div className={`h-48 flex items-center justify-center ${
                            theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                          }`}>
                            <div className={`text-5xl ${
                              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                            }`}>📝</div>
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="p-6">
                          {/* Categories */}
                          {relatedPost.categories && relatedPost.categories.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              {relatedPost.categories.slice(0, 1).map((category: any) => (
                                <span 
                                  key={category._id}
                                  className="text-xs px-2 py-1 bg-[#ff5500]/20 text-[#ff5500] rounded-full font-medium"
                                >
                                  {category.title}
                                </span>
                              ))}
                            </div>
                          )}

                          <h4 className={`text-lg font-bold mb-2 line-clamp-2 leading-tight group-hover:text-[#ff5500] transition-colors duration-300 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                            {relatedPost.title}
                          </h4>
                          
                          {(relatedPost.excerpt || relatedPost.description) && (
                            <p className={`text-sm mb-4 leading-relaxed line-clamp-2 ${
                              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              {relatedPost.excerpt || relatedPost.description}
                            </p>
                          )}
                          
                          {/* Meta */}
                          <div className={`flex items-center justify-between text-xs ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            <div className="flex items-center">
                              <CalendarIcon className="w-3 h-3 mr-1" />
                              <span>{formatDate(relatedPost.publishedAt)}</span>
                            </div>
                            <div className="flex items-center text-[#ff5500] group-hover:translate-x-1 transition-transform duration-300">
                              <span className="text-xs font-semibold mr-1">Read More</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View All Articles Button */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-[#ff5500] text-[#ff5500] rounded-xl hover:bg-[#ff5500] hover:text-white transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                View All Articles
                <ArrowLeftIcon className="w-5 h-5 ml-2 rotate-180" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Subscribe Section */}
      <SubscribeNow text="STAY UPDATED" />

      <Footer />
    </div>
  );
}
