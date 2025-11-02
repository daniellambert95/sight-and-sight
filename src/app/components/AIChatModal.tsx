'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTheme } from '../utils/ThemeProvider';

interface AIChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'aimee' | 'user';
  timestamp: Date;
  hasCTA?: boolean;
}

const WELCOME_MESSAGE: Message = {
  id: '1',
  text: "It's Aimee here 👋 your AI assistant at Site&Sight. I'm here to help answer any questions you have about our services, projects, or how we can help bring your digital vision to life. What would you like to know?",
  sender: 'aimee',
  timestamp: new Date(),
};

const AI_RESPONSE: Message = {
  id: '2',
  text: "Thanks for your message! Aimee is currently in the lab being fixed, but our team would love to help you. Feel free to reach out through our contact page or schedule a consultation.",
  sender: 'aimee',
  timestamp: new Date(),
  hasCTA: true,
};

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([WELCOME_MESSAGE]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [...prev, { ...AI_RESPONSE, id: (Date.now() + 1).toString() }]);
    }, 1000);
  };

  if (!isOpen) return null;

  const bgColor = theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const inputBg = theme === 'dark' ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';
  const messageBg = theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end justify-end p-4 md:p-6"
      >
        <div className="absolute inset-0 bg-black/40" onClick={onClose} />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className={`relative w-full max-w-md h-[600px] max-h-[85vh] flex flex-col rounded-2xl shadow-2xl ${bgColor}`}
        >
          <div className={`flex items-center justify-between p-4 border-b ${borderColor}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff5500] to-[#ff8833] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.5 6h-11C5.67 6 5 6.67 5 7.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z" />
                  <circle cx="9" cy="11" r="1.2" fill="#1a1a1a" opacity="0.7" />
                  <circle cx="15" cy="11" r="1.2" fill="#1a1a1a" opacity="0.7" />
                  <path d="M9 14h6v1H9z" fill="#1a1a1a" opacity="0.6" />
                  <path d="M11.5 2v2h1V2h-1z" />
                  <circle cx="12" cy="1.5" r="0.75" />
                  <path d="M7 18h10v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3z" />
                  <rect x="4" y="8" width="1" height="4" rx="0.5" />
                  <rect x="19" y="8" width="1" height="4" rx="0.5" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  Aimee
                </h2>
                <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  AI Assistant
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                theme === 'dark'
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
              }`}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'aimee' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ff5500] to-[#ff8833] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.5 6h-11C5.67 6 5 6.67 5 7.5v9c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5z" />
                      <circle cx="9" cy="11" r="1.2" fill="#1a1a1a" opacity="0.7" />
                      <circle cx="15" cy="11" r="1.2" fill="#1a1a1a" opacity="0.7" />
                      <path d="M9 14h6v1H9z" fill="#1a1a1a" opacity="0.6" />
                      <path d="M11.5 2v2h1V2h-1z" />
                      <circle cx="12" cy="1.5" r="0.75" />
                      <path d="M7 18h10v3c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-3z" />
                      <rect x="4" y="8" width="1" height="4" rx="0.5" />
                      <rect x="19" y="8" width="1" height="4" rx="0.5" />
                    </svg>
                  </div>
                )}
                <div className="flex flex-col gap-2 max-w-[75%]">
                  <div className={`rounded-2xl px-4 py-2 ${message.sender === 'user' ? 'bg-[#ff5500] text-white' : messageBg}`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                  {message.hasCTA && message.sender === 'aimee' && (
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors text-sm font-semibold w-fit"
                    >
                      <span>Visit Contact Page</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  )}
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-semibold">U</span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className={`p-4 border-t ${borderColor}`}>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className={`flex-1 px-4 py-2 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-[#ff5500]`}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors font-semibold"
              >
                Send
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

