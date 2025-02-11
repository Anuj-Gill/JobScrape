import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';
import { JSX } from 'react';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'JobScrape',
  description: 'Find jobs and internships from YC and Internshala',
  icons: {
    icon: "logo.png"
  }
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-300 dark:bg-gray-900 transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Navbar />
          {children}
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}