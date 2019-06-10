import React from 'react';
import { Section } from '../layout';
import { ArticleList, Headline } from '../element';

export default ({ title, list }) => (
	<Section>
		<Headline>{ title }</Headline>
		<ArticleList items={list} />
	</Section>
);
