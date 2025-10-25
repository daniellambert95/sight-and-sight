'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeProvider';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  name: string;
  projectTypes: string[];
  customProject: string;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    projectTypes: [],
    customProject: ''
  });

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setIsAnimating(false);
      setIsSubmitted(false);
      setFormData({
        email: '',
        name: '',
        projectTypes: [],
        customProject: ''
      });
    }
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const projectTypes = [
    {
      id: 'web-development',
      title: 'Website Development',
      description: 'Custom websites & web applications',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'orange'
    },
    {
      id: 'seo-marketing',
      title: 'SEO & Digital Marketing',
      description: 'Boost your online visibility',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      id: 'creative-design',
      title: 'Creative Design',
      description: 'Logos, Branding & graphics',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      id: 'automation',
      title: 'Automation & AI',
      description: 'Smart business solutions',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      color: 'orange'
    },
    {
      id: 'custom',
      title: 'Something Else',
      description: 'Tell us about your unique project',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'orange'
    }
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // Format project types list for email
      const projectTypesList = formData.projectTypes.join(', ');

      // Create formatted message for email
      const emailMessage = `
Project Inquiry Details:

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}

Project Types Selected:
${projectTypesList}

${formData.customProject ? `Project Details:\n${formData.customProject}` : ''}

---
Form: Project Inquiry Modal
Submitted: ${new Date().toLocaleString()}
      `.trim();

      // Start the celebration animation
      setIsAnimating(true);

      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `New Project Inquiry from ${formData.name}`,
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

      // After successful submission and animation completes, show success screen (8s animation + 1s extra)
      setTimeout(() => {
        setIsAnimating(false);
        setIsSubmitted(true);
      }, 9000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsAnimating(false);
      alert('Unable to submit your project inquiry. Please try again or contact us directly at hello@siteandsight.com');
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setIsAnimating(false);
    setIsSubmitted(false);
    setFormData({
      email: '',
      name: '',
      projectTypes: [],
      customProject: ''
    });
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (currentStep === 3 && isStepValid()) {
        handleSubmit();
      } else if (isStepValid()) {
        handleNext();
      }
    }
  };

  const handleModalKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && !event.shiftKey && !event.ctrlKey && !event.metaKey) {
      // Only handle Enter if we're not in a textarea or other special input
      const target = event.target as HTMLElement;
      if (target.tagName !== 'TEXTAREA') {
        event.preventDefault();
        if (currentStep === 3 && isStepValid()) {
          handleSubmit();
        } else if (isStepValid()) {
          handleNext();
        }
      }
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name.trim().length > 0;
      case 2:
        if (formData.projectTypes.includes('Something Else')) {
          return formData.customProject.trim().length > 0;
        }
        return formData.projectTypes.length > 0;
      case 3:
        return formData.email && formData.email.includes('@');
      default:
        return false;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 border-blue-500/30 bg-blue-500/10',
      green: 'from-green-500 to-green-600 border-green-500/30 bg-green-500/10',
      purple: 'from-purple-500 to-purple-600 border-purple-500/30 bg-purple-500/10',
      orange: 'from-orange-500 to-orange-600 border-orange-500/30 bg-orange-500/10',
      indigo: 'from-indigo-500 to-indigo-600 border-indigo-500/30 bg-indigo-500/10',
      pink: 'from-pink-500 to-pink-600 border-pink-500/30 bg-pink-500/10'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {/* Rocket Launch Animation Modal */}
      {isAnimating && (
        <motion.div
          key="rocket-animation-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Orange brand-colored stars background */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#ff5500] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Success message that appears from the start */}
          <motion.div
            className="absolute bottom-1/3 text-center text-white z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: "easeOut"
            }}
          >
            <h2 className="text-4xl font-black mb-4">Project Submitted!</h2>
            <p className="text-xl">We'll reach out and be in contact soon...</p>
          </motion.div>

          {/* Rocket that flies straight up - smooth continuous movement */}
          <motion.div
            className="absolute z-20"
            initial={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
            }}
            animate={{
              opacity: 0,
              scale: 0.3,
              y: -1300,
            }}
            transition={{
              duration: 7,
              delay: 1,
              ease: "linear"
            }}
          >
            {/* Orange rocket facing up */}
            <RocketLaunchIcon className="w-12 h-12 text-[#ff5500] transform -rotate-45" />
          </motion.div>

          {/* Single synchronized thin flame trail - smooth continuous movement */}
          <motion.div
            className="absolute z-15"
            initial={{ opacity: 0, scale: 1, y: 60 }}
            animate={{
              opacity: 1,
              scale: 4,
              y: -1300,
            }}
            transition={{
              duration: 7,
              delay: 1.1,
              ease: "linear"
            }}
          >
            <div className="w-6 h-20 bg-gradient-to-t from-[#ff5500] via-[#ff6600] to-transparent rounded-full blur-sm" />
          </motion.div>
        </motion.div>
      )}

      {/* Main Form Modal */}
      {!isSubmitted && !isAnimating && (
        <motion.div
          key="main-form-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={`relative w-full max-w-2xl max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-700/50' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-white/50'
            }`}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleModalKeyDown}
            tabIndex={-1}
          >
          {/* Header */}
          <div className="relative p-6 pb-4">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Step {currentStep} of 3
                </span>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {Math.round((currentStep / 3) * 100)}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <motion.div
                  className="h-full bg-gradient-to-r from-[#ff5500] to-[#ff7800] rounded-full"
                  initial={{ width: '33%' }}
                  animate={{ width: `${(currentStep / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>



            <h2 className={`text-3xl font-black mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {currentStep === 1 && "Let's get started!"}
              {currentStep === 2 && "What can we help with?"}
              {currentStep === 3 && "Almost there!"}
            </h2>
            <p className={`text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {currentStep === 1 && "What should we call you?"}
              {currentStep === 2 && "Tell us about your project"}
              {currentStep === 3 && "We'll need your email to get in touch"}
            </p>
          </div>

          {/* Content */}
          <div className="px-6 pb-6">
            <AnimatePresence mode="wait">
              {/* Step 1: Name */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <label className={`block text-sm font-semibold mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={handleKeyDown}
                      placeholder="John Doe"
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#ff5500] focus:bg-gray-800'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#ff5500] focus:bg-white'
                      } focus:outline-none focus:ring-4 focus:ring-[#ff5500]/20`}
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Project Type */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {projectTypes.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => {
                          if (project.id === 'custom') {
                            // For "Something Else", just select it and clear others
                            setFormData(prev => ({
                              ...prev,
                              projectTypes: prev.projectTypes.includes(project.title) 
                                ? prev.projectTypes.filter(type => type !== project.title)
                                : [project.title]
                            }));
                          } else {
                            // For regular options, remove "Something Else" if selected and toggle this option
                            setFormData(prev => {
                              const filteredTypes = prev.projectTypes.filter(type => type !== 'Something Else');
                              const isSelected = filteredTypes.includes(project.title);
                              if (isSelected) {
                                return {
                                  ...prev,
                                  projectTypes: filteredTypes.filter(type => type !== project.title)
                                };
                              } else {
                                return {
                                  ...prev,
                                  projectTypes: [...filteredTypes, project.title]
                                };
                              }
                            });
                          }
                        }}
                        className={`p-3 rounded-xl border-2 transition-all duration-300 text-left group relative ${
                          formData.projectTypes.includes(project.title)
                            ? `border-[#ff5500] ${theme === 'dark' ? 'bg-[#ff5500]/10' : 'bg-[#ff5500]/5'}`
                            : theme === 'dark'
                              ? 'border-gray-700 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-800/50'
                              : 'border-gray-300 bg-white/30 hover:border-gray-400 hover:bg-white/50'
                        }`}
                      >
                        {/* Selection indicator */}
                        {formData.projectTypes.includes(project.title) && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-[#ff5500] rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                        
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white bg-gradient-to-br ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]} flex-shrink-0`}>
                            {project.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold mb-1 leading-tight ${
                              theme === 'dark' ? 'text-white' : 'text-gray-900'
                            }`}>
                              {project.title}
                            </h3>
                            <p className={`text-sm leading-tight ${
                              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Additional details section */}
                  <div>
                    <label className={`block text-sm font-semibold mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {formData.projectTypes.includes('Something Else') 
                        ? 'Tell us about your project *' 
                        : 'Additional details (optional)'}
                    </label>
                    <textarea
                      value={formData.customProject}
                      onChange={(e) => setFormData({ ...formData, customProject: e.target.value })}
                      placeholder={formData.projectTypes.includes('Something Else') 
                        ? 'Describe your project idea...' 
                        : 'Tell us more about your project, timeline, budget, or any specific requirements...'}
                      rows={3}
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 resize-none ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#ff5500] focus:bg-gray-800'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#ff5500] focus:bg-white'
                      } focus:outline-none focus:ring-4 focus:ring-[#ff5500]/20`}
                    />
                  </div>

                  {/* Continue button for step 2 - aligned with back button */}
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={handleBack}
                      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      ← Back
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                        isStepValid()
                          ? 'bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white hover:from-[#ff6600] hover:to-[#ff8800] transform hover:scale-105 shadow-lg hover:shadow-xl'
                          : 'opacity-50 cursor-not-allowed bg-gray-400 text-gray-200'
                      }`}
                    >
                      Continue →
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Email */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <label className={`block text-sm font-semibold mb-3 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onKeyDown={handleKeyDown}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 text-lg ${
                        theme === 'dark'
                          ? 'bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-[#ff5500] focus:bg-gray-800'
                          : 'bg-white/50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-[#ff5500] focus:bg-white'
                      } focus:outline-none focus:ring-4 focus:ring-[#ff5500]/20`}
                      autoFocus
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation buttons - only for steps 1 and 3 */}
            {(currentStep === 1 || currentStep === 3) && (
              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    ← Back
                  </button>
                )}

                <button
                  onClick={currentStep === 3 ? handleSubmit : handleNext}
                  disabled={!isStepValid()}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white hover:from-[#ff6600] hover:to-[#ff8800] transform hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'opacity-50 cursor-not-allowed bg-gray-400 text-gray-200'
                  } ${currentStep === 1 ? 'ml-auto' : ''}`}
                >
                  {currentStep === 3 ? 'Submit' : 'Next →'}
                </button>
              </div>
            )}


            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success Screen Modal */}
      {isSubmitted && (
        <motion.div
          key="success-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto p-12 rounded-3xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-black border border-gray-700' 
                : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-2xl'
            }`}
          >
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <Image
                  src={theme === 'dark' ? "/logo/icon/logo-dark.png" : "/logo/icon/logo-light.png"}
                  alt="Site & Sight Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20"
                />
              </div>
              <h1 className={`text-4xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Thank You!
              </h1>
              <p className={`text-xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We've received your project details and will get back to you within 24 hours with ideas and next steps.
              </p>
              <div className={`p-6 rounded-xl mb-8 ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-orange-50'
              }`}>
                <h3 className={`font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  What happens next?
                </h3>
                <ul className={`text-left space-y-2 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <li className="flex items-center">
                    <span className="text-[#ff5500] mr-2">1.</span>
                    We'll review your project requirements
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#ff5500] mr-2">2.</span>
                    Prepare initial concepts and timeline
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#ff5500] mr-2">3.</span>
                    Schedule a call to discuss your vision
                  </li>
                </ul>
              </div>
              <button
                onClick={handleClose}
                className="px-8 py-3 bg-[#ff5500] text-white rounded-xl hover:bg-[#ff6600] transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 