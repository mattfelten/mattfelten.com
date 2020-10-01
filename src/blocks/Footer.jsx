import React from 'react';
import styled, { keyframes } from 'styled-components';
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

const wave = keyframes`
	0% { transform: rotate( 0.0deg) }
   15% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
   30% { transform: rotate(-8.0deg) }
   45% { transform: rotate(14.0deg) }
   60% { transform: rotate(-4.0deg) }
   75% { transform: rotate(10.0deg) }
   100% { transform: rotate( 0.0deg) }
`;

const HomepageLink = styled.a`
	${Link}
	display: block;

	@media (max-width: 440px) {
		display: none;
	}

	&::after {
		opacity: 0;
		transition: opacity ${props => props.theme.transition};
		content: '👋';
		margin-left: .5em;
		display: inline-block;
		animation-name: ${wave};
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
		transform-origin: 70% 70%;
	}

	&:hover::after {
		opacity: 1;
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
