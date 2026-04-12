// 1. Import utilities from `astro:content`

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	posts: defineCollection({
		loader: glob({
			pattern: '**/*.{md,mdx}',
			base: './src/content/posts',
			generateId: ({ entry }) =>
				entry
					.replace(/^\d{4}-\d{2}-\d{2}-/, '')
					.replace(/\.(mdx?)$/, '')
					.replace(/\/index$/, ''),
		}),
	}),
	// Work: Case studies and showcases (links to /work/[slug])
	work: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				company: z.string(),
				year: z.number(),
				endYear: z.number().optional(),
				active: z.boolean().optional(), // Shows "year – Present"
				type: z.enum(['case-study', 'showcase']).default('case-study'),
				featured: z.boolean().optional(), // Appears on homepage
				parent: z.string().optional(), // Slug of parent case study
				intro: z.string(), // Brief description
				role: z.string().optional(), // Functional role label
				cover: image(),
				coverAlt: z.string(),
			}),
	}),
	// Projects: Lightweight side projects (links to external URLs)
	projects: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				description: z.string(),
				url: z.string(),
				image: image().optional(),
				imageAlt: z.string().optional(),
			}),
	}),
	roles: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx,yaml,yml}', base: './src/content/roles' }),
		schema: z.object({
			acquired: z.string().optional(),
			company: z.string(),
			description: z.string().optional(),
			end: z.date().optional(),
			role: z.string(),
			start: z.date(),
			website: z.string().optional(),
		}),
	}),
	speaking: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx,yaml,yml}', base: './src/content/speaking' }),
		schema: z.object({
			date: z.date(),
			description: z.string(),
			redirect: z.string(),
			title: z.string(),
		}),
	}),
	library: defineCollection({
		loader: glob({ pattern: '**/*.{md,mdx,yaml,yml}', base: './src/content/library' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			category: z.enum(['classics', 'craft', 'communication', 'collaboration']),
			isbn: z.string().optional(), // ISBN-10; drives auto Amazon URL
			url: z.string().optional(), // explicit URL; overrides auto-generated Amazon link
			cover: z.string().optional(), // local cover image path (e.g. /books/foo.jpg)
		}),
	}),
};
