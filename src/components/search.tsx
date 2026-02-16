'use client';
import { liteClient } from 'algoliasearch/lite';
import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
  type SharedProps,
    TagsList,
  TagsListItem,
} from 'fumadocs-ui/components/dialog/search';
import type { BaseIndex } from 'fumadocs-core/search/algolia';
import type { SortedResult } from 'fumadocs-core/search';
import { useI18n } from 'fumadocs-ui/contexts/i18n';

import { useCallback, useEffect, useRef, useState } from 'react';

const appId = 'TV1NUK0KDL';
const apiKey = 'fbd8c2531c90ce74ad168c763b3d990f';
const algoliaClient = liteClient(appId, apiKey);

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

export default function CustomSearchDialog(props: SharedProps) {
  const { locale } = useI18n();
  const [tag, setTag] = useState<string | undefined>();
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<SortedResult[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const performSearch = useCallback(async (query: string, restrict?: string) => {
    if (!query.trim()) {
      setResults(null);
      return;
    }
    setIsLoading(true);
    try {
      const result = await algoliaClient.searchForHits<BaseIndex>({
        requests: [
          {
            type: 'default',
            indexName: 'document',
            query,
            distinct: 5,
            hitsPerPage: 10,
            ...(restrict ? { restrictSearchableAttributes: [restrict] } : {}),
          },
        ],
      });
      setResults(groupHits(result.results[0].hits as (BaseIndex & Record<string, unknown>)[]));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      performSearch(search, tag);
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, [search, tag, performSearch]);

  return (
    <SearchDialog search={search} onSearchChange={setSearch} isLoading={isLoading} {...props}>
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList items={results} />
        <SearchDialogFooter className="flex flex-row">
          <TagsList tag={tag} onTagChange={setTag}>
            <TagsListItem value="title">Title</TagsListItem>
            <TagsListItem value="content">Content</TagsListItem>
          </TagsList>
        <a
            href="https://algolia.com"
            rel="noreferrer noopener"
            className="ms-auto text-xs text-fd-muted-foreground"
          >
            Search powered by Algolia
          </a>
        </SearchDialogFooter>        
      </SearchDialogContent>
    </SearchDialog>
  );
}