import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { GithubInfo } from 'fumadocs-ui/components/github-info';
import Image from "next/image"

import {LazyAutoplayVideo, LazyVideo} from "./lib/video"

import { Download } from 'lucide-react';

import {Card, Cards} from 'fumadocs-ui/components/card';
import { Mermaid } from './components/mermaid';

function DownloadFile({title, description, href}) {
return <Cards>
  <Card 
    icon={<Download />}
    title={title}
    description={description}
    href={href}
  />
</Cards>
}

function CodeComparison({children}: {children: React.ReactNode}) {
  return <div className="my-6 grid min-w-0 overflow-hidden rounded-xl border border-fd-border bg-fd-card shadow-sm divide-y divide-fd-border md:grid-cols-2 md:divide-x md:divide-y-0">
    {children}
  </div>
}

function CodeComparisonItem({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) {
  return <div className="min-w-0 p-4">
    <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground">
      {title}
    </div>
    {children}
  </div>
}



function WLJSWrapper({children}: {children: React.ReactNode}) {
  return <figure
      dir="ltr"
      className="my-4 bg-fd-card rounded-xl relative border shadow-sm not-prose overflow-hidden text-sm github-light github-dark"
      style={{
        "--shiki-light": "#24292e",
        "--shiki-dark": "#e1e4e8",
        "--shiki-light-bg": "#fff",
        "--shiki-dark-bg": "#24292e",
      }}
      tabIndex={-1}
    >

      <div
        role="region"
        tabIndex={0}
        className="text-[0.8125rem] px-3 py-3.5 overflow-auto fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring"
        style={{ "--padding-right": "calc(var(--spacing) * 8)" }}
      >
        <pre className="min-w-full w-max *:flex *:flex-col">
          <code>{children}</code>
        </pre>
      </div>
    </figure>
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    WLJSWrapper, Image, LazyAutoplayVideo, GithubInfo, LazyVideo, DownloadFile, Mermaid,
    CodeComparison, CodeComparisonItem,
    ...components
  };
}
