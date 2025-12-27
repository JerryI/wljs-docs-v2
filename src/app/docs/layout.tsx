import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { BookIcon, Drum, Rocket, Pyramid, AppWindowMac } from 'lucide-react';

import { source } from '@/lib/source';
import type { ReactNode } from 'react';
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...baseOptions()}
      tree={source.pageTree}
      links={[]}
    >
      {children}
    </DocsLayout>
  );
}