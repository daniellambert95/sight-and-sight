"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Sparkles, Zap, Heart } from "lucide-react";
import { useTheme } from "../../utils/ThemeProvider";

export default function ContactForm() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    "Web Design & Development",
    "Automations and AI implementation", 
    "Data Pipelines & Web Integrations",
    "SEO & Email and Content Marketing",
    "Other"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to our contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          service: formData.service,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Form submission failed');
      }

      setSubmitStatus('success');
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]
      }
    }
  };

  return (
    <section 
      ref={ref}
      className={`relative py-32 px-6 overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-black via-gray-950 to-black' 
          : 'bg-gradient-to-br from-white via-gray-50 to-white'
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: i % 2 === 0 
                ? 'linear-gradient(45deg, #FF5500, #e64d00)' 
                : 'linear-gradient(45deg, #4F46E5, #3B82F6)',
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-sm font-medium uppercase tracking-widest mb-4 text-[#4F46E5]"
          >
            Let's Connect
          </motion.span>

          <motion.h2
            variants={itemVariants}
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            Ready to{" "}
            <span className="text-[#FF5500]">Create</span>
            <br />
            Something Amazing?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Let's turn your vision into reality. Drop us a line and let's start building 
            something <span className="text-[#4F46E5] font-semibold">extraordinary</span> together.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <div className={`relative rounded-2xl p-8 md:p-10 ${
            isDark 
              ? 'bg-gray-900/30 border border-gray-700/50' 
              : 'bg-white border border-gray-200'
          } backdrop-blur-sm shadow-xl`}>
            
            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label 
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF5500] focus:bg-gray-800'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#FF5500] focus:bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20`}
                      placeholder="Your name"
                    />
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <label 
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                        isDark
                          ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF5500] focus:bg-gray-800'
                          : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#FF5500] focus:bg-white'
                      } focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20`}
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </div>

                {/* Service Selection */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label 
                    htmlFor="service"
                    className={`block text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    What do you need help with?
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-600 text-white focus:border-[#FF5500] focus:bg-gray-800'
                        : 'bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FF5500] focus:bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20`}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <label 
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Tell us about your project
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 resize-none ${
                      isDark
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:border-[#FF5500] focus:bg-gray-800'
                        : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#FF5500] focus:bg-white'
                    } focus:outline-none focus:ring-2 focus:ring-[#FF5500]/20`}
                    placeholder="Share your vision, goals, and any specific requirements..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  variants={itemVariants}
                  className="text-center pt-6"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF5500] to-[#e64d00] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -12px rgba(255, 85, 0, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    style={{ fontFamily: 'var(--font-league-spartan)' }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
                  >
                    <div className="flex items-center justify-center gap-2 text-green-600 font-medium text-lg">
                      <Heart className="w-6 h-6" />
                      <span>Thanks! We'll get back to you soon with something amazing.</span>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="text-center p-6 rounded-2xl bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20"
                  >
                    <div className="text-red-600 font-medium text-lg">
                      Oops! Something went wrong. Please try again.
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}