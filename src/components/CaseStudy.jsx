import React from 'react';
import styled from 'styled-components';

const Link = styled.a`
	color: ${props => props.theme.textColor};
	display: block;
	text-decoration: none;
`;

const Title = styled.div`
	font-weight: bold;
`;

const Company = styled.div`
	display: block;
	font-size: ${props => props.theme.fontSize2};
	margin-top: 8px;
`;

const ImageWrapper = styled.div`
	background: #F6F6F6;
	margin-bottom: 16px;
	padding-top: 75%;
	position: relative;
	transition: all ${props => props.theme.transition};

	${Link}:hover & {
		background: $color-accent;
	}
`

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transition: all ${props => props.theme.transition};

	${Link}:hover & {
		transform: scale(1.06);
		box-shadow: 0 20px 50px rgba(0,0,0,.2);
	}
`

export const CaseStudy = ({ title, company, url, coverImage }) => (
	<Link href={url}>
		<ImageWrapper><Image src={coverImage} alt={`Cover for ${title} at ${company}`} /></ImageWrapper>
		<Title>{title}</Title>
		<Company>{company}</Company>
	</Link>
);
