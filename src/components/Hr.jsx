import styled from 'styled-components';

export const Hr = styled.hr`
	background-color: ${props => props.theme.accent};
	border: 0;
	margin: ${props => props.theme.spacing8} auto;
	width: 50%;
	height: 2px;
	clear: both;
`;
