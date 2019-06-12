import React from "react";
import { Page } from '../../../../modules';
import { Asset, Link, Section, SubSection, WorkHeader } from '../../../../components';
import { setTitle } from '../../../../utils';
import {
	homepage,
	inspiration,
	logoOptions,
	logoSketches,
	logoStyleTiles,
	logoWebsiteMock,
	productLine,
	styleTiles,
} from './imgs';

export class Rebrand extends React.Component {
	static title = 'Rebrand';
	static company = 'DreamHost';
	static year = '2014';
	static slug = 'dh-rebrand';
	static path = '/work/dreamhost/rebrand';

	componentDidMount() {
		setTitle(Rebrand.title);
	}

	render() {
		return (
			<Page>
				<Section>
					<WorkHeader
						title={Rebrand.title}
						company={Rebrand.company}
						year={Rebrand.year}
						projectRole={<><div>Visual Design</div><div>Web Development</div></>}
						team={<><a href="https://twitter.com/JBprocreative">Jason Brown</a><a href="https://twitter.com/LinaLingonberry">Lina Johansson</a></>}
					/>

					<p>We decided DreamHost needed a facelift. Working with our Creative Director, another designer, and a handful of stakeholders we refreshed our logo as well as contracted new photography and completely rebuilt our public-facing website from the ground up.</p>
				</Section>

				<Section title="Planning">
					<p>The first thing we started with was a group excercise to figure out what DreamHosts values are. We did a basic card-sort with about 200 different attributes. After a couple rounds of choosing, voting, and narrowing the field, we ended up getting down to four brand values we wanted to highlight with all the work.<br /><strong>Authentic, Passionate, Community, and Inventive</strong></p>

					<p>Using those values, we spent some time coming up with a personality of our brand. If DreamHost was a person, how would they sound and act? Some of the adjectives we decided on here were light-hearted, self-aware, conversational.</p>
				</Section>

				<Section title="Style Tiles">
					<p>Once we understood the soul of our brand from the previous excercises, we were able to hole-up in a conference room for a few days and work on the aesthetics. We decided it would be smart to separate out logo generation from the rest of the visual style, at least at the beginning, so we started with making style tiles. We did small, quick typography and color studies to hone in on what aesthetics match with the brand we were trying to build.</p>

					<SubSection>
						<Asset src={styleTiles} alt="style tiles" />
						<Asset src={logoStyleTiles} alt="logo style tiles" />
					</SubSection>
				</Section>

				<Section title="Logo">
					<p>In tandem with the style tile work, we started working on the actual DreamHost mark. Since there were three of us, we were able to cover a lot of range of ideas with our logo. I opted to explore the Inventive side of our values and spent time digging into the forward-thinking and optimistic design systems of science fiction. We also used this time to mock up potential website layouts to match with these logo ideas. You can read more about this on the <Link href="https://www.dreamhost.com/blog/2014/08/22/the-redesign-of-dreamhost-com-how-the-new-logo-came-about/">DreamHost blog</Link>.</p>

					<SubSection>
						<Asset src={inspiration} alt="inspiration" />
						<Asset src={logoSketches} alt="logo sketches" />
						<Asset src={logoOptions} alt="logo options" />
						<Asset src={logoWebsiteMock} alt="logo website mockup" />
					</SubSection>
				</Section>

				<Section title="Product Categories">
					<p>Another thing we had to figure out with our stakeholders was how to treat our product line under this new branding scheme. There are a lot of paths we could take. Company name primary, with product secondary. Product name primary with (or without) company name. Separating products into consumer vs developer category groups.</p>

					<SubSection>
						<Asset src={productLine} alt="Product Line" />
					</SubSection>
				</Section>

				<Section title="Website Design">
					<p>Once we had our logo close to finalized, we shifted focus to the website, the inenvitable first-use of our shiny new logo and brand. I led the team and stakeholders in a couple more <Link href="http://bradfrost.com/blog/post/establishing-design-direction/">design exercises</Link> that I shamelessly stole from Brad Frost. The goal here was to get everyone thinking about our website right at the beggining. Then we can take all the good group thinking back to our design-cave and polish it.</p>

					<p>My personal focus shifted as well. I moved from primarily working on visual design to doing all the web development for the new site. I did do spot-design on a few tricky parts, like the homepage call-to-actions that you can see below, and navigational experiments, but most of my role from this point on was code.</p>

					<SubSection>
						<Asset src={homepage} alt="homepage" />]
					</SubSection>
				</Section>

				<Section title="Website Development">
					<p>I had a couple personal goals for this part. One was I wanted to focus on load speed. The previous version of dreamhost.com was build on WordPress which needed plugins and configuration to be able to have decent load times. Another goal I had was to have a reliable development/staging/production workflow. WordPress also doesn't do this great either. Thirdly, I wanted to start with some modern front-end tools, like Sass, to speed up development time. Fourth, I wanted to make sure we were designing responsively from the beginning and that we're designing a componentized system instead of a series of unique pages. I could force that goal since I'd be doing all the front-end development.</p>

					<p>After looking through a number of systems, including WordPress, Jekyll continually checked off all the requirements in my lists. Even some I didn't realize I wanted. It's a static-site generator so it would be ripping fast. No database queries to worry about here. It has Sass compilation built-in. It can completely be managed through a git repository. It was perfect.</p>

					<p>I had never set up a Jekyll site before but it was way easier than I thought it would be. I worked closely with one of our system engineers to get a proper development/staging/production workflow sorted out. I helped the other designers get the site cloned down to their laptops and the dependencies installed so we can all work on the site locally. And then hammered through coding the site as fast as the other designers could design it.</p>
				</Section>

				<Section>
					<p>This project took just under a year from kickoff to website launch. We've done a ton of reworking too since then. It was my first time redoing a brand from the inside so it was a tremendous learning experience. I learned that I enjoy leading people through group design exercises. I learned a lot about selling my work. I learned that bringing people into the design process early is never a bad thing.</p>
				</Section>
			</Page>
		);
	}
}
