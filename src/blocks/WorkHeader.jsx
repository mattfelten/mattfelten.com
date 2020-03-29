import React from 'react';
import styled, { css } from 'styled-components';
import { H1 } from '../typography';

const Meta = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -15vw;
	margin-bottom: 2em;
	width: 94vw;

	> * {
		box-sizing: border-box;
		padding-right: 4em;

		${props => props.count == 4 && css`
			width: 50%;
		`}
	}

	a {
		color: ${props => props.theme.textColor};
		display: block;
		text-decoration: none;
		transition: all ${props => props.theme.transition};

		&:hover { transform: translateY(-${props => props.theme.spacingHalf}); }
	}
`;

const MetaValue = styled.span`
	display: block;
	white-space: nowrap;
`;

export const WorkHeader = ({className, title, company, year, role, team}) => {
	const metaInfo = [];

	if (company) metaInfo.push({title: 'Company', value: company});
	if (year) metaInfo.push({title: 'Year', value: year});
	if (role) metaInfo.push({title: 'Role', value: role});
	if (team) metaInfo.push({title: 'Team', value: team});

	return (
		<div>
			<H1>{title}</H1>

			<Meta count={metaInfo.length}>
				{metaInfo.map(item => (
					<p><small>
						<strong>{item.title}</strong>
						<MetaValue>{item.value}</MetaValue>
					</small></p>
				))}
			</Meta>
		</div>
	);
}
