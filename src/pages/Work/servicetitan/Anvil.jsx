import React from "react";
import { Page } from '../../../modules';
import { Section } from '../../../components';
import { setTitle } from '../../../utils';

export class Anvil extends React.Component {
	static title = 'Anvil Design System';
	static company = 'ServiceTitan';
	static year = '2019';
	static slug = 'anvil';
	static path = '/work/servicetitan/anvil';

	componentDidMount() {
		setTitle(Anvil.title);
	}

	render() {
		return (
			<Page>
				<Section>
					Coming soon
				</Section>
			</Page>
		);
	}
}
