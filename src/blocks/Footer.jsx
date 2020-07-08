import React from 'react';
import styled from 'styled-components';
import SimpleIcons from 'simple-icons-react-component';
import { Block } from '../components';
import { social } from '../data';
import { Link } from '../styles';

const Container = styled(Block)`
	margin-top: ${props => props.theme.spacing9};
	margin-bottom: ${props => props.theme.spacing6};
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const HomepageLink = styled.a`
	${Link}
	display: block;

	@media (max-width: 440px) {
		display: none;
	}
`;

const SocialList = styled.div`
	display: flex;
	align-self: flex-end;

	> * {
		margin-right: ${props => props.theme.spacing2};
	}
`;

const SocialIcon = styled.a`
	${Link}
	display: block;
	width: 18px;
	opacity: 0.4;

	&:hover {
		opacity: 1;
	}
`;

export const Footer = () => (
	<Container>
		<HomepageLink href="/">Matt Felten</HomepageLink>
		<SocialList>
			{Object.keys(social).map((key, i) => {
				const account = social[key];
				return (
					<SocialIcon key={i} href={account.url}>
						<SimpleIcons name={account.icon} color="inherit" />
					</SocialIcon>
				);
			})}
		</SocialList>
	</Container>
);
