import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import staticAdapter from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://brickeyportfolio.netlify.app',
  integrations: [react()],
  adapter: staticAdapter({
  pages: 'dist',
  assets: 'dist',
  fallback: 'index.html', // This enables SPA fallback for 404s
}),


