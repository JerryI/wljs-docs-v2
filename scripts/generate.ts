import { fromVault } from 'fumadocs-obsidian';
await fromVault({
  dir: '/Users/kirill/Github/wljs-docs/docs',
  out: {
    publicDir: './public',
    contentDir: './content/docs'
  },
});