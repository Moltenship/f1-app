import { Inter } from 'next/font/google';
import { type PropsWithChildren } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  description: 'View F1 data for different seasons, drivers, constructors and more',
  title: 'F1 App',
};

const RootLayout = ({
  children,
}: PropsWithChildren) => (
  <html lang="en" suppressHydrationWarning>
    <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col space-y-6">
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
