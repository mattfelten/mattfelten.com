# Design System Portfolio — Slide Deck Outline

The whole 45 minutes, in three segments: about me, the Anvil design system at breadth, and the
Checklist component at depth. 36 slides, 8 of them running live.

**Timing, and the two segments are paced very differently on purpose.**

| Segment | Slides | Target |
|---|---|---|
| About Me | 1 to 6 | about 3 min |
| Anvil Design System | 7 to 18 | about 13 min |
| Checklist Component | 19 to 35 | about 10 min |
| Thank you | 36 | — |

**There is no Closing section** (Matt, 2026-09-15). It used to be an agenda line, a TOC
interstitial and a Why me slide. Announcing a closing section buys nothing: the room can see
the deck ending. And Why me asked the panel to take a claim on trust one slide after Next Steps
had just shown the work. The reflection beat still lands twice, in What I'd Do Differently and
in Next Steps, both inside the work rather than after it. The deck ends on Next Steps and then
thanks the room.

That is roughly 28 minutes of talking, which leaves a lot of room for questions. Anvil is diagram slides
talked over for a minute each. Checklist is short slides with live prototypes driven for twenty
to thirty seconds. Do not try to even them out.

**Anvil is deliberately allowed to run.** Matt will time a rehearsal and cut from there rather
than trimming in advance on an estimate.

**The shape of the argument.** Anvil is the system at breadth, so the room has design systems on
the table before the component depth means anything. Checklist is the zoom-in counterpart:
nothing in it re-explains design systems, and its accessibility beat has to read as component
depth rather than as the system-level policy Anvil already covered. Accessibility deliberately
lands twice, once at system level on slide 14 and once inside one component on slide 29.

What they should conclude from the Checklist segment specifically: depth of craft on one small
thing. That I found and explored things nobody would find by looking, and that I care about
pixels.

**Edit this file before touching any `.astro`.** What was cut on the way here, and why, is
recorded at the bottom so it is not lost.

`[DRIVE]` marks a prototype I actually operate in front of them.

**Numbers here are deck positions, and the slide files use the same numbers.** The gaps in
`_slides/` are the TOC interstitials, which are rendered inline in `index.astro`.

---

## Slide 1 — Title

Matt Felten. Design System Portfolio.

## Slide 2 — Contents

TOC, nothing active. The whole shape in one look before it starts.

## Slide 3 — About Me

TOC interstitial.

## Slide 4 — Hey, I'm Matt

Twenty years in design, nine managing teams mostly as player-coach, Pasadena, wife and a four
year old, and recently golf. Keep it short. This is the only slide that is not about work and it
should feel like it.

## Slide 5 — Work History

Five roles with logos and dates, and eleven earlier years as a footnote. Do not narrate the list.
The one thing worth saying out loud is the shape: design lead, then manager, then director, then
back to building. That was a choice, and it is the choice that makes me a design engineer rather
than a director who used to code.

## Slide 6 — Design Principles

Five principles. Read two, not five. "Incrementally correct" and "think big, work small" are the
two the rest of this deck actually demonstrates, so name those and move.

---

## Slide 7 — Anvil Design System

TOC interstitial.

**The Anvil segment has an argument, and it is ordered around it.** The technical problem was
solvable. The harder one was cultural: getting two disciplines to trust the same system. Slide 11
states the decisions that followed from that, 12 to 16 are the evidence, and 17 and 18 are the
reflection. Do not present this as a tour of what Anvil contained.

## Slide 8 — What is ServiceTitan? `[ANVIL]`

Fifteen seconds. Software for tradespeople: plumbers, electricians, HVAC technicians. The scale
is the only thing that matters here, because it is what let three competing UI frameworks coexist
for years without anyone treating it as a problem.

## Slide 9 — Overview `[ANVIL]`

What it became. Adoption, ROI, Figma and code numbers on the left, the docs site on the right.
71% of 32 teams, 385 users, 37 contributors, 5.3M a year, 0.16% detach rate.

The numbers are here to earn the right to spend the next ten minutes on process. Do not read
them out. **Tell the all-hands story over them instead:** leadership launched a new product at a
company all-hands, people in the chat called out how polished it looked, and the whole thing was
built from design system components. Nobody mentioned the design system. They did not need to.
That is what winning looks like for infrastructure work.

## Slide 10 — Prior Art `[ANVIL]`

Where it started. The audit that mapped every unique pattern across the products and made the
inconsistency impossible to ignore. **This is what got the project funded**, and that is the line
worth saying.

Kickoff is not a slide, so say its findings here: thirteen interviews across design, engineering,
product, marketing, sales and QA, and three answers that kept coming back. Very little
consistency across applications. No alignment on scope or solution. No process for making or
distributing a change.

## Slide 11 — Key Decisions `[ANVIL]`

The spine, stated rather than implied. Walk the list out loud, top to bottom. The checkmarks are
there so the room can see how far through you are.

The first four are architecture and get paid off by slides 12 to 15. The last four are how it
stayed alive, and only Adoption gets a slide of its own.

Linger on **nothing in the system is permanent**, because it is the one that pays off twice: it
is why multiple frontend libraries were allowed to coexist, and slide 17 comes back to it. Worth
noting that it held up better than expected when Figma displaced Sketch.

## Slide 12 — Code Architecture `[ANVIL]`

How it was built and distributed to engineers. The diagram is the answer, said over rather than
read. This is the evidence for code being the source of truth.

## Slide 13 — Figma Libraries `[ANVIL]`

The same question answered for designers, and the evidence that design assets stayed in sync.
Deliberately the same shape and treatment as slide 12, so the pair reads as one answer to two
audiences without a slide saying so.

## Slide 14 — Accessibility `[ANVIL]`

What the system guaranteed so that teams did not have to. This is the policy view: baked in,
colour contrast, the rest. Say that a system can be accessible and a page can still fail, because
slide 29 is where that gets paid off inside one component.

## Slide 15 — Documentation `[ANVIL]`

The first look at the components themselves rather than the machinery around them. The section
list is the point: purpose, anatomy, variations, accessibility, content guidelines, real
examples.

It is also the one artifact where both disciplines meet on the same page, which is what code
being the source of truth buys you.

## Slide 16 — Adoption `[ANVIL]`

The invisible work, and the whole case that a design system is more than its components.
Adoption with no mandate, in three scopes: a pilot team, then champions and training, then the
org-wide supports.

Release communications live here now rather than on their own slide. The line: **a design system
that ships components without a communication layer is just a repo.** Contribution is told here
too, carried by "Contribution Docs" and "Design & Code Review" in the Organization column.

This is the Service and Go-to-market layers, one slide before either has a name.

## Slide 17 — What is a design system? `[ANVIL]`

The model, placed last because it explains the segment they just watched rather than setting it
up. Artifacts, Platform, Service, Go-to-market.

Map it back out loud. Code Architecture and Figma Libraries were Platform. Accessibility and
Documentation were Artifacts. Adoption was Service and Go-to-market at once. **The point: most
people build the first layer and stop.**

Two things to tell over it:

**Every part of every layer has to be removable.** A new design tool, a better framework, React
to Svelte. We deleted the entire html-sketchapp to Abstract to Sketch pipeline when Figma won,
and I would build it again, because manual sync does not scale. The reason that cost a pipeline
instead of the system is slide 11: code was the source of truth, so the design tool was
replaceable by construction.

**Systems within systems.** Teams shipped their own libraries for what was not systemized yet and
could change those freely. Core was reviewed. Those libraries were the source material for what
got promoted up when it earned it. That is layering one level out, which is why it belongs here.

Governance is deliberately not on this slide (Matt, 2026-09-14). It was a band crossing all four,
and the reasoning held, but it was a fifth idea competing with the four the slide is named for.
It is still the honest answer if anyone asks who decides what changes.

## Slide 18 — What I'd Do Differently `[ANVIL]`

Two, and both are real.

**Migration is not Guaranteed.** Migration was never a technical problem. Teams would not spend
roadmap on consistency when there was no mandate and nothing else in it for them. Better tooling
would not have fixed that. The grid becoming layout is the example: the cost landed on teams who
got nothing out of paying it.

Say the diagnosis out loud, because the title only names the symptom: **adoption stalls on
priority, not difficulty.**

**Plan for Maintenance.** Design Technologists were the right hire and still are. But stretches of
the work were framework upgrades and bug fixes, specialist platform work done expensively by
generalists. I would have pushed for dedicated engineering support years earlier.

In the language of the slide before it: the Platform layer needed its own staffing and never got
it.

---

## Slide 19 — Checklist Component

TOC interstitial.

## Slide 20 — Original Feature `[DRIVE]`

The list as it ships right now. You can tick an item and you can add one. That is all. You
cannot reorder them, you cannot edit the text after you have written it, and if two people are
in the list at once neither of them knows.

Do not point out the completed item. It is failing contrast and that pays off on slide 29, and
the point only lands if nobody was told to look.

## Slide 21 — From Feature to Component

Six things in one breath: reorder, edit in place, sub-items, several people at once, the two
tickets they arrived as, and Runbooks turning up as a second consumer. One instance is a
feature. Two is a pattern.

## Slide 22 — Final Component `[DRIVE]`

Everything at once. Tick something, drag something, click into the text and type. Collapse the
parent, drag it, watch its children come with it, then open the row menu on a child.

Worth saying here: everything you are about to see is a prototype I built, not a mockup I drew.
That is why every decision after this has a number attached to it instead of an opinion.

## Slide 23 — Multiplayer `[DRIVE]`

A small avatar hanging off the corner of the row. Deliberately not next to the author tag on the
right, because the row already has one face on it and a second one beside it reads as
co-authorship rather than as presence.

Say nothing for the first few seconds. Let them watch a row they did not touch start changing.

This is the one feature Final Component cannot show on its own, which is why it is the only one
that kept a slide.

---

**Three rejections, then the whole shelf.** The deck used to spend eight slides on eight dead
ends, one each. These three are the arguments worth hearing in full; the other five are on the
index on slide 27, which says how much was explored far better than five more slides would.

## Slide 24 — Rows shift out of the way `[REJECTED]` `[DRIVE]`

The nice version, where the list opens a gap as you drag. It only works when every row is the
same height. These are markdown, so they are not. A tall item displacing short ones makes the
list jump, and the gap you were aiming at slides out from under the cursor.

## Slide 25 — Lock the row `[REJECTED]` `[DRIVE]`

The obvious answer to two people editing: let the first one hold it. Drive it, try to type in
the row somebody else is in.

Two reasons, and say both. A lock is not a design, it is scaffolding. It is what you build when
you have given up on merging, and it teaches a habit you untrain the moment real collaborative
editing lands. And the dim that announces the lock measures 2.67 to 1 against the 4.5 required.
No opacity value saves it, because the treatment weakens the text and the text has to stay
readable. The affordance fails on its own terms even if the rule were right.

## Slide 26 — Editor as an Object `[REJECTED]` `[DRIVE]`

The first version opened an editor as an object. Bordered field, toolbar, Save and Cancel. It
works, and it announces that you have entered a mode. Editing a list item is not a mode, it is
typing. Watch what it does to the rows underneath.

## Slide 27 — What We Explored `[DRIVE]`

The explorations index, live, rising off the bottom edge. This is the evidence, all of it, and
it is the slide to slow down on.

Organised by **decision** rather than by which bench a switch lives in. Every option that got
built is listed under the question it answers, and the chosen one is marked in words rather than
by colour. Thirty-two questions, thirty of them with a decision marked.

Scroll it. Open one if they ask. The two questions with nothing marked are honest rather than
unfinished: the framing question about the hover-only handle is answered in prose by the round
underneath it, and the fine-pointer half of read-only is genuinely still open.

No dates anywhere on that page, deliberately. When the work happened is mine to say out loud.

---

## Slide 28 — Accessibility

Section title.

## Slide 29 — Accessibility

Eight areas, not eight decisions. Heading over answer: colour contrast, target size, keyboard,
pointer gestures, touch, screen reader, focus visible, reduced motion.

Read the headings if the room is quiet. The point is that somebody scanning them can see nothing
was skipped, rather than reading decisions and working out which areas they cover.


## Slide 30 — The Component

Section title.

## Slide 31 — Component Structure

The diagram. Three nested levels, one colour each: the Checklist, a ChecklistRow, and the parts a
row is assembled from, with the composer in its own colour because it is not a row. A sub-row is
drawn as a real child with exactly the same parts, which is the one-level ceiling and the
nesting-as-capability argument in one picture.

## Slide 32 — Component API

The props, which are the decisions restated as a surface. Point at `nesting`: false withdraws the
gesture, the affordance, and flattens the data.

The ones that are not props are the ones a consumer should not be able to get wrong.

## Slide 33 — Implementation

Loops and Runbooks side by side. Runbooks passes nothing but its items.

Every capability is off by default, so the second consumer opts into none of them and the
call collapses to one line. That is the argument at its sharpest: a consumer that declines a
capability should not have to know the capability exists, and here it demonstrably does not.

Say that out loud rather than putting it on the slide.

## Slide 34 — Docs

The component's documentation page, running rather than pictured. The whole page from the masthead
down to the specimen fits the frame, so there is nothing to scroll to before it makes its point.
The contents list on the right is only "On this page": no product name and no component name above
it, because this is one page inside a system rather than a site of its own.

The part that is not in every design system's docs is the specimen. Seven named states across the
top, one live one underneath, and an Open button that goes to exactly the state on screen. Pick a
state, then click Open. Say what it buys while you are doing it: named values only, unknown values
ignored rather than guessed at, and every state addressable, so an agent can open a state and look
at it instead of reading a paragraph describing one. Machine-readable by construction rather than
by a second export nobody maintains.

Source beside it is deliberately dead. A real docs site would carry it, and disabled is the honest
version of a control that does not go anywhere yet.

Say the caveat before the engineer does. The vocabulary grew on the prototypes and documents the
states the component has; it is not generated from the component today. The claim is that the
property should carry into the docs, not that these are generated docs.

Scroll it if anybody asks. Props, Data and States are the surface, Accessibility is the audit, and
the States table links back into the Example by name.

## Slide 35 — Next Steps

Four open threads, named rather than stated, in reading order across two columns.

**Autosave failures**, the only correctness problem left. **Character-level merging**: it merges
at save, not per keystroke, a CRDT is the destination, and it is backend work because the text is
one string that the activity stream, emails and search all expect to stay one. **The multiplayer
lock**, and whether merging removed the reason for one. **More nesting levels**, a ceiling I chose
rather than one anybody asked for.

The correctness problem first because it is the one that would keep me up, then the two
multiplayer threads together with merging before the lock, since the lock question only exists
once merging is on the table. The ceiling last: it is the one I would most like to be told I am
wrong about, which is the right note to hand back to the room.

Ending on open questions rather than a scoreboard, because a scoreboard invites nodding and these
invite the panel to push.

---

## Slide 36 — Thank you

Leave them the explorations index: every question, every variation, and the chosen one marked in
words.

---

## What was cut, and why

Kept here so nothing gets rebuilt by accident.

**The arbitration scorecard, and the eight arrangements.** Three gestures want the same pixels,
the prototype scores all eight ways of arranging them, and not one keeps all three. It was cut
because the scorecard panel is not legible at presentation scale. Measured: it renders about
1195 pixels tall against a usable slide budget of roughly 780. The same is true of the contrast
table at about 2090. Both are working instruments, not slide graphics. The argument survives in
Matt's mouth on slides 24 and 29, and both panels are still reachable from the explorations
index.

**The long opening.** Role, where this lives, and the four asks each had their own slide. They
are now compressed into slides 20 to 22. The deck is a component deep dive following an Anvil
overview, so the context does not need re-establishing.

**Prior versions of this file described 37 slides.** That was the pre-restructure narrative.
The feature-section shape replaced it.
