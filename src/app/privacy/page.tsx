'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTheme } from '../utils/ThemeProvider';

export default function PrivacyPolicyPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen">
      <Navigation currentPage="privacy" />
      
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
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h1
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: 'var(--font-league-spartan)' }}
              >
                Privacy Policy
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
              Introduction
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Site & Sight ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website or 
                use our services, including web development, SEO and digital marketing, creative design, automation 
                solutions, and hosting services.
              </p>
              <p>
                This policy complies with the General Data Protection Regulation (GDPR) and Irish data protection laws. 
                By using our services, you consent to the data practices described in this policy.
              </p>
            </div>
          </motion.section>

          {/* Data Controller */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Data Controller
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Site & Sight is the data controller responsible for your personal data. For any questions about this 
                Privacy Policy or our data practices, please contact us:
              </p>
              <div className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <p className="font-semibold mb-2">Site & Sight</p>
                <p>Dublin, Ireland</p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a 
                    href="mailto:hello@siteandsight.com" 
                    className="text-[#ff5500] hover:text-[#e64d00] underline"
                  >
                    hello@siteandsight.com
                  </a>
                </p>
              </div>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Information We Collect
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>We collect the following types of personal data:</p>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Personal Information
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>Name and contact details (email address, phone number, postal address)</li>
                  <li>Company name and business information</li>
                  <li>Payment and billing information</li>
                  <li>Account credentials and login information</li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Technical Information
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and tracking technologies (see our Cookie Policy)</li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Project Information
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>Project requirements and specifications</li>
                  <li>Content and materials provided for projects</li>
                  <li>Communication records and correspondence</li>
                  <li>Hosting and domain information</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* How We Use Your Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              How We Use Your Information
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>We use your personal data for the following purposes:</p>
              <ul className="space-y-3 list-disc list-inside ml-4">
                <li>
                  <strong>Service Delivery:</strong> To provide web development, SEO, digital marketing, creative design, 
                  automation solutions, and hosting services as requested
                </li>
                <li>
                  <strong>Communication:</strong> To respond to inquiries, provide customer support, and send project updates
                </li>
                <li>
                  <strong>Billing:</strong> To process payments, manage subscriptions, and handle accounting
                </li>
                <li>
                  <strong>Improvement:</strong> To analyze website usage, improve our services, and enhance user experience
                </li>
                <li>
                  <strong>Marketing:</strong> To send promotional materials (with your consent) about our services and 
                  industry insights
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal obligations and protect our legal rights
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Legal Basis */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Legal Basis for Processing
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>Under GDPR, we process your personal data based on:</p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Contract:</strong> To fulfill our contractual obligations and provide requested services</li>
                <li><strong>Consent:</strong> When you have given explicit consent for specific processing activities</li>
                <li><strong>Legitimate Interests:</strong> For business operations, fraud prevention, and service improvement</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Sharing */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Data Sharing and Third Parties
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                We may share your personal data with trusted third-party service providers who assist us in operating our 
                business and providing services:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Hosting Providers:</strong> For website hosting and server management</li>
                <li><strong>Payment Processors:</strong> For secure payment processing</li>
                <li><strong>Analytics Services:</strong> Google Analytics and other analytics tools (see Cookie Policy)</li>
                <li><strong>Marketing Platforms:</strong> Meta Pixel and other advertising platforms (with consent)</li>
                <li><strong>Communication Tools:</strong> Email service providers and customer support platforms</li>
              </ul>
              <p>
                We do not sell your personal data. All third-party service providers are contractually obligated to protect 
                your data and use it only for specified purposes.
              </p>
            </div>
          </motion.section>

          {/* Data Retention */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Data Retention
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, 
                unless a longer retention period is required by law. Specifically:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Customer account data: Retained while your account is active and for 7 years after account closure for legal and accounting purposes</li>
                <li>Project files and content: Retained for the duration of the project and 3 years after completion</li>
                <li>Marketing data: Retained until you withdraw consent or opt-out</li>
                <li>Hosting and domain data: Retained while services are active and 1 year after termination</li>
              </ul>
            </div>
          </motion.section>

          {/* Your Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Your Rights Under GDPR
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>You have the following rights regarding your personal data:</p>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Right of Access:</strong> Request a copy of the personal data we hold about you
                  </li>
                  <li>
                    <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data
                  </li>
                  <li>
                    <strong>Right to Erasure:</strong> Request deletion of your personal data in certain circumstances
                  </li>
                  <li>
                    <strong>Right to Restrict Processing:</strong> Request limitation of how we process your data
                  </li>
                  <li>
                    <strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format
                  </li>
                  <li>
                    <strong>Right to Object:</strong> Object to processing based on legitimate interests
                  </li>
                  <li>
                    <strong>Right to Withdraw Consent:</strong> Withdraw consent for processing activities where consent is the legal basis
                  </li>
                  <li>
                    <strong>Right to Lodge a Complaint:</strong> File a complaint with the Irish Data Protection Commission
                  </li>
                </ul>
              </div>
              <p>
                To exercise any of these rights, please contact us at{' '}
                <a 
                  href="mailto:hello@siteandsight.com" 
                  className="text-[#ff5500] hover:text-[#e64d00] underline"
                >
                  hello@siteandsight.com
                </a>
                . We will respond to your request within one month.
              </p>
            </div>
          </motion.section>

          {/* Security */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Security Measures
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against 
                unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure server infrastructure and regular security updates</li>
                <li>Access controls and authentication measures</li>
                <li>Regular security audits and assessments</li>
                <li>Employee training on data protection</li>
              </ul>
            </div>
          </motion.section>

          {/* International Transfers */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              International Data Transfers
            </h2>
            <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                Some of our service providers may be located outside the European Economic Area (EEA). When we transfer 
                your data to such providers, we ensure appropriate safeguards are in place, such as:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Standard Contractual Clauses approved by the European Commission</li>
                <li>Adequacy decisions recognizing equivalent data protection standards</li>
                <li>Other legally recognized transfer mechanisms</li>
              </ul>
            </div>
          </motion.section>

          {/* Updates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-12"
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Updates to This Privacy Policy
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of any material changes by posting the updated policy on our website and updating the 
              "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the 
              updated policy.
            </p>
          </motion.section>

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}
          >
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Contact Us
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please contact us:
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
              <p className="mt-4 text-sm">
                <strong>Data Protection Commission:</strong>{' '}
                <a 
                  href="https://www.dataprotection.ie" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff5500] hover:text-[#e64d00] underline"
                >
                  www.dataprotection.ie
                </a>
              </p>
            </div>
          </motion.section>
        </div>
      </main>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className={`py-20 px-8 md:px-16 transition-colors duration-300 ${
          theme === 'dark' ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} style={{ fontFamily: 'var(--font-league-spartan)' }}>
            Questions About Your Privacy?
          </h2>
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            We take your privacy seriously. Contact us if you have any questions or concerns about how we handle your data.
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

