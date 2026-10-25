import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  site: 'http://spock.bbs0.cc',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
});
