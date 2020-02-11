import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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

	const Heading = location.pathname === rootPath ? 'h1' : 'h3';

	return (
		<Heading>
			<Link to={`/`}>
				{title}
			</Link>
		</Heading>
	)
};
