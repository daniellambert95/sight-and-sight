'use client';

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
                explains how we collect, use, disclose, and safeguard your information when you visit our website
                (siteandsight.com) or use our services, including web development, SEO and digital marketing,
                creative design, automation solutions, and hosting and maintenance services.
              </p>
              <p>
                This policy complies with the General Data Protection Regulation (GDPR) and Irish data protection laws.
                By using our website and services, you acknowledge that you have read and understood this policy.
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
                  Personal Information You Provide
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>Name and email address (via contact forms, project inquiry forms, pricing calculator, and newsletter subscription)</li>
                  <li>Project details and requirements you submit through our forms</li>
                  <li>Company name and business information (when voluntarily provided)</li>
                  <li>Payment information processed through Stripe for hosting and maintenance fees</li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Technical Information Collected
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>IP address, browser type, and device information</li>
                  <li>Website usage data via Google Analytics (only with your consent)</li>
                  <li>Marketing data via Meta Pixel (only with your consent)</li>
                  <li>Cookies and similar tracking technologies (see our{' '}
                    <Link href="/cookies" className="text-[#ff5500] hover:text-[#e64d00] underline">
                      Cookie Policy
                    </Link>)
                  </li>
                </ul>
              </div>
              <div className={`p-6 rounded-xl border-2 ${theme === 'dark' ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Client Project Information
                </h3>
                <ul className="space-y-2 text-sm list-disc list-inside ml-2">
                  <li>Project requirements and specifications submitted through our forms</li>
                  <li>Content, images, and materials you provide for your projects</li>
                  <li>Email correspondence and communication records</li>
                  <li>Hosting and domain information for clients using our hosting services</li>
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
                  automation solutions, hosting, and maintenance services as requested
                </li>
                <li>
                  <strong>Communication:</strong> To respond to form submissions and inquiries via email, provide customer
                  support, and send project updates
                </li>
                <li>
                  <strong>Payment Processing:</strong> To process recurring monthly payments for hosting and maintenance
                  services via Stripe, and to send invoices for custom services via email
                </li>
                <li>
                  <strong>Newsletter:</strong> To send periodic newsletters with web design tips, SEO insights, and project
                  updates (only if you subscribe via our newsletter form)
                </li>
                <li>
                  <strong>Website Improvement:</strong> To analyze website usage (with your consent via cookies), improve
                  our services, and enhance user experience
                </li>
                <li>
                  <strong>Legal Compliance:</strong> To comply with legal obligations, resolve disputes, and protect our
                  legal rights
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
                We share your personal data only with trusted third-party service providers who help us operate our
                business and deliver our services:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Vercel:</strong> Website hosting platform where our website is hosted</li>
                <li><strong>Stripe:</strong> Payment processor for recurring hosting and maintenance fees</li>
                <li><strong>Brevo (formerly Sendinblue):</strong> Email marketing platform for newsletter subscriptions and communications</li>
                <li><strong>Web3Forms:</strong> Form submission service that forwards contact form, project inquiry, and pricing calculator submissions to our email</li>
                <li><strong>Google Analytics:</strong> Website analytics (only loaded with your consent via cookie preferences)</li>
                <li><strong>Meta Pixel:</strong> Marketing and advertising analytics (only loaded with your consent via cookie preferences)</li>
                <li><strong>Sanity.io:</strong> Content management system for our blog content</li>
              </ul>
              <p>
                <strong>We do not sell, rent, or trade your personal data.</strong> All third-party service providers
                are contractually required to protect your data and use it only for the specific purposes we authorize.
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
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this
                policy or as required by law:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Contact and Project Inquiry Data:</strong> Retained for the duration of our business
                relationship and until you request deletion</li>
                <li><strong>Client Project Files:</strong> Retained while we provide services to you and until you
                request deletion</li>
                <li><strong>Newsletter Subscriptions:</strong> Retained until you unsubscribe or request deletion</li>
                <li><strong>Payment Records:</strong> Retained for 7 years as required by Irish tax and accounting laws</li>
                <li><strong>Analytics and Cookie Data:</strong> Retained according to our cookie settings (see{' '}
                  <Link href="/cookies" className="text-[#ff5500] hover:text-[#e64d00] underline">
                    Cookie Policy
                  </Link>)
                </li>
                <li><strong>Hosting Client Data:</strong> Retained while you use our hosting services and until you
                request deletion after service termination</li>
              </ul>
              <p className="mt-4">
                You have the right to request deletion of your personal data at any time by contacting us at{' '}
                <a
                  href="mailto:hello@siteandsight.com"
                  className="text-[#ff5500] hover:text-[#e64d00] underline"
                >
                  hello@siteandsight.com
                </a>
                . We will delete your data within 30 days of your request, except where we are required by law to
                retain certain information.
              </p>
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
                Some of our service providers are located outside the European Economic Area (EEA), including:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li><strong>Vercel (United States):</strong> Website hosting</li>
                <li><strong>Stripe (United States):</strong> Payment processing</li>
                <li><strong>Google Analytics (United States):</strong> Website analytics (only with consent)</li>
                <li><strong>Meta (United States):</strong> Marketing analytics (only with consent)</li>
              </ul>
              <p className="mt-4">
                When we transfer your data outside the EEA, we ensure appropriate safeguards are in place:
              </p>
              <ul className="space-y-2 list-disc list-inside ml-4">
                <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                <li>Adequacy decisions where the European Commission has determined equivalent data protection standards</li>
                <li>Service providers certified under the EU-U.S. Data Privacy Framework where applicable</li>
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

