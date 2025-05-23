'use client';

import Link from 'next/link';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './animations/ScrollReveal';
import { useTheme } from '../utils/ThemeProvider';

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-10% 0px" });
  const { theme } = useTheme();
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const footerItems = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  return (
    <motion.footer 
      ref={footerRef}
      className={`px-8 md:px-16 py-16 mt-auto border-t relative overflow-hidden transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-black text-white border-zinc-800' 
          : 'bg-gray-50 text-black border-gray-200'
      }`}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={staggerContainer}
    >
      {/* Animated gradient background */}
      <motion.div 
        className={`absolute inset-0 opacity-50 ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-black via-zinc-900 to-black'
            : 'bg-gradient-to-t from-gray-100 via-white to-gray-50'
        }`}
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 15,
          ease: "linear"
        }}
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <motion.div variants={footerItems}>
          <motion.div 
            className="text-2xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="text-[#ff5500]">Site</span>
            <span className={theme === 'dark' ? 'text-white' : 'text-black'}>&</span>
            <span className="text-[#ff5500]">Sight</span>
          </motion.div>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Crafting digital experiences <br />
            that captivate and inspire.
          </p>
        </motion.div>
        
        <motion.div variants={footerItems}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Navigation</h3>
          <ul className="space-y-2">
            {['Home', 'Services', 'Pricing', 'Work', 'About', 'Contact'].map((item, i) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link 
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                  className={`hover:text-[#ff5500] transition-colors interactive ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div variants={footerItems}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Contact</h3>
          <ul className="space-y-2">
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            >
              <a href="mailto:hello@siteandsight.com" className="hover:text-[#ff5500] transition-colors interactive">
                hello@siteandsight.com
              </a>
            </motion.li>
            <motion.li
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}
            >
              <a href="tel:+11234567890" className="hover:text-[#ff5500] transition-colors interactive">
                +1 (123) 456-7890
              </a>
            </motion.li>
            <motion.li className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Dublin, Ireland</motion.li>
          </ul>
        </motion.div>
        
        <motion.div variants={footerItems}>
          <h3 className={`text-lg font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Connect</h3>
          <div className="flex space-x-4">
            {[
              { name: 'Facebook', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
              { name: 'Instagram', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg> },
              { name: 'Twitter', svg: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> }
            ].map((social, index) => (
              <motion.a 
                key={social.name}
                href="#" 
                className={`transition-colors interactive ${
                  theme === 'dark' ? 'text-gray-400 hover:text-[#ff5500]' : 'text-gray-500 hover:text-[#ff5500]'
                }`}
                aria-label={social.name}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                {social.svg}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className={`max-w-7xl mx-auto mt-12 pt-8 text-sm border-t ${
          theme === 'dark' ? 'border-zinc-800 text-gray-500' : 'border-gray-200 text-gray-500'
        }`}
        variants={footerItems}
      >
        © {new Date().getFullYear()} Site and Sight Creative Studio. All rights reserved.
      </motion.div>
    </motion.footer>
  );
} 