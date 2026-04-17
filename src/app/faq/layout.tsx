import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export const metadata: Metadata = {
  title: 'FAQ | Site & Sight',
  description: 'Frequently asked questions about our web development, SEO, digital marketing, and design services. Get answers to common questions about pricing, timelines, and processes.',
  keywords: ['FAQ', 'frequently asked questions', 'web development questions', 'SEO questions', 'pricing questions'],
  openGraph: {
    title: 'FAQ | Site & Sight Creative Studio',
    description: 'Frequently asked questions about our web development, SEO, digital marketing, and design services.',
    url: `${baseUrl}/faq`,
    type: 'website',
  },
  twitter: {
    title: 'FAQ | Site & Sight',
    description: 'Frequently asked questions about our web development, SEO, and digital marketing services.',
  },
  alternates: {
    canonical: `${baseUrl}/faq`,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What sets Site & Sight apart from other digital marketing agencies and website developers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Site & Sight brings a wealth of experience, care and results to all our clients\' projects. Your success is our success. We work continuously to create tangible results that allow your business to grow and achieve your desired outcomes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which industries do you specialise in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are passionate about crafting marketing and digital messages for hospitality, service-based industries, e-commerce, creative industries, technology, and healthcare.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a website take to build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development varies in time length depending on complexity. Redesigns can take 4-6 weeks, while a brand identity and website project with SEO content can take up to 13 weeks. E-Commerce website creation typically takes 6-10 weeks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does SEO take to be successful?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SEO is not a one-action fix. Results can be seen as early as 3-6 months after a website is fully optimised, with established success arriving 6-12 months after continued monitoring.',
      },
    },
    {
      '@type': 'Question',
      name: 'What locations do you operate in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We are based in Dublin and Berlin. Our services are available internationally.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the billing process work for Site & Sight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The billing process is dependent on the package or range of services you wish to purchase. These can be tailored to your specifications and are priced at an hourly, project-based, or retainer rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can AI automation do for me and my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI automation removes time-consuming manual tasks with task automation, cost reduction, and efficiency improvements. This includes customer support chat services, task automation, data analysis, and business process optimisation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does web design and development cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prices vary depending on your requirements and goals. Contact us for a full and comprehensive quote tailored to your needs.',
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}

