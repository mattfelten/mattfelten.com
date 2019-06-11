import React from 'react';
import SimpleIcons from 'simple-icons-react-component';
import { Section, Small } from '../components';

const links = [
	{
		icon: 'Twitter',
		url: '//twitter.com/mattfelten',
	},
	{
		icon: 'GitHub',
		url: '//github.com/mattfelten',
	},
	{
		icon: 'Medium',
		url: '//medium.com/@mattfelten',
	},
	{
		icon: 'Dribbble',
		url: '//dribbble.com/mattfelten'
	},
	{
		icon: 'Instagram',
		url: '//instagram.com/mattfelten',
	},
	{
		icon: 'Spotify',
		url: '//open.spotify.com/user/mattfelten',
	},
	{
		icon: 'LinkedIn',
		url: '//linkedin.com/in/mattfelten/',
	}
]

export const Footer = () => (
	<Section className="Footer" type="full">
		<div className="Footer__wrap">
			<Small className="Footer__name">Matt Felten.</Small>
			<ul className="Footer__icons list pl0">
				{links.map(({url, icon, }, i) => (
					<li key={i} className="dib mr3"><a className="db Footer__icon" href={url}><SimpleIcons name={icon} color="inherit" /></a></li>
				))}
			</ul>
		</div>
	</Section>
);
