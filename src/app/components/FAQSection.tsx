"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "How do you approach new design projects?",
    answer: "We start with a deep discovery phase to understand your goals, audience, and challenges. Then we create a strategic roadmap, develop concepts, refine through iterative feedback, and deliver a polished final product."
  },
  {
    question: "What makes your design process unique?",
    answer: "Our approach blends strategic thinking with creative exploration. We focus on the intersection of aesthetics and functionality, ensuring designs not only look beautiful but also solve real problems for users."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A website redesign might take 6-8 weeks, while a complete brand identity could take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Absolutely! We offer various maintenance packages to keep your digital products running smoothly. This includes technical updates, content refreshes, and performance optimization."
  },
  {
    question: "How do you handle project revisions?",
    answer: "We include revision rounds in every project phase. Our collaborative approach means we welcome feedback and work with you to refine until we achieve the perfect result."
  }
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-60 h-60 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground dark:text-foreground max-w-2xl mx-auto">
            Everything you need to know about our design process and how we work with clients.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-5 rounded-xl overflow-hidden border border-border dark:border-border/50 bg-card dark:bg-card/50 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left"
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-xl font-medium text-foreground dark:text-foreground">{faq.question}</h3>
                <span className="ml-4 flex-shrink-0">
                  {activeIndex === index ? (
                    <MinusIcon className="h-6 w-6 text-primary" />
                  ) : (
                    <PlusIcon className="h-6 w-6 text-primary" />
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
                    <div className="px-6 pb-6 text-foreground dark:text-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 