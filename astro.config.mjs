import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mailObfuscation from 'astro-mail-obfuscation';
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), mailObfuscation()],
  site: 'https://mattfelten.com',

  vite: {
      plugins: [tailwindcss()],
      server: {
          open: true,
      },
	},

  adapter: netlify(),
});