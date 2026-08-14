import Link from 'next/link';
import Image from 'next/image';
import { blogSource } from '@/lib/source';
import { CalendarDays, User, ArrowRight, Tag, Rss, MessagesSquare } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tutorials, showcases, research notes, and developer updates from the WLJS Notebook community.',
  alternates: {
    canonical: '/blog',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    url: '/blog',
    title: 'WLJS Notebook Blog',
    description: 'Tutorials, showcases, research notes, and developer updates from the WLJS Notebook community.',
  },
};

export default function Home() {
  const posts = blogSource
    .getPages()
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );

  return (
    <>
      {/* Background with noisy textures and geometric shapes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Gradient blobs */}

        <div className="absolute top-1/3 -right-1/4 w-250 h-250 bg-linear-to-bl from-blue-500/70 via-transparent to-orange-500/15 blur-3xl opacity-50" />
        <div className="absolute bottom-0 -left-1/4 w-200 h-200 bg-linear-to-tr from-blue-500/70 via-transparent to-pink-500/10 blur-3xl opacity-40" />

        {/* Noise overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.12]">
          <defs>
            <filter id="blogNoise">
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#blogNoise)" />
        </svg>

        {/* Geometric shapes with noise texture */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Circle top left */}
          <circle cx="120" cy="180" r="160" fill="#f97316" filter="url(#blogNoiseTexture)" opacity="0.23" />
          {/* Triangle top right */}
          <polygon points="1250,80 1450,180 1300,350" fill="#ec4899" filter="url(#blogNoiseTexture)" opacity="0.22" />
          {/* Hexagon center left */}
          <polygon points="80,500 150,460 220,500 220,570 150,610 80,570" fill="#f43f5e" filter="url(#blogNoiseTexture)" opacity="0.21" />
          {/* Rotated rectangle right */}
          <rect x="1150" y="400" width="250" height="150" fill="#f97316" transform="rotate(-15 1275 475)" filter="url(#blogNoiseTexture)" opacity="0.20" />
          {/* Diamond center */}
          <polygon points="700,250 790,340 700,430 610,340" fill="#ec4899" filter="url(#blogNoiseTexture)" opacity="0.19" />
          {/* Small circle bottom right */}
          <circle cx="1350" cy="650" r="130" fill="#f43f5e" filter="url(#blogNoiseTexture)" opacity="0.21" />
        </svg>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
      </div>

    <main className="relative mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16" style={{maxWidth:"calc(min(100vw, var(--fd-layout-width)))"}}>
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">WLJS Notebook Blog</h1>
        <p className="text-lg text-fd-muted-foreground max-w-xl mx-auto">
          Tutorials, showcases, research notes, and developer updates from the WLJS Notebook community.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/feed.xml"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/50 px-4 py-2 text-sm font-medium transition-colors hover:border-fd-primary/40 hover:bg-fd-card"
          >
            <Rss className="size-4" />
            Follow via RSS
          </Link>
          <a
            href="https://github.com/WLJSTeam/wljs-notebook/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
          >
            <MessagesSquare className="size-4" />
            Share your work
          </a>
        </div>
      </div>

      {/* Posts list */}
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="group relative rounded-lg border border-fd-border bg-fd-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-fd-primary/40 hover:bg-fd-card/80 hover:shadow-lg hover:shadow-fd-primary/5"
          >
            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-fd-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative flex flex-col sm:flex-row gap-0">
              {/* Optional preview image */}
              {post.data.preview && (
                <div className="relative sm:w-56 md:w-64 shrink-0 aspect-[16/9] sm:aspect-auto sm:self-stretch">
                  <Image
                    src={post.data.preview}
                    alt={post.data.title}
                    loading="lazy"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-transparent to-fd-card/20" />
                </div>
              )}
              <div className="flex flex-1 min-w-0 p-6 sm:p-8 items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-fd-primary transition-colors">
                    {post.data.title}
                  </h2>
                  {post.data.description && (
                    <p className="text-fd-muted-foreground text-sm mb-3 line-clamp-2">
                      {post.data.description}
                    </p>
                  )}
                  {/* Tags */}
                  {post.data.tags && post.data.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      <Tag className="size-3 text-fd-muted-foreground/60" />
                      {post.data.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-md border border-fd-border bg-fd-muted/50 px-2 py-0.5 text-xs text-fd-muted-foreground transition-colors group-hover:border-fd-primary/30 group-hover:text-fd-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-xs text-fd-muted-foreground/80">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="size-3" />
                      {post.data.author}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="size-3" />
                      {new Date(post.data.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
                <ArrowRight className="hidden sm:block size-5 text-fd-muted-foreground/40 group-hover:text-fd-primary group-hover:translate-x-1 transition-all mt-1 shrink-0" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
    </>
  );
}
