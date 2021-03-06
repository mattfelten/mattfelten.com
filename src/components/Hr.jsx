import styled from 'styled-components';

export const Hr = styled.hr`
	background-color: ${props => props.theme.subtle};
	border: 0;
	margin: ${props => props.theme.spacing7} auto;
	width: 50%;
	height: 2px;
	clear: both;
	opacity: 0.1;
`;
