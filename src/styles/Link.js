import { css } from 'styled-components'

export const Link = css`
	color: ${props => props.theme.textColor};
	text-decoration: none;
	transition: all ${props => props.theme.transition};

	&:hover { transform: translateY(-${props => props.theme.spacingHalf}); }
`;

export const UnderlineLinkDefault = css`
	${Link}
	background: linear-gradient( to bottom, ${props => props.theme.accent}, ${props => props.theme.accent}) no-repeat bottom;
	background-position: 0 140%;
	background-size: 100% 50%;
	cursor: pointer;
	font-weight: bold;
	position: relative;
	top: 0;
`;

export const UnderlineLinkHover = css`
	background-position: 0 100%;
	top: -4px;
`;

export const UnderlineLink = css`
	${UnderlineLinkDefault}

	&:hover {
		${UnderlineLinkHover}
	}
`;
