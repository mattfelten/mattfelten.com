// 1. Import utilities from `astro:content`

import { defineCollection, z } from 'astro:content';

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	posts: defineCollection({}),
	projects: defineCollection({
		schema: ({ image }) =>
			z.object({
				company: z.string(),
				cover: image().optional(),
				coverAlt: z.string().optional(),
				intro: z.string(),
				title: z.string(),
				url: z.string().optional(),
				year: z.number(),
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
