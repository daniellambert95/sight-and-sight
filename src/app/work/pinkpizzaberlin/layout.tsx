import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Pink Pizza Berlin Case Study | Site & Sight',
  description: 'Case study: Complete digital transformation for Pink Pizza Berlin pizzeria. See how we dramatically increased local visibility and customer traffic with a modern website and SEO strategy.',
  keywords: ['case study', 'restaurant website', 'pizzeria website', 'local SEO', 'Berlin', 'portfolio', 'Pink Pizza'],
  openGraph: {
    title: 'Pink Pizza Berlin Case Study | Site & Sight',
    description: 'Case study: Complete digital transformation for Pink Pizza Berlin pizzeria. See how we increased local visibility and customer traffic.',
    url: `${baseUrl}/work/pinkpizzaberlin`,
    type: 'website',
  },
  twitter: {
    title: 'Pink Pizza Berlin Case Study | Site & Sight',
    description: 'Case study: Complete digital transformation for Pink Pizza Berlin pizzeria.',
  },
  alternates: {
    canonical: `${baseUrl}/work/pinkpizzaberlin`,
  },
};

export default function PinkPizzaBerlinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

