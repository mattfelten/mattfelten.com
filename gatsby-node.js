const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const BLOG_POST_FILENAME_REGEX = /\/([0-9]+)\-([0-9]+)\-([0-9]+)\-(.+)\/$/;

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const slug = createFilePath({ node, getNode });
		const match = BLOG_POST_FILENAME_REGEX.exec(slug);
		const collection = getNode(node.parent).sourceInstanceName;
		let newSlug = slug;

		if (match) {
			const year = match[1];
			const month = match[2];
			const day = match[3];
			const filename = match[4];
			const date = new Date(year, month - 1, day).toJSON();

			newSlug = `/${filename}`;

			createNodeField({
				node,
				name: `date`,
				value: date,
			});
		}

		const actualSlug = `/${collection}${newSlug}`;

		createNodeField({
			node,
			name: `slug`,
			value: actualSlug,
		});

		createNodeField({
			node,
			name: "collection",
			value: collection
		});
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return graphql(
		`{
			allMdx(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
							collection
							date
						}
						frontmatter {
							title
							redirect_url
						}
					}
				}
			}
		}`
	).then(result => {
		if (result.errors) throw result.errors;
		const allContent = result.data.allMdx.edges;

		// Templates
		const postTemplate = path.resolve(`./src/templates/Post.jsx`);
		const workTemplate = path.resolve(`./src/templates/Work.jsx`);

		// Create blog posts pages
		const posts = allContent.filter(
			// only get posts
			edge => edge.node.fields.collection === `post`
		).sort((a, b) => {
			// sort by date
			return new Date(b.node.fields.date) - new Date(a.node.fields.date);
		});

		posts.forEach((edge, index) => {
			// Don't need a page for a redirect
			if (edge.node.frontmatter.redirect_url) return;

			const slug = edge.node.fields.slug;
			const previous = index === posts.length - 1 ? null : posts[index + 1].node;
			const next = index === 0 ? null : posts[index - 1].node;

			createPage({
				path: slug,
				component: postTemplate,
				context: {
					slug: slug,
					previous,
					next,
				},
			})
		});

		// Create work pages
		const work = allContent.filter(
			edge => edge.node.fields.collection === `work`
		);

		work.forEach((edge) => {
			const slug = edge.node.fields.slug;
			createPage({
				path: slug,
				component: workTemplate,
				context: {
					slug: slug,
				},
			})
		});
	})
}
