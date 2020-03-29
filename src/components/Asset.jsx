import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 2em 0;
`;

const A = styled.a`
	display: block;
	transition: all ${props => props.theme.transition};

	&:hover {
		transform: scale(${props => props.theme.transformScale});
		box-shadow: 0 20px 50px rgba(0,0,0,.2);
	}
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

const Caption = styled.small`
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
		if (getLink()) return <A href={getLink()}>{getAssetContent()}</A>;
		return getAssetContent();
	}

	return (
		<Wrapper {...props}>
			{getContent()}
			<Caption>{caption}</Caption>
		</Wrapper>
	)
};
