import React, { useRef } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import {
	CaseStudy,
	Emoji,
	Link,
	ListReset,
	MaxWidth,
	MetaLink,
	SEO,
} from '../components';
import { readibleDate } from '../utils';

const Section = styled(MaxWidth)`
	font-size: ${props => props.theme.fontSize3};
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
	margin: 0 -16px;

	li {
		flex: 0 0 auto;
		width: 100%;
		padding: 0 16px;
	}

	@media (min-width: 1450px) {
		flex-direction: row;

		li {
			width: 50%;
		}
	}
`;

const CaseStudyList = styled(CustomList)`
	@media (min-width: 830px) {
		flex-direction: row;

		li {
			width: 50%;
		}
	}

	@media (min-width: 1450px) {
		li {
			width: 33.333%;
		}
	}
`;

const SpeakingCTA = styled.p`
	font-size: ${props => props.theme.fontSize2};
	margin-top: ${props => props.theme.spacing4};
`;

const IntroListLI = styled.li`
	display: flex;
	max-width: 28em;

	> *:first-child {
		margin-right: ${props => props.theme.spacing2};
	}
`;

const IntroListItem = ({ emoji, label }) => (
	<IntroListLI>
		<Emoji emoji={emoji} />
		<span>{label}</span>
	</IntroListLI>
);

const SpeakingList = styled(ListReset)`
	font-size: ${props => props.theme.fontSize2};
	margin-bottom: 2em;
	@media (min-width: 900px) {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		grid-auto-rows: auto;
		grid-gap: 1.5em;
	}
`;

const SpeakingListItemLi = styled.li`
	display: flex;
	flex-direction: column-reverse;
	@media (min-width: 900px) {
		display: contents;
	}
`;

const SpeakingListLabel = styled.span`
	margin-top: ${props => props.theme.spacing1};
	@media (min-width: 900px) {
		margin-top: 0;
		white-space: nowrap;
	}
`;

const SpeakingListItem = ({key, title, url, meta}) => (
	<SpeakingListItemLi key={key}>
		<SpeakingListLabel>{meta}</SpeakingListLabel>
		<span><Link href={url}>{title}</Link></span>
	</SpeakingListItemLi>
);

export const Homepage = ({ data }) => {
	const workSection = useRef();
	const writeSection = useRef();
	const scrollToWork = () =>
		workSection.current.scrollIntoView({ behavior: 'smooth' });
	const scrollToWriting = () =>
		writeSection.current.scrollIntoView({ behavior: 'smooth' });

	return (
		<div>
			<SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

			<Section>
				<Intro>{data.site.siteMetadata.description}</Intro>
				<ListReset>
					<IntroListItem
						emoji="💪"
						label={
							<>
								I{' '}
								<Link
									onClick={e => {
										e.preventDefault();
										scrollToWork();
									}}
								>
									work
								</Link>{' '}
								with really cool companies.
							</>
						}
					/>
					<IntroListItem
						emoji="📝"
						label={
							<>
								I{' '}
								<Link
									onClick={e => {
										e.preventDefault();
										scrollToWriting();
									}}
								>
									write
								</Link>{' '}
								about my experiences in design, development,
								design systems, & management.
							</>
						}
					/>
					<IntroListItem
						emoji="📨"
						label={
							<>
								I{' '}
								<Link href="http://readinglist.mattfelten.com/">
									share
								</Link>{' '}
								articles that I like.
							</>
						}
					/>
					<IntroListItem
						emoji="🎁"
						label={
							<>
								I <Link href="/store">make</Link> fun little
								trinkets & whatnots.
							</>
						}
					/>
				</ListReset>
			</Section>

			<Section ref={workSection}>
				<Headline>Case Studies</Headline>
				{data.work.edges && (
					<CaseStudyList>
						{data.work.edges.map(({ node }) => (
							<li key={node.fields.slug}>
								<CaseStudy
									url={node.fields.slug}
									title={
										node.frontmatter.title ||
										node.fields.slug
									}
									company={node.frontmatter.company}
									coverImage={
										node.frontmatter.cover.publicURL
									}
								/>
							</li>
						))}
					</CaseStudyList>
				)}
			</Section>

			<Section ref={writeSection}>
				<Headline>Writing</Headline>
				{data.posts.edges && (
					<CustomList>
						{data.posts.edges.map(({ node }) => (
							<li key={node.fields.slug}>
								<MetaLink
									href={
										node.frontmatter.url || node.fields.slug
									}
									title={
										node.frontmatter.title ||
										node.fields.slug
									}
									meta={readibleDate(node.fields.date)}
									underline={false}
								/>
							</li>
						))}
					</CustomList>
				)}
			</Section>

			<Section>
				<Headline>Speaking</Headline>
				{data.speaking.edges && (
					<SpeakingList>
						{data.speaking.edges.map(({ node }) => (
							<SpeakingListItem
								key={node.fields.slug}
								url={node.frontmatter.url}
								title={
									node.frontmatter.title ||
									node.fields.slug
								}
								meta={node.frontmatter.description}
							/>
						))}
					</SpeakingList>
				)}
				<SpeakingCTA>
					Send me <Link href="mailto:m@mattfelten.com">an email</Link>{' '}
					about speaking opportunities.
				</SpeakingCTA>
			</Section>
		</div>
	);
};

export const query = graphql`
	query {
		site {
			siteMetadata {
				description
			}
		}
		work: allMdx(
			sort: { fields: frontmatter___year, order: DESC }
			filter: { fields: { collection: { eq: "work" } } }
		) {
			edges {
				node {
					fields {
						slug
					}
					frontmatter {
						title
						company
						cover {
							publicURL
						}
					}
				}
			}
		}
		posts: allMdx(
			sort: { fields: [fields___date], order: DESC }
			filter: { fields: { collection: { eq: "post" } } }
		) {
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
		speaking: allMdx(
			sort: { fields: [fields___date], order: DESC }
			filter: { fields: { collection: { eq: "speaking" } } }
		) {
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
`;

export default Homepage;
