import styled from 'styled-components';

export const H1 = styled.h1`
	font-size: ${props => props.theme.fontSize4};
	line-height: ${props => props.theme.lineHeightSmall};
	margin-top: 3em;
`;

export const H2 = styled.h2`
	font-size: ${props => props.theme.fontSize3};
	line-height: ${props => props.theme.lineHeightSmall};
	margin-top: 3em;
`;

export const H3 = styled.h3`
	font-size: ${props => props.theme.fontSize2};
	line-height: ${props => props.theme.lineHeightSmall};
	margin-top: 3em;
`;

export const List = styled.ul`
	list-style: none;
	padding-left: 1.75em;
`;

export const ListItem = styled.li`
	margin-top: 1em;

	&:first-child { margin-top: 0; }

	&:before {
		float: left;
		font-size: 1em;
		margin-left: -1.5em;
		width: 1.5em;
		content: '\\2013';
	}
`;
