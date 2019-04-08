import React from 'react';
import { Small } from './index';

export const MetaLink = ({ title, meta, url }) => (
	<a href={url} className="MetaLink">
		<span className="MetaLink__title">{title}</span>
		<Small className="MetaLink__meta">{meta}</Small>
	</a>
);
