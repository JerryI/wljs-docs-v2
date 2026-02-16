import { algoliasearch } from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';
// the path of pre-rendered `static.json`, choose one according to your React framework
const filePath = {
  next: '.next/server/app/static.json.body',
  'tanstack-start': '.output/public/static.json',
  'react-router': 'build/client/static.json',
  waku: 'dist/public/static.json',
}['next'];
const content = fs.readFileSync(filePath);
const records = JSON.parse(content.toString());
const appId = 'TV1NUK0KDL';
const apiKey = 'fbd8c2531c90ce74ad168c763b3d990f';
const client = algoliasearch(appId, apiKey);
// update the index settings and sync search indexes
void sync(client, {
  indexName: 'document',
  documents: records,
});