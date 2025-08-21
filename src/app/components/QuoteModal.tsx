'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../utils/ThemeProvider';

interface FormData {
  name: string;
  email: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  features: string[];
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const { theme } = useTheme();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showServicesPopup, setShowServicesPopup] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    services: [],
    budget: '',
    timeline: '',
    description: '',
    features: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Budget and timeline slider values
  const [budgetValue, setBudgetValue] = useState(5000); // Default 5k (mid-range)
  const [timelineValue, setTimelineValue] = useState(2); // Default 2 months

  const totalSteps = 3;

  // Organized services by category
  const serviceCategories = [
    {
      id: 'web-creative',
      name: 'Web Development & Creative Design',
      icon: '🌐',
      description: 'Websites, apps & visual design',
      services: [
        { 
          id: 'website', 
          name: 'Website Development', 
          icon: '💻',
          description: 'Custom responsive websites'
        },
        { 
          id: 'ecommerce', 
          name: 'E-commerce Solutions', 
          icon: '🛒',
          description: 'Online stores & payment systems'
        },
        { 
          id: 'webapp', 
          name: 'Web Applications', 
          icon: '⚙️',
          description: 'Custom software & dashboards'
        },
        { 
          id: 'hosting', 
          name: 'Hosting & Deployment', 
          icon: '🚀',
          description: 'Reliable hosting & maintenance'
        },
        { 
          id: 'brand-design', 
          name: 'Brand Identity Design', 
          icon: '🎯',
          description: 'Logo design & brand guidelines'
        },
        { 
          id: 'graphic-design', 
          name: 'Graphic Design', 
          icon: '📐',
          description: 'Marketing materials & print design'
        },
        { 
          id: 'video-editing', 
          name: 'Video Editing & Production', 
          icon: '🎬',
          description: 'Professional video editing'
        },
        { 
          id: 'motion-graphics', 
          name: 'Motion Graphics & Animation', 
          icon: '✨',
          description: 'Animated graphics & visual effects'
        }
      ]
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing & SEO',
      icon: '📈',
      description: 'Online visibility & growth',
      services: [
        { 
          id: 'seo', 
          name: 'SEO Optimization', 
          icon: '📊',
          description: 'Search engine optimization'
        },
        { 
          id: 'sem', 
          name: 'Search Engine Marketing', 
          icon: '🎯',
          description: 'Google Ads & PPC campaigns'
        },
        { 
          id: 'email-marketing', 
          name: 'Email Marketing', 
          icon: '📧',
          description: 'Email campaigns & automation'
        },
        { 
          id: 'content-marketing', 
          name: 'Content Marketing', 
          icon: '📝',
          description: 'Blog writing & social media'
        },
        { 
          id: 'pr-communications', 
          name: 'PR & Communications', 
          icon: '📣',
          description: 'Public relations & media'
        }
      ]
    },
    {
      id: 'automation',
      name: 'Automation & AI Solutions',
      icon: '🤖',
      description: 'Smart business solutions',
      services: [
        { 
          id: 'ai-chatbots', 
          name: 'AI Chatbots', 
          icon: '🤖',
          description: '24/7 customer support automation'
        },
        { 
          id: 'workflow-automation', 
          name: 'Workflow Automation', 
          icon: '⚡',
          description: 'Process optimization & automation'
        },
        { 
          id: 'ai-integration', 
          name: 'AI Integration', 
          icon: '🧠',
          description: 'AI tools & custom solutions'
        },
        { 
          id: 'consulting', 
          name: 'Business Process Optimization', 
          icon: '📋',
          description: 'Strategy & process consulting'
        }
      ]
    }
  ];

  // Flatten services for easier lookup
  const allServices = serviceCategories.flatMap(category => 
    category.services.map(service => ({
      ...service,
      category: category.name
    }))
  );

  // Helper functions for sliders
  const formatBudget = (value: number) => {
    if (value >= 50000) return '€50,000+';
    return `€${value.toLocaleString()}`;
  };

  const formatTimeline = (value: number) => {
    const roundedValue = Math.round(value);
    if (roundedValue === 0) return 'ASAP';
    if (roundedValue === 1) return '1 Month';
    if (roundedValue === 2) return '2 Months';
    if (roundedValue === 3) return '3 Months';
    if (roundedValue === 4) return '6 Months';
    if (roundedValue === 5) return 'Flexible';
    return `${roundedValue} Months`;
  };

  const handleBudgetChange = (value: number) => {
    setBudgetValue(value);
    setFormData(prev => ({ ...prev, budget: formatBudget(value) }));
  };

  const handleTimelineChange = (value: number) => {
    setTimelineValue(value);
    setFormData(prev => ({ ...prev, timeline: formatTimeline(value) }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId],
      features: [] // Reset features when services change
    }));
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setShowServicesPopup(true);
  };

  const handleDoneSelecting = () => {
    setShowServicesPopup(false);
    setSelectedCategory(null);
    // Auto-advance to step 2 after service selection
    if (formData.services.length > 0) {
      setCurrentStep(2);
    }
  };

  const handleBackToCategories = () => {
    setShowServicesPopup(false);
    setSelectedCategory(null);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    // If we're viewing services popup, close it instead of going to previous step
    if (showServicesPopup) {
      setShowServicesPopup(false);
      setSelectedCategory(null);
      return;
    }
    
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Only proceed if we're on the final step and user has filled required fields
    if (currentStep !== totalSteps || !formData.name || !formData.email) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Remove artificial delay - submit immediately
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleExplicitSubmit = async () => {
    // Only allow submission from final step with required fields
    if (currentStep !== totalSteps || !formData.name || !formData.email) {
      return;
    }
    
    setIsAnimating(true);
    
    // After animation completes, show success screen
    setTimeout(() => {
      setIsAnimating(false);
      setIsSubmitted(true);
    }, 6000); // 6 second animation
  };

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1: return formData.services.length > 0;
      case 2: return budgetValue > 0 && timelineValue >= 0;
      case 3: return formData.name !== '' && formData.email !== '';
      default: return false;
    }
  };

  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  const resetForm = () => {
    setCurrentStep(1);
    setSelectedCategory(null);
    setShowServicesPopup(false);
    setBudgetValue(5000);
    setTimelineValue(2);
    setFormData({
      name: '',
      email: '',
      company: '',
      services: [],
      budget: '',
      timeline: '',
      description: '',
      features: []
    });
    setIsSubmitted(false);
    setIsAnimating(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {/* Rocket Animation Modal */}
      {isAnimating && (
        <motion.div
          key="rocket-animation-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Stars background */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Success message that appears from the start */}
          <motion.div
            className="absolute bottom-1/3 text-center text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
          >
            <h2 className="text-4xl font-black mb-4">🎯 Proposal Incoming!</h2>
            <p className="text-xl">Your request is flying through cyberspace...</p>
          </motion.div>

          {/* Just the rocket that flies up slowly */}
          <motion.div
            className="absolute z-20 text-6xl"
            initial={{ 
              opacity: 1, 
              scale: 1,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [1, 1, 1, 0.6],
              scale: [1, 1.1, 1.3, 0.4],
              x: [0, 8, 25, 60],
              y: [0, -80, -300, -800],
              rotate: [0, 3, 12, 30],
            }}
            transition={{
              duration: 6,
              delay: 0.5
            }}
          >
            🚀
          </motion.div>

          {/* Trail effect for the rocket - synced */}
          <motion.div
            className="absolute z-15"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.9, 0.5, 0],
              scale: [0, 1, 1.8, 2.5, 3.5],
              y: [40, -40, -180, -420, -800],
              x: [0, 4, 12, 30, 60],
            }}
            transition={{
              duration: 6,
              delay: 0.7
            }}
          >
            <div className="w-8 h-20 bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent rounded-full blur-sm" />
          </motion.div>

          {/* Multiple flame particles following the rocket - all synced */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute z-10 w-3 h-6 bg-gradient-to-t from-red-500 to-orange-300 rounded-full blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.8, 0.4, 0],
                scale: [0, 1, 1.3, 1.8, 2.2],
                y: [25, -25 - i * 15, -120 - i * 30, -280 - i * 50, -600 - i * 70],
                x: [0, 2 + i * 1.5, 8 + i * 2.5, 20 + i * 5, 45 + i * 8],
              }}
              transition={{
                duration: 5.8,
                delay: 0.8 + i * 0.1
              }}
            />
          ))}

          {/* Additional smaller flame particles for more effect */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute z-8 w-2 h-4 bg-gradient-to-t from-yellow-500 to-orange-200 rounded-full blur-sm"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0.6, 0.2, 0],
                scale: [0, 0.8, 1.1, 1.5, 2],
                y: [20, -20 - i * 10, -100 - i * 25, -240 - i * 40, -520 - i * 60],
                x: [0, 1 + i, 6 + i * 2, 15 + i * 3, 35 + i * 6],
              }}
              transition={{
                duration: 5.5,
                delay: 1 + i * 0.15
              }}
            />
          ))}
        </motion.div>
      )}

      {/* Modal Form */}
      {!isSubmitted && !isAnimating && (
        <motion.div
          key="main-form-modal"
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
            className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 rounded-3xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-2xl'
            }`}
          >
            {/* Close button */}
            <button 
              onClick={handleClose}
              className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                theme === 'dark' ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
              } transition-colors`}
            >
              ×
            </button>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Step {currentStep} of {totalSteps}
                </span>
                <span className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className={`w-full h-2 rounded-full ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              }`}>
                <motion.div
                  className="h-full bg-[#ff5500] rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait" custom={currentStep}>
                {/* Step 1: Services Selection */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={1}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h2 className={`text-3xl font-black mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        What type of services do you need?
                      </h2>
                      <p className={`text-lg ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Choose your primary category to see available services
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {serviceCategories.map((category) => (
                        <motion.button
                          key={category.id}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => handleCategorySelect(category.id)}
                          className={`p-6 rounded-2xl border-2 transition-all text-left ${
                            theme === 'dark'
                              ? 'border-gray-600 hover:border-[#ff5500] bg-gray-800/50 hover:bg-gray-800/80'
                              : 'border-gray-200 hover:border-[#ff5500] bg-gray-50/50 hover:bg-gray-50/80'
                          }`}
                        >
                          <div className="flex flex-col items-center text-center gap-3">
                            <div className="text-4xl">{category.icon}</div>
                            <div className="flex-1">
                              <h3 className={`text-lg font-bold mb-2 ${
                                theme === 'dark' ? 'text-white' : 'text-gray-900'
                              }`}>
                                {category.name}
                              </h3>
                              <p className={`text-sm ${
                                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {category.description}
                              </p>
                              <div className={`text-xs mt-2 font-medium ${
                                theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                              }`}>
                                {category.services.length} services available
                              </div>
                            </div>
                            <div className={`text-[#ff5500] text-xl`}>→</div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                    
                    {formData.services.length > 0 && (
                      <div className={`p-4 rounded-xl ${
                        theme === 'dark' ? 'bg-gray-800/30' : 'bg-orange-50'
                      }`}>
                        <div className={`text-sm font-medium ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Selected: {formData.services.map(serviceId => 
                            allServices.find(s => s.id === serviceId)?.name
                          ).join(', ')}
                        </div>
                      </div>
                    )}
                    
                    <div className={`text-center text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      💡 Choose a category to see available services
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Budget & Timeline */}
                {currentStep === 2 && (
                  <motion.div 
                    key="step2"
                    custom={2}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h2 className={`text-3xl font-black mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Budget & Timeline
                      </h2>
                      <p className={`text-lg ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Help us understand your project scope and timing
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {/* Budget Slider */}
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className={`text-2xl font-bold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            💰 Project Budget
                          </h3>
                          <div className={`text-3xl font-black text-[#ff5500] mb-4`}>
                            {formatBudget(budgetValue)}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <input
                            type="range"
                            min="1000"
                            max="50000"
                            step="500"
                            value={budgetValue}
                            onChange={(e) => handleBudgetChange(parseInt(e.target.value))}
                            className="w-full h-3 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, #ff5500 0%, #ff5500 ${((budgetValue - 1000) / (50000 - 1000)) * 100}%, ${theme === 'dark' ? '#374151' : '#e5e7eb'} ${((budgetValue - 1000) / (50000 - 1000)) * 100}%, ${theme === 'dark' ? '#374151' : '#e5e7eb'} 100%)`
                            }}
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>€1K</span>
                            <span>€5K</span>
                            <span>€15K</span>
                            <span>€50K+</span>
                          </div>
                        </div>
                        
                        <div className={`text-center text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {budgetValue < 3000 && "Perfect for simple projects"}
                          {budgetValue >= 3000 && budgetValue < 10000 && "Most popular choice"}
                          {budgetValue >= 10000 && budgetValue < 50000 && "Complex projects"}
                          {budgetValue >= 50000 && "Enterprise solutions"}
                        </div>
                      </div>
                      
                      {/* Timeline Slider */}
                      <div className="space-y-6">
                        <div className="text-center">
                          <h3 className={`text-2xl font-bold mb-2 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            ⏰ Project Timeline
                          </h3>
                          <div className={`text-3xl font-black text-[#ff5500] mb-4`}>
                            {formatTimeline(timelineValue)}
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <input
                            type="range"
                            min="0"
                            max="5"
                            step="0.1"
                            value={timelineValue}
                            onChange={(e) => handleTimelineChange(parseFloat(e.target.value))}
                            className="w-full h-3 rounded-lg appearance-none cursor-pointer slider"
                            style={{
                              background: `linear-gradient(to right, #ff5500 0%, #ff5500 ${(timelineValue / 5) * 100}%, ${theme === 'dark' ? '#374151' : '#e5e7eb'} ${(timelineValue / 5) * 100}%, ${theme === 'dark' ? '#374151' : '#e5e7eb'} 100%)`
                            }}
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>ASAP</span>
                            <span>1-2M</span>
                            <span>3M</span>
                            <span>6M</span>
                            <span>Flexible</span>
                          </div>
                        </div>
                        
                        <div className={`text-center text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {Math.round(timelineValue) === 0 && "Rush project"}
                          {Math.round(timelineValue) === 1 && "Standard timeline"}
                          {Math.round(timelineValue) === 2 && "Planned launch"}
                          {Math.round(timelineValue) >= 3 && Math.round(timelineValue) < 5 && "Long-term project"}
                          {Math.round(timelineValue) === 5 && "No rush"}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Info & Project Description */}
                {currentStep === 3 && (
                  <motion.div 
                    key="step3"
                    custom={3}
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-8"
                  >
                    <div className="text-center mb-8">
                      <h2 className={`text-3xl font-black mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        Tell us about your project
                      </h2>
                      <p className={`text-lg ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        Contact details and project information
                      </p>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        📞 Contact Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className={`block text-sm font-semibold mb-3 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-[#ff5500] focus:border-transparent ${
                              theme === 'dark'
                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            }`}
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label className={`block text-sm font-semibold mb-3 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-[#ff5500] focus:border-transparent ${
                              theme === 'dark'
                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                            }`}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className={`block text-sm font-semibold mb-3 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Company Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-[#ff5500] focus:border-transparent ${
                            theme === 'dark'
                              ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Project Description */}
                    <div className="space-y-6">
                      <h3 className={`text-xl font-bold ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        📝 Project Details (Optional)
                      </h3>

                      <div>
                        <label className={`block text-sm font-semibold mb-3 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Project Description
                        </label>
                        <textarea
                          rows={4}
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          className={`w-full px-4 py-3 rounded-xl border transition-colors focus:ring-2 focus:ring-[#ff5500] focus:border-transparent resize-none ${
                            theme === 'dark'
                              ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder="Describe your vision, goals, target audience, or any specific requirements..."
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className={`p-6 rounded-xl ${
                      theme === 'dark' ? 'bg-gray-800/50' : 'bg-orange-50'
                    }`}>
                      <h3 className={`font-bold mb-4 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        📋 Project Summary
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div><strong>Services:</strong> {formData.services.map(serviceId => 
                          allServices.find(s => s.id === serviceId)?.name
                        ).join(', ')}</div>
                        <div><strong>Budget:</strong> {formatBudget(budgetValue)}</div>
                        <div><strong>Timeline:</strong> {formatTimeline(timelineValue)}</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={currentStep === 1 && !showServicesPopup}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentStep === 1 && !showServicesPopup
                      ? 'opacity-50 cursor-not-allowed'
                      : theme === 'dark'
                        ? 'bg-gray-700 hover:bg-gray-600 text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  }`}
                >
                  ← {showServicesPopup ? 'Back to Categories' : 'Previous'}
                </button>

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceedFromStep(currentStep)}
                    className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                      !canProceedFromStep(currentStep)
                        ? 'opacity-50 cursor-not-allowed bg-gray-400'
                        : 'bg-[#ff5500] hover:bg-[#ff6600] text-white transform hover:scale-105'
                    }`}
                  >
                    Next Step →
                  </button>
                ) : (
                  <div className="flex-1 flex justify-center">
                    <button
                      type="button"
                      onClick={handleExplicitSubmit}
                      disabled={isSubmitting || !formData.name || !formData.email}
                      className={`px-12 py-3 rounded-xl font-bold text-lg transition-all ${
                        isSubmitting || !formData.name || !formData.email
                          ? 'opacity-50 cursor-not-allowed bg-gray-400'
                          : 'bg-[#ff5500] hover:bg-[#ff6600] text-white transform hover:scale-105 shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Get My Proposal 🚀'
                      )}
                    </button>
                  </div>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {/* Services Selection Popup */}
      {showServicesPopup && selectedCategory && (
        <motion.div
          key="services-popup-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={handleBackToCategories}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className={`max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 rounded-3xl ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-600' 
                : 'bg-white border border-gray-200 shadow-2xl'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-3xl">
                  {serviceCategories.find(cat => cat.id === selectedCategory)?.icon}
                </div>
                <h3 className={`text-2xl font-black ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {serviceCategories.find(cat => cat.id === selectedCategory)?.name}
                </h3>
              </div>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Select the specific services you need
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {serviceCategories
                .find(cat => cat.id === selectedCategory)
                ?.services.map((service) => (
                  <motion.button
                    key={service.id}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleServiceToggle(service.id)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      formData.services.includes(service.id)
                        ? `border-[#ff5500] ${
                            theme === 'dark' ? 'bg-[#ff5500]/10' : 'bg-[#ff5500]/5'
                          }`
                        : theme === 'dark'
                          ? 'border-gray-600 hover:border-gray-500 bg-gray-800/50'
                          : 'border-gray-200 hover:border-gray-300 bg-gray-50/50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-xl">{service.icon}</div>
                      <div className="flex-1">
                        <div className={`font-semibold mb-1 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {service.name}
                        </div>
                        <div className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {service.description}
                        </div>
                      </div>
                      {formData.services.includes(service.id) && (
                        <div className="text-[#ff5500] text-lg">✓</div>
                      )}
                    </div>
                  </motion.button>
                ))}
            </div>

            {/* Selected Services Summary */}
            {formData.services.filter(serviceId => 
              serviceCategories.find(cat => cat.id === selectedCategory)?.services.some(s => s.id === serviceId)
            ).length > 0 && (
              <div className={`p-4 rounded-xl mb-6 ${
                theme === 'dark' ? 'bg-gray-800/30' : 'bg-orange-50'
              }`}>
                <div className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Selected from this category: {formData.services
                    .filter(serviceId => 
                      serviceCategories.find(cat => cat.id === selectedCategory)?.services.some(s => s.id === serviceId)
                    )
                    .map(serviceId => allServices.find(s => s.id === serviceId)?.name)
                    .join(', ')}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleBackToCategories}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                }`}
              >
                ← Back to Categories
              </button>
              
              <button
                onClick={handleDoneSelecting}
                className="px-8 py-3 bg-[#ff5500] hover:bg-[#ff6600] text-white rounded-xl font-semibold transition-all"
              >
                Done Selecting
              </button>
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
                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-2xl'
            }`}
          >
            <div className="text-center">
              <div className="text-6xl mb-6">🎉</div>
              <h1 className={`text-4xl font-black mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Thank You!
              </h1>
              <p className={`text-xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                We've received your project details and will get back to you within 24 hours with a custom proposal.
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
                    Create a custom proposal with timeline
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#ff5500] mr-2">3.</span>
                    Schedule a call to discuss details
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