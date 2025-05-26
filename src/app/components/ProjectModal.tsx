'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeProvider';

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
      icon: '🌐',
      color: 'blue'
    },
    {
      id: 'seo-marketing',
      title: 'SEO & Digital Marketing',
      description: 'Boost your online visibility',
      icon: '📈',
      color: 'green'
    },
    {
      id: 'creative-design',
      title: 'Creative Design',
      description: 'Branding, UI/UX & graphics',
      icon: '🎨',
      color: 'purple'
    },
    {
      id: 'video-editing',
      title: 'Video & Motion Graphics',
      description: 'Professional video content',
      icon: '🎬',
      color: 'orange'
    },
    {
      id: 'automation',
      title: 'Automation & AI',
      description: 'Smart business solutions',
      icon: '🤖',
      color: 'indigo'
    },
    {
      id: 'custom',
      title: 'Something Else',
      description: 'Tell us about your unique project',
      icon: '💡',
      color: 'pink'
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
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // For now, just show a success message and close
    alert('Thank you! We\'ll be in touch soon.');
    onClose();
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
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
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg bg-gradient-to-br ${getColorClasses(project.color).split(' ')[0]} ${getColorClasses(project.color).split(' ')[1]} flex-shrink-0`}>
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
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    currentStep === 1
                      ? 'opacity-50 cursor-not-allowed'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:text-white hover:bg-gray-800'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  ← Back
                </button>

                <button
                  onClick={currentStep === 3 ? handleSubmit : handleNext}
                  disabled={!isStepValid()}
                  className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                    isStepValid()
                      ? 'bg-gradient-to-r from-[#ff5500] to-[#ff7800] text-white hover:from-[#ff6600] hover:to-[#ff8800] transform hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'opacity-50 cursor-not-allowed bg-gray-400 text-gray-200'
                  }`}
                >
                  {currentStep === 3 ? 'Submit' : 'Next →'}
                </button>
              </div>
            )}


          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 