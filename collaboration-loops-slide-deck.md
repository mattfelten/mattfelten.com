# Collaboration Loops — Slide Deck Outline

## Slide 1 — Title

Collaboration Loops
Mission Cloud, 2025–2026

## Slide 2 — My role

Sole designer, working with one PM, nine engineers, and stakeholders across the company. From customer interviews in discovery to writing production React with engineers, I was involved in every phase. 14-month project.

## Slide 3 — The problem setup

Mission Cloud's Technical Account Managers run recurring check-ins each month across 30+ customers each. Every meeting meant pulling data from multiple third-party tools and manually assembling a slide deck or Google Doc. That process took up to five hours per customer. Then they'd do it all again the next month.

## Slide 4 — Lost history

Customers had no way to see what was discussed before. If a TAM transitioned a customer to a colleague, the history didn't follow. New hires on either side started from zero. The information and decisions from those meetings weren't tracked in a way anyone else at Mission, or on the customer's end, could get to.

## Slide 5 — One-sided reporting

The tools that existed treated these meetings as one-sided reporting events. What we needed was a space where both Mission's team and their customers could prepare, contribute, and look back together.

## Slide 6 — Problem Statement

Delivering Mission services involves coordination across many teams, tools, and touchpoints.

Today, key conversations and context are often spread out across siloed systems, making it harder for both customers and internal teams to stay aligned.

Without a central place to manage collaboration, it becomes challenging to maintain clarity and drive consistent follow-through.

## Slide 7 — Research quote

> "I've had customers tell me, we need to cut our AWS usage by 30% by the end of March, and if we don't, we're gonna have to start making cuts in other places. So how and where that's tracked right now? It's not. It's us telling the TAM internally and us trying in the next quarter saying, how is it looking? How's it going? And trying to do napkin math. All of it just lives in our heads."
> — Customer Success Manager, discovery session

## Slide 8 — Research quote

> "A former TAM told me when he left that once I deactivated his account, it would nuke the bookmark links. Because they were owned by him. The links were to his personal drive."
> — Technical Account Manager, discovery session

## Slide 9 — Research quote

> "Sometimes we have a meeting, but we would like to bring more value. Just by the customer telling us, okay, we want to talk about these topics. Something that can trigger an email to the customer. Hey, you're about to have this meeting in a week. What are the topics that you want to discuss? And then they can reply. And those topics will be added into the loop itself. Something to be more engaging. Not something that I'm going to create. But rather something that the customer wants to talk about."
> — Technical Account Manager, discovery session

## Slide 10 — Persona: Customer CTO

Goals: Confidence in their AWS environment. Fewer surprises.
Pain: "Every meeting starts from zero"

## Slide 11 — Persona: Technical Account Manager

Goals: Proactive cloud health reviews. Building long term trust.
Pain: "I rebuild the same slide deck every month."

## Slide 12 — Persona: Customer Success Manager

Goals: Align on goals. Drive service adoption.
Pain: "I can never find what we agreed to last quarter"

## Slide 13 — Design challenge framing

The obvious solution was a better template. A nicer slide deck, a structured doc, something easier to fill out before each meeting. We deliberately didn't build that.

## Slide 14 — Why not a template

A document is static. It captures a moment, then goes stale. What we needed was something that stayed alive between meetings, pulling fresh data from multiple systems, preserving what was decided last time, and giving customers a reason to come back and actually contribute. Add topics to the agenda before a meeting. Approve recommendations themselves. Make the space theirs too, not just something they're invited to view.

## Slide 15 — Three constraints

Three cards side by side:
- **Stay current** — The space had to stay up to date between meetings without anyone manually updating it.
- **Preserve history** — It had to capture what was true at the time of each conversation so nothing got rewritten in hindsight.
- **Serve both sides** — Two audiences with fundamentally different needs, sharing the same view, without feeling like two products stitched together.

## Slide 16 — Discovery

We started with workshops across internal teams and customers to understand what kept surfacing. The same problem came up in every conversation. Check-in prep was painful, the artifacts could be outdated if a meeting shifted, and the information from those conversations was effectively lost. Buried in an email thread, locked in one person's Google Drive, inaccessible to anyone who wasn't in the room.

Image: `imgs/affinity.png` — photo of discovery artifacts from workshops, sticky notes and affinity mapping of check-in topics and feature ideas.

## Slide 17 — Finding patterns

I collected 15-20 real meeting artifacts from TAMs and CSMs. The actual slide decks, Google Docs, and handwritten notes they were already using. Then I affinity mapped them, pulling apart the recurring building blocks that showed up across every customer relationship.

## Slide 18 — Blueprint concept

Those building blocks became the configurable sections in each loop. Cloud Score trends, open recommendations, case metrics, agenda items. The pattern was consistent enough to standardize but varied enough that rigid templates would fail. That is where the blueprint concept emerged. Structured enough to be useful out of the box, flexible enough that TAMs could tailor each loop to the customer relationship and tell the story they want.

Each TAM's presentation is their own narrative of their customer's AWS environment. They structure it however makes sense for that relationship. We support that.

## Slide 19 — Early explorations

Four early concept screenshots in a grid showing different arrangements of the loop structure, testing how building blocks from discovery could fit into a reusable, configurable format.

Images: `imgs/initial-1.png`, `imgs/initial-3.png`, `imgs/initial-2.png`, `imgs/initial-4.png`

## Slide 20 — The Product (section title)

Transition slide.

## Slide 21 — Full loop

Screenshot of a complete TAM check-in loop. Cloud Score trending, open recommendations, case metrics, agenda sections, and the activity feed, all in one view. This replaced a slide deck that was rebuilt from scratch every month.

Image: `imgs/full-loop.png`

## Slide 22 — Cloud Score widget

The Cloud Score widget pulls a month of trend data and surfaces actionable recommendations with approve, archive, and snooze actions inline. Live data that was previously copied and pasted from a separate tool.

Image: `imgs/cloud-score.png`

## Slide 23 — Configurable agenda

Video/screenshot of the configurable agenda. TAMs reorder sections and toggle blocks per customer, adapting the blueprint to each relationship without starting from scratch.

Video: `imgs/agenda.mp4`

## Slide 24 — Commenting and collaboration

Video/screenshot of commenting, tagging, and notifications. This is the layer that makes the collaboration real. Both sides can prepare before meetings and follow up after without leaving the platform.

Video: `imgs/text-editing.mp4`

## Slide 25 — Atlas

Screenshot of an internal tool showing an employee's full list of loops across customers, giving them a single starting point instead of navigating across tools.

Image: `imgs/atlas.png`

## Slide 26 — Key Decisions (section title)

Transition slide.

## Slide 27 — Blueprints not templates

Purpose-built blueprints with pre-loaded content and pre-wired data connections. Consistency across 30+ customers, faster onboarding than a blank canvas.

## Slide 28 — Live data that freezes

Widgets display current data while a loop is open, then snapshot when the meeting closes. You can see exactly what the environment looked like in February, not what it looks like today.

## Slide 29 — Two audiences, one view

TAMs and customers see the same loop. Not a stripped-down customer version and a full internal one. That forced every element to be legible to both audiences. Harder to build, but it's what makes the collaboration real.

## Slide 30 — Moments of connection

Every widget supports comments, tagging, and notifications. Both sides can prepare before meetings and follow up after. We kept asking ourselves where we could add another moment of connection.

## Slide 31 — What I learned (section title)

Transition slide.

## Slide 32 — One hammer, two nails

Midway through, my PM and I had a theory: we could collapse our three purpose-built blueprints into one flexible, general-purpose template. Easier to maintain, broader reach, obviously better on paper. It wasn't. Reactions were room-temperature. The concept was minorly helpful to everyone and perfectly helpful to no one. We pivoted back to specialized, focused blueprints, then descoped further to just TAMs and CSMs. Those blueprints got infinitely better the moment we stopped trying to make them work for everyone else.

## Slide 33 — Principle

Being mildly useful to a wide audience is worse than being deeply useful to a narrow one.

## Slide 34 — Designing for screen sharing

TAMs run customer meetings by sharing their screen. Loops would replace the content they'd historically pulled up, but the meeting format wasn't going away. So the product had to be safe to present by default, which was harder than it sounds when TAMs have internal notes and admin actions the customer shouldn't see.

## Slide 35 — Three approaches

I tried a two-view approach first, then tried pulling all loop management into a separate internal tool. Both created more surface area for mistakes or bounced TAMs between interfaces. Where I landed was simpler: one page that looks the same to everyone, with an actions dropdown on each widget. Same canvas, role-based actions.

## Slide 36 — Principle

The safest private view is the one that doesn't exist.

## Slide 37 — Every widget was its own project

When I sketched the first blueprint, I thought of widgets as containers. Standard rectangles holding standard data. They weren't. Cloud Score is a live data pull with trend logic and inline approve/archive/snooze. The agenda is a free-form editor with reorderable sections and per-customer toggling. Some widgets create content, some display it, some make the user pick what to show. I thought I was designing one feature with five sections. I was actually designing five features that happened to live in one shell.

## Slide 38 — Principle

A consistent surface can hide wildly different problems underneath.

## Slide 39 — Outcomes: Stats

98% prep time reduction
86% repeat customer views

The beta is still small, and I'm trying not to read too much into the numbers this early. But the customer signal has been strong and we've nearly doubled the size of the beta.

## Slide 40 — Outcomes: Quote

> "Before Loops, I had customers swear they never got the deck, or didn't even know we'd talked about something. Now everything we discussed lives in one place. I'd hate to give that up."
> — Technical Account Manager

## Slide 41 — Closing

The slide deck workflow is gone. The pattern works, and Mission's already asking what else we can do with it. I'm in discovery on five more blueprint types for other service teams, and on enhancements coming back from beta feedback.

More loops to close.
