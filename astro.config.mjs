import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://brickeyportfolio.netlify.app', // 👈 Add this line
  integrations: [react()],
  adapter: netlify(),
  vite: {
    optimizeDeps: {
      include: ['react', 'react/jsx-runtime'],
    },
  },
});


