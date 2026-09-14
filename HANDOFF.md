# Checklist deck — continue here

Paste this into a new session. Everything below is current as of commit `98c812c`
on `worktree-checklist-component-deck`, working tree clean, 34 commits ahead of main,
all pushed.

---

## What this is

A portfolio deep dive on the Checklist component, for a design systems interview.
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
| Slides | `_slides/`, 28 of them, numbered |
| Narrative source of truth | `_slides/../_outline.md` — **edit this before slides** |
| Benches | `prototypes/*.html`, 7 of them, plus `index.html` and `rejections.html` |
| Reasoning record | `~/Projects/personal/ai-brain/work/mission/2026-09-07-checklist-component/` |
| Deck conventions | `src/pages/decks/CLAUDE.md` — **read this first** |

Run it: `npx astro dev --port 4399` from the worktree.
Deck at `/decks/2026-checklist-component/`. Explorations index at
`/decks/2026-checklist-component/prototypes/`.

## State: 28 slides, 14 live benches, 2 placeholders

The deck is a case study: before → why it is a component → where we landed → one
section per feature (Editing, Reordering, Nested items, Multiplayer), each opening
with a title slide, showing the settled answer, then the directions ruled out →
accessibility → the system → docs → where it landed.

Everything is real and driveable **except two slides**, and neither is really
engineering work:

**`24-Primitives.astro`** — needs a diagram of one row exploded into its four parts
(`ListRow`, `EditableText`, `SortableList`, `PresenceMarker`). Four names in a grid
does not explain what any of them is for. **Matt has said he still does not fully
buy the four primitives**, so this wants a conversation before anything gets drawn.
Slide 25 (`TheRowArbitrates`) is the follow-on that makes 24 worth keeping: the
primitives do not compose on their own, the row arbitrates between them, and there
are three things it deliberately refuses to decide.

**`26-Docs.astro`** — either build a real docs page or reframe the slide around the
bench param vocabulary, which is already machine-readable by construction: named
values only, unknown values ignored rather than guessed, every decision addressable
by a URL that opens the component in exactly that state. Matt's interest here is
specifically **agent-readable component docs**, which is the most differentiating
idea in the deck. Recommend showing what exists rather than building a docs page,
but it is his call.

Find them with `grep -rn Placeholder _slides/`. They render as loud dashed boxes.

## How Matt works, learned the hard way this session

**Slide density.** A slide is a subtitle and an image. The content lives in his
mouth. `2024-anvil-case-study/_slides/14-DesignDetails.astro` is one line. He
presents at roughly 20 seconds a slide, so a 15-minute segment is ~30 slides, not
12. Budgeting 80 seconds a slide produces dense slides that read as a document.
This is now written into `decks/CLAUDE.md`. **I got this wrong twice.**

**One idea per slide, and a rejected direction gets its own slide.** Lumping eight
dead ends into one "here is what we rejected" slide throws away the best evidence a
case study has.

**Outline before slides.** For anything non-trivial, write/edit `_outline.md` first
in the `## Slide N — Title` + narration-paragraph format and get it approved.

**No em dashes** in anything he presents. Benches are ASCII-only (they carry an
explicit charset; the build decodes entities while dev does not).

**Commit messages are long on purpose** and carry reasoning, not a restatement of
the diff. No Co-Authored-By, no "Generated with" footers.

## Bug classes that have bitten repeatedly — check these first

**1. Rebuilding a list destroys what was in it.** This has caused four separate
bugs: focus lost after reorder, the presence avatar re-animating, the edit field
vanishing, the lifted-row class being wiped. Rule: repaint in place, move nodes,
never `innerHTML =` a list that holds focus or state. If you must, restore
synchronously in the same turn.

**2. `scale` is CSS `zoom`, so there are two pixel spaces.**
`getBoundingClientRect` returns *zoomed* viewport pixels; `style.top`, `translateY`
and anything written back into style are *unzoomed* local pixels. Mixing them puts
things out by exactly the zoom factor, the error is multiplicative so it reads as
random, and **it is invisible at scale 1** — which is why it survived in the reorder
bench for ages and got inherited into c4. Rule: `clientY` compares against rect
values, `offsetTop`/`offsetHeight` go into style, never cross them. **Test any drag
or overlay at a scale other than 1.**

**3. Reveal builds every slide up front and hides the ones it is not on.** Hidden
slides have zero-width iframes but *keep their timers*. Anything animated must sleep
when `document.documentElement.clientWidth === 0`, and must not start until it is
non-zero. Do **not** use `document.hidden` for this — every iframe shares the tab's
visibility, so it cannot distinguish the slide you are on from the twenty you are
not. Size is the only signal.

**4. Measure drag geometry on the first move, not on pointerdown.** Pressing a
handle blurs whatever field was focused, which changes that row's height, so
measuring in the same tick captures geometry that is about to be wrong.

**5. Fork a bench, never write one from memory.** c4 is the only bench without a
"forked from" lineage and it silently lost four settled decisions: it shipped the
*rejected* hairline field as its default edit treatment, dropped the presence
avatar, lost the collapsed drag proxy, and got the drag maths wrong twice. If a
behaviour is settled, copy the implementation, not the idea of it. **Porting a
fragment is the same mistake as rewriting.**

**6. Verify by driving it.** Every real bug in this project was found this way and
would have been missed by reading. Also: a passing check in one environment is not
enough — the automation tab runs backgrounded, so real key and mouse events often
are not delivered, `requestAnimationFrame` never fires, and CSS transitions do not
advance. Several of my "findings" were measurement artefacts. Confirm before
reporting.

## Bench params you will need

Full vocabulary is in `ai-brain/.../prototypes/INDEX.md`. Recently added:

- **c4**: `before=1` (the as-shipped state), `handles=1` (pin drag handles visible),
  `nesting=off`, `nospec=1`, `show=audit|contrast`
- **c1**: `handles=1`, `deep=1` (five-level list, for the unlimited-nesting rejection)
- **presence**: `solo=1` (one list, somebody working from off screen, starts
  immediately)
- **mechanics**: `chrome=object` (the rebuilt R1 editor-as-object), `autoedit=1`
  (open a field on arrival)

All benches hide their `Checklist` header and open-count in embed mode — that was
bench framing leaking into the component.

## Open decisions Matt has not made

1. **The primitives diagram** (slide 24) — he does not fully buy the four primitives.
2. **The docs slide** (slide 26) — show the param vocabulary, or build real docs.
3. **Nesting drop refusal.** In the nesting bench, dragging a parent refuses 45% of
   the list, because a row with children cannot become a child. That rule is
   settled; what is not settled is that the interface communicates the refusal only
   by turning the line red and announcing it to a screen reader. Either make the
   refusal legible or revisit the rule. Flagged, not changed.
4. **Presence treatment vs focus.** Both wanted the left gutter. Focus moved to the
   row's own edge so the presence bar survives, but words remain the runner-up for
   presence and are the only treatment a screen reader gets for free.

## Suggested next step

A full read-through at presentation scale, slide by slide, driving each bench —
before touching 24 or 26. The deck has changed shape three times and has not been
walked end to end since. Time it: target 18 minutes.
