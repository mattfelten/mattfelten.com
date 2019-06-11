import React from 'react';
import classname from 'classnames';

export const Asset = ({ alt, caption, className, href, src, type="image", ...props }) => {
	const SectionClasses = classname('Asset', `Asset--${type}`, className, {
		'Asset--hoverable': href || props.onClick
	});

	const getAssetContent = () => {
		if (type === 'video')
			return (
				<video className="Asset__content" src={src} controls style={{display: 'block', height: 'auto', width: '100%'}}>{alt}</video>
			);

		return (
			<img className="Asset__content" src={src} alt={alt} />
		)
	}

	const getContent = () => {
		if (href) return <a className="Asset__link" href={href}>{getAssetContent()}</a>;
		return getAssetContent();
	}

	return (
		<span className={SectionClasses} {...props}>{getContent()}</span>
	)
};
