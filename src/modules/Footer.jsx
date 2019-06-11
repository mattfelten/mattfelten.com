import React from 'react';
import SimpleIcons from 'simple-icons-react-component';
import { List, Section, Small } from '../components';

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
			<Small className="Footer__name"><a href="/">Matt Felten</a></Small>
			<List type="inline" className="Footer__icon-list">
				{links.map(({url, icon, }, i) => (
					<a key={i} className="Footer__icon" href={url}><SimpleIcons name={icon} color="inherit" /></a>
				))}
			</List>
		</div>
	</Section>
);
