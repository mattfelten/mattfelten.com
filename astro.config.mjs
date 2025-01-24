import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://mattfelten.com',
	integrations: [
		react(),
		mdx(),
		tailwind({
			// Example: Allow writing nested CSS declarations
			// alongside Tailwind's syntax
			nesting: true,
		}),
	],
	vite: {
		server: {
			open: true,
		},
	},
});
