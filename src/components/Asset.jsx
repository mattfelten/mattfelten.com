import React from 'react';
import classname from 'classnames';
import { Small } from './';

export const Asset = ({ alt, caption, className, expand, href, src, type="image", ...props }) => {
	const AssetClasses = classname('Asset', `Asset--${type}`, className, {
		'Asset--hoverable': href || props.onClick || expand
	});

	const getLink = () => {
		if (href) return href;
		if (expand) return src;
		return false;
	}

	const getAssetContent = () => {
		if (type === 'video')
			return (
				<video className="Asset__content" src={src} controls style={{display: 'block', height: 'auto', width: '100%'}}>{alt}</video>
			);

		return (
			<img className="Asset__content" src={src} alt={caption || alt} />
		)
	}

	const getContent = () => {
		if (getLink()) return <a className="Asset__link" href={getLink()}>{getAssetContent()}</a>;
		return getAssetContent();
	}

	return (
		<span className={AssetClasses} {...props}>
			{getContent()}
			<Small className="Asset__caption">{caption}</Small>
		</span>
	)
};
