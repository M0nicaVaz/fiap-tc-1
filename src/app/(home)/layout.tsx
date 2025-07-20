import { Header } from '@/components';
import { Providers } from '@/context/providers';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fiap Transactions',
  description: 'Tech Challenge 1 - FIAP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={`${inter.variable} flex antialiased`}>
        <Providers>
          <div className='flex h-full min-h-screen flex-1 flex-col'>
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
