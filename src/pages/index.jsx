import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Emoji, Link, ListReset, MetaLink, SEO } from '../components';
import { readibleDate } from '../utils';

const Wrapper = styled.div`
	font-size: ${props => props.theme.fontSize3};
`;

const Section = styled.section`
	margin-top: ${props => props.theme.spacing9};
`;

const Intro = styled.p`
	margin-top: ${props => props.theme.spacing4};
	margin-bottom: ${props => props.theme.spacing8};
`;

const Headline = styled.h2`
	font-size: ${props => props.theme.fontSize3};
`;

const CustomList = styled(ListReset)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0 -8px;

	li {
		flex: 0 0 auto;
		width: 100%;
		padding: 0 8px;
	}

	@media (min-width: 1450px) {
		flex-direction: row;

		li { width: 50%; }
	}
`;

const SpeakingCTA = styled.p`
	font-size: ${props => props.theme.fontSize2};
`;

export const Homepage = ({data}) => {
	const workSection = useRef();
	const writeSection = useRef();
	const scrollToWork = () => workSection.current.scrollIntoView({behavior: 'smooth'});
	const scrollToWriting = () => writeSection.current.scrollIntoView({behavior: 'smooth'});

	return (
		<Wrapper>
			<SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

			<Section>
				<Intro>{data.site.siteMetadata.description}</Intro>
				<ListReset>
					<li>
						<Emoji label="flexed bicep" emoji="💪" /> I <Link href="#" onClick={(e) => {
							e.preventDefault();
							scrollToWork();
						}}>work</Link> with really cool companies.
					</li>
					<li>
						<Emoji label="memo" emoji="📝" /> I <Link href="#" onClick={(e) => {
							e.preventDefault();
							scrollToWriting();
						}}>write</Link> about my experiences in design, development, design systems, & management.
					</li>
					<li>
						<Emoji label="incoming envelop" emoji="📨" /> I <Link href="http://readinglist.mattfelten.com/">share</Link> articles that I like.
					</li>
					<li>
						<Emoji label="present" emoji="🎁" /> I <Link href="/store">make</Link> fun little trinkets & whatnots.
					</li>
				</ListReset>
			</Section>

			<Section ref={workSection}>
				<Headline>Case Studies</Headline>
				{data.work.edges &&
					<CustomList>
						{data.work.edges.map(({ node }) => (
							<li>
								<MetaLink
									key={node.fields.slug}
									to={node.fields.slug}
									title={node.frontmatter.title || node.fields.slug}
									underline={false}
								/>
							</li>
						))}
					</CustomList>
				}
			</Section>

			<Section ref={writeSection}>
				<Headline>Writing</Headline>
				{data.posts.edges &&
					<CustomList>
						{data.posts.edges.map(({ node }) => (
							<li>
								<MetaLink
									key={node.fields.slug}
									to={node.frontmatter.url || node.fields.slug}
									title={node.frontmatter.title || node.fields.slug}
									meta={readibleDate(node.fields.date)}
									underline={false}
								/>
							</li>
						))}
					</CustomList>
				}
			</Section>

			<Section>
				<Headline>Speaking</Headline>
				{data.speaking.edges &&
					<CustomList>
						{data.speaking.edges.map(({ node }) => (
							<li>
								<MetaLink
									key={node.fields.slug}
									to={node.frontmatter.url}
									title={node.frontmatter.title || node.fields.slug}
									meta={node.frontmatter.description}
									underline={false}
								/>
							</li>
						))}
					</CustomList>
				}
				<SpeakingCTA>Send me <Link href="mailto:m@mattfelten.com">an email</Link> about speaking opportunities.</SpeakingCTA>
			</Section>
		</Wrapper>
	)
};

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
