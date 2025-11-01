import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Terms of Service | Site & Sight',
  description: 'Terms of Service for Site & Sight Creative Studio. Read our terms and conditions for using our web development, SEO, and digital marketing services.',
  keywords: ['terms of service', 'terms and conditions', 'legal', 'terms'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Terms of Service | Site & Sight',
    description: 'Terms of Service for Site & Sight Creative Studio. Read our terms and conditions.',
    url: `${baseUrl}/terms`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/terms`,
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

