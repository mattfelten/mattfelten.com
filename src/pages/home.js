import React from 'react';
import { Emoji, List, MetaLink, Section, Small } from '../components';

export const Home = () => (
	<div>
		<Section title="Matt Felten">
			<p>Designer focusing on design systems and leading teams. Cat dad who plays games, rides bikes, and has browser tabs full of dinner recipes.</p>
			<List spacing={4}>
				<div>
					<Emoji label="flexed bicep" emoji="💪" /> I <a href="#">work</a> with really cool companies.
				</div>
				<div>
					<Emoji label="memo" emoji="📝" /> I <a href="#">write</a> about my experiences in design, development, design systems, & management.
				</div>
				<div>
					<Emoji label="incoming envelop" emoji="📨" /> I <a href="#">share</a> articles that I like.
				</div>
				<div>
					<Emoji label="present" emoji="🎁" /> I <a href="#">make</a> fun little trinkets & whatnots.
				</div>
			</List>
		</Section>
		<Section title="Case Studies">
			<List spacing={5}>
				<MetaLink url="#" title="Design System" meta="YouCaring" />
				<MetaLink url="#" title="Control Panel Redesign" meta="DreamHost" />
				<MetaLink url="#" title="Rebrand" meta="DreamHost" />
				<MetaLink url="#" title="QNAP Integration" meta="DreamHost" />
				<MetaLink url="#" title="Login Page Redesign" meta="DreamHost" />
				<MetaLink url="#" title="Control Panel Refresh" meta="DreamHost" />
			</List>
		</Section>
		<Section title="Writing">
			<List spacing={5}>
				<MetaLink url="#" title="Building an Enterprise Design System" meta="2018 December 5" />
				<MetaLink url="#" title="Horizontal & Vertical Thinking in Design Systems" meta="2018 March 26" />
				<MetaLink url="#" title="An Angry Rant about Front-end Frameworks and Design Systems" meta="2018 March 5" />
				<MetaLink url="#" title="Bring Me Problems, Not Solutions" meta="2018 January 18" />
			</List>
		</Section>
		<Section title="Writing">
			<List spacing={5}>
				<MetaLink url="#" title="Moving Design Forward Panel" meta="2018 Meetup" />
				<MetaLink url="#" title="UI Design, Sass, & Front-end Frameworks" meta="2013 DreamCon" />
			</List>
			<Small>Send me <a href="mailto:m@mattfelten.com">an email</a> about speaking opportunities.</Small>
		</Section>
	</div>
);
