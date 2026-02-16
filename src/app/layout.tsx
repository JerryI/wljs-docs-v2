import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import SearchDialog from '@/components/search';

import Script from "next/script"; 

const inter = Inter({
  subsets: ['latin'],
});

import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider search={{
        SearchDialog,
      }}>{children}</RootProvider>
        <SpeedInsights />
        <Script
          src="https://cdn.jsdelivr.net/gh/WLJSTeam/web-components@latest/src/common/app.tw.js"
          strategy="afterInteractive"
          id="wljs-component"
        />
      </body>
    </html>
  );
}
