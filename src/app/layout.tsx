import "./globals.css";
import type { Metadata } from "next";
import { Inter, Rubik_Moonrocks } from "next/font/google";
import ClientLayout from "@/app/components/ClientLayout";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const rubikMoonrocks = Rubik_Moonrocks({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-moonrocks',
});

export const metadata: Metadata = {
  title: "Site & Sight | Creative Digital Studio",
  description: "We craft captivating digital experiences that combine innovative design with cutting-edge technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rubikMoonrocks.variable}`}>
      <body className="min-h-screen bg-white text-slate-900 overflow-x-hidden">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
