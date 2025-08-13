import type { Metadata } from 'next';
import './globals.css';
import { Sarabun, Baloo_Bhaijaan_2 } from 'next/font/google';

const sarabun = Sarabun({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sarabun',
  display: 'swap',
});

const baloo = Baloo_Bhaijaan_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-baloo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mama Care',
  description: 'your wellness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sarabun.variable} ${baloo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
