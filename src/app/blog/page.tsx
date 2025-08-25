'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="blog" />

      {/* Minimal Hero Section */}
      <section className={`pt-32 pb-16 px-8 md:px-16 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center my-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`text-4xl md:text-6xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our <span className="text-[#ff5500]">Blog</span>
            </h1>
            
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Insights, tips, and stories from our team
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className={`py-16 px-8 md:px-16 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-6xl mx-auto">

          {/* Category Filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-[#ff5500] text-white'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${
                theme === 'dark' ? 'border-white' : 'border-gray-900'
              }`}></div>
            </div>
          )}

          {/* No Posts State */}
          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className={`text-6xl mb-4 ${
                theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
              }`}>
                📝
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                No blog posts yet
              </h3>
              <p className={`text-lg ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                We're working on some amazing content. Check back soon!
              </p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && filteredPosts.length > 0 && (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredPosts.map((post) => (
                <Link href={`/blog/${post.slug.current}`} key={post._id}>
                  <motion.article 
                    variants={fadeIn}
                    className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 cursor-pointer ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl shadow-gray-900/50' 
                        : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-white/50 shadow-xl shadow-gray-200/50'
                    } backdrop-blur-sm`}
                  >
                    {/* Card Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff5500]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      {/* Featured Image - clean without overlays */}
                      {(post.mainImage || post.image || post.featuredImage || post.coverImage) && (
                        <div className="h-56 relative overflow-hidden">
                          <img
                            src={urlFor(post.mainImage || post.image || post.featuredImage || post.coverImage)?.width(500).height(300).url() || ''}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      )}

                      {/* No Image Fallback */}
                      {!(post.mainImage || post.image || post.featuredImage || post.coverImage) && (
                        <div className={`h-56 flex items-center justify-center ${
                          theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'
                        }`}>
                          <div className={`text-6xl ${
                            theme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            📝
                          </div>
                        </div>
                      )}
                      
                      {/* Post Content */}
                      <div className="p-6">
                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map((category: any) => (
                              <span 
                                key={category._id}
                                className="text-xs px-2 py-1 bg-[#ff5500]/20 text-[#ff5500] rounded-full font-medium"
                              >
                                {category.title}
                              </span>
                            ))}
                          </div>
                        )}

                        <h3 className={`text-xl font-bold mb-3 line-clamp-2 leading-tight ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{post.title}</h3>
                        
                        {(post.excerpt || post.description) && (
                          <p className={`text-sm mb-4 leading-relaxed line-clamp-3 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {post.excerpt || post.description}
                          </p>
                        )}
                        
                        {/* Meta Information */}
                        <div className={`flex items-center justify-between text-xs ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          <div className="flex items-center">
                            <CalendarIcon className="w-4 h-4 mr-1" />
                            <span>{formatDate(post.publishedAt)}</span>
                          </div>
                          
                          {post.author && (
                            <div className="flex items-center">
                              <UserIcon className="w-4 h-4 mr-1" />
                              <span>{post.author.name}</span>
                            </div>
                          )}
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

      <Footer />
    </div>
  );
}