import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'Der Baumchirurg Case Study | Site & Sight',
  description: 'Case study: Professional bilingual tree surgery service website for Der Baumchirurg. See how we helped establish market presence in Germany with a modern, responsive website.',
  keywords: ['case study', 'tree surgery website', 'bilingual website', 'German website', 'portfolio', 'Der Baumchirurg'],
  openGraph: {
    title: 'Der Baumchirurg Case Study | Site & Sight',
    description: 'Case study: Professional bilingual tree surgery service website for Der Baumchirurg. See how we helped establish market presence in Germany.',
    url: `${baseUrl}/work/derbaumchirurg`,
    type: 'website',
  },
  twitter: {
    title: 'Der Baumchirurg Case Study | Site & Sight',
    description: 'Case study: Professional bilingual tree surgery service website for Der Baumchirurg.',
  },
  alternates: {
    canonical: `${baseUrl}/work/derbaumchirurg`,
  },
};

export default function DerBaumchirurgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

