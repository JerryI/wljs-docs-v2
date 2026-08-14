import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { getMDXComponents } from '@/mdx-components';
import { blogSource } from '@/lib/source';
import { GiscusComments } from '@/components/giscus-comments';
import { ArrowLeft, CalendarDays, User, Tag, MessagesSquare, GitPullRequest } from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown';
import type { Metadata } from 'next';

export const dynamicParams = false;

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <article className="relative w-full lg:max-w-5xl lg:w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors mb-10 group"
      >
        <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
        Back to Blog
      </Link>

      {/* Preview image */}
      {page.data.preview && (
        <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-10 border border-fd-border">
          <img
            src={page.data.preview}
            alt={page.data.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Hero header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-br from-fd-foreground via-fd-foreground to-fd-foreground/70 bg-clip-text text-transparent">
          {page.data.title}
        </h1>
        {page.data.description && (
          <div
            className="text-lg text-fd-muted-foreground mb-6 prose prose-fd prose-p:my-0"
            dangerouslySetInnerHTML={{ __html: markdownToHtml(page.data.description) }}
          />
        )}
        <div className="flex flex-wrap items-center gap-5 text-sm text-fd-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <User className="size-3.5" />
            {page.data.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {new Date(page.data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
        </div>
        {/* Tags */}
        {page.data.tags && page.data.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <Tag className="size-3.5 text-fd-muted-foreground/60" />
            {page.data.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md border border-fd-border bg-fd-muted/50 px-2.5 py-1 text-xs text-fd-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-8 h-px bg-linear-to-r from-fd-border via-fd-primary/30 to-fd-border" />
      </header>

      {/* Table of contents */}
      {page.data.toc.length > 0 && (
        <div className="mb-8" style={{ maxWidth: '100%' }}>
          <InlineTOC items={page.data.toc} />
        </div>
      )}

      {/* Article body */}
      <div className="prose prose-fd min-w-0 max-w-none" style={{ maxWidth: '100%' }}>
        <Mdx components={getMDXComponents()} />
      </div>
 
      {/* Comments */}
      <div className='invertColor mt-10'><GiscusComments /></div>
      
      {/* Turn reading into participation */}
      <aside className="mt-14 rounded-xl border border-fd-border bg-fd-card/60 p-6 sm:p-8">
        <h2 className="text-xl font-semibold mb-2">Make this your own</h2>
        <p className="text-fd-muted-foreground mb-5">
          Adapt the notebook, share what you built, or help improve WLJS. Questions, experiments, and small contributions are all welcome.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/WLJSTeam/wljs-notebook/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            <MessagesSquare className="size-4" />
            Share or ask the community
          </a>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-fd-muted-foreground transition-colors hover:text-fd-primary"
          >
            Explore more examples
          </Link>
        </div>
      </aside>

      
    </article>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);
  if (!page) notFound();

  const url = `/blog/${params.slug}`;
  const image = page.data.preview
    ? [{ url: page.data.preview, alt: page.data.title }]
    : undefined;

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'article',
      url,
      title: page.data.title,
      description: page.data.description,
      publishedTime: new Date(page.data.date).toISOString(),
      authors: [page.data.author],
      tags: page.data.tags,
      images: image,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: page.data.title,
      description: page.data.description,
      images: image,
    },
  };
}
