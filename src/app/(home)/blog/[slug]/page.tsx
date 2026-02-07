import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { blogSource } from '@/lib/source';
import { ArrowLeft, CalendarDays, User } from 'lucide-react';

export default async function Page(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);

  if (!page) notFound();
  const Mdx = page.data.body;

  return (
    <article className="relative max-w-5xl lg:w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors mb-10 group"
      >
        <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" />
        Back to Blog
      </Link>

      {/* Hero header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 bg-linear-to-br from-fd-foreground via-fd-foreground to-fd-foreground/70 bg-clip-text text-transparent">
          {page.data.title}
        </h1>
        {page.data.description && (
          <p className="text-lg text-fd-muted-foreground mb-6">
            {page.data.description}
          </p>
        )}
        <div className="flex items-center gap-5 text-sm text-fd-muted-foreground">
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
        <Mdx components={defaultMdxComponents} />
      </div>


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
}) {
  const params = await props.params;
  const page = blogSource.getPage([params.slug]);
  if (!page) notFound();
  return {
    title: page.data.title,
    description: page.data.description,
  };
}