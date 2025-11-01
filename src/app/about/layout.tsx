import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'About Us | Site & Sight',
  description: 'Learn about Site & Sight Creative Studio. We craft captivating digital experiences that combine innovative design with cutting-edge technology. Based in Dublin, Ireland.',
  keywords: ['about', 'team', 'creative studio', 'digital agency', 'web development', 'Dublin'],
  openGraph: {
    title: 'About Us | Site & Sight Creative Studio',
    description: 'Learn about Site & Sight Creative Studio. We craft captivating digital experiences that combine innovative design with cutting-edge technology.',
    url: `${baseUrl}/about`,
    type: 'website',
  },
  twitter: {
    title: 'About Us | Site & Sight',
    description: 'Learn about Site & Sight Creative Studio. We craft captivating digital experiences.',
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

