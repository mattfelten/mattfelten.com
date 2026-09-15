# Portfolio review deck — continue here

> **`2026-checklist-component` is now the whole 45 minutes: about me, Anvil, Checklist
> Component, close.** Matt's call, 2026-09-14: grow the Checklist deck rather than start a
> new folder. He was shown that the folder name would then lie and chose it anyway, so do
> not "fix" it. Only the folder says "checklist"; nothing on screen does.
>
> **Three strings, easy to confuse, all set deliberately:**
>
> | | | |
> |---|---|---|
> | `meta.title` | "Design System Portfolio" | The deck. DeckShell appends the byline, so the tab reads "Design System Portfolio → Matt Felten". **Do not add the name here too** or it prints twice. |
> | `<Deck title=>` | "Checklist Component" | The per-slide header fallback, which reaches **only** the Checklist content slides, so it is really the segment name. Renaming the segment is this one string. |
> | `toc[]` | "Checklist Component" | The interstitial. Keep identical to `<Deck title=>`. |


Scaffolding for finishing this deck. **Delete it when the deck ships** — the durable
record is `ai-brain/work/mission/2026-09-07-checklist-component/`, and anything here
worth keeping should be moved there first.

Branch `worktree-checklist-component-deck`, pushed. Check `git log` for where it
actually stands rather than trusting a number written here.

---

## What this is

**The whole 45-minute portfolio review, as one deck. 48 slides, 15 running live.**

| Segment | Slides | Target | Built from |
|---|---|---|---|
| About Me | 1 to 6 | about 3 min | `2026-portfolio-review` |
| Anvil Design System | 7 to 14 | about 11 min | `2026-anvil-15m` |
| Checklist Component | 15 to 44 | about 17 min | this deck's own work |
| Closing | 45 to 48 | about 2 min | `2026-portfolio-review` |

About 33 minutes of talking against roughly 10 of questions.

**Slide files are numbered by deck position.** The gaps in `_slides/` (2, 3, 7, 15, 45)
are the TOC interstitials, which `index.astro` renders inline. So slide 36 in the outline
is `36-AccessibilityAudit.astro`, with nothing to work out.

**Slides were copied, not imported**, and so were their images. `2026-anvil-15m` is a
delivered recorded talk and `2026-portfolio-review` is a separate deck; tuning the live
Anvil segment must not edit either of them. The one exception is the bench iframes, which
still point at `/decks/2026-checklist-component/prototypes/...` because that is where they
live.

**The Anvil slides carry an explicit `title="Anvil Design System"`.** Everything else
either passes its own title or hides the header, so the deck-level fallback only serves the
Checklist segment.

### The Checklist segment, which is still the heart of it

**The role:** a designer who works in code, on the design team, whose main
responsibility is the company's design system. Day to day he still partners with an
engineer. He is **not** trying to present as a full engineer, so do not shape the
deck as though the job is to prove that. Company deliberately not named here.

**Audience:** hiring manager (head of design), senior frontend engineer, senior
product designer.

**The takeaway Matt wants:** depth of craft on one small thing. Specifically that he
found and explored things nobody would find by looking, and that he cares about
pixels. Not systems judgment, not spec rigour. Craft.

**It follows the Anvil segment**, which covers design systems at breadth including
system-level accessibility, so this is the zoom-in counterpart. Nothing here
re-explains design systems, and the accessibility beat must read as component depth.
Accessibility lands twice on purpose: system level on slide 13, one component on slide 36.

**The real story:** two tickets under epic RND-4044, reorder (RND-4840) and editing
(RND-4765 P0), specced by Matt from prototypes and handed to DJ Bowers to build.
Backend had supported editing since RND-4123; the frontend never wired it. The
component is now an approved Mission Control design system initiative, on the
argument that Runbooks is a second consumer.

## Where things are

| | |
|---|---|
| Worktree | `~/Projects/personal/mattfelten.com/.claude/worktrees/checklist-component-deck` |
| Branch | `worktree-checklist-component-deck` (pushed) |
| Deck | `src/pages/decks/2026-checklist-component/` |
| Slides | `_slides/`, 45 files numbered by deck position, 48 slides |
| Narrative | `_outline.md` — **edit this before slides** |
| Benches | `prototypes/*.html`, 7 of them, plus `index.html` and `rejections.html` |
| Reasoning record | `~/Projects/personal/ai-brain/work/mission/2026-09-07-checklist-component/` |
| Deck conventions | `src/pages/decks/CLAUDE.md` — **read this first** |

Run it: `npx astro dev --port 4399` from the worktree.
Deck at `/decks/2026-checklist-component/`. Explorations index at
`/decks/2026-checklist-component/prototypes/`.

---

## Next, in order

### The docs page is built, and slide 43 is no longer a placeholder

`docs.html` in the deck folder, served at `/decks/2026-checklist-component/docs`.
Matt's call, 2026-09-14: build a real one. The component is not in Anvil and the
Mission Control design system has very little documentation, so this is the chance to
make a good one even though no other component has one.

It is the bench token set, a sticky contents list, and twelve sections: Example, When to
use, Anatomy, Props, Data, States, Keyboard, Accessibility, Install, Usage, Content,
Rules.

**Two things in there are plausible fiction, and both are Matt's call.** The **Figma
library** link in the masthead has `href="#"` on purpose: there is no library yet, and
the page does not say so. `#` rather than an empty href so a stray click during the talk
jumps to the top instead of reloading the page and wiping the selected state. And the
package name **`@mission-control/design-system`** is invented, following Anvil's
`@servicetitan/anvil` shape. **Swap it if the real one exists.**
**The Example is the argument.** Seven named states across the top, one live specimen,
and the address that produced it printed underneath with the frame plumbing dimmed.
Picking a state rewrites both. The States table links into it by the same names.

**The section list was checked against Anvil's own**, which is the taxonomy a head of
design will be matching against: `2024-anvil-case-study/18-Documentation.astro` lists
eleven. When to use, Content and Keyboard were the three real gaps, and all three had
settled answers already in `design-direction`, so none of it was invented.

**Deliberately still missing: Localisation, Related Components, Component Pairings.**
The system has too few neighbours for those to be anything but thin, and a thin section
costs more credibility than an absent one. Do not add them to complete the set.

**Open questions was cut** (Matt, 2026-09-14). It is the one section that is not a docs
convention: component docs tell you how to use the thing, they do not carry the author's
unresolved list. Nothing is lost, because slide 44 carries the same four threads.

**Watch for duplication when adding a section.** Two crept in this round and both were
caught by reading the rendered page rather than the diff: the Keyboard intro restated
two cells of the Accessibility audit, and Content restated the Rules line about
`checked` word for word.

**It is built to read as one page inside a larger system, not as a whole site**, and
three things do that job together. Do not undo them one at a time.

1. **The shell fills its frame.** No centring, no max width. A centred fixed-width
   shell leaves a gutter down each side, and that gutter reads as "this is the whole
   site and it has one component in it".
2. **The contents list is on the right.** On the left it reads as the site's primary
   navigation. On the right it reads as an on-page contents list, which is all it is.
3. **No product name and no component name above it.** "Mission Control / Checklist" in
   the sidebar was the single thing making it look like a site of its own. What is left
   is "On this page", and the component list a real docs site would carry is implied to
   be cropped off the left edge.

One status pill, not four chips. Consumers, nesting and server state are all stated
properly further down the page, and as chips they read as a spec sheet nobody asked
for. The eyebrow says **Component**, not "Design System": the page is a component, it
is not the system.

**No sibling artifacts.** No `docs.md`, no `spec.json`. Matt scoped it to an iframe in
the deck and nothing else consumes it, so the machine-readable claim is made by the
page rather than by files nobody fetches.

Its own params, and the reasoning is in the file:

| Param | Effect |
|---|---|
| `scale` | Multiplies the **root font size**. Every size on the page is rem. Deliberately not `zoom`: see the bug class below. The bench inside gets the same number through its own `scale`, which is zoom, but inside its own document. |
| `compact` | `1` is slide mode. Drops the two section prose blocks and most of the top padding, trims the canvas to 32rem, and lets the lede run wider so it sits on one line. The lede stays: Matt asked for it back. |
| `state` | Opens on a named state. Unknown values fall back to the default. |

**Slide 43 is a bleed, and it is the first iframe in the deck to be one.** The same move
`5-MCWhatIsMissionCloud` and `6-MCBeta` make with an image: absolutely positioned,
`left-1/2 -translate-x-1/2`, `bottom: -60px`, square bottom and `rounded-t-2xl` because
the bottom is not an edge, it is a cut. `BleedImage` cannot do it: its `bleed` prop only
sets an edge to offset 0, and going past one needs a negative offset written inline.

`?compact=1&scale=1&state=default`, **1400 x 930**, and **those numbers are measured**.
No `#example` anchor any more: at 1400 wide the whole page from the masthead down to the
address bar measures 864 at scale 1, so the frame shows all of it and the anchor is not
needed. 1400 is also what makes the shell fill with no gutters.

**Height is what caps the scale, and it is tighter than it looks.** With the lede back
the stack is 864 at scale 1 (66px spare) and 926 at 1.05 (4px spare). Scale 1 is not
timidity: 4px of slack on a 930px frame is one font-rendering difference away from the
address bar, which is the point of the slide, dropping out of the frame. The 5% of type
size is invisible; the failure is not.

### The rest of the presentation is assembled

Intro, Anvil and close are in. `2026-anvil-15m` was the source for Anvil, on Matt's
answer that **the panel has not seen that recorded talk**. It was built as answers to
five questions a panel asked, which is why it is the right breadth to set up the
Checklist zoom-in. `2024-anvil-case-study` was not used: it is ServiceTitan-era, it
would need cutting from 27 slides to about 12, and it overlaps the Checklist segment
on accessibility and documentation.

**What is genuinely left is rehearsal, not building.** Walk it end to end with a
timer. The two segment estimates that have never been spoken aloud are Anvil at 11
minutes and the intro at 3.

---

## The deck as it stands: 48 slides, 15 running live, no placeholders

```
 1 Title                        24 Reordering             [live]
 2 Contents            (TOC)    25 Rows shift out of the way [R]
 3 — About Me —        (TOC)    26 Row follows cursor     [R]
 4 Hey, I'm Matt                27 — Nested Items —
 5 Work History                 28 Nested Items           [live]
 6 Design Principles            29 Unlimited Nesting  [R][live]
 7 — Anvil —           (TOC)    30 Parent ticks its children [R]
 8 Overview                     31 — Multiplayer —
 9 Code Architecture            32 Multiplayer            [live]
10 Figma Libraries              33 Lock the row      [R]   [live]
11 Adoption                     34 Highlight the row [R]   [live]
12 Release Announcements        35 — Accessibility —
13 Accessibility  (system)      36 Accessibility  (component)
14 Grid to Layout Story [TELL]  37 Accessible Implementation
15 — Checklist Cmpt —  (TOC)    38 — The Component —
16 Original Feature     [live]  39 Component Structure   (diagram)
17 From Feature to Component    40 Component API         (table)
18 Final Component      [live]  41 Object Types          (code)
19 — Editing —                  42 Implementation        (code)
20 Editing              [live]  43 Docs                  [live]
21 Editor as an Object [R][live] 44 Next Steps
22 Field with Edges    [R][live] 45 — Closing —          (TOC)
23 — Reordering —               46 Why me?
                                47 Testimonials
                                48 Thank you
```

Slide 14 is a cue card with nothing on it but the prompt. It is the "what went wrong"
beat from the recorded talk, told live, and here it doubles as the handoff into
Checklist: the system got something wrong, which is the argument for going all the way
down into one component.

Every **bench** embed is 800px tall with `fit=center`, which is the ceiling: the slide
is 1080 with 80px padding and the body centres on 600, so 800 lands 200..1000, 28px
clear of the header. **Slides 21 and 22 stay top-aligned** because they exist to show
the list being pushed down, and centring halves that movement. **Slide 43 is the one
embed with no `fit=center` at all**, for the reason in the bug list below.

---

## Conventions and recurring bugs: read these, do not re-derive them

**`src/pages/decks/CLAUDE.md`** — deck conventions. Slide density above all: a slide is a
subtitle and one thing. Also: outline before slides, no em dashes, and the templates.

**`ai-brain/.../INDEX.md`** under "Working conventions" — the project's own rules and the bug
classes that have each bitten more than once. In short:

1. Rebuilding a list destroys what was in it.
2. **`scale` is CSS `zoom`, so there are two pixel spaces.** Seven appearances now. Every
   one has been something positioned or sized *outside* the zoomed subtree: the drop line,
   the row menu, the formatting bar, the drag proxy. Rect values are zoomed viewport px;
   `style` and `offsetTop` are unzoomed local px. **Never test a drag, overlay or indicator
   at scale 1 only.**
3. A hidden Reveal slide keeps its timers.
4. Measure drag geometry on the first move, never on pointerdown.
5. **Fork a bench, never write one from memory, and never port a fragment.** C4 was written
   from scratch and silently lost four settled decisions.
6. Verify by driving it, and distrust a check that passed in only one environment.

**Three more from this session, all cheap and all cost a render:**

- Astro's scoped styles do **not** reach elements built inside a `.map()` expression.
  A scoped class there matches nothing. Use Tailwind utilities instead.
- `rgb(var(--x))` with no alpha gets dropped; `rgb(var(--x) / 1)` parses. And a custom
  property holding rgb channels must be **space separated**, or the whole declaration is
  invalid at computed-value time and paints nothing, silently.
- The Astro dev server can serve **stale CSS** after many edits, and it showed two phantom
  bugs this session. If something looks wrong that should be fixed, hard-reload or restart
  the server before believing it.

**Five more from building the docs page, all found by driving it:**

- **"Which section is current" is not "which sections are visible".** The contents list
  asked which sections intersected a band across the top and took the first in document
  order. Click Accessibility, it scrolls so Accessibility starts at the top, the section
  above ends at the same y, so the outgoing section is still intersecting by its last
  pixel and wins on document order. The page said Accessibility and the nav said States.
  The right question is **which section have I most recently scrolled past the top of**:
  walk them in order and keep the last one whose top is above a line near the top of the
  viewport. Also: **update on the click itself**, because otherwise the clicked item is
  only right if a scroll event gets delivered, and see the next point for why that is not
  a safe assumption.

- **A hidden Reveal slide cannot resolve an anchor.** Its iframe is zero width at load, so
  the browser resolves `#example` against a viewport with no height and scrolls nowhere: the
  slide then opens at the top of the page with the part that matters below the fold. Same
  rule as the animated benches, and for the same reason. **Size is the only usable signal**,
  never `document.hidden`. Wait for `clientWidth > 0`, then scroll, and **once only**, or
  returning to a slide mid-demo yanks the page out from under the state just selected.
- **`fit=center` steals the room a downward gesture needs.** The row menu opens from the row
  and does not flip. Centring a 296px specimen in a 432px frame put Delete below the frame
  edge, on the last row, which is the one a presenter reaches for first. Top alignment is the
  bench default and it is the default for a reason. Measured: menu 153 tall, tallest specimen
  364, so the worst case ends at 521.
- **`width: 100%` on one table cell collapses every other column to min-content**, and a
  stated width on a sibling loses to it silently. "Pointer over the row." wrapped onto four
  lines and a 12rem rule on that column changed nothing. `table-layout: fixed` is the only
  thing that actually holds column widths.
- **Sizing a page into a slide binds on height, not width.** The docs page fits the 1640
  frame at scale 1.45 and the 800 height at 1.1, so height decides. Work it the other way and
  you get a page that looks right and clips the one row the slide exists to show.

**Scroll events are not delivered in the automation tab either.** Proven rather than
assumed this session: a probe listener attached from the console fired **zero** times
while `window.scrollY` went from 0 to 2600. That is the same trap as `requestAnimationFrame`
in the benches, one layer out, and it means **a scroll-driven behaviour cannot be verified
here at all**. Where something must be right, drive it with a click and assert the result,
or give it a second trigger that does fire.

**Not written down elsewhere:** the automation browser tab runs backgrounded. Real key and
mouse events are often not delivered and `requestAnimationFrame` never fires. Synthetic
pointer events *do* drive drag code and are fine for that; they do **not** move focus, so
`:focus-visible` behaviour cannot be reproduced there.

---

## Open, and Matt's to decide

1. **`edit-mechanics` gates Delete on `item.who === ME`**, so rows owned by other people
   show no Delete on slides 6 to 8. Every other bench offers it unconditionally. It is a
   deliberate permission model in the round that was about permission, left alone rather
   than flattened.
2. **C1's screen-reader panel still argues "nested list plus a labelled twisty wins"**,
   and the twisty no longer exists. That is an argument rather than a mechanism, so it was
   flagged rather than rewritten. It shows on the explorations index, not on a slide.

## Settled this session, so nobody re-opens it

- **Groups do not fold**, and the sub-item count went with them. Folding is a capability a
  list could opt into, and it would belong in the row menu.
- **The one-level ceiling is enforced by not offering, not by refusing.** No red targets
  anywhere: a row carrying children is shown only the gaps it can land in.
- **The Unlimited Nesting slide is a visual.** It can only unnest, and that is fine.
- **Target size stays 24.** It is the 2.5.8 minimum, clears AA on a fine pointer, and the
  touch case was answered in its own round.
- **`checked`, not `done`.** The component knows the box is ticked, not what it means.
- **Presence lives on `ChecklistItem`**, not as a list-level array to be joined.
- **Presence is the avatar alone. No gutter bar** (Matt, 2026-09-14, confirmed as a
  component decision). This supersedes the C4 settlement of a bar at 8.72:1: the two share
  the left gutter and read as two marks for one fact. Benches take `presence=none`.
  Loose end it creates: the avatar tracks focus, and the row treatment was what tracked
  words moving, so there is no longer a visual difference between somebody parked in a row
  and somebody typing in it.
