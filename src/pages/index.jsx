import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import { Emoji, Link, SEO } from '../components';
import { readibleDate } from '../utils';

export const Homepage = ({data}) => {
	const workSection = useRef();
	const writeSection = useRef();
	const scrollToWork = () => workSection.current.scrollIntoView({behavior: 'smooth'});
	const scrollToWriting = () => writeSection.current.scrollIntoView({behavior: 'smooth'});

	return (
		<>
			<SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

			<div className="mt6">
				<p className="mt4 mb6">{data.site.siteMetadata.description}</p>
				<ul type="reset" spacing={5}>
					<li>
						<Emoji label="flexed bicep" emoji="💪" /> I <a href="#" onClick={(e) => {
							e.preventDefault();
							scrollToWork();
						}}>work</a> with really cool companies.
					</li>
					<li>
						<Emoji label="memo" emoji="📝" /> I <a href="#" onClick={(e) => {
							e.preventDefault();
							scrollToWriting();
						}}>write</a> about my experiences in design, development, design systems, & management.
					</li>
					<li>
						<Emoji label="incoming envelop" emoji="📨" /> I <a href="http://readinglist.mattfelten.com/">share</a> articles that I like.
					</li>
					<li>
						<Emoji label="present" emoji="🎁" /> I <a href="/store">make</a> fun little trinkets & whatnots.
					</li>
				</ul>
			</div>

			<div ref={workSection}>
				<h2>Case Studies</h2>
				{data.work.edges.map(({ node }) => (
					<List
						title={node.frontmatter.title || node.fields.slug}
						link={node.fields.slug}
						key={node.fields.slug}
					/>
				))}
			</div>

			<div ref={writeSection}>
				<h2>Writing</h2>
				{data.posts.edges.map(({ node }) => (
					<List
						title={node.frontmatter.title || node.fields.slug}
						link={node.frontmatter.url || node.fields.slug}
						description={readibleDate(node.fields.date)}
						key={node.fields.slug}
					/>
				))}
			</div>

			<div>
				<h2>Speaking</h2>
				{data.speaking.edges.map(({ node }) => (
					<List
						title={node.frontmatter.title || node.fields.slug}
						link={node.frontmatter.url}
						description={node.frontmatter.description}
						key={node.fields.slug}
					/>
				))}
				<p>Send me <a href="mailto:m@mattfelten.com">an email</a> about speaking opportunities.</p>
			</div>
		</>
	)
};

const List = ({key, link, title, description}) => (
	<div key={key}>
		<h3>
			<Link to={link} data-link={link}>
				{title}
			</Link>
		</h3>
		{description && <small>{description}</small>}
	</div>
);

export const query = graphql`
	query {
		site {
			siteMetadata {
				description
			}
		}
		work: allMdx(filter: {fields: {collection: {eq: "work"}}}) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
					}
				}
			}
		}
		posts: allMdx(sort: {fields: [fields___date], order: DESC}, filter: {fields: {collection: {eq: "post"}}}) {
			edges {
				node {
					fields {
						slug
						date
					}
					frontmatter {
						title
						url
					}
				}
			}
		}
		speaking: allMdx(sort: {fields: [fields___date], order: DESC}, filter: {fields: {collection: {eq: "speaking"}}}) {
			edges {
				node {
					fields {
						slug
						date
					}
					frontmatter {
						title
						url
						description
					}
				}
			}
		}
	}
`

export default Homepage;
