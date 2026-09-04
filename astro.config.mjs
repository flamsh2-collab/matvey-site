// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: репозиторий matvey-site → сайт живёт по этому пути.
// Когда появится свой домен — поменяй site на него и убери base.
export default defineConfig({
  site: 'https://flamsh2-collab.github.io',
  base: '/matvey-site',
  integrations: [
    sitemap({
      serialize: (item) => ({ ...item, changefreq: 'weekly', priority: 0.7 }),
    }),
  ],
});
