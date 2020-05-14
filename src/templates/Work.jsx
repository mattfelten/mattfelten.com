import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { PageTitle } from '../blocks';
import { Hr, MaxWidth, SEO } from '../components';

const Meta = styled.div`
	display: flex;
	font-size: ${props => props.theme.fontSize1};
	letter-spacing: .02em;
	margin-top: -${props => props.theme.spacing3};
	margin-bottom: -${props => props.theme.spacing3};

	> * {
		box-sizing: border-box;
		flex: 1 1 0;

		&:first-child {
			flex-grow: 2;

			> * {
				padding-right: ${props => props.theme.spacing5};
			}
		}
	}

	p {
		margin: .5em 0;
	}
`;

export const Work = (props) => {
	const {
		body,
		excerpt,
		frontmatter: {
			goal,
			role,
			title,
			company,
			year,
		}
	} = props.data.mdx;

	const realGoal = goal instanceof Array ? goal.map(goal => <p>{goal}</p>) : <p>{goal}</p>;
	const realRole = role instanceof Array ? role.map(role => <p>{role}</p>) : <p>{role}</p>;

	return (
		<MaxWidth>
			<SEO
				title={`${company} ${title}`}
				description={excerpt}
			/>
			<PageTitle
				title={title}
				subtitle={`${company}  ${year}`}
			/>

			{goal && role &&
				<>
					<Meta>
						<div>
							<strong>Project Goal</strong>
							{realGoal}
						</div>
						<div>
							<strong>Role</strong>
							{realRole}
						</div>
					</Meta>
					<Hr />
				</>
			}
			<MDXRenderer>{body}</MDXRenderer>
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
				goal
			}
			body
		}
	}
`;
