'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import SubscribeNow from "../components/SubscribeNow";
import { motion } from "framer-motion";
import { useTheme } from '../utils/ThemeProvider';
import { getBlogPosts, urlFor } from '../utils/sanity';
import { type SanityDocument } from 'next-sanity';
import { CalendarIcon, UserIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page (excluding featured)

  // Scroll to top of recent posts section when page changes
  useEffect(() => {
    const recentPostsSection = document.getElementById('recent-posts-section');
    if (recentPostsSection && currentPage > 1) {
      recentPostsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        console.log('Fetching blog posts...');
        const blogPosts = await getBlogPosts();
        console.log('Blog posts received:', blogPosts);
        console.log('Number of posts:', blogPosts?.length || 0);
        setPosts(blogPosts || []);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Sort posts by date (latest first) - already sorted by Sanity query, but ensure here
  const sortedPosts = [...posts].sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0).getTime();
    const dateB = new Date(b.publishedAt || 0).getTime();
    return dateB - dateA; // Latest first
  });
  
  // Find the "Site & Sight Keyword Guide" post to feature
  const keywordGuidePost = sortedPosts.find(
    (post) => post.title && 
    (post.title.toLowerCase().includes('keyword guide') || 
     post.title.toLowerCase().includes('site & sight keyword guide'))
  );
  
  // Set featured post (keyword guide if found, otherwise latest post)
  const featuredPost = keywordGuidePost || (sortedPosts.length > 0 ? sortedPosts[0] : null);
  
  // Get recent posts (exclude featured post)
  // Use slug comparison as it's more reliable than ID comparison
  const recentPostsAll = featuredPost && featuredPost.slug?.current
    ? sortedPosts.filter((post) => {
        // Compare by slug if available, otherwise by ID
        if (post.slug?.current && featuredPost.slug?.current) {
          return post.slug.current !== featuredPost.slug.current;
        }
        // Fallback to ID comparison
        if (post._id && featuredPost._id) {
          return String(post._id) !== String(featuredPost._id);
        }
        return true; // Include if we can't compare
      })
    : sortedPosts;
  
  // Pagination for recent posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = recentPostsAll.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(recentPostsAll.length / postsPerPage);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="blog" />

      {/* Hero Section - Compact */}
      <section className={`relative py-12 md:py-16 px-4 md:px-12 lg:px-24 pt-36 md:pt-40 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-black to-black' 
          : 'bg-gradient-to-br from-white to-white'
      }`}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
            {/* Left Column - Main Content (Responsive) */}
            <div className="space-y-4 md:space-y-6 text-center lg:text-left lg:ml-24">
              <h1 className={`text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="block">Digital</span>
                <span className="block text-[#ff5500]">Insights</span>
                <span className={`block text-xl md:text-3xl lg:text-4xl font-light mt-2 md:mt-4 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  that inspire action
                </span>
              </h1>
            </div>
            
            {/* Right Column - Statistics (Horizontal on Mobile, Vertical on Desktop) */}
            <div className="w-full">
              <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 gap-4 md:gap-6 lg:gap-8">
                {[
                  { number: "Weekly", label: "Fresh Content" },
                  { number: "Expert", label: "Industry Insights" },
                  { number: "Actionable", label: "Proven Strategies" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="border-l-2 border-[#ff5500] pl-3 md:pl-6 lg:pl-8 text-center md:text-center lg:text-left"
                  >
                    <div className={`text-base md:text-xl lg:text-2xl xl:text-3xl font-black mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-xs md:text-base lg:text-lg font-semibold ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {!loading && (
        <>
          {/* Featured Post Section */}
          {featuredPost && (
            <section className={`py-4 px-4 md:px-8 lg:px-16 ${
              theme === 'dark' ? 'bg-black' : 'bg-white'
            }`}>
              <div className="max-w-6xl mx-auto">
                <motion.div 
                  className={`rounded-2xl overflow-hidden shadow-2xl ${
                    theme === 'dark' ? 'bg-[#ff5500]' : 'bg-[#ff5500]'
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[500px]">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-white/90 text-sm font-semibold uppercase tracking-wider">
                            Featured Post
                          </span>
                          {(featuredPost.tags && featuredPost.tags.length > 0) || (featuredPost.categories && featuredPost.categories.length > 0) ? (
                            <span className="text-white/90 text-xs px-3 py-1 bg-white/20 rounded-full font-medium">
                              {featuredPost.tags && featuredPost.tags.length > 0 ? featuredPost.tags[0] : featuredPost.categories[0].title}
                            </span>
                          ) : null}
                        </div>
                        <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight" 
                            style={{ fontFamily: 'var(--font-league-spartan)' }}>
                          {featuredPost.title}
                        </h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                          {featuredPost.excerpt || featuredPost.description || 'Discover insights, tips, and strategies to elevate your digital presence.'}
                        </p>
                        <div className="flex items-center text-white/80 text-sm mb-8">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          <span>{formatDate(featuredPost.publishedAt)}</span>
                          {featuredPost.author && (
                            <>
                              <span className="mx-3">•</span>
                              <UserIcon className="w-4 h-4 mr-2" />
                              <span>{featuredPost.author.name}</span>
                            </>
                          )}
                        </div>
                        <Link href={`/blog/${featuredPost.slug.current}`}>
                          <motion.button
                            className="bg-white text-[#ff5500] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center group"
                            style={{ fontFamily: 'var(--font-league-spartan)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Read more
                            <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </motion.button>
                        </Link>
                      </motion.div>
                    </div>

                    {/* Image Side */}
                    <div className="relative">
                      {featuredPost.mainImage || featuredPost.image || featuredPost.featuredImage || featuredPost.coverImage ? (
                        <motion.img
                          src={urlFor(featuredPost.mainImage || featuredPost.image || featuredPost.featuredImage || featuredPost.coverImage)?.width(800).height(600).url() || ''}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                          initial={{ opacity: 0, scale: 1.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#ff5500] to-[#e64d00] relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Recent Posts Section */}
          {recentPostsAll.length > 0 && (
            <section 
              id="recent-posts-section"
              className={`py-16 px-4 md:px-8 lg:px-16 ${
                theme === 'dark' ? 'bg-black' : 'bg-white'
              }`}
            >
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                  <motion.h2 
                    className={`text-3xl lg:text-4xl font-bold ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}
                    style={{ fontFamily: 'var(--font-league-spartan)' }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Our Recent Post
                  </motion.h2>
                  <motion.button
                    className="bg-[#ff5500] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e64d00] transition-all duration-300"
                    style={{ fontFamily: 'var(--font-league-spartan)' }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    View All
                  </motion.button>
                </div>

                {/* Recent Posts Grid */}
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {currentPosts.map((post) => (
                    <motion.div
                      key={post._id}
                      variants={fadeIn}
                      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                        theme === 'dark' 
                          ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50' 
                          : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="relative h-48">
                        {post.mainImage || post.image || post.featuredImage || post.coverImage ? (
                          <img
                            src={urlFor(post.mainImage || post.image || post.featuredImage || post.coverImage)?.width(400).height(300).url() || ''}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-[#ff5500] to-[#e64d00] relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center flex-wrap gap-2 mb-3">
                          {(post.tags && post.tags.length > 0) || (post.categories && post.categories.length > 0) ? (
                            <span className="text-xs px-2 py-1 bg-[#ff5500]/20 text-[#ff5500] rounded-full font-medium">
                              {post.tags && post.tags.length > 0 ? post.tags[0] : post.categories[0].title}
                            </span>
                          ) : null}
                          <span className={`text-xs ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {formatDate(post.publishedAt)}
                          </span>
                        </div>
                        <h3 className={`text-lg font-bold mb-3 leading-tight ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                          {post.title}
                        </h3>
                        <p className={`text-sm leading-relaxed mb-4 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {(post.excerpt || post.description || '').substring(0, 100)}...
                        </p>
                        <Link href={`/blog/${post.slug.current}`}>
                          <motion.button
                            className="text-[#ff5500] text-sm font-semibold hover:text-[#e64d00] transition-colors duration-300"
                            style={{ fontFamily: 'var(--font-league-spartan)' }}
                          >
                            Read More
                          </motion.button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <motion.div 
                    className="flex items-center justify-center gap-4 mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <motion.button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === 1
                          ? 'opacity-50 cursor-not-allowed'
                          : theme === 'dark'
                          ? 'bg-gray-800 text-white hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}
                      whileHover={currentPage !== 1 ? { scale: 1.05 } : {}}
                      whileTap={currentPage !== 1 ? { scale: 0.95 } : {}}
                    >
                      <ChevronLeftIcon className="w-5 h-5" />
                      Previous
                    </motion.button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                        // Show first page, last page, current page, and pages around current
                        const showPage = 
                          page === 1 || 
                          page === totalPages || 
                          (page >= currentPage - 1 && page <= currentPage + 1);
                        
                        if (!showPage) {
                          // Show ellipsis
                          if (page === currentPage - 2 || page === currentPage + 2) {
                            return (
                              <span key={page} className={`px-2 ${
                                theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                              }`}>
                                ...
                              </span>
                            );
                          }
                          return null;
                        }

                        return (
                          <motion.button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                              currentPage === page
                                ? 'bg-[#ff5500] text-white'
                                : theme === 'dark'
                                ? 'bg-gray-800 text-white hover:bg-gray-700'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                            }`}
                            style={{ fontFamily: 'var(--font-league-spartan)' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {page}
                          </motion.button>
                        );
                      })}
                    </div>

                    <motion.button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                        currentPage === totalPages
                          ? 'opacity-50 cursor-not-allowed'
                          : theme === 'dark'
                          ? 'bg-gray-800 text-white hover:bg-gray-700'
                          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }`}
                      style={{ fontFamily: 'var(--font-league-spartan)' }}
                      whileHover={currentPage !== totalPages ? { scale: 1.05 } : {}}
                      whileTap={currentPage !== totalPages ? { scale: 0.95 } : {}}
                    >
                      Next
                      <ChevronRightIcon className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </section>
          )}
        </>
      )}

      {/* Loading State */}
      {loading && (
        <motion.div 
          className="flex flex-col justify-center items-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-3 border-[#ff5500] mb-4"></div>
          <p className={`text-lg ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Loading our latest insights...
          </p>
        </motion.div>
      )}

      {/* Subscribe Section */}
      <SubscribeNow text="SUBSCRIBE NOW" />

      <Footer />
    </div>
  );
}