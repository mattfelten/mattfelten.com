import fs from 'fs';
import matter from 'gray-matter';
import globby from 'globby';

export async function getAllPosts() {
	const pages = await globby('pages/docs', {
		expandDirectories: {
			extensions: ['md', 'mdx'],
		}
	});
	const posts = [];

	pages.map(file => {
		const slug = file.replace('pages/', '').replace('.mdx', '').replace('.md', '').replace('index', '');
		const raw = fs.readFileSync(file, 'utf8');
		const { content, data } = matter(raw);

		posts.push({
			slug,
			...data
		})
	});

	return posts;
  }
