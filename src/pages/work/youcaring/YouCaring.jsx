import React from "react";
import { Page } from '../../../modules';
import { Asset, Emoji, Link, List, Section, SubSection, WorkHeader } from '../../../components';
import { setTitle } from '../../../utils';
import { docsExample, docsReal, exampleAlerts, exampleButtons, exampleCards, interfaceInventory, interfaceInventoryGif, roadmap } from './imgs';

export class YouCaring extends React.Component {
	static title = 'Design System';
	static company = 'YouCaring';
	static year = '2018';
	static slug = 'youcaring';
	static path = '/work/youcaring';

	componentDidMount() {
		setTitle(YouCaring.title);
	}

	render() {
		return (
			<Page>
				<Section>
					<WorkHeader
						title={YouCaring.title}
						company={YouCaring.company}
						year={YouCaring.year}
						projectRole="Project Lead"
					/>

					<p>I joined <Link href="https://youcaring.com/">YouCaring</Link> in 2018 to lead their Design System initiative. YouCaring was a crowdfunding platform built around social good and helping people in need raise money. They’re also a B Corp. Based on my work with design systems at <Link href="/work/dreamhost/">DreamHost</Link> and my love of Design Ops&trade;, this was a perfect role.</p>

					<p>All projects need goals so I started by outlining what I was looking to do with this design system project.</p>

					<List>
						<span>Consolidate six style guide documents and have one all encompassing document for design language</span>
						<span>Create Sketch symbols of design patterns for designers to easily use in design mocks</span>
						<span>Create React components of design patterns for engineers to easily import into application</span>
						<span>Make sure Sketch symbols and React components are in sync</span>
						<span>Build processes to get the team involved in contributing</span>
					</List>
				</Section>

				<Section>
					<p><strong>Interface Inventory</strong></p>

					<SubSection type="equal">
						<Asset src={interfaceInventoryGif} alt="Interface Inventory" />
						<Asset src={interfaceInventory} alt="Interface Inventory" />
					</SubSection>

					<p>The first thing I did was make an <Link href="http://bradfrost.com/blog/post/interface-inventory/">interface inventory</Link>. We needed to baseline where we’re at and truly understand the scope of the situation. Making one of these makes it very apparent where the biggest wins can be made.</p>
				</Section>

				<Section>
					<p><strong>Documentation Site</strong></p>

					<p>We need a place for all the design patterns and documentation to live. I dove into creating a public website that the design system could live at.</p>

					<SubSection type="equal">
						<Asset src={docsExample} href={docsExample} caption="Documentation Site Concept" />
						<Asset src={docsReal} href={docsReal} caption="Published Documentation Site" />
					</SubSection>

					<p>I started by making a mockup of the functionality I wanted the site to have. I wanted to be able to explain a component, show variations, explain why a variation would be used, have a live example using actual code, and implementation details for both designers and engineers to use the component. We took this mockup and interviewed designers and engineers to make sure it met needs and iterated.</p>

					<p>From there, I started to build this page using static site generators and an example React component I made to use as a placeholder. I tried out a few to see which one would be the easiest to update. I tried <Link href="https://jekyllrb.com/">Jekyll</Link>, <Link href="http://assemble.io/">Assemble</Link>, <Link href="http://www.metalsmith.io/">Metalsmith</Link>, <Link href="https://www.gatsbyjs.org/">Gatsby</Link>, and a few others. The one that I moved forward with was <Link href="https://www.catalog.style/">Catalog</Link>. Since I was going to be building React components, it integrates really well with those so I was able to use the same code to display and render code examples.</p>

					<p>You can see the site live at <Link href="http://design.yc4.co">http://design.yc4.co</Link>.</p>
				</Section>

				<Section>
					<p><strong>Sketch Library</strong></p>

					<p>Now that the code end was buttoned up, I needed to make sure our designers were able to use the system. I initially created a sticker sheet with Sketch of the design components and kept it in the design teams shared Dropbox folder. This worked alright but I wanted something better. Right around this time there were a lot of apps and plugins coming out that offered some sort of syncing symbol library. I tried out a few but Invision’s Sketch plugin called Craft Library seemed to be the most established at the time. Towards the end of the year, Sketch released a symbol library feature of their own, so I ported all the symbols I had made by then over to their native solution so that no extra plugins need to be installed to get to the Design System.</p>

					<p>A video of this in action.</p>

					<SubSection>
						<Asset src="https://d3vv6lp55qjaqc.cloudfront.net/items/0N0n2Z2p2A3c452a2P0H/Screen%20Recording%202017-11-20%20at%2002.36%20PM.mov" alt="Using Sketch Library" type="video" />
					</SubSection>

					<p>One thing I will say, the tooling around creating reusable Sketch symbols is still a long way away from being useful. All the tools I mentioned — including Sketch’s own solution — all have their own very specific workflows and their own blindspots. I didn’t find one that worked perfectly, but this is a space I’m watching closely.</p>

					<p>Invision has a design tool coming out that should have libraries built in. Figma also has design library support in their design tool. I also believe that design tools should have parity with code tools, so things like <Link href="http://airbnb.io/react-sketchapp/">Airbnb’s React Sketchapp tool</Link> and <Link href="https://compositor.io/">Compositor</Link> are making me excited to see design tools getting closer to the metal.</p>
				</Section>

				<Section>
					<p><strong>Roadmap</strong></p>

					<List>
						<span><Emoji label="check mark" emoji="✅" /> Interface Inventory</span>
						<span><Emoji label="check mark" emoji="✅" /> Code Tools / Documentation Site</span>
						<span><Emoji label="check mark" emoji="✅" /> Design Library</span>
						<span><Emoji label="pencil" emoji="✏️" /> Design System Roadmap</span>
					</List>

					<p>This is where I put my Product Manager hat on for a while. We have a list of buckets of components from the Interface Inventory, and I got a hold of the product and engineering roadmaps. The next step I took was merging those two into one list of components that had the highest impact and would fall naturally in line with existing projects.</p>

					<SubSection>
						<Asset src={roadmap} alt="Design System Roadmap" />
					</SubSection>

					<p>This is an example of a couple months into the project. I kept this document updated every two weeks so that I knew my own progress on the system. It was public within the companies Google Drive so anyone could access it and see where the Design System was.</p>

					<p>I stole this idea from <Link href="https://medium.com/eightshapes-llc/system-features-step-by-step-e69c90982630">Nathan Curtis</Link> and used some emojis for labels. I made a <Link href="https://docs.google.com/spreadsheets/d/1wmQMPU1c49SkJDvKM7e8dtTVFeeHWLx3M0rumTZB6f4/edit?usp=sharing">Google Sheet template</Link> if anyone else wants to use it.</p>
				</Section>

				<Section>
					<p><strong>Creation & Implementation</strong></p>

					<p>So now that I got through all the prework I needed to do, I was able to start building the system. I spent 6 months cranking through the roadmap, talking with the design team about components, designing variations, iterating, prototyping, stress testing, implementing, fixing bugs. I learned a lot, worked hard, <Link href="//medium.com/@mattfelten/horizontal-vertical-thinking-in-design-systems-7486409311c8">made mistakes</Link>, and built a system that was really streamlining the product design and development process. There’s a lot I could dive into but I’ll save some of that for blog posts.</p>

					<SubSection>
						<Asset src="https://d3vv6lp55qjaqc.cloudfront.net/items/3u3Y1R3G0G3F2U2T0s37/Screen%20Recording%202018-03-26%20at%2007.53%20PM.mov" alt="Design System" type="video" />
					</SubSection>

					<p>Final stats</p>

					<List>
						<span>8 Colors</span>
						<span>46 Shades</span>
						<span>14 Type Styles</span>
						<span>10 Components</span>
						<span>5 Modules</span>
						<span>2,000+ Responsive Functional CSS Classes</span>
						<span>410 Commits</span>
					</List>

					<p>I love looking at variation artboards also.</p>

					<SubSection>
						<Asset src={exampleAlerts} href={exampleAlerts} alt="Alert Example" />
						<Asset src={exampleButtons} href={exampleButtons} alt="Button Example" />
						<Asset src={exampleCards} href={exampleCards} alt="Card Example" />
					</SubSection>
				</Section>
			</Page>
		);
	}
}
