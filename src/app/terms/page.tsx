'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTheme } from '../utils/ThemeProvider';

export default function TermsOfServicePage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navigation currentPage="terms" />
      
      <main className={`pt-20 pb-16 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
      }`}>
        <div className="max-w-4xl mx-auto px-8 md:px-16 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#ff5500]/10 rounded-full flex items-center justify-center">
                <svg
                  className="w-9 h-9 text-[#ff5500]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h1
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Terms of Service
              </h1>
            </div>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Acceptance of Terms
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                These Terms of Service ("Terms") govern your use of services provided by Site & Sight ("we", "our", or "us"), 
                including web development, SEO and digital marketing, creative design, automation solutions, and hosting services. 
                By engaging our services or using our website, you agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to these Terms, please do not use our services. These Terms constitute a legally binding 
                agreement between you and Site & Sight, governed by Irish law.
              </p>
            </div>
          </motion.section>

          {/* Services Description */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Services Description
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Site & Sight provides the following digital services:</p>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Web Development:</strong> Custom website design, development, and deployment services
                  </li>
                  <li>
                    <strong>SEO & Digital Marketing:</strong> Search engine optimization, pay-per-click advertising, 
                    content marketing, and social media management
                  </li>
                  <li>
                    <strong>Creative Design:</strong> Brand identity design, graphic design, and visual content creation
                  </li>
                  <li>
                    <strong>Automation & AI Solutions:</strong> Workflow automation, AI chatbot integration, and 
                    business process optimization
                  </li>
                  <li>
                    <strong>Hosting & Web Maintenance:</strong> Website hosting, domain management, security updates, 
                    and ongoing technical support
                  </li>
                </ul>
              </div>
              <p>
                Specific service details, deliverables, timelines, and pricing will be outlined in individual project 
                agreements or service contracts.
              </p>
            </div>
          </motion.section>

          {/* User Obligations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              User Obligations and Conduct
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>When using our services, you agree to:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Provide accurate, complete, and current information</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt our services or servers</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Respect intellectual property rights of Site & Sight and third parties</li>
                <li>Promptly provide necessary materials, content, and approvals for project completion</li>
                <li>Maintain confidentiality of any login credentials or access information provided</li>
              </ul>
            </div>
          </motion.section>

          {/* Intellectual Property */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Intellectual Property Rights
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Client Content
                </h3>
                <p className="text-sm mb-3">
                  You retain ownership of all content, materials, and intellectual property you provide to us for projects. 
                  You grant us a license to use such content solely for the purpose of providing our services.
                </p>
              </div>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Site & Sight Property
                </h3>
                <p className="text-sm mb-3">
                  All pre-existing intellectual property, tools, methodologies, and materials owned by Site & Sight remain 
                  our exclusive property. Upon full payment, you receive a license to use deliverables specifically created 
                  for your project.
                </p>
              </div>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Third-Party Materials
                </h3>
                <p className="text-sm">
                  Any third-party materials, plugins, or resources used in projects are subject to their respective licenses. 
                  You are responsible for ensuring compliance with such licenses.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Payment Terms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Payment Terms and Billing
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Payment terms will be specified in individual project agreements. General payment terms include:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Invoices are due within the timeframe specified in the project agreement (typically 14-30 days)</li>
                <li>Late payments may incur interest charges at the rate specified in the agreement</li>
                <li>We reserve the right to suspend services for overdue accounts</li>
                <li>All prices are exclusive of applicable taxes unless otherwise stated</li>
                <li>Payment methods accepted include bank transfer, credit card, and other agreed methods</li>
              </ul>
              <div className={`p-6 rounded-xl border-2 border-[#ff5500]/30 ${theme === 'dark' ? 'bg-orange-950/20' : 'bg-orange-50'}`}>
                <h3 className={`text-lg font-semibold mb-3 text-[#ff5500] ${theme === 'dark' ? 'text-orange-400' : 'text-[#ff5500]'}`}>
                  Hosting Subscription Services
                </h3>
                <p className="text-sm">
                  <strong>Important:</strong> For hosting and subscription-based services, if payment is not received within 
                  14 days of the due date, we reserve the right to suspend the hosting service and take down 
                  the website. We will provide at least 7 days' notice before taking such action. Once payment is received, 
                  services will be restored within 24 hours.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Limitation of Liability */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Limitation of Liability
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                To the maximum extent permitted by Irish law:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  Site & Sight's total liability for any claims arising from our services shall not exceed the total amount 
                  paid by you for the specific service in question
                </li>
                <li>
                  We are not liable for any indirect, consequential, special, or punitive damages, including loss of profits, 
                  data, or business opportunities
                </li>
                <li>
                  We do not guarantee specific results from SEO, marketing, or automation services, as outcomes depend on 
                  various factors beyond our control
                </li>
                <li>
                  You are responsible for backing up your data and content. We are not liable for data loss unless caused 
                  by our gross negligence
                </li>
                <li>
                  For hosting services, we maintain reasonable uptime but do not guarantee 100% availability. Scheduled 
                  maintenance will be communicated in advance when possible
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Service Warranties */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Service Warranties and Guarantees
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                We warrant that our services will be performed with reasonable skill and care, in accordance with 
                industry standards. We will:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Provide services as described in project agreements</li>
                <li>Rectify any defects in deliverables caused by our errors at no additional cost</li>
                <li>Maintain confidentiality of your business information</li>
                <li>Comply with applicable data protection laws (see Privacy Policy)</li>
              </ul>
              <p>
                We do not guarantee specific performance metrics, search engine rankings, or business outcomes, as these 
                depend on numerous external factors.
              </p>
            </div>
          </motion.section>

          {/* Termination */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Termination
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Either party may terminate a service agreement:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>
                  <strong>By Client:</strong> With written notice. Payment is due for all work completed up to the 
                  termination date
                </li>
                <li>
                  <strong>By Site & Sight:</strong> For non-payment, breach of terms, or if continuation becomes 
                  commercially unviable
                </li>
                <li>
                  <strong>Hosting Services:</strong> May be terminated if payment is overdue for more than 14 days, 
                  with 7 days' notice before service suspension
                </li>
              </ul>
              <p>
                Upon termination, you remain responsible for all outstanding payments. We will provide you with a copy 
                of your data and deliverables (if applicable) within 30 days of termination.
              </p>
            </div>
          </motion.section>

          {/* Indemnification */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Indemnification
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                You agree to indemnify and hold Site & Sight harmless from any claims, damages, losses, or expenses 
                (including legal fees) arising from:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Your use of our services in violation of these Terms</li>
                <li>Content or materials you provide that infringe third-party rights</li>
                <li>Your failure to comply with applicable laws or regulations</li>
                <li>Any claims related to your website or business operations</li>
              </ul>
            </div>
          </motion.section>

          {/* Governing Law */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Governing Law and Jurisdiction
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                These Terms are governed by and construed in accordance with the laws of Ireland. Any disputes arising 
                from these Terms or our services shall be subject to the exclusive jurisdiction of the Irish courts.
              </p>
              <p>
                If you are a consumer resident in the European Union, you also have the right to bring proceedings in 
                your local courts and may be entitled to consumer protection laws in your jurisdiction.
              </p>
            </div>
          </motion.section>

          {/* Changes to Terms */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Changes to Terms
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                We reserve the right to modify these Terms at any time. Material changes will be communicated to existing 
                clients via email or through our website. Continued use of our services after such changes constitutes 
                acceptance of the updated Terms.
              </p>
              <p>
                For ongoing projects, the Terms in effect at the time of project agreement will continue to apply unless 
                both parties agree otherwise in writing.
              </p>
            </div>
          </motion.section>

          {/* Severability */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Severability
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall 
              continue in full force and effect. The invalid provision shall be replaced with a valid provision that 
              most closely reflects the intent of the original.
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:hello@siteandsight.com" 
                  className="text-[#ff5500] hover:text-[#e64d00] underline"
                >
                  hello@siteandsight.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> Dublin, Ireland
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className={`py-20 px-8 md:px-16 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
            Have Questions About Our Terms?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Our team is ready to help clarify any questions you may have about our terms of service.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#ff5500] text-white rounded-2xl hover:bg-[#ff6600] transition-all duration-300 text-xl font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105"
            style={{ fontFamily: 'var(--font-league-spartan)' }}
          >
            <span className="relative z-10">Contact Us</span>
            <svg className="w-6 h-6 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Button glow effect */}
            <div className="absolute inset-0 bg-[#ff5500] rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          </Link>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

