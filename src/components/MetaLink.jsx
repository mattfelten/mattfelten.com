import React from 'react';
import styled from 'styled-components';
import { Link as LinkComponent } from './Link';
import { Link, UnderlineLinkDefault, UnderlineLinkHover } from '../styles';

const Title = styled.span`
	${UnderlineLinkDefault}
`;

const Wrapper = styled(LinkComponent)`
	${Link}
	display: block;

	&:hover ${Title} {
		${UnderlineLinkHover}
	}
`;

const Meta = styled.span`
	display: block;
	font-size: ${props => props.theme.fontSize2};
	font-weight: normal;
	margin-top: ${props => props.theme.spacing1};
`;

export const MetaLink = ({title, meta, ...props}) => (
	<Wrapper {...props}>
		<Title>{title}</Title>
		{meta && <Meta>{meta}</Meta>}
	</Wrapper>
);
