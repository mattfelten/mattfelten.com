// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	work: defineCollection({
		schema: z.object({
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
			title: z.string(),
			description: z.string(),
			redirect: z.string(),
			date: z.date(),
		}),
	}),
	posts: defineCollection({}),
};
