import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Pricing | Site & Sight',
  description: 'Transparent pricing for web development, SEO, digital marketing, and design services. Get a custom quote tailored to your business needs.',
  keywords: ['pricing', 'web development cost', 'SEO pricing', 'digital marketing prices', 'website cost', 'quote'],
  openGraph: {
    title: 'Pricing | Site & Sight Creative Studio',
    description: 'Transparent pricing for web development, SEO, digital marketing, and design services. Get a custom quote tailored to your business needs.',
    url: `${baseUrl}/pricing`,
    type: 'website',
  },
  twitter: {
    title: 'Pricing | Site & Sight',
    description: 'Transparent pricing for web development, SEO, digital marketing, and design services.',
  },
  alternates: {
    canonical: `${baseUrl}/pricing`,
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

