'use client';

import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTheme } from '../utils/ThemeProvider';
import { InlineWidget } from 'react-calendly';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { theme } = useTheme();
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const services = [
    { 
      id: 'web-development', 
      name: 'Web Development', 
      icon: (
        <svg className="w-5 h-5 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      id: 'seo-marketing', 
      name: 'SEO & Marketing', 
      icon: (
        <svg className="w-5 h-5 text-[#ff5500]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      )
    },
    { 
      id: 'creative-design', 
      name: 'Creative Design', 
      icon: (
        <svg className="w-5 h-5 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    { 
      id: 'automation', 
      name: 'Automation & AI', 
      icon: (
        <svg className="w-5 h-5 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    { 
      id: 'maintenance', 
      name: 'Web Maintenance', 
      icon: (
        <svg className="w-5 h-5 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    { 
      id: 'other', 
      name: 'Other', 
      icon: (
        <svg className="w-5 h-5 text-[#ff5500]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Format services list for email
      const servicesList = formData.services
        .map(serviceId => services.find(s => s.id === serviceId)?.name)
        .filter(Boolean)
        .join(', ');

      // Create formatted message for email
      const emailMessage = `
Contact Form Submission:

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}

Services Interested In:
${servicesList || 'Not specified'}

Message:
${formData.message}

---
Form: Contact Modal
Submitted: ${new Date().toLocaleString()}
      `.trim();

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: emailMessage,
          to_email: "hello@siteandsight.com"
        }),
      });

      const result = await response.json();

      if (!result.success) {
        throw new Error('Form submission failed');
      }

      setIsSubmitting(false);
      setSubmitted(true);

      // Close modal after 2 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '', services: [] });
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('Unable to send your message. Please try again or contact us directly at hello@siteandsight.com');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
          theme === 'dark' 
            ? 'bg-gray-900 text-white' 
            : 'bg-white text-gray-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-6 right-6 z-10 p-2 rounded-full transition-colors ${
            theme === 'dark'
              ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
              : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
          }`}
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-6 lg:p-8">
          {/* Contact Form */}
          <div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            {showCalendly ? (
              <div className="min-h-[600px]">
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setShowCalendly(false)}
                    className={`flex items-center gap-2 text-sm ${
                      theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to contact form
                  </button>
                </div>
                <InlineWidget
                  url="https://calendly.com/hello-siteandsight/30min"
                  styles={{
                    height: '600px',
                    width: '100%'
                  }}
                  pageSettings={{
                    backgroundColor: theme === 'dark' ? '1f2937' : 'ffffff',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'ff5500',
                    textColor: theme === 'dark' ? 'ffffff' : '111827'
                  }}
                />
              </div>
            ) : submitted ? (
              <div className="flex items-center justify-center min-h-[400px]">
                <div className="text-center py-16 px-8">
                  <div className="w-20 h-20 bg-[#ff5500] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                    Message Sent Successfully!
                  </h3>
                  <p className={`text-base lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <>
                <h2 className="text-2xl lg:text-3xl font-bold mb-6" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  Let's build something <span className="text-[#ff5500]">unique.</span>
                </h2>
                
                <p className={`mb-6 text-sm lg:text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  You can book a call or just drop us a message... either way, we'd love to hear from you.
                </p>

                {/* Schedule Call Button - Primary CTA */}
                <button
                  onClick={() => setShowCalendly(true)}
                  className={`w-full flex items-center justify-between px-6 py-4 border-2 border-[#ff5500] text-[#ff5500] rounded-full transition-all duration-300 font-semibold text-base mb-8 group ${
                    theme === 'dark' ? 'bg-transparent' : 'bg-white'
                  }`}
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  <span>Book an intro call</span>
                  <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  How can we help you?
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                {/* Service Selection */}
                <div>
                  <div className="mb-3">
                    <span className="text-gray-400 text-xs">(select all that apply)</span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleServiceToggle(service.id)}
                        className={`p-2.5 rounded-lg border-2 transition-all duration-200 text-left text-sm hover:scale-[1.02] ${
                          formData.services.includes(service.id)
                            ? 'border-[#ff5500] bg-[#ff5500]/10 text-[#ff5500]'
                            : theme === 'dark'
                            ? 'border-gray-600 bg-gray-800 text-gray-300 hover:border-gray-500'
                            : 'border-gray-300 bg-gray-50 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="flex items-center justify-center">{service.icon}</span>
                          <span className="font-medium">{service.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 rounded-lg border transition-colors text-sm ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 focus:border-[#ff5500] text-white'
                          : 'bg-gray-50 border-gray-300 focus:border-[#ff5500] text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-[#ff5500]/20`}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2.5 rounded-lg border transition-colors text-sm ${
                        theme === 'dark'
                          ? 'bg-gray-800 border-gray-700 focus:border-[#ff5500] text-white'
                          : 'bg-gray-50 border-gray-300 focus:border-[#ff5500] text-gray-900'
                      } focus:outline-none focus:ring-2 focus:ring-[#ff5500]/20`}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 rounded-lg border transition-colors resize-none text-sm ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-gray-700 focus:border-[#ff5500] text-white'
                        : 'bg-gray-50 border-gray-300 focus:border-[#ff5500] text-gray-900'
                    } focus:outline-none focus:ring-2 focus:ring-[#ff5500]/20`}
                    placeholder="Tell us what's on your mind... big ideas, small details, or anything in between."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  style={{ fontFamily: 'var(--font-league-spartan)' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}