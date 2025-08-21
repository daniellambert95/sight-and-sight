"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, MinusIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useTheme } from '../utils/ThemeProvider'

type FAQItem = {
  question: string
  answer: string
  category: 'general' | 'process' | 'pricing' | 'technical'
}

const faqs: FAQItem[] = [
  // General Questions
  {
    question: "What services does Site & Sight offer?",
    answer: "We offer a comprehensive range of digital services including web design and development, brand identity design, e-commerce solutions, SEO optimization, digital marketing, and ongoing website maintenance. Our team specializes in creating modern, responsive websites that not only look stunning but also drive business results.",
    category: "general"
  },
  {
    question: "What makes Site & Sight different from other agencies?",
    answer: "Our unique approach combines strategic thinking with creative excellence. We focus on the intersection of beautiful design and functional performance, ensuring every project delivers measurable results. Our team brings together expertise in design, development, marketing, and business strategy to create holistic digital solutions.",
    category: "general"
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer: "Absolutely! We work with everyone from startups and small local businesses to established enterprises. Our scalable approach means we can tailor our services and solutions to fit your specific needs and budget, whether you're just starting out or looking to expand your digital presence.",
    category: "general"
  },
  {
    question: "What industries do you specialize in?",
    answer: "While we work across various industries, we have particular expertise in restaurants and hospitality, professional services, e-commerce, technology, healthcare, and creative industries. Our diverse experience allows us to bring fresh perspectives and proven strategies to any sector.",
    category: "general"
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, we work with clients worldwide. Our team is experienced in managing projects across different time zones and cultural contexts. We've successfully delivered projects for clients in Europe, North America, and beyond.",
    category: "general"
  },
  {
    question: "Can you help with SEO and marketing?",
    answer: "Absolutely! We offer comprehensive SEO services, content marketing, social media management, and digital advertising to grow your online presence. Our integrated approach ensures your website not only looks great but also attracts and converts visitors effectively.",
    category: "general"
  },

  // Process Questions
  {
    question: "How do you approach new design projects?",
    answer: "We start with a comprehensive discovery phase to understand your business goals, target audience, and unique challenges. Then we create a strategic roadmap, develop initial concepts, iterate based on your feedback, and deliver a polished final product. Throughout the process, we maintain open communication and collaboration.",
    category: "process"
  },
  {
    question: "How quickly can you start my project?",
    answer: "We typically begin new projects within 1-2 weeks, depending on our current workload and project complexity. For urgent projects, we can often accommodate faster start times. During our initial consultation, we'll provide you with a realistic timeline based on your specific requirements.",
    category: "process"
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A simple website redesign might take 4-6 weeks, while a complete brand identity and website project could take 8-12 weeks. E-commerce sites typically require 6-10 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    category: "process"
  },
  {
    question: "What's your design process like?",
    answer: "Our design process is collaborative and iterative. We begin with discovery and research, move into strategy and wireframing, then create visual designs with multiple revision rounds. Finally, we develop and test everything before launch. We keep you involved every step of the way to ensure the final result exceeds your expectations.",
    category: "process"
  },
  {
    question: "How do you handle project revisions and feedback?",
    answer: "We include structured revision rounds in every project phase. Our collaborative approach welcomes your feedback, and we work iteratively to refine the design until it perfectly matches your vision. We use modern project management tools to streamline feedback collection and implementation.",
    category: "process"
  },
  {
    question: "Can I be involved in the design process?",
    answer: "Absolutely! We believe the best results come from close collaboration with our clients. You'll have regular check-ins, review sessions, and opportunities to provide input throughout the project. Your insights about your business and customers are invaluable to creating the right solution.",
    category: "process"
  },
  {
    question: "What happens after my website launches?",
    answer: "We provide comprehensive training on managing your new website, along with documentation and ongoing support. We also offer various maintenance packages to keep your site secure, updated, and performing optimally. Many clients also work with us on ongoing marketing and optimization efforts.",
    category: "process"
  },

  // Pricing Questions
  {
    question: "How much does a website cost?",
    answer: "Website costs vary significantly based on complexity, features, and design requirements. A simple business website might start around €2,000-€5,000, while custom e-commerce solutions can range from €5,000-€15,000+. We offer transparent pricing and will provide a detailed quote based on your specific needs and budget.",
    category: "pricing"
  },
  {
    question: "Can I upgrade from One-Time to Monthly package later?",
    answer: "Yes, you can upgrade to our Monthly package at any time. We'll apply a prorated credit for any unused portion of add-on services. This flexibility allows you to start with our One-Time package and transition to ongoing support when your business needs evolve.",
    category: "pricing"
  },
  {
    question: "What does 'Unlimited Edits' include in the Monthly package?",
    answer: "Unlimited Edits covers content updates, image changes, minor design adjustments, and regular maintenance tasks. This includes updating text, adding new pages, changing images, and small design modifications. Major redesigns or completely new features may require additional quotes, but most day-to-day updates are included.",
    category: "pricing"
  },
  {
    question: "Do you offer payment plans or financing?",
    answer: "Yes! We understand that quality web design is an investment. We offer flexible payment plans that can be structured around project milestones or monthly payments. We're happy to work with you to find a payment structure that fits your cash flow and budget.",
    category: "pricing"
  },
  {
    question: "What's included in your pricing?",
    answer: "Our pricing includes design and development, content integration, basic SEO setup, mobile responsiveness, browser testing, and post-launch support. We're transparent about what's included and will clearly outline any additional costs for extra features or services during the proposal phase.",
    category: "pricing"
  },
  {
    question: "Do you provide hosting for all websites?",
    answer: "Yes, all our packages include professional hosting with 99.9% uptime guarantee, SSL certificates, and regular backups. Our One-Time package includes hosting for €24/month, while our Monthly and Yearly packages include hosting at no additional cost.",
    category: "pricing"
  },
  {
    question: "Do you offer website maintenance?",
    answer: "Yes! We provide ongoing maintenance and support packages to keep your website updated, secure, and performing optimally. These services include regular backups, security monitoring, content updates, performance optimization, and technical support.",
    category: "pricing"
  },
  {
    question: "Do you offer ongoing maintenance packages?",
    answer: "Yes, we offer several maintenance packages ranging from basic security updates to comprehensive marketing and optimization services. These typically include regular backups, security monitoring, content updates, performance optimization, and technical support. Packages start from €100/month.",
    category: "pricing"
  },

  // Technical Questions
  {
    question: "What platforms and technologies do you use?",
    answer: "We primarily work with modern technologies like Next.js, React, WordPress, Shopify, and custom solutions depending on your needs. We choose the best platform based on your specific requirements, budget, and long-term goals. All our websites are built with modern standards for speed, security, and SEO.",
    category: "technical"
  },
  {
    question: "What kind of chatbot solutions do you offer?",
    answer: "We offer AI-powered chatbots for customer support, lead generation, appointment booking, and custom solutions tailored to your specific business needs. All chatbots are fully integrated with your website and can be customized to match your brand. Solutions range from basic FAQ bots to advanced AI assistants that can handle complex customer interactions.",
    category: "technical"
  },
  {
    question: "Can you build custom features not listed in your packages?",
    answer: "Absolutely! We love creative challenges and can build custom solutions for unique requirements. Whether you need specialized functionality, custom integrations, or innovative features, our team can develop tailored solutions. Contact our sales team to discuss your specific needs and we'll provide a custom quote.",
    category: "technical"
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! All our websites are built with a mobile-first approach and are fully responsive across all devices. With mobile traffic accounting for over 60% of web browsing, we ensure your site looks and performs beautifully on smartphones, tablets, and desktops.",
    category: "technical"
  },
  {
    question: "How do you handle SEO and website performance?",
    answer: "SEO and performance are built into every project from the ground up. We implement technical SEO best practices, optimize images and code, ensure fast loading times, and set up proper analytics tracking. We can also provide ongoing SEO services to help improve your search rankings over time.",
    category: "technical"
  },
  {
    question: "Can you integrate with my existing tools and systems?",
    answer: "Yes! We have experience integrating with a wide variety of third-party tools including CRM systems, email marketing platforms, payment processors, booking systems, and more. We'll work with your existing tech stack to ensure seamless operation and data flow.",
    category: "technical"
  },
  {
    question: "Will I own my website and can I make updates myself?",
    answer: "Yes, you own your website completely. We provide full training on content management and basic updates. For non-technical clients, we also offer content update services. All websites come with user-friendly admin areas that make updating content straightforward.",
    category: "technical"
  }
]

const categories = [
  { id: 'all', name: 'All Questions', icon: QuestionMarkCircleIcon, count: faqs.length },
  { id: 'general', name: 'General', icon: ChatBubbleLeftRightIcon, count: faqs.filter(faq => faq.category === 'general').length },
  { id: 'process', name: 'Process', icon: ClockIcon, count: faqs.filter(faq => faq.category === 'process').length },
  { id: 'pricing', name: 'Pricing', icon: CurrencyDollarIcon, count: faqs.filter(faq => faq.category === 'pricing').length },
  { id: 'technical', name: 'Technical', icon: QuestionMarkCircleIcon, count: faqs.filter(faq => faq.category === 'technical').length }
]

export default function FAQPage() {
  const { theme } = useTheme()
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setActiveIndex(null) // Reset active index when category changes
  }

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  // Debug logging
  console.log('Active category:', activeCategory)
  console.log('Filtered FAQs:', filteredFAQs.length)
  console.log('All FAQs:', faqs.length)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="faq" />
      
      {/* Hero Section */}
      <section className={`relative min-h-[60vh] flex items-center overflow-hidden transition-colors duration-300 pt-20 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-white via-blue-50 to-purple-50'
      }`}>

        <div className="container px-4 mx-auto max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                theme === 'dark' 
                  ? 'bg-[#ff5500]/20 text-[#ff5500]' 
                  : 'bg-[#ff5500]/10 text-[#ff5500]'
              }`}>
                Frequently Asked Questions
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-black mb-6"
              style={{ fontFamily: 'var(--font-league-spartan)' }}
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-black'}>
                Got 
              </span>
              <span className="text-[#ff5500]"> Questions?</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              We've got answers. Find everything you need to know about our process, pricing, and services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container px-4 mx-auto max-w-6xl">
          {/* Category Filter */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    activeCategory === category.id
                      ? 'bg-[#ff5500] text-white shadow-lg scale-105'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  {category.name}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id
                      ? 'bg-white/20 text-white'
                      : theme === 'dark'
                      ? 'bg-gray-700 text-gray-400'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {category.count}
                  </span>
                </button>
              )
            })}
          </motion.div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <motion.div 
                  key={`${faq.category}-${faq.question}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`mb-6 rounded-2xl overflow-hidden border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'border-gray-800 bg-gray-900/50'
                      : 'border-gray-200 bg-white'
                  } ${activeIndex === index ? 'shadow-xl ring-2 ring-[#ff5500]/20' : 'shadow-lg hover:shadow-xl'}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex items-center justify-between w-full p-8 text-left group"
                    aria-expanded={activeIndex === index}
                  >
                    <h3 className={`text-xl font-semibold pr-4 group-hover:text-[#ff5500] transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {faq.question}
                    </h3>
                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeIndex === index
                        ? 'bg-[#ff5500] text-white rotate-180'
                        : theme === 'dark'
                        ? 'bg-gray-800 text-gray-300 group-hover:bg-[#ff5500] group-hover:text-white'
                        : 'bg-gray-100 text-gray-600 group-hover:bg-[#ff5500] group-hover:text-white'
                    }`}>
                      {activeIndex === index ? (
                        <MinusIcon className="h-5 w-5" />
                      ) : (
                        <PlusIcon className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className={`px-8 pb-8 text-lg leading-relaxed ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  No questions found in this category.
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mt-20"
          >
            <div className={`inline-block p-8 rounded-3xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-800' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200'
            } shadow-2xl`}>
              <h3 className={`text-3xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Still have questions?
              </h3>
              <p className={`text-lg mb-6 max-w-md mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We're here to help! Get in touch and we'll answer any questions you might have.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#ff5500] text-white rounded-xl font-semibold text-lg hover:bg-[#e64d00] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 