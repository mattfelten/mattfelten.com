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

### 1. The docs page (slide 29 is the last placeholder)

Matt's interest is specifically **agent-readable component docs**, which is the most
differentiating idea in the deck. The recommendation on the table has been to show
what already exists rather than build a docs page from scratch: the bench param
vocabulary is machine-readable by construction. Named values only, unknown values
ignored rather than guessed, and every decision addressable by a URL that opens the
component in exactly that state. Matt has not chosen between that and a real docs
page. Ask before building.

### 2. The rest of the presentation

Personal intro, the Anvil case study, and outro slides, so the 45 minutes exists as
one deck rather than a middle segment. That is a different frame from this work:
assembly and pacing across four segments, not pixels inside one component.
`2026-portfolio-review` and `2024-anvil-case-study` are the decks to read first.

---

## The deck as it stands: 31 slides, 14 live benches, 1 placeholder

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
13 — Nested Items —              29 Docs           [PLACEHOLDER]
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

**Not written down elsewhere:** the automation browser tab runs backgrounded. Real key and
mouse events are often not delivered and `requestAnimationFrame` never fires. Synthetic
pointer events *do* drive drag code and are fine for that; they do **not** move focus, so
`:focus-visible` behaviour cannot be reproduced there.

---

## Open, and Matt's to decide

1. **The docs slide.** Show the param vocabulary, or build real docs. See above.
2. **`edit-mechanics` gates Delete on `item.who === ME`**, so rows owned by other people
   show no Delete on slides 6 to 8. Every other bench offers it unconditionally. It is a
   deliberate permission model in the round that was about permission, left alone rather
   than flattened.
3. **C1's screen-reader panel still argues "nested list plus a labelled twisty wins"**,
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
