import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Contact Us | Site & Sight',
  description: 'Get in touch with Site & Sight Creative Studio. We\'re here to help bring your digital vision to life. Contact us for web development, SEO, marketing, and design services.',
  keywords: ['contact', 'get in touch', 'web development quote', 'digital marketing consultation', 'Dublin', 'Ireland'],
  openGraph: {
    title: 'Contact Us | Site & Sight Creative Studio',
    description: 'Get in touch with Site & Sight Creative Studio. We\'re here to help bring your digital vision to life.',
    url: `${baseUrl}/contact`,
    type: 'website',
  },
  twitter: {
    title: 'Contact Us | Site & Sight',
    description: 'Get in touch with Site & Sight Creative Studio. We\'re here to help bring your digital vision to life.',
  },
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

