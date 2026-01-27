// 1. Import utilities from `astro:content`

import { defineCollection, z } from 'astro:content';

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	posts: defineCollection({}),
	// Work: Case studies and showcases (links to /work/[slug])
	work: defineCollection({
		schema: ({ image }) =>
			z.object({
				title: z.string(),
				company: z.string(),
				year: z.number(),
				endYear: z.number().optional(),
				active: z.boolean().optional(), // Shows "year – Present"
				type: z.enum(['case-study', 'showcase']).default('case-study'),
				featured: z.boolean().optional(), // Appears on homepage
				intro: z.string(), // Brief description
				cover: image(),
				coverAlt: z.string(),
			}),
	}),
	// Projects: Lightweight side projects (links to external URLs)
	projects: defineCollection({
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
		schema: z.object({
			date: z.date(),
			description: z.string(),
			redirect: z.string(),
			title: z.string(),
		}),
	}),
};
