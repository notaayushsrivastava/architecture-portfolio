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
  title: 'Aayush Srivastava — Architecture Portfolio | B.Arch (VIT Vellore)',
  description:
    'Architecture portfolio of Aayush Srivastava (B.Arch, Vellore Institute of Technology, Vellore). Innovative, sustainable residential sanctuaries, cultural pavilions, and tectonic modernism across India.',
  keywords: [
    'Architecture',
    'Aayush Srivastava',
    'VIT Vellore Architecture',
    'B.Arch Portfolio',
    'Contemporary Indian Architect',
    'Sustainable Architecture India',
    'Tropical Modernism',
    'Tectonic Architecture',
  ],
  authors: [{ name: 'Aayush Srivastava' }],
  openGraph: {
    title: 'Aayush Srivastava — Architecture Portfolio',
    description:
      'Innovative architecture studio specializing in tropical modernism, tectonic mass, and sustainable bioclimatic designs across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Aayush Srivastava Architecture',
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
