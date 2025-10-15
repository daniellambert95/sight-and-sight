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
import { CalendarIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function BlogPage() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<SanityDocument[]>([]);
  const [loading, setLoading] = useState(true);

  // Placeholder posts to supplement the single Sanity post
  const placeholderPosts = [
    {
      _id: 'placeholder-1',
      title: 'The Future of Web Design: Trends to Watch in 2026',
      slug: { current: 'future-web-design-trends-2026' },
      excerpt: 'Discover the latest web design trends that are shaping the digital landscape. From AI-powered design tools to immersive user experiences.',
      description: 'Discover the latest web design trends that are shaping the digital landscape. From AI-powered design tools to immersive user experiences.',
      publishedAt: '2025-10-10T00:00:00Z',
      author: { name: 'Site & Sight Team' },
      categories: [{ title: 'Web Design', _id: 'cat-1' }],
      mainImage: null,
      image: null,
      isPlaceholder: true
    },
    {
      _id: 'placeholder-2',
      title: 'SEO Strategies That Actually Work in 2025',
      slug: { current: 'seo-strategies-2025' },
      excerpt: 'Learn the most effective SEO techniques that deliver real results. Our proven strategies have helped hundreds of businesses rank higher.',
      description: 'Learn the most effective SEO techniques that deliver real results. Our proven strategies have helped hundreds of businesses rank higher.',
      publishedAt: '2025-10-08T00:00:00Z',
      author: { name: 'Site & Sight Team' },
      categories: [{ title: 'SEO', _id: 'cat-2' }],
      mainImage: null,
      image: null,
      isPlaceholder: true
    },
    {
      _id: 'placeholder-3',
      title: 'Building High-Converting Landing Pages',
      slug: { current: 'high-converting-landing-pages' },
      excerpt: 'Master the art of creating landing pages that convert visitors into customers. Essential design principles and conversion optimization tips.',
      description: 'Master the art of creating landing pages that convert visitors into customers. Essential design principles and conversion optimization tips.',
      publishedAt: '2025-10-05T00:00:00Z',
      author: { name: 'Site & Sight Team' },
      categories: [{ title: 'Conversion', _id: 'cat-3' }],
      mainImage: null,
      image: null,
      isPlaceholder: true
    },
    {
      _id: 'placeholder-4',
      title: 'The Complete Guide to Brand Identity Design',
      slug: { current: 'brand-identity-design-guide' },
      excerpt: 'Everything you need to know about creating a memorable brand identity. From logo design to brand guidelines and visual consistency.',
      description: 'Everything you need to know about creating a memorable brand identity. From logo design to brand guidelines and visual consistency.',
      publishedAt: '2025-10-02T00:00:00Z',
      author: { name: 'Site & Sight Team' },
      categories: [{ title: 'Branding', _id: 'cat-4' }],
      mainImage: null,
      image: null,
      isPlaceholder: true
    },
    {
      _id: 'placeholder-5',
      title: 'Mobile-First Design: Best Practices for 2025',
      slug: { current: 'mobile-first-design-practices' },
      excerpt: 'Learn how to create stunning mobile experiences that engage users and drive conversions. Essential mobile design principles and techniques.',
      description: 'Learn how to create stunning mobile experiences that engage users and drive conversions. Essential mobile design principles and techniques.',
      publishedAt: '2025-09-30T00:00:00Z',
      author: { name: 'Site & Sight Team' },
      categories: [{ title: 'Mobile Design', _id: 'cat-5' }],
      mainImage: null,
      image: null,
      isPlaceholder: true
    }
  ];

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

  // Combine Sanity posts with placeholder posts
  const allPosts = [...posts, ...placeholderPosts];
  const featuredPost = allPosts[0]; // Use the first post as featured
  const recentPosts = allPosts.slice(1); // Rest as recent posts

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
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'
    }`}>
      <Navigation currentPage="blog" />

      {/* Hero Section - Compact */}
      <section className={`relative py-12 md:py-16 px-4 md:px-12 lg:px-24 pt-36 md:pt-40 transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-black via-gray-950 to-black' 
          : 'bg-gradient-to-br from-white to-gray-50'
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
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
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
                        <span className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4 block">
                          Featured Post
                        </span>
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
                        <Link href={featuredPost.isPlaceholder ? '/blog' : `/blog/${featuredPost.slug.current}`}>
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
                      <motion.img
                        src="/images/misc/anna-keibalo.webp"
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          )}

          {/* Recent Posts Section */}
          {recentPosts.length > 0 && (
            <section className={`py-16 px-4 md:px-8 lg:px-16 ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
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

                {/* Featured Recent Post */}
                <motion.div
                  className={`rounded-2xl overflow-hidden shadow-xl mb-12 ${
                    theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-auto">
                      {recentPosts[0].mainImage || recentPosts[0].image ? (
                        <img
                          src={urlFor(recentPosts[0].mainImage || recentPosts[0].image)?.width(600).height(400).url() || ''}
                          alt={recentPosts[0].title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#ff5500] to-[#e64d00] relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-500/20"></div>
                        </div>
                      )}
                    </div>
                    <div className="p-8 lg:p-12">
                      {recentPosts[0].categories && recentPosts[0].categories.length > 0 && (
                        <span className="text-[#ff5500] text-sm font-semibold uppercase tracking-wider">
                          {recentPosts[0].categories[0].title}
                        </span>
                      )}
                      <span className={`text-sm ml-4 ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {formatDate(recentPosts[0].publishedAt)}
                      </span>
                      <h3 className={`text-2xl lg:text-3xl font-bold mt-4 mb-4 leading-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                        {recentPosts[0].title}
                      </h3>
                      <p className={`text-lg leading-relaxed mb-6 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {recentPosts[0].excerpt || recentPosts[0].description}
                      </p>
                      <Link href={recentPosts[0].isPlaceholder ? '/blog' : `/blog/${recentPosts[0].slug.current}`}>
                        <motion.button
                          className="text-[#ff5500] font-semibold hover:text-[#e64d00] transition-colors duration-300 flex items-center group"
                          style={{ fontFamily: 'var(--font-league-spartan)' }}
                          whileHover={{ x: 5 }}
                        >
                          Read More
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Recent Posts Grid */}
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {recentPosts.slice(1, 4).map((post) => (
                    <motion.div
                      key={post._id}
                      variants={fadeIn}
                      className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                        theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
                      }`}
                    >
                      <div className="relative h-48">
                        {post.mainImage || post.image ? (
                          <img
                            src={urlFor(post.mainImage || post.image)?.width(400).height(300).url() || ''}
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
                        {post.categories && post.categories.length > 0 && (
                          <span className="text-[#ff5500] text-xs font-semibold uppercase tracking-wider">
                            {post.categories[0].title}
                          </span>
                        )}
                        <span className={`text-xs ml-2 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {formatDate(post.publishedAt)}
                        </span>
                        <h3 className={`text-lg font-bold mt-3 mb-3 leading-tight ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
                          {post.title}
                        </h3>
                        <p className={`text-sm leading-relaxed mb-4 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {(post.excerpt || post.description || '').substring(0, 100)}...
                        </p>
                        <Link href={post.isPlaceholder ? '/blog' : `/blog/${post.slug.current}`}>
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