import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Web Development & Design Services | Site & Sight',
  description: 'Custom websites, e-commerce stores, and web applications built with React and Next.js. Lightning-fast, mobile-first designs that convert visitors into customers.',
  keywords: [
    'web development',
    'web design',
    'custom website',
    'Next.js development',
    'React website',
    'e-commerce development',
    'responsive web design',
    'website Dubai',
  ],
  openGraph: {
    title: 'Web Development & Design | Site & Sight',
    description: 'Custom websites, e-commerce stores, and web applications built with React and Next.js. Lightning-fast, mobile-first designs that convert.',
    url: `${baseUrl}/services/web-development`,
    type: 'website',
  },
  twitter: {
    title: 'Web Development & Design | Site & Sight',
    description: 'Custom websites and web apps built with React & Next.js. Mobile-first, fast, and built to convert.',
  },
  alternates: {
    canonical: `${baseUrl}/services/web-development`,
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
