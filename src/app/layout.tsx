import "./globals.css";
import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import ClientLayout from "@/app/components/ClientLayout";
import { ThemeProvider } from "@/app/utils/ThemeProvider";

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
    <html lang="en" className={`${inter.variable} ${leagueSpartan.variable}`}>
      <body className="min-h-screen overflow-x-hidden transition-colors duration-300">
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
