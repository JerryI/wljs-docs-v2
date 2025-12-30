import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

import { GithubInfo } from 'fumadocs-ui/components/github-info';
import Image from "next/image"

import {LazyAutoplayVideo} from "./lib/video"

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
        className="text-[0.8125rem] px-3 py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring"
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
    WLJSWrapper, Image, LazyAutoplayVideo, GithubInfo,
    ...components
  };
}
