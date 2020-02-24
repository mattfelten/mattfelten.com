import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-top: ${props => props.theme.spacing5};
	margin-bottom: ${props => props.theme.spacing9};

	a {
		color: ${props => props.theme.textColor};
		display: block;
		text-decoration: none;
		transition: all ${props => props.theme.transition};

		&:hover { transform: translateY(-${props => props.theme.spacingHalf}); }
	}
`;

const Heading = styled.p`
	font-size: ${props => props.theme.fontSize2};
`;

export const Header = ({ location, rootPath }) => {
	const { site } = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const title = site.siteMetadata.title;

	const headingElement = location.pathname === rootPath ? 'h1' : 'h3';

	return (
		<Wrapper>
			<Heading as={headingElement}>
				<Link to={`/`}>
					{title}
				</Link>
			</Heading>
		</Wrapper>
	)
};
