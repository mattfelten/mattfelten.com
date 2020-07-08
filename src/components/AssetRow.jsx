import React from 'react';
import styled from 'styled-components';
import { Asset } from './Asset';
import { RemoveGutters } from '../styles';

const Wrapper = styled.div`
	${RemoveGutters}

	margin-top: 2em;
	margin-bottom: 2em;
	width: 94vw;

	> * {
		box-sizing: border-box;
		margin: 0 0 2em;
		padding: 16px;
		flex: 1;
	}

	@media (min-width: 640px) {
		display: flex;

		> * {
			margin: 0;
		}
	}
`;

export const AssetRow = ({ items, ...props }) => (
	<Wrapper {...props}>
		{items.map(props => (
			<Asset {...props} />
		))}
	</Wrapper>
);
