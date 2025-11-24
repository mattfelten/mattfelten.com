import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import mailObfuscation from 'astro-mail-obfuscation';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://mattfelten.com',
	integrations: [react(), mdx(), mailObfuscation()],
	vite: {
		server: {
			open: true,
		},

		plugins: [tailwindcss()],
	},
});
