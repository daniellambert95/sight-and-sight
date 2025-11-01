import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Site & Sight',
  description: 'Privacy Policy for Site & Sight Creative Studio. Learn how we collect, use, and protect your personal data in compliance with GDPR and Irish data protection laws.',
  keywords: ['privacy policy', 'data protection', 'GDPR', 'privacy'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Privacy Policy | Site & Sight',
    description: 'Privacy Policy for Site & Sight Creative Studio. Learn how we collect, use, and protect your personal data.',
    url: `${baseUrl}/privacy`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/privacy`,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

