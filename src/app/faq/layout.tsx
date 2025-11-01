import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'FAQ | Site & Sight',
  description: 'Frequently asked questions about our web development, SEO, digital marketing, and design services. Get answers to common questions about pricing, timelines, and processes.',
  keywords: ['FAQ', 'frequently asked questions', 'web development questions', 'SEO questions', 'pricing questions'],
  openGraph: {
    title: 'FAQ | Site & Sight Creative Studio',
    description: 'Frequently asked questions about our web development, SEO, digital marketing, and design services.',
    url: `${baseUrl}/faq`,
    type: 'website',
  },
  twitter: {
    title: 'FAQ | Site & Sight',
    description: 'Frequently asked questions about our web development, SEO, and digital marketing services.',
  },
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

