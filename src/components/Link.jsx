import React from 'react';
import { Link as GatsbyLink } from "gatsby";
import styled, { css } from 'styled-components';
import { Link as LinkStyle, UnderlineLink as UnderlineLinkStyle } from '../styles';

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink

const A = styled.a`
	${props => props.underline && css`
		${UnderlineLinkStyle}
	`}
	${props => !props.underline && css`
		${LinkStyle}
	`}
`;

const StyledLink = styled(GatsbyLink)`
	${props => props.underline && css`
		${UnderlineLinkStyle}
	`}
	${props => !props.underline && css`
		${LinkStyle}
	`}
`;

export const Link = ({
	activeClassName,
	children,
	partiallyActive,
	to,
	underline = true,
	...other
}) => {
	// Tailor the following test to your environment.
	// This example assumes that any internal link (intended for Gatsby)
	// will start with exactly one slash, and that anything else is external.
	const internal = /^\/(?!\/)/.test(to)
	// Use Gatsby Link for internal links, and <a> for others
	if (internal) {
		return (
			<StyledLink
				to={to}
				activeClassName={activeClassName}
				partiallyActive={partiallyActive}
				underline={underline}
				{...other}
			>
				{children}
			</StyledLink>
		)
	}
	return (
		<A href={to} underline={underline} {...other}>
			{children}
		</A>
	);
}
