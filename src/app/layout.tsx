import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';

import Script from "next/script"; 

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
  },
  twitter: {
    card: 'summary',
    title: 'WLJS Notebook',
    description: 'Build interactive research notebooks and scientific apps with Wolfram Language.',
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
          dangerouslySetInnerHTML={{
            __html: `setTimeout(function(){var s=document.createElement('script');s.src='https://cdn.jsdelivr.net/gh/WLJSTeam/web-components@latest/src/common/app.tw.js';document.body.appendChild(s);},200);`,
          }}
        />

        <script data-goatcounter="https://jerryi.goatcounter.com/count"
                async src="//gc.zgo.at/count.js"></script>
      </body>
    </html>
  );
}
