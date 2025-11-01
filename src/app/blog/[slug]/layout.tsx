import { Metadata } from 'next';
import { getBlogPost, urlFor } from '../../utils/sanity';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found | Site & Sight',
      description: 'The blog post you are looking for could not be found.',
    };
  }

  const title = post.title || 'Blog Post';
  const description = post.excerpt || post.description || 'Read our latest insights on web development, design, and digital marketing.';
  const publishedTime = post.publishedAt ? new Date(post.publishedAt).toISOString() : undefined;
  
  // Get OG image
  const ogImage = post.mainImage || post.image || post.featuredImage || post.coverImage;
  const ogImageUrl = ogImage ? urlFor(ogImage)?.width(1200).height(630).url() : `${baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`;
  
  const authorName = post.author?.name || 'Site & Sight Team';
  const categories = post.categories?.map((cat: any) => cat.title).join(', ') || '';

  return {
    title: `${title} | Site & Sight`,
    description,
    keywords: categories ? categories.split(', ') : undefined,
    authors: [{ name: authorName }],
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'Site & Sight',
      publishedTime,
      authors: [authorName],
      images: [
        {
          url: ogImageUrl || `${baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl || `${baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`],
      creator: '@site_and_sight',
    },
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
  };
}

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

