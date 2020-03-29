import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { WorkHeader } from '../blocks';
import { MaxWidth, SEO } from '../components';

export const Work = (props) => {
	const post = props.data.mdx;

	return (
		<MaxWidth>
			<SEO
				title={`${post.frontmatter.company} ${post.frontmatter.title}`}
				description={post.excerpt}
			/>
			<WorkHeader
				title={post.frontmatter.title}
				company={post.frontmatter.company}
				year={post.frontmatter.year}
				role={post.frontmatter.role}
				team={post.frontmatter.team}
			/>
			<MDXRenderer>{post.body}</MDXRenderer>
		</MaxWidth>
	)
};

export default Work;

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			frontmatter {
				title
				company
				year
				role
				team
			}
			body
		}
	}
`;
