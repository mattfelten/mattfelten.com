import React from 'react';
import { CaseStudy, Emoji, Link, List, MetaLink, Section, Small } from '../../components';
import { caseStudies, mediumStories, speakingEvents } from './';
import { setTitle } from '../../utils';

export class Home extends React.Component {
	constructor(props) {
		super(props)
		this.handleScrollToElement = this.handleScrollToElement.bind(this);
        this.workRef = React.createRef()   // Create a ref object
        this.writeRef = React.createRef()   // Create a ref object
	}

	componentDidMount() {
		setTitle('Home');
	}

	handleScrollToElement = (ref) => {
		ref.current.scrollIntoView({behavior: 'smooth'});
	}

	intro = () => (
		<Section title="Matt Felten" className="mt6">
			<p className="mt4 mb6">Designer focusing on design systems and leading teams. Cat dad who plays games, rides bikes, and has browser tabs full of dinner recipes.</p>
			<List spacing={5}>
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
			<List spacing={5} columns={4}>
				{caseStudies.map(({url, title, company, image}, i)=>(
					<CaseStudy key={i} url={url} title={title} company={company} coverImage={image} />
				))}
			</List>
		</Section>
	);

	writing = () => (
		<Section title="Writing" ref={this.writeRef} type="two-col-list">
			<List spacing={5} columns={2}>
				{mediumStories.map(({url, title, date}, i)=>(
					<MetaLink key={i} url={url} title={title} meta={date} />
				))}
			</List>
		</Section>
	);

	speaking = () => (
		<Section title="Speaking" type="two-col-list">
			<List spacing={5} className="mb4" columns={2}>
				{speakingEvents.map(({url, title, meta}, i)=>(
					<MetaLink key={i} url={url} title={title} meta={meta} />
				))}
			</List>
			<Small>Send me <Link href="mailto:m@mattfelten.com">an email</Link> about speaking opportunities.</Small>
		</Section>
	);

	render() {
		return(
			<div>
				<a href="//old.mattfelten.com" style={{
					background: '#000',
					color: '#fff',
					display: 'block',
					fontSize: '16px',
					padding: '1em',
					textAlign: 'center',
					textDecoration: 'none'
				}}>I'm building a new site. It's live to encourage me to finish. See the old one at http://old.mattfelten.com</a>

				{this.intro()}
				{this.caseStudies()}
				{this.writing()}
				{this.speaking()}


				<Section>Footer</Section>
			</div>
		)
	}
};
