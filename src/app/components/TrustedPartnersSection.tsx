'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Marquee } from "@/components/magicui/marquee";
import ScrollRevealText from './ScrollRevealText';
import Image from 'next/image';
import { useTheme } from "../utils/ThemeProvider";

// Partner logo data
const partners = [
  { name: 'AWS', logo: '/images/trusted-partners/aws.webp' },
  { name: 'Vercel', logo: '/images/trusted-partners/vercel.webp' },
  { name: 'Google Cloud', logo: '/images/trusted-partners/google-cloud.webp' },
  { name: 'Next.js', logo: '/images/trusted-partners/next-js.webp' },
  { name: 'React', logo: '/images/trusted-partners/react.webp' },
  { name: 'Node.js', logo: '/images/trusted-partners/node-js.webp' },
  { name: 'PostgreSQL', logo: '/images/trusted-partners/postgresql.webp' },
  { name: 'Docker', logo: '/images/trusted-partners/docker.webp' },
  { name: 'Tailwind CSS', logo: '/images/trusted-partners/tailwindcss.webp' },
  { name: 'OpenAI', logo: '/images/trusted-partners/open-ai.webp' },
  { name: 'Claude', logo: '/images/trusted-partners/claude.webp' },
  { name: 'Figma', logo: '/images/trusted-partners/figma.webp' },
  { name: 'Canva', logo: '/images/trusted-partners/canva.webp' },
  { name: 'Bunny CDN', logo: '/images/trusted-partners/bunny-cdn.webp' },
  { name: 'Google Analytics', logo: '/images/trusted-partners/google-analytics.webp' },
  { name: 'Google Ads', logo: '/images/trusted-partners/google-ads.webp' },
  { name: 'Brevo', logo: '/images/trusted-partners/brevo.webp' },
  { name: 'Make', logo: '/images/trusted-partners/make.webp' },
  { name: 'n8n', logo: '/images/trusted-partners/n8n.webp' },
  { name: 'Namecheap', logo: '/images/trusted-partners/name-cheap.webp' },
  { name: 'Express.js', logo: '/images/trusted-partners/express-js.webp' },
  { name: 'Google Cloud Platform', logo: '/images/trusted-partners/google-cloud-platform.webp' },
];

// Partner Card Component
const PartnerCard = ({ name, logo, theme }: { name: string; logo: string; theme: string }) => {
  return (
    <div className="group relative h-24 w-40 mx-6 flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={logo}
            alt={name}
            width={120}
            height={60}
            className="max-w-full max-h-full object-contain transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default function TrustedPartnersSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);

  // Split partners into two rows for the marquee effect
  const firstRow = partners.slice(0, Math.ceil(partners.length / 2));
  const secondRow = partners.slice(Math.ceil(partners.length / 2));

  return (
    <section 
      ref={sectionRef}
      className={`relative py-20 px-8 md:px-16 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-950' : 'bg-white'
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
                Trusted Partners
              </span>
              <div className="w-12 h-0.5 bg-[#ff5500]"></div>
            </div>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Built with <span className="text-[#ff5500]">industry-leading</span> tools
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              We partner with the best technology providers to deliver exceptional results
            </p>
          </div>
        </ScrollRevealText>

        {/* Marquee Container */}
        <motion.div 
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Marquee pauseOnHover className="[--duration:40s] mb-4">
            {firstRow.map((partner, index) => (
              <PartnerCard key={index} {...partner} theme={theme} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s]">
            {secondRow.map((partner, index) => (
              <PartnerCard key={index} {...partner} theme={theme} />
            ))}
          </Marquee>
          
          {/* Gradient overlays for smooth fade effect */}
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

