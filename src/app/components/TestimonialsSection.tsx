'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTheme } from "../utils/ThemeProvider";
import { Marquee } from "@/components/magicui/marquee";
import ScrollRevealText from './ScrollRevealText';

// Testimonial Card Component
const TestimonialCard = ({
  name,
  position,
  content,
  rating,
  theme
}: {
  name: string;
  position: string;
  content: string;
  rating: number;
  theme: string;
}) => {
  return (
    <figure
      className={`relative h-full w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 mx-4 ${
        theme === 'dark' 
          ? 'border-gray-700/50 bg-gray-900/80 hover:bg-gray-900/90' 
          : 'border-gray-200/50 bg-white/90 hover:bg-white'
      } backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] shadow-xl`}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg 
            key={i} 
            className="w-4 h-4 text-[#ff5500] fill-current" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      {/* Quote */}
      <blockquote className={`text-sm leading-relaxed mb-4 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>
        "{content}"
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff5500] to-orange-600 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
          </svg>
        </div>
        <div>
          <figcaption className={`text-sm font-semibold ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {name}
          </figcaption>
          <p className={`text-xs ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>{position}</p>
        </div>
      </div>
    </figure>
  );
};

export default function TestimonialsSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Testimonials data - expanded for marquee effect
  const testimonials = [
    {
      name: "James Carter",
      position: "Business owner, Der Baumchirurg",
      content: "Customers are flying in after getting my site designed by Daniel. The main focus was SEO but it also looks amazing! Very satisfied!",
      rating: 5
    },
    {
      name: "Geoff Miller", 
      position: "Creative Director, MDZN Dubai",
      content: "S&S creatively and expertly delivered on their promise for my new website millerdesign.ai. Their process was efficient professional and seamless as they also contributed extra help with copywriting, seo, design, analytics, and were a pleasure to work with along the way.",
      rating: 5
    },
    {
      name: "Engin",
      position: "Cofounder, PinkPizza Berlin", 
      content: "Daniel really helped with our online presence by setting up and optimizing our Google Maps listing so we could start receiving reviews while also creating stunning branded menus and website.",
      rating: 5
    },
    {
      name: "Ronan Byrne",
      position: "Founder, Streamline HR",
      content: "Outstanding work! The website they created exceeded all our expectations. The design is modern, fast, and email signup rates are much better than expected.",
      rating: 5
    },
    {
      name: "Thorsten",
      position: "Owner, Restaurant Osterberger",
      content: "You have conveyed this in a totally great and understandable way, I am completely inspired and full of drive to implement your improvements. Best wishes also to Killian.",
      rating: 5
    },
    {
      name: "Andrew Mowatt",
      position: "Founder of Momentum, mo-mentum.ie",
      content: "My experience working with Daniel/site & sight was nothing but positive. Daniel really puts attention to detail when working with clients, it also helps the fact he has lots of experience in the design space so he was also able to bring this into creating the deadly website for my content creation business. Something I value ALOT when working with people is open and honest communication, and Daniel has that - There was ongoing support and attention to getting the site to a place where we were both happy. I would definitely recommend Site and Sight if your looking for a solid job!",
      rating: 5
    },
    // {
    //   name: "Michael Rodriguez",
    //   position: "CEO, GreenTech Solutions", 
    //   content: "Professional, creative, and results-driven. Site & Sight transformed our digital presence and helped us reach new customers. Highly recommended!",
    //   rating: 5
    // },
    // {
    //   name: "Lisa Chen",
    //   position: "Founder, Wellness Studio",
    //   content: "The team understood our vision perfectly and delivered a beautiful, functional website that truly represents our brand. The SEO results have been incredible!",
    //   rating: 5
    // }
  ];

  const firstRow = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const secondRow = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section 
      ref={sectionRef}
      className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-gradient-to-br from-white to-gray-50'
      }`}
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollRevealText direction="up" delay={0.1}>
          <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
              theme === 'dark'
                ? 'bg-[#ff5500]/20 text-[#ff5500] border border-[#ff5500]/30'
                : 'bg-[#ff5500]/10 text-[#ff5500] border border-[#ff5500]/20'
            }`}>
              Testimonials
            </span>
            <div className="w-12 h-0.5 bg-[#ff5500]"></div>
          </div>
          <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            What our <span className="text-[#ff5500]">clients say</span>
          </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Real results from real businesses who trusted us with their digital transformation
            </p>
          </div>
        </ScrollRevealText>

        {/* Marquee Container */}
        <motion.div className="relative flex w-full flex-col items-center justify-center overflow-hidden" style={{ y }}>
          <Marquee pauseOnHover className="[--duration:30s]">
            {firstRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} theme={theme} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {secondRow.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} theme={theme} />
            ))}
          </Marquee>
          
          {/* Gradient overlays */}
          <div className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-black to-transparent' 
              : 'bg-gradient-to-r from-white to-transparent'
          }`}></div>
          <div className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 ${
            theme === 'dark' 
              ? 'bg-gradient-to-l from-black to-transparent' 
              : 'bg-gradient-to-l from-white to-transparent'
          }`}></div>
        </motion.div>
      </div>
    </section>
  );
} 