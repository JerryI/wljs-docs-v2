// scripts/sync-content.mts
import { algoliasearch } from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import type { DocumentRecord } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';

const filePath = '.next/server/app/static.json.body';

const content = fs.readFileSync(filePath, 'utf8');
const records = JSON.parse(content) as DocumentRecord[];

const appId = 'TV1NUK0KDL';
const apiKey = 'fbd8c2531c90ce74ad168c763b3d990f';

if (!appId || !apiKey) {
  throw new Error('Missing ALGOLIA_APP_ID or ALGOLIA_WRITE_API_KEY');
}

const client = algoliasearch(appId, apiKey);

await sync(client, {
  indexName: 'document',
  documents: records,
});
