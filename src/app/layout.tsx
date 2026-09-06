import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';
import GoatCounter from '@/components/goatcounter';

import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
});

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wljs.io'),
  applicationName: 'WLJS Notebook',
  title: {
    default: 'WLJS Notebook',
    template: '%s | WLJS Notebook',
  },
  description: 'Build interactive research notebooks and scientific apps with Wolfram Language using an open-source, local-first, Git-friendly frontend.',
  keywords: [
    'Wolfram Language',
    'Wolfram Engine',
    'computational notebook',
    'scientific computing',
    'interactive visualization',
    'Mathematica frontend',
  ],
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'WLJS Notebook',
    title: 'WLJS Notebook',
    description: 'Build interactive research notebooks and scientific apps with Wolfram Language.',
    images: [{
      url: '/wljs-notebook-preview.png',
      width: 5692,
      height: 3200,
      alt: 'WLJS Notebook with typeset equations, interactive controls, 3D plots, and graphs',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WLJS Notebook',
    description: 'Build interactive research notebooks and scientific apps with Wolfram Language.',
    images: [{
      url: '/wljs-notebook-preview.png',
      alt: 'WLJS Notebook with typeset equations, interactive controls, 3D plots, and graphs',
    }],
  },
  alternates: {
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{
        SearchDialog,
      }}>{children}</RootProvider>
        
        <Script
          id="wljs-component"
          strategy="afterInteractive"
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/vendor/wljs/app.tw.js`}
        />

        <GoatCounter />
      </body>
    </html>
  );
}
