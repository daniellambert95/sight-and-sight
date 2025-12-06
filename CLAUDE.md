# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

Requires Node.js 18.x or higher. Uses Turbopack for fast development builds.

## Project Architecture

### Framework & Stack
- **Next.js 15** with App Router architecture
- **React 19** with concurrent features
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling with dark mode support
- **Brevo** for newsletter subscriptions and email marketing
- **Sanity CMS** for blog content management

### Key Technologies
- **Framer Motion** - Primary animation library for page transitions and interactions
- **Anime.js** - Secondary animation library for specific effects
- **React Intersection Observer** - Scroll-based animations
- **Heroicons & Lucide React** - Icon libraries
- **next-sanity** - Sanity CMS integration with Next.js
- **@portabletext/react** - Rich text content rendering from Sanity
- **@sanity/image-url** - Optimized image URL generation

### Font Configuration
Uses Google Fonts with CSS variables:
- `--font-inter` - Inter font family
- `--font-league-spartan` - League Spartan font family

### Theme System
- Dark/light mode toggle implemented with `ThemeProvider`
- Theme state managed in `src/app/utils/ThemeProvider.tsx`
- Color scheme: Primary orange `#ff5500`, hover `#e64d00`

## Code Architecture

### Directory Structure
```
src/app/
├── components/           # Main UI components
├── utils/               # Utilities (ThemeProvider, Sanity)
├── blog/                # Blog pages
│   ├── page.tsx         # Blog listing page
│   └── [slug]/          # Dynamic blog post pages
├── [other pages]/       # Next.js app router pages
├── layout.tsx          # Root layout with fonts and providers
└── globals.css         # Global styles and Tailwind imports
```

### Component Patterns
- All interactive components use `'use client'` directive
- Components follow TypeScript interfaces for props
- Navigation uses currentPage prop to indicate active page
- Framer Motion animations with consistent variants pattern
- Theme-aware styling with conditional classes

### Navigation Structure
Pages: Home, Work, About, Services, Blog, Pricing, Contact, FAQ
- Mobile-first responsive navigation
- Full-screen mobile menu overlay
- Scroll-based navbar hide/show behavior
- Blog integration with dynamic routing

### Newsletter Integration
- Brevo (formerly Sendinblue) API integration for newsletter subscriptions
- Environment variables: `BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_TEMPLATE_ID`
- Newsletter subscription with name popup modal
- Welcome email sent via Brevo transactional templates

### Sanity CMS Integration
- Sanity client configured in `src/app/utils/sanity.ts`
- Project ID: `5cwaellb`, Dataset: `production`
- API Version: `2025-08-25` (latest)
- Content types: `post` documents with title, slug, body, images, categories, author
- GROQ queries for blog posts with proper TypeScript interfaces
- Image optimization with `@sanity/image-url`
- Portable Text rendering for rich content (no embedded images in articles)
- Clean, minimal blog design with fully clickable cards

### Styling Conventions
- Uses class-variance-authority and clsx for dynamic styling
- Tailwind with custom animations (`pulse-slow`)
- Dark mode classes: `theme === 'dark' ? '...' : '...'` pattern
- Orange brand color throughout

### Animation Patterns
- Framer Motion variants for consistent animations
- Scroll-based reveals using Intersection Observer
- Mobile menu animations with scale and opacity transitions
- Navigation items with staggered animations

## Configuration Notes

### Next.js Config
- ESLint errors ignored during builds (`ignoreDuringBuilds: true`)
- TypeScript configured with strict mode
- Path alias `@/*` maps to `./src/*`

### Tailwind Config
- Dark mode: 'class' strategy
- Content paths include all relevant directories
- Custom pulse-slow animation

### ESLint
- Uses Next.js core-web-vitals and TypeScript configs
- Modern flat config format with compatibility layer

## Development Guidelines

### Component Creation
- Follow existing animation patterns with Framer Motion
- Use theme-aware styling patterns
- Implement responsive design (mobile-first)
- Include TypeScript interfaces for all props

### Page Creation
- Use App Router conventions
- Include currentPage prop in Navigation
- Follow existing layout patterns with proper metadata

### Styling
- Use Tailwind utilities with theme-aware conditional classes
- Maintain consistent spacing and typography scales
- Follow orange brand color scheme

### Animation Implementation
- Use Framer Motion for page transitions and interactions
- Implement scroll-based animations with Intersection Observer
- Follow existing animation variant patterns for consistency

### Blog Content Management
- Blog posts managed through Sanity CMS studio
- Content structure: title, slug, publishedAt, body (Portable Text), images, categories, author
- Images displayed in blog card previews only (not in individual articles)
- Articles focus on clean typography and readability
- Category filtering available on blog listing page
- Fully clickable blog cards with hover effects
- Dynamic routing: `/blog` for listing, `/blog/[slug]` for individual posts

### Sanity Content Guidelines
- Use consistent GROQ queries from `src/app/utils/sanity.ts`
- Handle multiple image field names: `mainImage`, `image`, `featuredImage`, `coverImage`
- Portable Text components configured for clean text-only rendering
- Image optimization automatically handled via `urlFor()` function
- Content revalidation set to 30 seconds for optimal performance