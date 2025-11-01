import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/pricing-private/'], // Disallow private pricing page
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

