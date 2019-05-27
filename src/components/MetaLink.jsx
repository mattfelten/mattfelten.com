import React from 'react';
import { Link, Small } from './index';

export const MetaLink = ({ title, meta, url }) => (
	<a href={url} className="MetaLink">
		<Link as="span" className="MetaLink__title">{title}</Link>
		<Small className="MetaLink__meta">{meta}</Small>
	</a>
);
