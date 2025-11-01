/**
 * SEO Utility Functions
 * 
 * For pages that are client components, you can use these utilities
 * to help with SEO. However, for best SEO, consider converting pages
 * to server components where possible and export metadata directly.
 */

export const defaultSEO = {
  siteName: 'Site & Sight',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com',
  defaultTitle: 'Site & Sight | Creative Digital Studio',
  defaultDescription: 'We craft captivating digital experiences that combine innovative design with cutting-edge technology.',
};

/**
 * Generate page-specific Open Graph image URL
 */
export function getOGImageUrl(imagePath?: string): string {
  if (imagePath) {
    return imagePath.startsWith('http') 
      ? imagePath 
      : `${defaultSEO.baseUrl}${imagePath}`;
  }
  return `${defaultSEO.baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`;
}

/**
 * Generate canonical URL for a page
 */
export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${defaultSEO.baseUrl}${cleanPath}`;
}

/**
 * SEO best practices checklist:
 * 
 * ✅ Sitemap.xml - Created
 * ✅ Robots.txt - Created
 * ✅ Structured Data (JSON-LD) - Added
 * ✅ Open Graph tags - Added to root layout
 * ✅ Twitter Cards - Added to root layout
 * ✅ Meta description - Added
 * ✅ Title template - Configured
 * ✅ Image alt tags - Verify on all images
 * ✅ Canonical URLs - Can be added per page
 * ✅ Mobile responsive - Verify
 * ✅ Page speed - Verify with Lighthouse
 * ✅ HTTPS - Verify
 * ✅ Internal linking - Verify
 * ✅ Heading hierarchy (H1, H2, H3) - Verify
 */

