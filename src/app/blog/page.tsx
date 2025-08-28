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
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  // Get unique categories from posts
  const categories = [
    { id: 'all', name: 'All Posts', count: posts.length },
    ...Array.from(new Set(
      posts.flatMap(post => post.categories?.map((cat: any) => cat.title) || [])
    )).map(category => ({
      id: category.toLowerCase(),
      name: category,
      count: posts.filter(post => 
        post.categories?.some((cat: any) => cat.title === category)
      ).length
    }))
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => 
        post.categories?.some((cat: any) => cat.title.toLowerCase() === selectedCategory)
      );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`relative overflow-hidden transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950 text-white' : 'bg-gradient-to-br from-white to-gray-50 text-black'
    }`}>
      <Navigation currentPage="blog" />

      {/* Enhanced Hero Section */}
      <section className={`relative pt-40 pb-20 px-4 md:px-8 lg:px-16 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${theme === 'dark' ? '#ff5500' : '#ff5500'} 0%, transparent 50%), radial-gradient(circle at 75% 75%, ${theme === 'dark' ? '#ff5500' : '#ff5500'} 0%, transparent 50%)`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              style={{ fontFamily: 'var(--font-league-spartan)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Our <span className="text-[#ff5500]">Blog</span>
            </motion.h1>
            
            <motion.p 
              className={`text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Insights, tips, and stories from our team <br /> Your gateway to mastering web design, SEO, and digital strategy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className={`py-16 px-4 md:px-8 lg:px-16 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-6xl mx-auto">

          {/* Category Filter */}
          {categories.length > 1 && (
            <motion.div 
              className="flex flex-wrap justify-center gap-3 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                    selectedCategory === category.id
                      ? 'bg-[#ff5500] text-white shadow-orange-500/25'
                      : theme === 'dark'
                      ? 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700/50'
                      : 'bg-white/80 text-gray-700 hover:bg-gray-50/80 backdrop-blur-sm border border-gray-200/50'
                  }`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Loading State */}
          {loading && (
            <motion.div 
              className="flex flex-col justify-center items-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`animate-spin rounded-full h-16 w-16 border-b-3 mb-4 ${
                theme === 'dark' ? 'border-[#ff5500]' : 'border-[#ff5500]'
              }`}></div>
              <p className={`text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Loading our latest insights...
              </p>
            </motion.div>
          )}

          {/* No Posts State */}
          {!loading && filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
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
                📝
              </motion.div>
              <h3 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                No blog posts yet
              </h3>
              <p className={`text-lg max-w-md mx-auto ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                We're crafting some amazing content about web design, SEO, and digital strategy. Check back soon!
              </p>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          {!loading && filteredPosts.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug.current}`} key={post._id}>
                  <motion.article 
                    variants={fadeIn}
                    whileHover={{ 
                      scale: 1.03,
                      y: -5
                    }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer h-full ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40' 
                        : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/20 hover:shadow-gray-200/40'
                    } backdrop-blur-sm`}
                  >
                    {/* Enhanced Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 via-transparent to-[#ff5500]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ff5500]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
                    
                    <div className="relative z-10">
                      {/* Enhanced Featured Image */}
                      {(post.mainImage || post.image || post.featuredImage || post.coverImage) && (
                        <div className="h-64 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <img
                            src={urlFor(post.mainImage || post.image || post.featuredImage || post.coverImage)?.width(600).height(400).url() || ''}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Enhanced No Image Fallback */}
                      {!(post.mainImage || post.image || post.featuredImage || post.coverImage) && (
                        <div className={`h-64 flex items-center justify-center relative ${
                          theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}>
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute inset-0" style={{
                              backgroundImage: `radial-gradient(circle at 30% 30%, #ff5500 0%, transparent 50%)`
                            }}></div>
                          </div>
                          <motion.div 
                            className={`text-7xl relative z-10 ${
                              theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                            }`}
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -10, 10, 0]
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            📝
                          </motion.div>
                        </div>
                      )}
                      
                      {/* Enhanced Post Content */}
                      <div className="p-8">
                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.categories.slice(0, 2).map((category: any) => (
                              <motion.span 
                                key={category._id}
                                className="text-xs px-3 py-1.5 bg-[#ff5500]/20 text-[#ff5500] rounded-full font-semibold border border-[#ff5500]/30 backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                                style={{ fontFamily: 'var(--font-league-spartan)' }}
                              >
                                {category.title}
                              </motion.span>
                            ))}
                          </div>
                        )}

                        <h3 className={`text-xl font-bold mb-4 line-clamp-2 leading-tight group-hover:text-[#ff5500] transition-colors duration-300 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                          {post.title}
                        </h3>
                        
                        {(post.excerpt || post.description) && (
                          <p className={`text-sm mb-6 leading-relaxed line-clamp-3 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {post.excerpt || post.description}
                          </p>
                        )}
                        
                        {/* Enhanced Meta Information */}
                        <div className={`flex items-center justify-between pt-4 border-t ${
                          theme === 'dark' ? 'text-gray-400 border-gray-700/50' : 'text-gray-500 border-gray-200/50'
                        }`}>
                          <div className="flex items-center text-xs">
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            <span className="font-medium">{formatDate(post.publishedAt)}</span>
                          </div>
                          
                          {post.author && (
                            <div className="flex items-center text-xs">
                              <UserIcon className="w-4 h-4 mr-2" />
                              <span className="font-medium">{post.author.name}</span>
                            </div>
                          )}
                        </div>

                        {/* Read More Indicator */}
                        <div className="flex items-center justify-end mt-4 text-[#ff5500] group-hover:translate-x-1 transition-transform duration-300">
                          <span className="text-sm font-semibold mr-2" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                            Read More
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Subscribe Section */}
      <SubscribeNow text="SUBSCRIBE NOW" />

      <Footer />
    </div>
  );
}