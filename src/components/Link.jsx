import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled, { css } from 'styled-components';
import {
	Link as LinkStyle,
	UnderlineLink as UnderlineLinkStyle,
} from '../styles';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink

const A = styled.a`
	${({$underline}) =>
		$underline &&
		css`
			${UnderlineLinkStyle}
		`}
	${({$underline}) =>
		!$underline &&
		css`
			${LinkStyle}
		`}
`;

const StyledLink = styled(GatsbyLink)`
	${({$underline}) =>
		$underline &&
		css`
			${UnderlineLinkStyle}
		`}
	${({$underline}) =>
		!$underline &&
		css`
			${LinkStyle}
		`}
`;

export const Link = ({
	activeClassName,
	children,
	partiallyActive,
	href,
	underline = true,
	...other
}) => {
	const as = href ? null : 'span';

	// Tailor the following test to your environment.
	// This example assumes that any internal link (intended for Gatsby)
	// will start with exactly one slash, and that anything else is external.
	const internal = /^\/(?!\/)/.test(href);
	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return (
			<StyledLink
				to={href}
				activeClassName={activeClassName}
				partiallyActive={partiallyActive}
				$underline={underline}
				{...other}
			>
				{children}
			</StyledLink>
		);
	}

	return (
		<A as={as} href={href} $underline={underline} {...other}>
			{children}
		</A>
	);
};
