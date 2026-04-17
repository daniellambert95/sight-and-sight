'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
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
  showCTA?: boolean;
}

const USER_MESSAGE_LIMIT = 5;
const WHATSAPP_URL = 'https://wa.me/353870387525';
const WHATSAPP_NUMBER = '+353 87 038 7525';

const WELCOME_MESSAGE: Message = {
  id: 'welcome',
  text: "It's Aimee here 👋 your AI assistant at Site & Sight. I'm here to help answer any questions you have about our services, projects, or how we can help bring your digital vision to life. What would you like to know?",
  sender: 'aimee',
  timestamp: new Date(),
};

function RobotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
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
  );
}

// Renders Aimee's message text, turning WhatsApp and contact page mentions into clickable links
function MessageText({ text, onClose }: { text: string; onClose: () => void }) {
  // Split on WhatsApp number pattern or "contact page"/"contact form" mentions
  const parts = text.split(/(WhatsApp|\+353\s*87\s*038\s*7525|contact\s+(?:page|form))/gi);

  return (
    <p className="text-sm whitespace-pre-wrap leading-relaxed">
      {parts.map((part, i) => {
        if (/^\+353\s*87\s*038\s*7525$/i.test(part)) {
          return (
            <a
              key={i}
              href="https://wa.me/353870387525"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {part}
            </a>
          );
        }
        if (/^WhatsApp$/i.test(part)) {
          return (
            <a
              key={i}
              href="https://wa.me/353870387525"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              WhatsApp
            </a>
          );
        }
        if (/^contact\s+(?:page|form)$/i.test(part)) {
          return (
            <a
              key={i}
              href="/contact"
              onClick={onClose}
              className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </p>
  );
}

function CTAButtons({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col gap-2 mt-1">
      <Link
        href="/contact"
        onClick={onClose}
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#ff5500] text-white rounded-lg hover:bg-[#e64d00] transition-colors text-sm font-semibold"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Contact Form
      </Link>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#1ebe5d] transition-colors text-sm font-semibold"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.105.549 4.083 1.508 5.797L.057 23.009a.75.75 0 00.934.934l5.212-1.451A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.66-.497-5.194-1.367l-.372-.217-3.857 1.073 1.073-3.857-.217-.372A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        WhatsApp {WHATSAPP_NUMBER}
      </a>
    </div>
  );
}

export default function AIChatModal({ isOpen, onClose }: AIChatModalProps) {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [userMessageCount, setUserMessageCount] = useState(0);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([WELCOME_MESSAGE]);
      setUserMessageCount(0);
      setIsLimitReached(false);
    }
  }, [isOpen, messages.length]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      abortControllerRef.current?.abort();
      setMessages([]);
      setInputValue('');
      setIsStreaming(false);
      setUserMessageCount(0);
      setIsLimitReached(false);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isStreaming && !isLimitReached) {
      inputRef.current?.focus();
    }
  }, [isOpen, isStreaming, isLimitReached]);

  const addAimeeMessage = (text: string, showCTA = false) => {
    const msg: Message = {
      id: Date.now().toString(),
      text,
      sender: 'aimee',
      timestamp: new Date(),
      showCTA,
    };
    setMessages((prev) => [...prev, msg]);
    return msg.id;
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isStreaming || isLimitReached) return;

    const userText = inputValue.trim();
    const newCount = userMessageCount + 1;
    setUserMessageCount(newCount);
    setInputValue('');

    const userMessage: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Build conversation history for the API (excluding the welcome message)
    const conversationMessages = [
      ...messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.sender === 'user' ? ('user' as const) : ('assistant' as const),
          content: m.text,
        })),
      { role: 'user' as const, content: userText },
    ];

    // Check if this message hits the limit
    if (newCount >= USER_MESSAGE_LIMIT) {
      setIsLimitReached(true);
    }

    setIsStreaming(true);

    // Create a placeholder streaming message
    const streamingId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      {
        id: streamingId,
        text: '',
        sender: 'aimee',
        timestamp: new Date(),
        showCTA: false,
      },
    ]);

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversationMessages }),
        signal: abortControllerRef.current.signal,
      });

      if (response.status === 429) {
        setIsLimitReached(true);
        setMessages((prev) => prev.filter((m) => m.id !== streamingId));
        addAimeeMessage(
          "You've reached the message limit for this session. Our team would love to continue this conversation directly — please get in touch via the contact form or WhatsApp!",
          true
        );
        setIsStreaming(false);
        return;
      }

      if (!response.ok || !response.body) {
        setMessages((prev) => prev.filter((m) => m.id !== streamingId));
        addAimeeMessage(
          "I'm having a little trouble connecting right now. Please reach out to our team directly and they'll be happy to help!",
          true
        );
        setIsStreaming(false);
        return;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        fullText += chunk;

        setMessages((prev) =>
          prev.map((m) =>
            m.id === streamingId ? { ...m, text: fullText } : m
          )
        );
      }

      // After streaming completes, if limit reached, append the limit message
      if (newCount >= USER_MESSAGE_LIMIT) {
        const limitMsg = "\n\nYou've reached the end of our chat session! To continue the conversation, reach out to our team directly — we'd love to help.";
        setMessages((prev) =>
          prev.map((m) =>
            m.id === streamingId
              ? { ...m, text: fullText + limitMsg, showCTA: true }
              : m
          )
        );
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setMessages((prev) => prev.filter((m) => m.id !== streamingId));
      addAimeeMessage(
        "I'm having a little trouble connecting right now. Please reach out to our team directly and they'll be happy to help!",
        true
      );
    } finally {
      setIsStreaming(false);
    }
  };

  if (!isOpen) return null;

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';
  const inputBg = isDark
    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500';
  const messageBg = isDark ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900';

  const remainingMessages = Math.max(0, USER_MESSAGE_LIMIT - userMessageCount);

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
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${borderColor}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#ff5500] to-[#ff8833] rounded-full flex items-center justify-center">
                <RobotIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold" style={{ fontFamily: 'var(--font-league-spartan)' }}>
                  Aimee
                </h2>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    AI Assistant · Online
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? 'hover:bg-gray-800 text-gray-400 hover:text-white'
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-700'
              }`}
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.sender === 'aimee' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-[#ff5500] to-[#ff8833] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <RobotIcon className="w-5 h-5 text-white" />
                  </div>
                )}
                <div className="flex flex-col gap-2 max-w-[75%]">
                  <div
                    className={`rounded-2xl px-4 py-2.5 ${
                      message.sender === 'user' ? 'bg-[#ff5500] text-white' : messageBg
                    }`}
                  >
                    {message.text ? (
                      message.sender === 'aimee' ? (
                        <MessageText text={message.text} onClose={onClose} />
                      ) : (
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
                      )
                    ) : (
                      /* Typing indicator for empty streaming message */
                      <div className="flex gap-1 items-center h-5">
                        <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0ms] opacity-60" />
                        <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:150ms] opacity-60" />
                        <span className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:300ms] opacity-60" />
                      </div>
                    )}
                  </div>
                  {message.showCTA && message.sender === 'aimee' && (
                    <CTAButtons onClose={onClose} />
                  )}
                </div>
                {message.sender === 'user' && (
                  <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-semibold">U</span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${borderColor}`}>
            {isLimitReached ? (
              <p className={`text-xs text-center ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Chat session ended — use the links above to reach our team.
              </p>
            ) : (
              <>
                {userMessageCount > 0 && remainingMessages <= 2 && (
                  <p className={`text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                    {remainingMessages} message{remainingMessages !== 1 ? 's' : ''} remaining in this session.
                  </p>
                )}
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask Aimee anything..."
                    disabled={isStreaming}
                    className={`flex-1 px-4 py-2 rounded-xl border text-sm ${inputBg} focus:outline-none focus:ring-2 focus:ring-[#ff5500] disabled:opacity-50 transition-opacity`}
                  />
                  <button
                    type="submit"
                    disabled={isStreaming || !inputValue.trim()}
                    className="p-2.5 bg-[#ff5500] text-white rounded-xl hover:bg-[#e64d00] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
