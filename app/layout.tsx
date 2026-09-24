import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/layout/Navigation';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Elena Vance — Architecture Atelier | Modern & Sustainable Designs',
  description:
    'Innovative contemporary architecture atelier by Elena Vance specializing in modern, sustainable residential sanctuaries, cultural pavilions, and tectonic forms.',
  keywords: [
    'Architecture',
    'Contemporary Architect',
    'Elena Vance',
    'Sustainable Architecture',
    'Modern Villa Design',
    'Tectonic Architecture',
  ],
  authors: [{ name: 'Elena Vance' }],
  openGraph: {
    title: 'Elena Vance — Architecture Atelier',
    description:
      'Innovative architecture atelier specializing in modern, sustainable, and tectonic designs.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Elena Vance Architecture',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-canvas text-ink-primary font-sans antialiased selection:bg-ink-primary selection:text-white">
        <Navigation />
        <main className="min-h-screen flex flex-col">{children}</main>
      </body>
    </html>
  );
}
