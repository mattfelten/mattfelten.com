import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, MaxWidth, SEO } from '../components';
import { H1 } from '../typography';
import { readibleDate } from '../utils';

const List = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	list-style: none;
	padding: 0;

	li {
		width: 50%;
	}
`;

const Header = styled.div`
	margin-bottom: ${props => props.theme.spacing7};
`;

const Title = styled(H1)`
	margin-bottom: ${props => props.theme.spacing2};
`;

const Date = styled.p`
	margin: 0;
`;

const Content = styled(MaxWidth)`
	margin-bottom: ${props => props.theme.spacing7};
`;

export const Post = (props) => {
	const post = props.data.mdx;
	const { previous, next } = props.pageContext;
	const previousLink = previous ? previous.frontmatter.url || previous.fields.slug : null;
	const nextLink = next ? next.frontmatter.url || next.fields.slug : null;

	return (
		<div>
			<Content>
				<SEO title={post.frontmatter.title} description={post.excerpt} />
				<Header>
					<Title>{post.frontmatter.title}</Title>
					<Date>{readibleDate(post.fields.date, 'MMMM d, yyyy')}</Date>
				</Header>

				<MDXRenderer>{post.body}</MDXRenderer>
			</Content>
			<List>
				<li>
					{previousLink && (
						<Link href={previousLink} rel="prev">
							← {previous.frontmatter.title}
						</Link>
					)}
				</li>
				<li style={{ textAlign: 'right'}}>
					{nextLink && (
						<Link href={nextLink} rel="next">
							{next.frontmatter.title} →
						</Link>
					)}
				</li>
			</List>
		</div>
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
