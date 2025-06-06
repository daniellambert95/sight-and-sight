'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface PricingCalculatorProps {
  theme: string;
}

interface BasePackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  monthlyFee?: number;
  minimumMonths?: number;
  features: string[];
  icon: string;
  color: string;
}

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  isMonthly?: boolean;
  category: string;
  icon: string;
  color: string;
}

const basePackages: BasePackage[] = [
  {
    id: 'onetime',
    name: 'One-Time Package',
    description: 'Perfect for businesses that prefer upfront payment',
    price: 3298,
    monthlyFee: 24,
    features: [
      'Design and Development',
      'Basic SEO setup',
      'Mobile responsive',
      'Up to 5 pages included',
      '2 free integrations (contact form, WhatsApp, Calendly)',
      '€24/mo hosting'
    ],
    icon: '💰',
    color: 'orange'
  },
  {
    id: 'monthly',
    name: 'Monthly Package',
    description: 'All-inclusive subscription with premium features',
    price: 138,
    originalPrice: 138,
    minimumMonths: 12,
    features: [
      'Design and Development',
      'Hosting included',
      'Unlimited edits',
      'Advanced SEO',
      '2 free integrations (contact form, WhatsApp, Calendly)',
      '24/7 support',
      'Lifetime updates'
    ],
    icon: '⭐',
    color: 'orange'
  },
  {
    id: 'yearly',
    name: 'Yearly Package',
    description: 'Best value with annual commitment',
    price: 1198,
    originalPrice: 1656, // 138 * 12 = 1656
    features: [
      'Everything in Monthly',
      '28% savings vs monthly',
      'Priority support',
      'Quarterly strategy calls',
      'Performance reports'
    ],
    icon: '🚀',
    color: 'orange'
  }
];

const addOns: AddOn[] = [
  // Content & Design
  {
    id: 'blog-posts',
    name: 'Blog Posts',
    description: 'SEO-optimized articles',
    price: 60,
    category: 'content',
    icon: '📝',
    color: 'orange'
  },
  {
    id: 'copywriting',
    name: 'Copywriting Services',
    description: 'Professional page content',
    price: 80,
    category: 'content',
    icon: '✍️',
    color: 'orange'
  },
  {
    id: 'additional-pages',
    name: 'Additional Pages',
    description: 'Extra pages beyond the first 5',
    price: 80,
    category: 'content',
    icon: '📄',
    color: 'orange'
  },
  {
    id: 'brand-identity',
    name: 'Brand Identity Package',
    description: 'Logo design and brand guidelines',
    price: 300,
    category: 'content',
    icon: '🎨',
    color: 'orange'
  },
  
  // SEO & Marketing
  {
    id: 'seo-audit',
    name: 'SEO Audit',
    description: 'Comprehensive website analysis',
    price: 200,
    category: 'seo',
    icon: '🔍',
    color: 'orange'
  },
  {
    id: 'monthly-seo',
    name: 'Monthly SEO Optimization',
    description: 'Ongoing SEO improvements',
    price: 150,
    isMonthly: true,
    category: 'seo',
    icon: '📈',
    color: 'orange'
  },
  {
    id: 'backlinks',
    name: 'Backlink Building',
    description: 'Quality link building campaign',
    price: 100,
    isMonthly: true,
    category: 'seo',
    icon: '🔗',
    color: 'orange'
  },
  {
    id: 'local-seo',
    name: 'Local SEO Setup',
    description: 'Google My Business optimization',
    price: 250,
    category: 'seo',
    icon: '📍',
    color: 'orange'
  },
  {
    id: 'google-ads',
    name: 'Google Ads Management',
    description: 'Professional ad campaign management',
    price: 300,
    isMonthly: true,
    category: 'seo',
    icon: '🎯',
    color: 'orange'
  },
  
  // Automation & Tech
  {
    id: 'basic-chatbot',
    name: 'Basic Chatbot',
    description: 'AI-powered customer support',
    price: 400,
    category: 'automation',
    icon: '🤖',
    color: 'orange'
  },
  {
    id: 'advanced-automation',
    name: 'Advanced Automation',
    description: 'Custom workflow automation',
    price: 800,
    category: 'automation',
    icon: '⚡',
    color: 'orange'
  },
  {
    id: 'additional-integrations',
    name: 'Additional Integrations',
    description: 'Extra integrations beyond the first 2 free',
    price: 50,
    category: 'automation',
    icon: '🔗',
    color: 'orange'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Integration',
    description: 'Online store functionality',
    price: 2000,
    category: 'automation',
    icon: '🛒',
    color: 'orange'
  },
  {
    id: 'analytics',
    name: 'Basic Analytics Setup',
    description: 'Google Analytics & tracking',
    price: 80,
    category: 'automation',
    icon: '📊',
    color: 'orange'
  },
  
  // Support & Consulting
  {
    id: 'consultation-calls',
    name: 'Monthly Consultation',
    description: 'Strategic planning sessions',
    price: 120,
    isMonthly: true,
    category: 'support',
    icon: '💡',
    color: 'orange'
  },
  {
    id: 'strategy-sessions',
    name: 'Strategy Sessions',
    description: 'On-demand expert guidance',
    price: 200,
    category: 'support',
    icon: '🎯',
    color: 'orange'
  }
];

const categoryColors = {
  content: 'orange',
  seo: 'orange',
  automation: 'orange',
  support: 'orange'
};

const categoryNames = {
  content: '🎨 Content & Design',
  seo: '🔍 SEO & Marketing',
  automation: '🤖 Automation & Tech',
  support: '💬 Support & Consulting'
};

export default function PricingCalculator({ theme }: PricingCalculatorProps) {
  const [selectedPackage, setSelectedPackage] = useState<string>('monthly');
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  // Calculate total pricing
  const calculateTotal = () => {
    const basePackage = basePackages.find(pkg => pkg.id === selectedPackage);
    if (!basePackage) return { oneTime: 0, monthly: 0 };

    let oneTimeTotal = 0;
    let monthlyTotal = 0;

    // Base package cost
    if (selectedPackage === 'onetime') {
      oneTimeTotal += basePackage.price;
      monthlyTotal += basePackage.monthlyFee || 0;
    } else if (selectedPackage === 'monthly') {
      monthlyTotal += basePackage.price;
    } else if (selectedPackage === 'yearly') {
      oneTimeTotal += basePackage.price;
    }

    // Add-ons
    selectedAddOns.forEach(addOnId => {
      const addOn = addOns.find(a => a.id === addOnId);
      if (!addOn) return;

      const quantity = quantities[addOnId] || 1;
      
      if (addOn.isMonthly) {
        monthlyTotal += addOn.price * quantity;
      } else {
        oneTimeTotal += addOn.price * quantity;
      }
    });

    return { oneTime: oneTimeTotal, monthly: monthlyTotal };
  };

  const { oneTime, monthly } = calculateTotal();

  const toggleAddOn = (addOnId: string) => {
    const newSelected = new Set(selectedAddOns);
    if (newSelected.has(addOnId)) {
      newSelected.delete(addOnId);
      const newQuantities = { ...quantities };
      delete newQuantities[addOnId];
      setQuantities(newQuantities);
    } else {
      newSelected.add(addOnId);
      setQuantities(prev => ({ ...prev, [addOnId]: 1 }));
    }
    setSelectedAddOns(newSelected);
  };

  const updateQuantity = (addOnId: string, quantity: number) => {
    if (quantity < 1) {
      toggleAddOn(addOnId);
    } else {
      setQuantities(prev => ({ ...prev, [addOnId]: quantity }));
    }
  };

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' | 'hover') => {
    // Always use orange brand color
    const orangeColors = {
      bg: 'bg-[#ff5500]',
      text: 'text-[#ff5500]',
      border: 'border-[#ff5500]',
      hover: 'hover:bg-[#ff6600]'
    };
    return orangeColors[variant];
  };

  return (
    <div className="space-y-12">
      {/* Base Package Selection */}
      <div>
        <h3 className={`text-2xl font-bold mb-8 text-center ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          1. Choose Your Base Package
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {basePackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedPackage === pkg.id
                  ? `ring-4 ring-[#ff5500] ${
                      theme === 'dark' 
                        ? 'bg-gradient-to-br from-gray-800 to-gray-900' 
                        : 'bg-gradient-to-br from-white to-gray-50'
                    }`
                  : theme === 'dark'
                    ? 'bg-gray-800 hover:bg-gray-700'
                    : 'bg-gray-50 hover:bg-gray-100'
              } border ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Minimum commitment banner for monthly package */}
              {pkg.id === 'monthly' && pkg.minimumMonths && (
                <div className="absolute text-center -top-3 left-1/2 transform -translate-x-1/2 bg-[#ff5500] text-white px-4 py-1 rounded-full text-xs font-semibold">
                  {pkg.minimumMonths} months minimum contract
                </div>
              )}
              
              <div className="text-3xl mb-4">{pkg.icon}</div>
              <h4 className={`text-xl font-bold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                {pkg.name}
              </h4>
              <p className={`text-sm mb-4 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {pkg.description}
              </p>
              
              <div className="mb-4">
                {/* Show original price crossed out for yearly package */}
                {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                  <div className={`text-lg line-through ${
                    theme === 'dark' ? 'text-gray-500' : 'text-gray-400'
                  }`}>
                    €{pkg.originalPrice}{pkg.id === 'yearly' && '/year'}
                  </div>
                )}
                
                <div className={`text-3xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  €{pkg.price}
                  {pkg.id === 'monthly' && <span className="text-lg">/month</span>}
                  {pkg.id === 'yearly' && <span className="text-lg">/year</span>}
                  {pkg.id === 'onetime' && <span className="text-lg"> one-time</span>}
                </div>
                
                {/* Show savings for yearly package */}
                {pkg.originalPrice && pkg.originalPrice > pkg.price && (
                  <div className="text-green-500 font-semibold text-sm">
                    Save €{pkg.originalPrice - pkg.price} ({Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)}% off)
                  </div>
                )}
                
                {pkg.monthlyFee && (
                  <div className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    + €{pkg.monthlyFee}/month hosting
                  </div>
                )}
              </div>

              <ul className="space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Add-ons Selection */}
      <div>
        <h3 className={`text-2xl font-bold mb-8 text-center ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          2. Add Optional Services
        </h3>

        {Object.entries(categoryNames).map(([categoryKey, categoryName]) => (
          <div key={categoryKey} className="mb-8">
            <h4 className={`text-xl font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {categoryName}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {addOns
                .filter(addOn => addOn.category === categoryKey)
                .map((addOn) => (
                  <motion.div
                    key={addOn.id}
                    className={`relative p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      selectedAddOns.has(addOn.id)
                        ? `ring-2 ring-[#ff5500] ${
                            theme === 'dark' 
                              ? 'bg-gray-800' 
                              : 'bg-white'
                          }`
                        : theme === 'dark'
                          ? 'bg-gray-800 hover:bg-gray-700'
                          : 'bg-gray-50 hover:bg-gray-100'
                    } border ${
                      theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                    }`}
                    onClick={() => toggleAddOn(addOn.id)}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{addOn.icon}</div>
                      {selectedAddOns.has(addOn.id) && (
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(addOn.id, (quantities[addOn.id] || 1) - 1);
                            }}
                            className={`w-6 h-6 rounded-full bg-[#ff5500] hover:bg-[#ff6600] text-white text-sm flex items-center justify-center transition-colors`}
                          >
                            -
                          </button>
                          <span className={`w-8 text-center ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>
                            {quantities[addOn.id] || 1}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              updateQuantity(addOn.id, (quantities[addOn.id] || 1) + 1);
                            }}
                            className={`w-6 h-6 rounded-full bg-[#ff5500] hover:bg-[#ff6600] text-white text-sm flex items-center justify-center transition-colors`}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <h5 className={`font-semibold mb-1 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {addOn.name}
                    </h5>
                    <p className={`text-sm mb-3 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {addOn.description}
                    </p>
                    
                    <div className={`font-bold text-[#ff5500]`}>
                      €{addOn.price}{addOn.isMonthly ? '/month' : ''}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pricing Summary */}
      <div className={`sticky bottom-4 p-6 rounded-2xl ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700' 
          : 'bg-gradient-to-r from-white to-gray-50 border border-gray-200'
      } shadow-2xl`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className={`text-2xl font-bold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Your Custom Package
            </h3>
            <div className="flex items-center gap-6">
              {oneTime > 0 && (
                <div>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    One-time:
                  </span>
                  <span className={`text-3xl font-bold ml-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    €{oneTime}
                  </span>
                </div>
              )}
              {monthly > 0 && (
                <div>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Monthly:
                  </span>
                  <span className={`text-3xl font-bold ml-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    €{monthly}
                  </span>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex gap-4">
            <button
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              Download Quote
            </button>
            <Link
              href={`/contact?package=${selectedPackage}&addons=${Array.from(selectedAddOns).join(',')}&total=${oneTime + monthly}`}
              className="px-8 py-3 bg-[#ff5500] hover:bg-[#ff6600] text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 