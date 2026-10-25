import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'http://spock.bbs0.cc',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
