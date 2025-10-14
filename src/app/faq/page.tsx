"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, MinusIcon, QuestionMarkCircleIcon, ChatBubbleLeftRightIcon, ComputerDesktopIcon, MagnifyingGlassIcon, PaintBrushIcon, CpuChipIcon } from '@heroicons/react/24/outline'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { useTheme } from '../utils/ThemeProvider'

type FAQItem = {
  question: string
  answer: string
  category: 'general' | 'web-development' | 'digital-marketing' | 'creative-branding' | 'automation-ai'
}

const faqs: FAQItem[] = [
  // General Questions
  {
    question: "What sets Site & Sight apart from other digital marketing agencies and website developers?",
    answer: "Site & Sight brings a wealth of experience, care and results to all our clients' projects. Your success is our success. We will work continuously to create tangible results that allow your business to grow and achieve your desired outcomes. Our team is a combination of skilled professionals in the design, digital marketing and online asset field. We listen, understand and create from your goals, tailoring the final product to your specifications.",
    category: "general"
  },
  {
    question: "What type of support can your agency provide my business?",
    answer: "As a client, you can expect a professional level of service and care for the delivery of your goals. We will meet, discuss, and guide you through the process, mapping out a clear timeline. During this process, we will be on call if you wish to send us further information or have any queries. We will also provide you with regular updates on the project's status. We are always happy to share advice and best industry practices for you to use after the brief has come to an end.",
    category: "general"
  },
  {
    question: "Which industries do you specialise in?",
    answer: "We are passionate about crafting marketing and digital messages for hospitality, service-based industries, e-commerce, creative industries, technology, and healthcare. We do not limit ourselves and are excited to take on new opportunities that you can provide. Don't hesitate to contact us if your business does not exactly fall into these categories.",
    category: "general"
  },
  {
    question: "Is a digital marketing agency right for me and my business?",
    answer: "Whether a digital marketing agency is right for your business will depend on your goals and the time available. We are committed to providing a professional service with tangible results, no matter your budget or size. If you are curious to see if this is the right fit, please reach out and schedule a call. We are happy to tailor our packages to your needs.",
    category: "general"
  },
  {
    question: "How does the billing process work for Site & Sight?",
    answer: "The billing process is dependent on the package or range of services you wish to purchase. These can be tailored to your specifications so that all aspects of your business's digital communication methods are met. These are priced at an hourly, project-based, or retainer rate depending on the specifications. We are happy to work out a payment plan depending on circumstances.",
    category: "general"
  },
  {
    question: "What work do digital agencies do?",
    answer: "Digital agencies take care of online communication and promotion. This comes in different forms, including your website, content, PPC ad campaigns, and SEO. Digital agencies are a valuable asset to utilise to make sure you are making the most from your online presence.",
    category: "general"
  },
  {
    question: "What locations do you operate in?",
    answer: "We are based in Dublin and Berlin. Our services are available internationally. We can help no matter where your location is and can respond promptly, no matter the time difference. Contact us here 24/7!",
    category: "general"
  },
  {
    question: "I don't see my question listed here. How can I contact you?",
    answer: "If your query is not listed, we encourage you to reach out to us directly here. Alternatively, send us an email at hello@siteandsight.com.",
    category: "general"
  },

  // Web Development Questions
  {
    question: "How long does a website take to build?",
    answer: "Website development varies in time length depending on complexity, requirements and whether it is a redesign or a website from scratch. Redesigns can take 4-6 weeks, while a brand identity and website project with SEO content can take up to 13 weeks. E-Commerce website creation typically takes 6-10 weeks. For all projects, a clear timeline will be indicated before creation.",
    category: "web-development"
  },
  {
    question: "Will I own and operate my website after Site & Sight builds it?",
    answer: "You will have full ownership with training included on how to manage your new E-Commerce store or website. After handing it over, we will check in with you to make sure everything is running smoothly once you have been operating it for a few months. Maintenance packages are also available to make sure your site is running securely and optimally.",
    category: "web-development"
  },
  {
    question: "What tools and software do you use for E-Commerce and website creation?",
    answer: "We utilise React and Next.js to create websites. These are integrated with a CMS (Content Management System), responsive frameworks, HTML/CSS, JavaScript, and other programming languages. E-Commerce stores are developed using WordPress and Shopify. We like to stay informed with the latest industry trends and processes, and will use this in the development of your site. Take a look at how these have turned out for previous clients!",
    category: "web-development"
  },
  {
    question: "How much does web design and development cost?",
    answer: "Prices vary depending on your requirements and goals. For a full and comprehensive quote, click here and tell us what you need.",
    category: "web-development"
  },
  {
    question: "Will redesigning my website affect my SEO ranking?",
    answer: "Giving your website a new and authentic feel does not necessarily mean that your current rankings on Google will suffer. It is possible to maintain or even improve your current rankings during this process. All our redesigns come with SEO development, including content, keywords, preserving existing URLs, and submission of sitemaps to allow an easy transition to your domain.",
    category: "web-development"
  },

  // Creative Branding & Logos Questions
  {
    question: "What can I gain from your branding and logo services?",
    answer: "From large-scale brand identity projects to smaller runs of digital content and animations, Site & Sight will create a look that feels appropriate to your business and appeals to your audience. How you dress is how you're perceived. Allow us to create a look for your business that your audience will gravitate towards. We will take the time to understand the message you want to convey and develop it into unique assets.",
    category: "creative-branding"
  },
  {
    question: "Can you provide results for projects that require a quick turnaround?",
    answer: "We understand that you may be short on time. Urgent design requirements can be accommodated, and we are committed to providing results that don't falter on quality.",
    category: "creative-branding"
  },
  {
    question: "How does creative branding and logos benefit my business?",
    answer: "Brand recognition, trust, marketing effectiveness, and differentiation of your business all increase with a strong visual aesthetic. Audiences engage with what they find attractive. Our services will create a visually appealing look that ties your business together. Achieve your competitive advantage and stand out from the crowd today.",
    category: "creative-branding"
  },
  {
    question: "Do your creative branding and logo design services charge by the hour or by project?",
    answer: "We charge on a project basis, allowing easier budgeting for our clients and valuable deliverables that live up to expectations. To get a quote, let us know your ideas here.",
    category: "creative-branding"
  },

  // Digital Marketing and SEO Questions
  {
    question: "Is digital marketing and SEO still relevant?",
    answer: "Digital marketing and SEO practices are highly relevant for allowing your business to grow and develop online. 83% of consumers use Google to find local businesses (Bright Local), and a four-star rating is essential for consumers to trust what you're selling (Reviews On My Website). To neglect this sizeable percentage of potential clients by not utilising relevant content, keywords, and local SEO means you are leaving yourself exposed to the competition that is.",
    category: "digital-marketing"
  },
  {
    question: "How long does SEO take to be successful?",
    answer: "SEO is not a one-action fix. It requires many configurations that build up over time. With that in mind, results can be seen as early as 3-6 months after a website is fully optimised, with established success arriving 6-12 months after continued monitoring.",
    category: "digital-marketing"
  },
  {
    question: "How will I measure the effectiveness of Site & Sight's digital marketing services?",
    answer: "Key performance indicators (KPI's) will be used to measure the impact of your SEO, SEM, email or content marketing targets. When we meet, we will discuss exactly what you want to achieve, whether it's landing new clients, developing a larger following, expanding your reach to new audiences, or simply increasing sales. Regular reporting with transparent communication will be available to you throughout the project.",
    category: "digital-marketing"
  },
  {
    question: "What is the best way to approach SEO?",
    answer: "We follow a four-step process that is grounded in best practices and experience. We would advise anyone doing the process themselves to do the same. This involves: Research: High-value keywords, user search intent, long tail keywords and competitor rankings. High Quality Content: The development of content articles, blogs, and information that resonates with your customer base. This is created to be user-friendly, easy to understand and approachable. This content will be regularly updated on your site, giving users a reason to return. Optimisation: All current content will be examined for dead links, irrelevant or outdated content, and restructured to suit search engine criteria for ranking. Local SEO (Google My Business, Tripadvisor) will be recalibrated, allowing users to find information easily. Trust Building: The acquisition of credible backlinks to your site, creating authority for your domain.",
    category: "digital-marketing"
  },
  {
    question: "Should my business use pay-per-click advertising?",
    answer: "If you are offering your products and services online, you should consider PPC as a way to reach your target audience. Thanks to the intuitive nature of Google Ads, Meta Ads, and LinkedIn ads, we can target your audience directly and audiences of similar interests, allowing your business to build awareness, sales, and drive website traffic.",
    category: "digital-marketing"
  },
  {
    question: "How much do your SEO and PPC services cost?",
    answer: "SEO and PPC costs vary in cost depending on your objectives and time frame. We can format our pricing and structure to suit whatever goals. To get a quote, reach out to us here and let us know what you're looking to achieve.",
    category: "digital-marketing"
  },

  // Automation and AI Solutions Questions
  {
    question: "What can AI automation do for me and my business?",
    answer: "Selling a service or product is a time-consuming process. Energy and resources need to be dedicated to mundane and repetitive tasks that, although essential, remove your availability for scaling and growth. Our AI automation will remove this issue with task automation, cost reduction, and efficiency. As a business owner, the gift of time is invaluable. Allow yourself to have as much as possible.",
    category: "automation-ai"
  },
  {
    question: "How can AI automation be applied to my business?",
    answer: "Context and industry will decide how automation can best be applied to your business. The core focus of apps is customer support chat services, task automation, data analysis, and business process optimisation. These allow standard but important information (shipping, return times, product details) to be answered quickly. Data entry, invoice management, and file organisation will be taken care of in the background. Learn detailed breakdowns of your consumer profiles, spending habits and more with trend recognition, speed, and the ability to learn from the data acquired.",
    category: "automation-ai"
  },
  {
    question: "Can your automations be integrated into my CRM?",
    answer: "Our automations and their results can be funnelled directly to CRM's. This allows your staff to have quick access to results and integrate the processes easily into their workflow.",
    category: "automation-ai"
  },
  {
    question: "Is my customer's data safe with your AI automations?",
    answer: "Data privacy and your company's reputation are a responsibility we will uphold. Our systems operate within the GDPR framework.",
    category: "automation-ai"
  },
  {
    question: "How long does it take to implement an automation or AI project?",
    answer: "Depending on the scope and size of your requirements, our automations can be integrated and fully operable on your systems within 1-2 months.",
    category: "automation-ai"
  },
  {
    question: "How much do AI automations cost?",
    answer: "Site & Sight's AI automations can be provided as a subscription package with regular maintenance and updates, or sold as a one-time purchase. We are happy to provide a quote. Contact us here.",
    category: "automation-ai"
  }
]

const categories = [
  { id: 'all', name: 'All Questions', icon: QuestionMarkCircleIcon, count: faqs.length },
  { id: 'general', name: 'General', icon: ChatBubbleLeftRightIcon, count: faqs.filter(faq => faq.category === 'general').length },
  { id: 'web-development', name: 'Web Development', icon: ComputerDesktopIcon, count: faqs.filter(faq => faq.category === 'web-development').length },
  { id: 'digital-marketing', name: 'Digital Marketing', icon: MagnifyingGlassIcon, count: faqs.filter(faq => faq.category === 'digital-marketing').length },
  { id: 'creative-branding', name: 'Creative Branding', icon: PaintBrushIcon, count: faqs.filter(faq => faq.category === 'creative-branding').length },
  { id: 'automation-ai', name: 'Automation & AI', icon: CpuChipIcon, count: faqs.filter(faq => faq.category === 'automation-ai').length }
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
                        transition={{ duration: 0.3 }}
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