import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Digital Marketing & SEO Services | Site & Sight',
  description: 'Data-driven SEO, content marketing, and email campaigns that increase organic traffic and grow your business. Expert digital marketing agency based in Dubai.',
  keywords: [
    'digital marketing',
    'SEO services',
    'content marketing',
    'email marketing',
    'search engine optimisation',
    'PPC advertising',
    'Google Ads',
    'digital marketing agency Dubai',
  ],
  openGraph: {
    title: 'Digital Marketing & SEO | Site & Sight',
    description: 'Data-driven SEO, content marketing, and email campaigns that increase organic traffic and grow your business.',
    url: `${baseUrl}/services/digital-marketing`,
    type: 'website',
  },
  twitter: {
    title: 'Digital Marketing & SEO | Site & Sight',
    description: 'SEO, content marketing, and email campaigns that drive traffic and grow your business.',
  },
  alternates: {
    canonical: `${baseUrl}/services/digital-marketing`,
  },
};

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
