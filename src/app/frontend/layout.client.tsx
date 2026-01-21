'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { deserializePageTree } from 'fumadocs-core/source/client';
import type { Root } from 'fumadocs-core/page-tree';

// Empty tree for initial render
const emptyTree: Root = {
  name: 'docs',
  children: [],
};

export function ClientDocsLayout({ children }: { children: ReactNode }) {
  const [tree, setTree] = useState<Root>(emptyTree);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    fetch(`${basePath}/page-tree.json`)
      .then((res) => res.json())
      .then((data) => {
        setTree(deserializePageTree(data));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load page tree:', err);
        setIsLoading(false);
      });
  }, []);

  return (
    <DocsLayout
      {...baseOptions()}
      links={[]}
      tree={tree}
      sidebar={{
        enabled: true,
        // Show loading state while fetching
        banner: isLoading ? (
          <div className="text-sm text-muted-foreground animate-pulse">
            Loading navigation...
          </div>
        ) : undefined,
      }}
    >
      {children}
    </DocsLayout>
  );
}
