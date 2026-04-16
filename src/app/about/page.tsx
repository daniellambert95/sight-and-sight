'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useTheme } from '../utils/ThemeProvider';
import {
  MagnifyingGlassIcon,
  PaintBrushIcon,
  BoltIcon,
  SparklesIcon,
  HeartIcon,
  HandRaisedIcon,
  RocketLaunchIcon
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

const teamMembers = [
  {
    id: 1,
    name: "Daniel Lambert",
    role: "Creative Lead",
    bio: "With over 15 years of experience in web development and creative design, Daniel is the founder and creative lead who develops all our websites and creates stunning graphics. His innovative vision and technical expertise drive our projects forward.",
    image: "/images/team/daniel.png",
    accentColor: '#ff5500',
  },
  {
    id: 2,
    name: "Killian Walpole",
    role: "Marketing Manager",
    bio: "Killian specializes in PR communications, email marketing, and social media strategy. With expertise in copywriting and digital marketing, he crafts compelling campaigns that engage audiences and drive results.",
    image: "/images/team/killian.png",
    accentColor: '#6366f1',
  },
];

const approachSteps = [
  {
    step: "01",
    title: "Discover",
    description: "We begin by deeply understanding your business, goals, audience, and competitive landscape through research and strategic discussions.",
    icon: <MagnifyingGlassIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#ff5500] to-[#ff6600]',
    hoverColor: '#ff5500',
  },
  {
    step: "02",
    title: "Design",
    description: "Our creative process combines strategic thinking with innovative design, focusing on both aesthetics and functionality to create engaging experiences.",
    icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#6366f1] to-[#818cf8]',
    hoverColor: '#6366f1',
  },
  {
    step: "03",
    title: "Develop",
    description: "We bring designs to life with clean, efficient code, ensuring responsive behavior, optimal performance, and seamless interactions.",
    icon: <BoltIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#ff5500] to-[#ff6600]',
    hoverColor: '#ff5500',
  },
];

const values = [
  {
    title: "Creativity Without Boundaries",
    description: "We believe in pushing creative boundaries while maintaining a focus on solving real problems for real users. Our designs are both innovative and purposeful.",
    icon: <PaintBrushIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#ff5500] to-[#ff6600]',
    hoverColor: '#ff5500',
  },
  {
    title: "User-Centered Approach",
    description: "We place users at the center of our design process, ensuring that every decision enhances the user experience and meets their needs.",
    icon: <HeartIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#6366f1] to-[#818cf8]',
    hoverColor: '#6366f1',
  },
  {
    title: "Collaborative Partnership",
    description: "We see our clients as partners and believe the best work comes from open collaboration, clear communication, and mutual respect.",
    icon: <HandRaisedIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#6366f1] to-[#818cf8]',
    hoverColor: '#6366f1',
  },
  {
    title: "Continuous Innovation",
    description: "We stay at the forefront of industry trends and technologies, constantly learning and evolving to bring the best solutions to our clients.",
    icon: <RocketLaunchIcon className="w-8 h-8 text-white" />,
    gradient: 'from-[#ff5500] to-[#ff6600]',
    hoverColor: '#ff5500',
  },
];

export default function AboutPage() {
  const { theme } = useTheme();

  const stats = [
    { number: "2025", label: "Founded", sublabel: "Building digital dreams since", color: '#ff5500' },
    { number: "15+", label: "Projects Completed", sublabel: "Across various industries", color: '#6366f1' },
    { number: "100%", label: "Client Satisfaction", sublabel: "Happy partnerships always", color: '#ff5500' },
  ];

  return (
    <div className={`min-h-screen flex flex-col ${
      theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Navigation currentPage="about" />

      {/* Hero Section */}
      <section
        className={`relative flex items-center justify-center px-6 md:px-12 lg:px-24 pt-28 md:pt-20 pb-8 overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-black via-gray-950 to-black'
            : 'bg-gradient-to-br from-white to-gray-50'
        }`}
        style={{ minHeight: 'calc(100svh)' }}
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
              <p
                className="text-xs uppercase tracking-widest font-semibold"
                style={{ color: '#6366f1' }}
              >
                Who We Are
              </p>

              <h1
                className="font-black leading-none uppercase"
                style={{
                  fontFamily: 'var(--font-league-spartan)',
                  fontSize: 'clamp(4rem, 10vw, 9rem)',
                  lineHeight: 0.9,
                }}
              >
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>SITE &</span>
                <br />
                <span style={{ color: '#ff5500' }}>SIGHT</span>
              </h1>

              <p className={`text-lg md:text-xl font-light max-w-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A tight-knit team of designers, developers, and strategists crafting{' '}
                <span style={{ color: '#ff5500' }}>digital experiences</span> that drive{' '}
                <span style={{ color: '#6366f1' }}>real results</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #ff5500, #e64d00)' }}
                >
                  <span>Work With Us</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/work"
                  className={`inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                  style={{ borderColor: '#6366f1', color: '#6366f1' }}
                >
                  <span>See Our Work</span>
                </Link>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`border-l-2 pl-8 ${theme === 'dark' ? 'border-opacity-80' : ''}`}
                  style={{ borderColor: stat.color }}
                >
                  <div
                    className="text-4xl md:text-5xl font-black mb-1"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
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

      {/* Our Story Section */}
      <section className={`relative py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
            {/* Left */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#6366f1' }}>
                Background
              </p>
              <h2
                className={`font-black leading-none uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                OUR<br /><span style={{ color: '#ff5500' }}>STORY</span>
              </h2>
              <p className={`text-lg font-light leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Founded in 2025 with a mission to bridge the gap between beautiful design
                and functional excellence — creating digital experiences that deliver real results.
              </p>
            </div>

            {/* Right */}
            <div className="lg:col-span-3 space-y-10">
              {[
                {
                  label: 'Site & Sight',
                  heading: 'The Meaning Behind Our Name',
                  body: '"Site" represents the digital spaces we create — websites, applications, and digital experiences. "Sight" embodies the visual impact, user perception, and the "aha!" moments we craft for every user interaction.',
                  labelColor: '#ff5500',
                },
                {
                  label: 'Our Mission',
                  heading: 'Form Meets Function',
                  body: 'We believe great design isn\'t just about aesthetics — it\'s about creating solutions that work beautifully for users and deliver measurable results for businesses. Every pixel serves a purpose.',
                  labelColor: '#6366f1',
                },
                {
                  label: 'Today',
                  heading: 'Growing Together',
                  body: 'We\'re a tight-knit team of creative minds who collaborate closely with our clients. Every project is an opportunity to push boundaries and create something extraordinary together.',
                  labelColor: '#ff5500',
                },
              ].map((item, i, arr) => (
                <div key={i} className={i < arr.length - 1 ? `pb-10 border-b ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'}` : ''}>
                  <p className="text-xs uppercase tracking-widest font-semibold mb-2" style={{ color: item.labelColor }}>
                    {item.label}
                  </p>
                  <h3 className={`text-xl md:text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {item.heading}
                  </h3>
                  <p className={`text-lg font-light leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className={`relative py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#6366f1' }}>
              How We Work
            </p>
            <h2
              className={`font-black leading-none uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              OUR <span style={{ color: '#ff5500' }}>APPROACH</span>
            </h2>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our proven three-step process ensures exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approachSteps.map((item, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                      {item.icon}
                    </div>
                    <div className={`text-4xl font-black ${theme === 'dark' ? 'text-gray-700' : 'text-gray-200'}`}>
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-3 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                      style={{ ['--hover-color' as string]: item.hoverColor }}
                    >
                      {item.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${item.hoverColor}08, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`relative py-24 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#6366f1' }}>
              The People
            </p>
            <h2
              className={`font-black leading-none uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              MEET THE <span style={{ color: '#6366f1' }}>TEAM</span>
            </h2>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The talented individuals who bring your digital visions to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] shadow-xl text-center ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm`}
              >
                <div className="space-y-5">
                  <div className="flex flex-col items-center">
                    <div
                      className="relative w-24 h-24 mb-4 rounded-2xl overflow-hidden border-2"
                      style={{ borderColor: member.accentColor + '99' }}
                    >
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`Photo of ${member.name}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className={`flex items-center justify-center h-full ${
                          theme === 'dark' ? 'text-gray-600 bg-gray-800' : 'text-gray-400 bg-gray-200'
                        }`}>
                          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ backgroundColor: member.accentColor + '22', color: member.accentColor }}
                    >
                      {member.role.toUpperCase()}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {member.name}
                    </h3>
                    <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {member.bio}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${member.accentColor}08, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`relative py-20 px-6 md:px-12 lg:px-24 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#6366f1' }}>
              What Drives Us
            </p>
            <h2
              className={`font-black leading-none uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              OUR <span style={{ color: '#6366f1' }}>VALUES</span>
            </h2>
            <p className={`text-lg md:text-xl font-light max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              The core principles that guide everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800/50'
                    : 'bg-white/60 border border-gray-200/50'
                } backdrop-blur-sm`}
              >
                <div className="space-y-5">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center shadow-lg`}>
                    {value.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {value.title}
                    </h3>
                    <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {value.description}
                    </p>
                  </div>
                </div>
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${value.hoverColor}08, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`relative py-24 px-6 md:px-12 lg:px-24 overflow-hidden transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
      }`}>
        {/* Accent blobs */}
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: '#ff550015' }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: '#6366f115' }} />

        <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
          <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: '#6366f1' }}>
            Let's Build Something
          </p>
          <h2
            className={`font-black leading-none uppercase ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
            style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(3rem, 7vw, 6rem)' }}
          >
            READY TO<br /><span style={{ color: '#ff5500' }}>WORK TOGETHER?</span>
          </h2>

          <p className={`text-xl font-light max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            We're always excited to partner with forward-thinking brands and businesses.
            Let's create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 text-white font-semibold rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02] text-lg"
              style={{ background: 'linear-gradient(135deg, #ff5500, #e64d00)' }}
            >
              <span>Get In Touch</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 font-semibold rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] text-lg"
              style={{ borderColor: '#6366f1', color: '#6366f1' }}
            >
              <span>View Services</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
