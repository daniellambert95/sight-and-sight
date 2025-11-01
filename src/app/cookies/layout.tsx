import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Cookie Policy | Site & Sight',
  description: 'Cookie Policy for Site & Sight Creative Studio. Learn about the cookies we use, how we use them, and how to manage your cookie preferences.',
  keywords: ['cookie policy', 'cookies', 'privacy', 'tracking'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Cookie Policy | Site & Sight',
    description: 'Cookie Policy for Site & Sight Creative Studio. Learn about the cookies we use and how to manage your preferences.',
    url: `${baseUrl}/cookies`,
    type: 'website',
  },
  alternates: {
    canonical: `${baseUrl}/cookies`,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

