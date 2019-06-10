import React from 'react';
import { Section } from '../layout';
import { Headline } from '../element';

export default ({ _body, title }) => (
	<Section>
		{ title &&
			<Headline>{ title }</Headline>
		}
		{ _body }
	</Section>
);
