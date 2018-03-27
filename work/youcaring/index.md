---
layout: work
title: YouCaring
---

I joined [YouCaring](//youcaring.com) in 2018 to lead their Design System initiative. YouCaring was a crowdfunding platform built around social good and helping people in need raise money. They're also a B Corp. Based on my work with design systems at [DreamHost](/work/dreamhost/) and my love of Design Ops&trade;, this was a perfect role.

All projects need goals so I started by outlining what I was looking to do with this design system project.
- Consolidate six style guide documents and have one all encompassing document for design language
- Create Sketch symbols of design patterns for designers to easily use in design mocks
- Create React components of design patterns for engineers to easily import into application
- Make sure Sketch symbols and React components are in sync
- Build processes to get the team involved in contributing


## Interface Inventory
{: .section-title.mt6 }

<span class="flex-l">
	<span class="w-50">![Interface Inventory](interface-inventory.gif)</span>
	<span class="w-50">![Interface Inventory](interface-inventory.png)</span>
</span>

The first thing I did was make an [interface inventory](http://bradfrost.com/blog/post/interface-inventory/). We needed to baseline where we're at and truly understand the scope of the situation. Making one of these makes it very apparent where the biggest wins can be made.

## Documentation Site
{: .section-title.mt6 }
We need a place for all the design patterns and documentation to live. I dove into creating a public website that the design system could live at.

<span class="flex-l">
	<span class="w-50">[![Documentation Site](docs-example.png)](docs-example.png)</span>
	<span class="w-50">[![Documentation Site](docs-real.png)](docs-real.png)</span>
</span>

I started by making a mockup of the functionality I wanted the site to have (left). I wanted to be able to explain a component, show variations, explain why a variation would be used, have a live example using actual code, and implementation details for both designers and engineers to use the component. We took this mockup and interviewed designers and engineers to make sure it met needs and iterated.

From there, I started to build this page using static site generators and an example React component I made to use as a placeholder. I tried out a few to see which one would be the easiest to update. I tried [Jekyll](https://jekyllrb.com), [Assemble](http://assemble.io), [Metalsmith](http://www.metalsmith.io), [Gatsby](https://www.gatsbyjs.org), and a few others. The one that I moved forward with was [Catalog](https://www.catalog.style). Since I was going to be building React components, it integrates really well with those so I was able to use the same code to display and render code examples.

You can see the site live at [http://design.yc4.co](http://design.yc4.co).

## Sketch Library
{: .section-title.mt6 }
Now that the code end was buttoned up, I needed to make sure our designers were able to use the system. I initially created a sticker sheet with Sketch of the design components and kept it in the design teams shared Dropbox folder. This worked alright but I wanted something better. Right around this time there were a lot of apps and plugins coming out that offered some sort of syncing symbol library. I tried out a few but Invision's Sketch plugin called Craft Library seemed to be the most established at the time. Towards the end of the year, Sketch released a symbol library feature of their own, so I ported all the symbols I had made by then over to their native solution so that no extra plugins need to be installed to get to the Design System.

A video of this in action.
<video src="https://d3vv6lp55qjaqc.cloudfront.net/items/0N0n2Z2p2A3c452a2P0H/Screen%20Recording%202017-11-20%20at%2002.36%20PM.mov" controls style="display: block;height: auto;width: 100%;">Using Sketch Library</video>

One thing I will say, the tooling around creating reusable Sketch symbols is still a long way away from being useful. All the tools I mentioned &mdash; including Sketch's own solution &mdash; all have their own very specific workflows and their own blindspots. I didn't find one that worked perfectly, but this is a space I'm watching closely.

Invision has a design tool coming out that should have libraries built in. Figma also has design library support in their design tool. I also believe that design tools should have parity with code tools, so things like [Airbnb's React Sketchapp tool](http://airbnb.io/react-sketchapp/) and [Compositor](https://compositor.io) are making me excited to see design tools getting closer to the metal.

## Roadmap
{: .section-title.mt6 }
- ✅ Interface Inventory
- ✅ Code Tools / Documentation Site
- ✅ Design Library
- ✏️ Design System Roadmap

This is where I put my Product Manager hat on for a while. We have a list of buckets of components from the Interface Inventory, and I got a hold of the product and engineering roadmaps. The next step I took was merging those two into one list of components that had the highest impact and would fall naturally in line with existing projects.

![Design System Roadmap](roadmap.png)

This is an example of a couple months into the project. I kept this document updated every two weeks so that I knew my own progress on the system. It was public within the companies Google Drive so anyone could access it and see where the Design System was.

I stole this idea from [Nathan Curtis](https://medium.com/eightshapes-llc/system-features-step-by-step-e69c90982630) and used some emojis for labels. I made a [Google Sheet template](https://docs.google.com/spreadsheets/d/1wmQMPU1c49SkJDvKM7e8dtTVFeeHWLx3M0rumTZB6f4/edit?usp=sharing) if anyone else wants to use it.

## Creation & Implementation
{: .section-title.mt6 }
So now that I got through all the prework I needed to do, I was able to start building the system. I spent 6 months cranking through the roadmap, talking with the design team about components, designing variations, iterating, prototyping, stress testing, implementing, fixing bugs. I learned a lot, worked hard, [made mistakes](/2018/03/26/horizontal-vertical-thinking/), and built a system that was really streamlining the product design and development process. There's a lot I could dive into but I'll save some of that for blog posts.

Final stats
- 8 Colors
- 46 Shades
- 14 Type Styles
- 10 Components
- 5 Modules
- 2,000+ Responsive Functional CSS Classes
- 410 Commits

I love looking at variation artboards also

[![Alert Example](example-alerts.png)](example-alerts.png)
[![Button Example](example-buttons.png)](example-buttons.png)
[![Card Example](example-cards.png)](example-cards.png)

---

If anyone wants to chat design systems, feel free to give me a shout. Building better tools and processes for designers to focus on more important tasks is really important to me. I love talking about it.
