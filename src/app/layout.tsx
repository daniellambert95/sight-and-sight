import "./globals.css";
import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import Script from "next/script";
import ClientLayout from "@/app/components/ClientLayout";
import { ThemeProvider } from "@/app/utils/ThemeProvider";
import StructuredData from "@/app/components/StructuredData";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-league-spartan',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.siteandsight.com';
const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || '';
const facebookPixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Site & Sight | Creative Digital Studio",
    template: "%s | Site & Sight",
  },
  description: "We craft captivating digital experiences that combine innovative design with cutting-edge technology. Specializing in web development, SEO, marketing automation, and AI solutions.",
  keywords: [
    "web design",
    "web development",
    "custom website",
    "digital marketing",
    "SEO",
    "creative studio",
    "branding",
    "e-commerce",
    "AI integration",
    "automation",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Site & Sight" }],
  creator: "Site & Sight Creative Studio",
  publisher: "Site & Sight Creative Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Site & Sight',
    title: 'Site & Sight | Creative Digital Studio',
    description: 'We craft captivating digital experiences that combine innovative design with cutting-edge technology.',
    images: [
      {
        url: `${baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`,
        width: 1200,
        height: 630,
        alt: 'Site & Sight Creative Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Site & Sight | Creative Digital Studio',
    description: 'We craft captivating digital experiences that combine innovative design with cutting-edge technology.',
    images: [`${baseUrl}/logo/Site&Sight%20logo%20banner/light.svg`],
    creator: '@site_and_sight',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${leagueSpartan.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen overflow-x-hidden transition-colors duration-300">
        {/* Google tag (gtag.js) */}
        {googleAnalyticsId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        )}
        {/* Meta Pixel Code */}
        {facebookPixelId && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${facebookPixelId}');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img 
                height="1" 
                width="1" 
                style={{display: 'none'}}
                src={`https://www.facebook.com/tr?id=${facebookPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {/* End Meta Pixel Code */}
        <StructuredData />
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
