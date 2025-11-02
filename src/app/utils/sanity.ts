import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-08-25",
  useCdn: true, // Safe to use CDN for public content
  // No token needed for public read-only content
});

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

// Comprehensive field detection query
const FIELD_DETECTION_QUERY = `*[_type == "post"][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  mainImage,
  image,
  featuredImage,
  coverImage,
  author,
  categories,
  excerpt,
  description,
  ...
}`;

// Updated queries based on confirmed schema
const POSTS_QUERY = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...50]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  mainImage,
  image,
  featuredImage,
  coverImage,
  author -> {
    name,
    image,
    bio
  },
  categories[] -> {
    _id,
    title,
    slug
  },
  tags,
  excerpt,
  description
}`;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  publishedAt,
  body,
  mainImage,
  image,
  featuredImage,
  coverImage,
  author -> {
    name,
    image,
    bio
  },
  categories[] -> {
    _id,
    title,
    slug
  },
  tags,
  excerpt,
  description
}`;

const options = { next: { revalidate: 30 } };

export async function getBlogPosts() {
  try {
    console.log('=== SANITY DEBUG START ===');
    
    // Step 1: Test basic connection
    const basicTest = `*[_type == "post"]{_id, title}`;
    console.log('1. Testing basic connection:', basicTest);
    const basicResult = await client.fetch(basicTest);
    console.log('Basic test result:', basicResult);
    console.log('Found', basicResult.length, 'posts');
    
    // Step 2: Detect available fields
    console.log('2. Detecting available fields...');
    const fieldResult = await client.fetch(FIELD_DETECTION_QUERY);
    console.log('Field detection result:', fieldResult);
    
    // Step 3: Try the full query
    console.log('3. Executing full query:', POSTS_QUERY);
    const result = await client.fetch(POSTS_QUERY, {}, options);
    console.log('Full query result:', result);
    console.log('=== SANITY DEBUG END ===');
    
    return result;
  } catch (error) {
    console.error('Sanity fetch error:', error);
    return [];
  }
}

export async function getBlogPost(slug: string) {
  try {
    console.log('Fetching single post with slug:', slug);
    const result = await client.fetch(POST_QUERY, { slug }, options);
    console.log('Single post result:', result);
    return result;
  } catch (error) {
    console.error('Sanity fetch error for single post:', error);
    return null;
  }
}