import type { Metadata } from 'next';
import './globals.css';
import { Figtree } from 'next/font/google';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import { UserProvider } from '@auth0/nextjs-auth0/client';

const roboto = Figtree({
  weight: '500',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'study time tracker',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <UserProvider>
        <body className={roboto.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
