import Link from 'next/link';
import Image from 'next/image';
import { releasesSource } from '@/lib/source';
import { CalendarDays, User, ArrowRight, Tag } from 'lucide-react';

export default function Home() {
  const posts = releasesSource
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
        <div className="absolute bottom-0 -left-1/4 w-200 h-200 bg-linear-to-tr from-pink-500/70 via-transparent to-pink-500/10 blur-3xl opacity-40" />


        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />
      </div>

    <main className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-lg text-fd-muted-foreground max-w-xl mx-auto">
          All public releases
        </p>
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

              <div className="flex flex-1 min-w-0 p-6 sm:p-8 items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-fd-primary transition-colors">
                    {post.data.title}
                  </h2>
                  
                  <div className="flex items-center gap-4 text-xs text-fd-muted-foreground/80">
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