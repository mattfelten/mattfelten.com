import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { Link, SEO } from '../components';
import { readibleDate } from '../utils';

export const Post = (props) => {
	const post = props.data.mdx;
	const { previous, next } = props.pageContext;
	const previousLink = previous ? previous.frontmatter.redirect_url || previous.fields.slug : null;
	const nextLink = next ? next.frontmatter.redirect_url || next.fields.slug : null;

	return (
		<>
			<SEO title={post.frontmatter.title} description={post.excerpt} />
			<h1>{post.frontmatter.title}</h1>
			<p>
				{readibleDate(post.fields.date)}
			</p>
			<MDXRenderer>{post.body}</MDXRenderer>
			<hr />

			<ul
				style={{
					display: `flex`,
					flexWrap: `wrap`,
					justifyContent: `space-between`,
					listStyle: `none`,
					padding: 0,
				}}
			>
				<li>
					{previousLink && (
						<Link to={previousLink} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li>
					{nextLink && (
						<Link to={nextLink} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</ul>
		</>
	)
};

export default Post;

export const pageQuery = graphql`
	query($slug: String!) {
		mdx(fields: { slug: { eq: $slug } }) {
			id
			excerpt(pruneLength: 160)
			frontmatter {
				title
			}
			fields {
				date
			}
			body
		}
	}
`;
