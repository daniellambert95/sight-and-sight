# Site and Sight Creative Studio Website

A modern, responsive website for Site and Sight Creative Studio built with Next.js 15, TypeScript, and Tailwind CSS 4.

## Features

- Modern, responsive design optimized for all device sizes
- Clean, professional aesthetic with intuitive navigation
- Dark mode support with theme toggle functionality
- Interactive animations using Framer Motion and Anime.js
- Funny and quirky branded 404 page with interactive elements
- Optimized performance with Next.js 15 and Turbopack
- Fully customizable using Tailwind CSS 4
- TypeScript for type safety and better developer experience
- Intersection Observer for scroll-based animations
- Floating particles animations and visual effects

## Pages

- **Home** - Introduction to the studio with hero section, featured projects, services overview, testimonials, stats, and CTA
- **Work** - Portfolio showcase with filterable projects and detailed case studies
- **About** - Information about the studio, team, and approach
- **Services** - Comprehensive services page with detailed offerings
- **Pricing** - Interactive pricing calculator and service packages
- **Contact** - Contact form and studio information
- **404 Page** - Fun, interactive error page with brand personality

## Key Components

The website includes several reusable components:

- **Navigation** - Responsive navigation with mobile menu
- **HeroSection** - Animated hero section with call-to-action
- **FeaturedProjects** - Showcase of selected work
- **ServicesSection** - Overview of studio services
- **TestimonialsSection** - Client testimonials and reviews
- **StatsSection** - Key metrics and achievements
- **PricingCalculator** - Interactive pricing tool
- **ThemeToggle** - Dark/light mode switcher
- **FloatingParticles** - Animated background elements
- **Footer** - Comprehensive site footer

## 404 Page Features

The custom 404 page includes:

- Animated 404 numbers with interactive click counter
- Dynamic messages that change based on user interaction
- Achievement system for persistent users
- Floating particles animation
- Brand-consistent design with Site & Sight colors and fonts
- Easter eggs and developer humor
- Responsive design for all devices
- Dark/light mode support

To test the 404 page, visit any non-existent URL like: `http://localhost:3000/this-page-does-not-exist`

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe JavaScript
- [React 19](https://react.dev/) - Latest React with concurrent features
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library
- [Anime.js](https://animejs.com/) - Lightweight JavaScript animation library
- [Heroicons](https://heroicons.com/) - Beautiful hand-crafted SVG icons
- [React Intersection Observer](https://github.com/thebuilder/react-intersection-observer) - Scroll-based animations
- [ESLint 9](https://eslint.org/) - Code linting and standards

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/site-and-sight.git
cd site-and-sight
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server with Turbopack

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
site-and-sight/
├── public/                    # Static assets
├── src/                       # Source code
│   └── app/                   # App router pages and layouts
│       ├── about/             # About page
│       ├── contact/           # Contact page
│       ├── work/              # Work/portfolio page
│       ├── services/          # Services page
│       ├── pricing/           # Pricing page with calculator
│       ├── components/        # Reusable React components
│       │   ├── animations/    # Animation components
│       │   ├── Navigation.tsx # Main navigation
│       │   ├── HeroSection.tsx# Hero section component
│       │   ├── ThemeToggle.tsx# Dark/light mode toggle
│       │   └── ...           # Other components
│       ├── utils/             # Utility functions
│       ├── layout.tsx         # Root layout
│       ├── page.tsx           # Home page
│       ├── not-found.tsx      # Custom 404 page
│       └── globals.css        # Global styles
├── .eslintrc.json             # ESLint configuration
├── eslint.config.mjs          # Modern ESLint configuration
├── next.config.ts             # Next.js configuration (TypeScript)
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## Customization

- Update content in the page components located in `src/app/`
- Add real projects to the Work page
- Customize colors and design tokens in the Tailwind configuration
- Modify animations in the `components/animations/` directory
- Add additional pages as needed using the App Router structure

## Performance Features

- **Turbopack** - Ultra-fast bundler for development
- **Next.js 15** - Latest optimizations and features
- **React 19** - Concurrent features and improved performance
- **Intersection Observer** - Efficient scroll-based animations
- **TypeScript** - Better tree-shaking and optimization

## Deployment

This website can be easily deployed to Vercel or any other hosting service that supports Next.js.

```bash
npm run build
# or
yarn build
```

The build output will be optimized for production with automatic code splitting, image optimization, and other Next.js optimizations.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Site and Sight Creative Studio

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Framer Motion Documentation](https://www.framer.com/motion/) - Animation library
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript language reference

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
