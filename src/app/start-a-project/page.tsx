'use client';

import { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTheme } from '../utils/ThemeProvider';
import { isValidEmail } from '@/lib/utils';
import { CheckCircleIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const formatBudget = (value: number) => {
  if (value >= 50000) return '€50,000+';
  return `€${value.toLocaleString()}`;
};

const INTEREST_OPTIONS = [
  { id: 'branding', label: 'Branding & design' },
  { id: 'marketing', label: 'Digital marketing & SEO' },
  { id: 'automation', label: 'Automations & AI implementation' },
];

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: 'New website' | 'Redesign' | '';
  currentWebsite: string;
  goals: string;
  hasBranding: 'Yes' | 'No' | 'In progress' | '';
  brandingLink: string;
  interests: string[];
  interestDetails: string;
  additionalInfo: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  projectType: '',
  currentWebsite: '',
  goals: '',
  hasBranding: '',
  brandingLink: '',
  interests: [],
  interestDetails: '',
  additionalInfo: '',
};

export default function StartAProjectPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [budgetValue, setBudgetValue] = useState(2500);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (submitted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [submitted]);

  const inputClasses = `w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:border-transparent ${
    theme === 'dark'
      ? 'bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[#ff5500]'
      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-[#ff5500]'
  }`;

  const labelClasses = `block text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`;

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleInterest = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id)
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!isValidEmail(formData.email)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }
    if (!formData.projectType) {
      setErrorMsg('Please let us know if this is a new website or a redesign');
      return;
    }
    if (!formData.hasBranding) {
      setErrorMsg('Please let us know if you already have branding or design done');
      return;
    }

    setIsSubmitting(true);

    try {
      const interestLabels = formData.interests.map(
        id => INTEREST_OPTIONS.find(o => o.id === id)?.label || id
      );

      const response = await fetch('/api/start-a-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          projectType: formData.projectType,
          currentWebsite: formData.currentWebsite,
          goals: formData.goals,
          hasBranding: formData.hasBranding,
          brandingLink: formData.brandingLink,
          budget: formatBudget(budgetValue),
          interests: interestLabels,
          interestDetails: formData.interestDetails,
          additionalInfo: formData.additionalInfo,
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error('Form submission failed');

      setIsSubmitting(false);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      setErrorMsg('Unable to send your details. Please try again or email us directly at hello@siteandsight.com');
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navigation currentPage="start-a-project" />

      <section
        className={`relative px-6 md:px-12 lg:px-24 overflow-hidden ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-black via-gray-950 to-black'
            : 'bg-gradient-to-br from-white to-gray-50'
        }`}
        style={{ paddingTop: '8rem', paddingBottom: '5rem' }}
      >
        <div className="max-w-3xl mx-auto w-full relative z-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest font-semibold mb-3" style={{ color: '#6366f1' }}>
              Start a Project
            </p>
            <h1
              className="font-black leading-none uppercase mb-6"
              style={{ fontFamily: 'var(--font-league-spartan)', fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 0.95 }}
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>TELL US ABOUT</span>{' '}
              <span style={{ color: '#ff5500' }}>YOUR PROJECT</span>
            </h1>
            <p className={`text-lg font-light max-w-xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              A few quick questions so we can put together an accurate quote. Takes about 2 minutes.
            </p>
          </div>

          <div
            className={`p-8 md:p-10 rounded-3xl backdrop-blur-sm ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700/50 shadow-2xl'
                : 'bg-gradient-to-br from-white/90 to-gray-50/90 border border-white/50 shadow-2xl shadow-gray-200/50'
            }`}
          >
            {submitted ? (
              <div className="flex items-center justify-center py-16">
                <div className="text-center">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: 'linear-gradient(135deg, #ff5500, #e64d00)' }}
                  >
                    <CheckCircleIcon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className={`text-3xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Thanks, <span style={{ color: '#ff5500' }}>got it!</span>
                  </h3>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    We've received your project details and will be in touch with your quote soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClasses}>Name *</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className={inputClasses}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className={inputClasses}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className={labelClasses}>Company / Brand Name</label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={e => handleChange('company', e.target.value)}
                    className={inputClasses}
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <label className={labelClasses}>Is this a new website or a redesign? *</label>
                  <div className="flex gap-3">
                    {(['New website', 'Redesign'] as const).map(option => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleChange('projectType', option)}
                        className={`flex-1 px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                          formData.projectType === option
                            ? 'border-[#ff5500] text-[#ff5500] ' + (theme === 'dark' ? 'bg-[#ff5500]/10' : 'bg-[#ff5500]/5')
                            : theme === 'dark'
                              ? 'border-gray-600 text-gray-300 hover:border-gray-500'
                              : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.projectType === 'Redesign' && (
                  <div>
                    <label htmlFor="currentWebsite" className={labelClasses}>Link to your current website *</label>
                    <input
                      type="text"
                      id="currentWebsite"
                      value={formData.currentWebsite}
                      onChange={e => handleChange('currentWebsite', e.target.value)}
                      className={inputClasses}
                      placeholder="https://yourcurrentsite.com"
                      required
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="goals" className={labelClasses}>What are you looking to achieve? *</label>
                  <textarea
                    id="goals"
                    rows={4}
                    value={formData.goals}
                    onChange={e => handleChange('goals', e.target.value)}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us a bit about the project, who it's for, and what you want the website to do..."
                    required
                  />
                </div>

                <div>
                  <label className={labelClasses}>Do you already have branding or design done? *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(['Yes', 'No', 'In progress'] as const).map(option => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleChange('hasBranding', option)}
                        className={`px-4 py-3 rounded-xl border-2 font-medium transition-all text-sm md:text-base ${
                          formData.hasBranding === option
                            ? 'border-[#ff5500] text-[#ff5500] ' + (theme === 'dark' ? 'bg-[#ff5500]/10' : 'bg-[#ff5500]/5')
                            : theme === 'dark'
                              ? 'border-gray-600 text-gray-300 hover:border-gray-500'
                              : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                {formData.hasBranding === 'Yes' && (
                  <div>
                    <label htmlFor="brandingLink" className={labelClasses}>Link to your branding/design files</label>
                    <input
                      type="text"
                      id="brandingLink"
                      value={formData.brandingLink}
                      onChange={e => handleChange('brandingLink', e.target.value)}
                      className={inputClasses}
                      placeholder="Google Drive, Dropbox, Figma link, etc."
                    />
                  </div>
                )}

                <div>
                  <label className={labelClasses}>
                    Anything else you're interested in? <span className="font-normal opacity-70">(we'll take care of the hosting & maintenance)</span>
                  </label>
                  <div className="space-y-3">
                    {INTEREST_OPTIONS.map(option => (
                      <label
                        key={option.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.interests.includes(option.id)
                            ? 'border-[#ff5500] ' + (theme === 'dark' ? 'bg-[#ff5500]/10' : 'bg-[#ff5500]/5')
                            : theme === 'dark'
                              ? 'border-gray-600 hover:border-gray-500'
                              : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(option.id)}
                          onChange={() => toggleInterest(option.id)}
                          className="h-5 w-5 rounded border-gray-300"
                          style={{ accentColor: '#ff5500' }}
                        />
                        <span className={theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}>{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.interests.length > 0 && (
                  <div>
                    <label htmlFor="interestDetails" className={labelClasses}>Tell us a bit more about that</label>
                    <textarea
                      id="interestDetails"
                      rows={3}
                      value={formData.interestDetails}
                      onChange={e => handleChange('interestDetails', e.target.value)}
                      className={`${inputClasses} resize-none`}
                      placeholder="Optional — any detail helps us scope it properly"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="additionalInfo" className={labelClasses}>Anything else we should know?</label>
                  <textarea
                    id="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={e => handleChange('additionalInfo', e.target.value)}
                    className={`${inputClasses} resize-none`}
                    placeholder="Optional"
                  />
                </div>

                <div>
                  <div className="text-center mb-4">
                    <label className={labelClasses}>Rough Project Budget</label>
                    <div className="text-3xl font-black" style={{ color: '#ff5500' }}>
                      {formatBudget(budgetValue)}
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="50000"
                    step="500"
                    value={budgetValue}
                    onChange={e => setBudgetValue(parseInt(e.target.value))}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #ff5500 0%, #ff5500 ${((budgetValue - 1000) / (50000 - 1000)) * 100}%, ${theme === 'dark' ? '#374151' : '#e5e7eb'} ${((budgetValue - 1000) / (50000 - 1000)) * 100}%, ${theme === 'dark' ? '#374151' : '#e5e7eb'} 100%)`,
                    }}
                  />
                  <div className={`flex justify-between text-sm mt-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span>€1K</span>
                    <span>€5K</span>
                    <span>€15K</span>
                    <span>€50K+</span>
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-sm font-medium" style={{ color: '#ff5500' }}>{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 text-white rounded-2xl font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  style={{ background: 'linear-gradient(135deg, #ff5500, #e64d00)' }}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Project Details'}</span>
                  <PaperAirplaneIcon className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1 group-hover:-rotate-12" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
