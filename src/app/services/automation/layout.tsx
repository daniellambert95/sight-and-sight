import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'AI Automation & Data Pipeline Services | Site & Sight',
  description: 'AI chatbots, data pipelines, web integrations, and workflow automation that eliminate manual tasks and scale your business operations. Based in Dubai.',
  keywords: [
    'AI automation',
    'business automation',
    'data pipelines',
    'AI chatbots',
    'workflow automation',
    'web integrations',
    'CRM integration',
    'automation agency Dubai',
  ],
  openGraph: {
    title: 'AI Automation & Data Pipelines | Site & Sight',
    description: 'AI chatbots, data pipelines, and workflow automation that eliminate manual tasks and scale your operations.',
    url: `${baseUrl}/services/automation`,
    type: 'website',
  },
  twitter: {
    title: 'AI Automation & Data Pipelines | Site & Sight',
    description: 'AI chatbots, data pipelines, and workflow automation to scale your business.',
  },
  alternates: {
    canonical: `${baseUrl}/services/automation`,
  },
};

export default function AutomationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
