import { ClientDocsLayout } from './layout.client';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <ClientDocsLayout>{children}</ClientDocsLayout>;
}