import React from 'react';
import styled from 'styled-components';
import { H1 } from '../typography';

const Header = styled.div`
	margin-bottom: ${props => props.theme.spacing7};
`;

const Title = styled(H1)`
	margin-bottom: 0;
`;

const SubTitle = styled.p`
	margin: 0;
`;

export const PageTitle = ({ title, subtitle }) => {
	return (
		<Header>
			<Title>{title}</Title>
			<SubTitle>{subtitle}</SubTitle>
		</Header>
	);
};
