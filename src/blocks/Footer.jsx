import React from 'react';
import SimpleIcons from 'simple-icons-react-component';
import { social } from '../data';

export const Footer = () => (
	<section className="Footer">
		<div className="Footer__wrap">
			<small className="Footer__name"><a href="/">Matt Felten</a></small>
			<ul className="Footer__icon-list">
				{Object.keys(social).map((key, i) => {
					const account = social[key];
					return (<a key={i} className="Footer__icon" href={account.url}><SimpleIcons name={account.icon} color="inherit" /></a>);
				})}
			</ul>
		</div>
	</section>
);
