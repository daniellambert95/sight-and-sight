import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Start a Project | Site & Sight',
  description: 'Tell us about your website project. Share your goals, current site, and branding so we can put together your quote.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${baseUrl}/start-a-project`,
  },
};

export default function StartAProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
