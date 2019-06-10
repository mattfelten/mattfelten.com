import React from 'react';
import { Section } from '../layout';
import { Headline } from '../element';

export default ({ _body, links }) => (
	<Section>
		<Headline>{ _body }</Headline>
		<ul className="list-inline">
			{ links.map((item,i) => <li key={i}><a href={item.href}>{item.title}</a></li>) }
		</ul>
	</Section>
);
