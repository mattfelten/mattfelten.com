import React from 'react';
import { Small } from './index';

export const CaseStudy = ({ title, company, url, coverImage }) => (
	<a href={url} className="CaseStudy">
		<div className="CaseStudy__image-wrapper"><img className="CaseStudy__image" src={coverImage} alt={`Cover for ${title} at ${company}`} /></div>
		<div className="CaseStudy__title">{title}</div>
		<Small className="CaseStudy__company">{company}</Small>
	</a>
);
