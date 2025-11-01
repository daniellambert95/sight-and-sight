import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Our Work | Site & Sight',
  description: 'Explore our portfolio of successful web development projects, digital marketing campaigns, and creative design work. See how we\'ve helped businesses transform their online presence.',
  keywords: ['portfolio', 'case studies', 'web design examples', 'websites we built', 'client work', 'projects'],
  openGraph: {
    title: 'Our Work | Site & Sight Creative Studio',
    description: 'Explore our portfolio of successful web development projects, digital marketing campaigns, and creative design work.',
    url: `${baseUrl}/work`,
    type: 'website',
  },
  twitter: {
    title: 'Our Work | Site & Sight',
    description: 'Explore our portfolio of successful web development projects and creative design work.',
  },
  alternates: {
    canonical: `${baseUrl}/work`,
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

