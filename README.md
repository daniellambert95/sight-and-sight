# Site and Sight Creative Studio Website

A modern, responsive website for Site and Sight Creative Studio built with Next.js and Tailwind CSS.

## Features

- Modern, responsive design optimized for all device sizes
- Clean, professional aesthetic with intuitive navigation
- Dark mode support for enhanced user experience
- Optimized performance with Next.js
- Fully customizable using Tailwind CSS

## Pages

- **Home** - Introduction to the studio with featured projects
- **Work** - Portfolio showcase with filterable projects
- **About** - Information about the studio, team, and approach
- **Contact** - Contact form and studio information

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting and standards

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

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
site-and-sight/
├── public/             # Static assets
├── src/                # Source code
│   ├── app/            # App router pages and layouts
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── work/       # Work/portfolio page
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
├── .eslintrc.js        # ESLint configuration
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

- Update content in the page components
- Add real projects to the Work page
- Customize colors in the Tailwind configuration
- Add additional pages as needed

## Deployment

This website can be easily deployed to Vercel or any other hosting service that supports Next.js.

```bash
npm run build
# or
yarn build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Site and Sight Creative Studio

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
