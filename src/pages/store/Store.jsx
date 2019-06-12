import React from 'react';
import { Page } from '../../modules';
import { Section } from '../../components';
import { setTitle } from '../../utils';

export class Store extends React.Component {
	static title = 'Store';
	static slug = 'store';
	static path = '/store';

	componentDidMount() {
		setTitle(Store.title);
	}

	render() {
		return (
			<Page>
				<Section>
					<p>Hmmm. How do I make a store now...</p>
				</Section>
			</Page>
		);
	}
};
