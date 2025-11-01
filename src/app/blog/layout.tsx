import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Blog | Site & Sight',
  description: 'Read our latest insights on web development, SEO, digital marketing, design trends, and business growth strategies. Expert tips and industry updates.',
  keywords: ['blog', 'web development tips', 'SEO advice', 'digital marketing insights', 'design trends', 'business growth'],
  openGraph: {
    title: 'Blog | Site & Sight Creative Studio',
    description: 'Read our latest insights on web development, SEO, digital marketing, design trends, and business growth strategies.',
    url: `${baseUrl}/blog`,
    type: 'website',
  },
  twitter: {
    title: 'Blog | Site & Sight',
    description: 'Read our latest insights on web development, SEO, digital marketing, and design trends.',
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

