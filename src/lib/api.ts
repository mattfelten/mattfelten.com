import fs from "fs";
import { join } from "path";
import globby from 'globby';
import matter from "gray-matter";

// I think this should be a reusable package.

const postsDirectory = join(process.cwd(), 'content/post');

export function getPostSlugs() {
	return globby.sync(join(postsDirectory, '**/*.{md,mdx}'));
}

export interface BasicPost {
	title: string;
	dateString: string;
	slug: string;
	niceSlug: string;
	content: string;
}

export function getPostBySlug(slug: string): BasicPost {
	console.log('slug', slug);
	const slugWithoutExtension = slug;
	const fullPath = join(postsDirectory, slug);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const { data, content } = matter(fileContents);

	// @ts-ignore
	return {
		...data,
		content,
		slug: slug,
		niceSlug: `post/${slug}`,
		dateString: data.date,
	};
}

function fixGlobbyPath(path: string) {
	return path.replace(postsDirectory, '').substr(1);
}

export function getPosts(): BasicPost[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map(fixGlobbyPath)
		.map((slug) => getPostBySlug(slug))
		// sort posts by date in descending order
		.sort(
			(a, b) =>
				new Date(b.dateString).getTime() -
				new Date(a.dateString).getTime()
		);
	return posts;
}
