import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Our Services | Site & Sight',
  description: 'Comprehensive digital services including web development, SEO, digital marketing, creative design, AI automation, and hosting solutions. Transform your online presence.',
  keywords: ['web development', 'SEO services', 'digital marketing', 'web design', 'automation', 'AI integration', 'hosting', 'e-commerce'],
  openGraph: {
    title: 'Our Services | Site & Sight Creative Studio',
    description: 'Comprehensive digital services including web development, SEO, digital marketing, creative design, AI automation, and hosting solutions.',
    url: `${baseUrl}/services`,
    type: 'website',
  },
  twitter: {
    title: 'Our Services | Site & Sight',
    description: 'Comprehensive digital services including web development, SEO, digital marketing, and more.',
  },
  alternates: {
    canonical: `${baseUrl}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

