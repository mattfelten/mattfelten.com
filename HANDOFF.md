# Checklist deck — continue here

Scaffolding for finishing this deck. **Delete it when the deck ships** — the durable
record is `ai-brain/work/mission/2026-09-07-checklist-component/`, and anything here
worth keeping should be moved there first.

Branch `worktree-checklist-component-deck`, pushed. Check `git log` for where it
actually stands rather than trusting a number written here.

---

## What this is

A portfolio deep dive on the Checklist component, for an interview.

**The role:** a designer who works in code, on the design team, whose main
responsibility is the company's design system. Day to day he still partners with an
engineer. He is **not** trying to present as a full engineer, so do not shape the
deck as though the job is to prove that. Company deliberately not named here.

It is the third segment of a longer portfolio review: personal intro, Anvil design
system overview, **this**, outro. About 18 minutes inside a 45-minute slot with
questions.

**Audience:** hiring manager (head of design), senior frontend engineer, senior
product designer.

**The takeaway Matt wants:** depth of craft on one small thing. Specifically that he
found and explored things nobody would find by looking, and that he cares about
pixels. Not systems judgment, not spec rigour. Craft.

**It follows an Anvil deck** that already covers design systems at breadth including
system-level accessibility, so this is the zoom-in counterpart. Nothing here
re-explains design systems, and the accessibility beat must read as component depth.

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
| Slides | `_slides/`, 31 of them, numbered |
| Narrative | `_outline.md` — **edit this before slides** |
| Benches | `prototypes/*.html`, 7 of them, plus `index.html` and `rejections.html` |
| Reasoning record | `~/Projects/personal/ai-brain/work/mission/2026-09-07-checklist-component/` |
| Deck conventions | `src/pages/decks/CLAUDE.md` — **read this first** |

Run it: `npx astro dev --port 4399` from the worktree.
Deck at `/decks/2026-checklist-component/`. Explorations index at
`/decks/2026-checklist-component/prototypes/`.

---

## Next, in order

### The docs page is built, and slide 29 is no longer a placeholder

`docs.html` in the deck folder, served at `/decks/2026-checklist-component/docs`.
Matt's call, 2026-09-14: build a real one. The component is not in Anvil and the
Mission Control design system has very little documentation, so this is the chance to
make a good one even though no other component has one.

It is the bench token set, a sticky sidebar, and ten sections: Example, Anatomy,
Props, Data, States, Accessibility, Usage, Rules, Open questions. **The Example is the
argument.** Seven named states across the top, one live specimen, and the address that
produced it printed underneath with the frame plumbing dimmed. Picking a state
rewrites both. The States table links into it by the same names.

**No sibling artifacts.** No `docs.md`, no `spec.json`. Matt scoped it to an iframe in
the deck and nothing else consumes it, so the machine-readable claim is made by the
page rather than by files nobody fetches.

Its own params, and the reasoning is in the file:

| Param | Effect |
|---|---|
| `scale` | Multiplies the **root font size**. Every size on the page is rem. Deliberately not `zoom`: see the bug class below. The bench inside gets the same number through its own `scale`, which is zoom, but inside its own document. |
| `compact` | `1` is slide mode. Drops the two prose blocks and trims the canvas to 32rem. |
| `state` | Opens on a named state. Unknown values fall back to the default. |

Slide 29 embeds it at `?compact=1&scale=1.1&state=default#example`, 1640 x 800.
**Those numbers are measured, not chosen.** See the sizing note below.

### The rest of the presentation

Personal intro, the Anvil case study, and outro slides, so the 45 minutes exists as
one deck rather than a middle segment. That is a different frame from this work:
assembly and pacing across four segments, not pixels inside one component.
`2026-portfolio-review` and `2024-anvil-case-study` are the decks to read first.

---

## The deck as it stands: 31 slides, 15 running live, no placeholders

```
 1 Title                        17 — Multiplayer —
 2 Original Feature       [live] 18 Multiplayer            [live]
 3 From Feature to Component     19 Lock the row      [R]   [live]
 4 Final Component        [live] 20 Highlight the row [R]   [live]
 5 — Editing —                   21 — Accessibility —
 6 Editing                [live] 22 Accessibility
 7 Editor as an Object [R][live] 23 Accessible Implementation
 8 Field with Edges    [R][live] 24 — The Component —
 9 — Reordering —                25 Component Structure   (diagram)
10 Reordering             [live] 26 Component API         (table)
11 Rows shift out of the way [R] 27 Object Types          (code)
12 Row follows cursor     [R]    28 Implementation        (code)
13 — Nested Items —              29 Docs                  [live]
14 Nested Items           [live] 30 Next Steps
15 Unlimited Nesting  [R][live]  31 Thank you
16 Parent ticks its children [R]
```

Every embed is **800px tall with `fit=center`**, which is the ceiling: the slide is
1080 with 80px padding and the body centres on 600, so 800 lands 200..1000, 28px
clear of the header. **Slides 7 and 8 stay top-aligned** because they exist to show
the list being pushed down, and centring halves that movement.

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

**Four more from building the docs page, all found by driving it:**

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
