'use client';

import { liteClient } from 'algoliasearch/lite';
import type { BaseIndex } from 'fumadocs-core/search/algolia';
import { useSearchParams, useRouter } from 'next/navigation';
import { useCallback, useEffect, useState, Suspense } from 'react';
import { Search, Loader2, FileText, Heading, Type } from 'lucide-react';
import Link from 'next/link';
import type { SortedResult } from 'fumadocs-core/search';

const appId = 'TV1NUK0KDL';
const apiKey = 'fbd8c2531c90ce74ad168c763b3d990f';
const algoliaClient = liteClient(appId, apiKey);

type SearchableAttribute = 'title' | 'content' | undefined;

function groupHits(hits: (BaseIndex & Record<string, unknown>)[]): SortedResult[] {
  const grouped: SortedResult[] = [];
  const scannedUrls = new Set<string>();

  for (const hit of hits) {
    if (!scannedUrls.has(hit.url)) {
      scannedUrls.add(hit.url);
      grouped.push({
        id: hit.url,
        type: 'page',
        breadcrumbs: hit.breadcrumbs,
        url: hit.url,
        content: hit.title,
      });
    }

    grouped.push({
      id: hit.objectID,
      type: hit.content === hit.section ? 'heading' : 'text',
      url: hit.section_id ? `${hit.url}#${hit.section_id}` : hit.url,
      content: hit.content,
    });
  }

  return grouped;
}

async function searchAlgolia(
  query: string,
  restrict?: SearchableAttribute,
): Promise<SortedResult[]> {
  if (!query.trim()) return [];

  const result = await algoliaClient.searchForHits<BaseIndex>({
    requests: [
      {
        type: 'default',
        indexName: 'document',
        query,
        distinct: 5,
        hitsPerPage: 30,
        ...(restrict ? { restrictSearchableAttributes: [restrict] } : {}),
      },
    ],
  });

  return groupHits(result.results[0].hits as (BaseIndex & Record<string, unknown>)[]);
}

function ResultIcon({ type }: { type: SortedResult['type'] }) {
  switch (type) {
    case 'page':
      return <FileText className="h-4 w-4 shrink-0 text-fd-primary" />;
    case 'heading':
      return <Heading className="h-4 w-4 shrink-0 text-fd-muted-foreground" />;
    default:
      return <Type className="h-4 w-4 shrink-0 text-fd-muted-foreground" />;
  }
}

function SearchResults() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const queryParam = searchParams.get('q') ?? '';
  const restrictParam = searchParams.get('restrict') as SearchableAttribute;

  const [input, setInput] = useState(queryParam);
  const [results, setResults] = useState<SortedResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [restrict, setRestrict] = useState<SearchableAttribute>(restrictParam);

  const performSearch = useCallback(
    async (q: string, r?: SearchableAttribute) => {
      if (!q.trim()) {
        setResults([]);
        return;
      }
      setIsLoading(true);
      try {
        const data = await searchAlgolia(q, r);
        setResults(data);
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  // Run search on mount and when params change
  useEffect(() => {
    setInput(queryParam);
    setRestrict(restrictParam);
    performSearch(queryParam, restrictParam);
  }, [queryParam, restrictParam, performSearch]);

  const updateUrl = useCallback(
    (q: string, r?: SearchableAttribute) => {
      const params = new URLSearchParams();
      if (q) params.set('q', q);
      if (r) params.set('restrict', r);
      router.replace(`/search?${params.toString()}`);
    },
    [router],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUrl(input, restrict);
  };

  const handleRestrictChange = (value: SearchableAttribute) => {
    const next = value === restrict ? undefined : value;
    setRestrict(next);
    updateUrl(input, next);
  };

  const pageResults = results.filter((r) => r.type === 'page');
  const nonPageResults = results.filter((r) => r.type !== 'page');

  return (
    <div className="container max-w-3xl mx-auto px-4 py-10">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-fd-muted-foreground" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search documentation..."
            className="w-full rounded-lg border border-fd-border bg-fd-background py-3 pl-11 pr-4 text-base text-fd-foreground placeholder:text-fd-muted-foreground focus:outline-none focus:ring-2 focus:ring-fd-ring"
            autoFocus
          />
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-fd-muted-foreground">Search in:</span>
          {(['title', 'content'] as const).map((attr) => (
            <button
              key={attr}
              type="button"
              onClick={() => handleRestrictChange(attr)}
              className={`rounded-md border px-3 py-1 text-sm transition-colors ${
                restrict === attr
                  ? 'border-fd-primary bg-fd-primary text-fd-primary-foreground'
                  : 'border-fd-border text-fd-muted-foreground hover:border-fd-primary hover:text-fd-foreground'
              }`}
            >
              {attr.charAt(0).toUpperCase() + attr.slice(1)}
            </button>
          ))}
          {restrict && (
            <button
              type="button"
              onClick={() => handleRestrictChange(undefined)}
              className="text-sm text-fd-muted-foreground underline hover:text-fd-foreground"
            >
              Clear filter
            </button>
          )}
        </div>
      </form>

      {isLoading && (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-6 w-6 animate-spin text-fd-muted-foreground" />
        </div>
      )}

      {!isLoading && queryParam && results.length === 0 && (
        <p className="py-12 text-center text-fd-muted-foreground">
          No results found for &ldquo;{queryParam}&rdquo;
        </p>
      )}

      {!isLoading && results.length > 0 && (
        <div>
          <p className="mb-4 text-sm text-fd-muted-foreground">
            {pageResults.length} page{pageResults.length !== 1 ? 's' : ''} found
            {restrict ? ` (searching in ${restrict})` : ''}
          </p>

          <div className="space-y-2">
            {results.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className={`flex items-start gap-3 rounded-lg border border-fd-border p-3 transition-colors hover:bg-fd-accent ${
                  item.type === 'page' ? 'bg-fd-card' : 'ml-6 border-dashed'
                }`}
              >
                <ResultIcon type={item.type} />
                <span
                  className={`text-sm ${
                    item.type === 'page'
                      ? 'font-medium text-fd-foreground'
                      : 'text-fd-muted-foreground'
                  }`}
                >
                  {item.content}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-fd-muted-foreground">
            Search powered by{' '}
            <a
              href="https://algolia.com"
              rel="noreferrer noopener"
              className="underline"
            >
              Algolia
            </a>
          </p>
        </div>
      )}

      {!isLoading && !queryParam && (
        <p className="py-12 text-center text-fd-muted-foreground">
          Enter a search query above
        </p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="container max-w-3xl mx-auto px-4 py-10">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-6 w-6 animate-spin text-fd-muted-foreground" />
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
