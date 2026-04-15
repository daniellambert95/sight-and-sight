'use client';

import { useState, useEffect, useRef } from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTheme } from '../utils/ThemeProvider';
import { isValidEmail } from '@/lib/utils';
import {
  EnvelopeIcon,
  MapPinIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

function FloatingParticles({ theme }: { theme: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    particlesRef.current = Array.from({ length: 35 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.4 + 0.1,
      color: i % 2 === 0 ? '#ff5500' : '#6366f1',
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();
      });
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: theme === 'dark' ? 0.6 : 0.35 }}
    />
  );
}

const WHATSAPP_ICON = (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const emailMessage = `
Contact Form Submission:

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Subject: ${formData.subject}

Message:
${formData.message}

---
Form: Contact Page
Submitted: ${new Date().toLocaleString()}
      `.trim();

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Contact Form: ${formData.subject}`,
          from_name: formData.name,
          email: formData.email,
          message: emailMessage,
          to_email: "hello@siteandsight.com",
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error('Form submission failed');

      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '', terms: false });
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Unable to send your message. Please try again or contact us directly at hello@siteandsight.com');
    }
  };

  const heroStats = [
    { icon: <CheckCircleIcon className="w-6 h-6" />, label: 'Response Time', sublabel: 'Within 24 hours', color: '#ff5500' },
    { icon: <MapPinIcon className="w-6 h-6" />, label: 'Locations', sublabel: 'Dublin · Berlin · Dubai', color: '#6366f1' },
    { icon: <ClockIcon className="w-6 h-6" />, label: 'Office Hours', sublabel: 'Mon–Fri, 9am–6pm GMT', color: '#ff5500' },
  ];

  const contactCards = [
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email Us',
      description: 'For general inquiries:',
      value: 'hello@siteandsight.com',
      href: 'mailto:hello@siteandsight.com',
      gradient: 'from-[#ff5500] to-[#e64d00]',
      hoverColor: '#ff5500',
    },
    {
      icon: WHATSAPP_ICON,
      title: 'WhatsApp Us',
      description: 'Mon–Fri, 9am–6pm GMT',
      value: '+353 87 038 7525',
      href: 'https://wa.me/353870387525',
      gradient: 'from-[#6366f1] to-[#818cf8]',
      hoverColor: '#6366f1',
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Locations',
      description: null,
      value: 'Dublin, Ireland · Berlin, Germany · Dubai, UAE',
      href: null,
      gradient: 'from-[#ff5500] to-[#e64d00]',
      hoverColor: '#ff5500',
    },
    {
      icon: <GlobeAltIcon className="w-6 h-6" />,
      title: "Let's Connect",
      description: null,
      value: null,
      href: null,
      gradient: 'from-[#6366f1] to-[#818cf8]',
      hoverColor: '#6366f1',
      social: true,
    },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section
        className={`relative flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-black via-gray-950 to-black'
            : 'bg-gradient-to-br from-white to-gray-50'
        }`}
        style={{ minHeight: 'calc(100svh)', paddingTop: '5rem', paddingBottom: '2rem' }}
      >
        <FloatingParticles theme={theme} />

        {/* Grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`absolute top-0 bottom-0 w-px ${theme === 'dark' ? 'bg-white/3' : 'bg-black/3'}`}
              style={{ left: `${(i + 1) * 16.66}%` }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Heading + CTAs */}
            <div className="space-y-8">
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#6366f1' }}>
                Contact Us
              </p>

              <h1
                className="font-black leading-none uppercase"
                style={{
                  fontFamily: 'var(--font-league-spartan)',
                  fontSize: 'clamp(4rem, 10vw, 9rem)',
                  lineHeight: 0.9,
                }}
              >
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>GET IN</span>
                <br />
                <span style={{ color: '#ff5500' }}>TOUCH</span>
              </h1>

              <p className={`text-lg md:text-xl font-light max-w-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Have a project in mind? We'd love to hear from you.{' '}
                <span style={{ color: '#6366f1' }}>Fill out the form below</span> or reach out{' '}
                <span style={{ color: '#ff5500' }}>directly</span>.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:hello@siteandsight.com"
                  className={`inline-flex items-center gap-3 text-lg font-medium group transition-colors ${
                    theme === 'dark' ? 'text-gray-300 hover:text-[#ff5500]' : 'text-gray-700 hover:text-[#ff5500]'
                  }`}
                >
                  <EnvelopeIcon className="w-6 h-6 text-[#ff5500]" />
                  hello@siteandsight.com
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/353870387525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 text-lg font-medium group transition-colors ${
                    theme === 'dark' ? 'text-gray-300 hover:text-[#6366f1]' : 'text-gray-700 hover:text-[#6366f1]'
                  }`}
                >
                  <span style={{ color: '#6366f1' }}>{WHATSAPP_ICON}</span>
                  +353 87 038 7525
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="space-y-8">
              {heroStats.map((stat, index) => (
                <div
                  key={index}
                  className="border-l-2 pl-8"
                  style={{ borderColor: stat.color }}
                >
                  <div className="flex items-center gap-2 mb-1" style={{ color: stat.color }}>
                    {stat.icon}
                  </div>
                  <div className={`text-lg font-semibold mb-1 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}>
                    {stat.label}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form + Info Section */}
      <section className={`relative py-20 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-black to-gray-900' : 'bg-gradient-to-br from-white to-gray-50'
      }`}>
        {/* Accent blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: '#ff550010' }} />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: '#6366f110' }} />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <div className={`p-8 rounded-3xl backdrop-blur-sm ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl'
              : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
          }`}>
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#6366f1' }}>
                Send a Message
              </p>
              <h2
                className={`font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Tell us about your{' '}
                <span style={{ color: '#ff5500' }}>project</span>
              </h2>
            </div>

            {submitted ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #ff5500, #e64d00)' }}>
                    <CheckCircleIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className={`text-3xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Message Sent <span style={{ color: '#ff5500' }}>Successfully!</span>
                  </h3>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#6366f1]'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#6366f1]'
                    }`}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#6366f1]'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#6366f1]'
                    }`}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#6366f1]'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#6366f1]'
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent resize-none ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#6366f1]'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#6366f1]'
                    }`}
                    placeholder="Tell us about your project, goals, and timeline..."
                    required
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    checked={formData.terms}
                    onChange={handleInputChange}
                    className="h-5 w-5 mt-0.5 rounded border-gray-300"
                    style={{ accentColor: '#ff5500' }}
                    required
                  />
                  <label htmlFor="terms" className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    I agree to the privacy policy and terms of service. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-white rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: 'linear-gradient(135deg, #ff5500, #e64d00)' }}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <PaperAirplaneIcon className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1 group-hover:rotate-12" />
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#6366f1' }}>
                Reach Out
              </p>
              <h2
                className={`font-black leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
              >
                Get in touch with our{' '}
                <span style={{ color: '#6366f1' }}>team</span>
              </h2>
            </div>

            {contactCards.map((card, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/60 border border-gray-700/50 shadow-xl'
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-white/50 shadow-xl shadow-gray-200/50'
                } backdrop-blur-sm`}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${card.hoverColor}0d, transparent)` }}
                />

                <div className="relative z-10">
                  {card.social ? (
                    <>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}>
                          {card.icon}
                        </div>
                        <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {card.title}
                        </h3>
                      </div>
                      <div className="flex gap-3">
                        {[
                          { href: 'https://www.facebook.com/share/1CuKRUUCbU/', svg: <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /> },
                          { href: 'https://instagram.com/site_and_sight', svg: <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /> },
                          { href: 'https://x.com/site_and_sight', svg: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/> },
                          { href: 'https://www.linkedin.com/company/site-and-sight', svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/> },
                        ].map((social, si) => (
                          <a
                            key={si}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                              theme === 'dark'
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                            style={{ ['--hover-bg' as string]: card.hoverColor }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = card.hoverColor; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ''; (e.currentTarget as HTMLElement).style.color = ''; }}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              {social.svg}
                            </svg>
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white shadow-lg`}>
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          {card.title}
                        </h3>
                        {card.description && (
                          <p className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                            {card.description}
                          </p>
                        )}
                        {card.href ? (
                          <a
                            href={card.href}
                            target={card.href.startsWith('http') ? '_blank' : undefined}
                            rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="font-semibold transition-colors"
                            style={{ color: card.hoverColor }}
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                            {card.value}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
