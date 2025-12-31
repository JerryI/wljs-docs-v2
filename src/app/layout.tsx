import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';


import Script from "next/script"; 

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <Script
          src="https://cdn.jsdelivr.net/gh/WLJSTeam/web-components@latest/src/common/app.tw.js"
          strategy="lazyOnload"
          id="wljs-component"
        />
      </body>
    </html>
  );
}
