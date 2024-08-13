// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
const work = defineCollection({
	schema: z.object({
		company: z.string(),
		description: z.string().optional(),
		end: z.date().optional(),
		role: z.string(),
		start: z.date(),
		website: z.string().optional(),
	}),
});

const speaking = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		redirect: z.string(),
		date: z.date(),
	}),
});

const posts = defineCollection({});

const docs = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
});

export const collections = {
	work,
	speaking,
	posts,
	docs,
};
