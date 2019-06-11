import React from 'react';
import { Page } from '../../modules';
import { Section } from '../../components';
import { setTitle } from '../../utils';

export const Store = () => {
	setTitle('Store');

	return (
		<Page>
			<Section>
				<p>Hmmm. How do I make a store now...</p>
			</Section>
		</Page>
	)
};
