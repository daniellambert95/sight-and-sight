export default function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Site & Sight Creative Studio',
    url: baseUrl,
    logo: `${baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`,
    description: 'We craft captivating digital experiences that combine innovative design with cutting-edge technology.',
    sameAs: [
      'https://www.facebook.com/share/1CuKRUUCbU/',
      'https://x.com/site_and_sight',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // Add your contact information
      // email: 'hello@siteandsight.com',
      // telephone: '+1-234-567-8900',
    },
    address: {
      '@type': 'PostalAddress',
      // Add your address here
      // addressCountry: 'IE',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Site & Sight Creative Studio',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const creativeWorkSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Site & Sight Creative Studio',
    description: 'Creative digital studio specializing in web development, SEO, marketing automation, and AI solutions.',
    creator: {
      '@type': 'Organization',
      name: 'Site & Sight Creative Studio',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
    </>
  );
}

