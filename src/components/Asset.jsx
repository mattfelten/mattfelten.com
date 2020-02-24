import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.span`
	${props => props.href || props.onClick || props.expand && css`
		display: block;
		transition: all ${props => props.theme.transitionDuration} ${props => props.theme.transitionEasing};

		&:hover {
			transform: scale(${props => props.theme.transformScale});
			box-shadow: 0 20px 50px rgba(0,0,0,.2);
		}
	`}
`;

const Image = styled.img`
	border-style: none;
	display: block;
	height: auto;
	max-width: 100%;
	width: 100%;
`;

const Video = styled.video`
	display: block;
	height: auto;
	max-width: 100%;
	width: 100%;
`;

const Caption = styled.span`
	display: block;
	margin-top: 1em;
`;

export const Asset = ({ alt, caption, className, expand, href, src, type="image", ...props }) => {
	const getLink = () => {
		if (href) return href;
		if (expand) return src;
		return false;
	}

	const getAssetContent = () => {
		if (type === 'video')
			return (
				<Video src={src} controls>{alt}</Video>
			);

		return (
			<Image src={src} alt={caption || alt} />
		)
	}

	const getContent = () => {
		if (getLink()) return <a href={getLink()}>{getAssetContent()}</a>;
		return getAssetContent();
	}

	return (
		<Wrapper {...props}>
			{getContent()}
			<Caption>{caption}</Caption>
		</Wrapper>
	)
};
