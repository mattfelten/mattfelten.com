import React from 'react';
import styled from 'styled-components';
import { Asset } from './Asset';
import { RemoveGutters } from '../styles';

const Wrapper = styled.div`
	${RemoveGutters}

	display: flex;
	margin: 2em 0;
	width: 94vw;

	> * {
		box-sizing: border-box;
		margin: 0;
		padding: 16px;
		flex: 1;
	}
`;

export const Assets = ({ items, ...props }) => (
	<Wrapper {...props}>
		{ items.map( props => <Asset {...props} />) }
	</Wrapper>
);
