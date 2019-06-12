import React from 'react';
import { CaseStudy, Emoji, Link, List, MetaLink, Section, Small } from '../../components';
import { Page } from '../../modules';
import { caseStudies, mediumStories, speakingEvents } from './';

export class Home extends React.Component {
	static slug = 'home';
	static path = '/';

	constructor(props) {
		super(props)
		this.handleScrollToElement = this.handleScrollToElement.bind(this);
        this.workRef = React.createRef()   // Create a ref object
        this.writeRef = React.createRef()   // Create a ref object
	}

	handleScrollToElement = (ref) => {
		ref.current.scrollIntoView({behavior: 'smooth'});
	}

	intro = () => (
		<Section className="mt6">
			<p className="mt4 mb6">Designer focusing on design systems and leading teams. Cat dad who plays games, rides bikes, and has browser tabs full of dinner recipes.</p>
			<List type="reset" spacing={5}>
				<div>
					<Emoji label="flexed bicep" emoji="💪" /> I <Link onClick={() => this.handleScrollToElement(this.workRef)}>work</Link> with really cool companies.
				</div>
				<div>
					<Emoji label="memo" emoji="📝" /> I <Link onClick={() => this.handleScrollToElement(this.writeRef)}>write</Link> about my experiences in design, development, design systems, & management.
				</div>
				<div>
					<Emoji label="incoming envelop" emoji="📨" /> I <Link href="http://readinglist.mattfelten.com/">share</Link> articles that I like.
				</div>
				<div>
					<Emoji label="present" emoji="🎁" /> I <Link href="/store">make</Link> fun little trinkets & whatnots.
				</div>
			</List>
		</Section>
	);

	caseStudies = () => (
		<Section title="Case Studies" ref={this.workRef} type="full" padding="small">
			<List type="reset" spacing={5} columns={4}>
				{caseStudies.map(({url, title, company, image}, i) => (
					<CaseStudy key={i} url={url} title={title} company={company} coverImage={image} />
				))}
			</List>
		</Section>
	);

	writing = () => (
		<Section title="Writing" ref={this.writeRef} type="two-col-list">
			<List type="reset" spacing={5} columns={2}>
				{mediumStories.map(({url, title, date}, i) => (
					<MetaLink key={i} url={url} title={title} meta={date} />
				))}
			</List>
		</Section>
	);

	speaking = () => (
		<Section title="Speaking" type="two-col-list">
			<List type="reset" spacing={5} className="mb4" columns={2}>
				{speakingEvents.map(({url, title, meta}, i) => (
					<MetaLink key={i} url={url} title={title} meta={meta} />
				))}
			</List>
			<Small>Send me <Link href="mailto:m@mattfelten.com">an email</Link> about speaking opportunities.</Small>
		</Section>
	);

	render() {
		return(
			<Page>
				{this.intro()}
				{this.caseStudies()}
				{this.writing()}
				{this.speaking()}
			</Page>
		)
	}
};
