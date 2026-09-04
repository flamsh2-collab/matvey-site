// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Замени site на свой домен — нужно для sitemap/RSS/canonical.
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap({
      serialize: (item) => ({ ...item, changefreq: 'weekly', priority: 0.7 }),
    }),
  ],
});
