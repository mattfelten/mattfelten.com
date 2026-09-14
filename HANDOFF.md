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
| Slides | `_slides/`, 28 of them, numbered |
| Narrative source of truth | `_slides/../_outline.md` — **edit this before slides** |
| Benches | `prototypes/*.html`, 7 of them, plus `index.html` and `rejections.html` |
| Reasoning record | `~/Projects/personal/ai-brain/work/mission/2026-09-07-checklist-component/` |
| Deck conventions | `src/pages/decks/CLAUDE.md` — **read this first** |

Run it: `npx astro dev --port 4399` from the worktree.
Deck at `/decks/2026-checklist-component/`. Explorations index at
`/decks/2026-checklist-component/prototypes/`.

## State: 29 slides, 15 live benches, 2 placeholders

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

## Conventions and recurring bugs: read these, do not re-derive them

Both live in files that outlast this handoff. Read them before writing anything.

**`src/pages/decks/CLAUDE.md`** — deck conventions. The one that matters most is slide density:
a slide is a subtitle and one thing, presented at roughly 20 seconds, so a 15-minute segment is
about 30 slides and not 12. Budgeting 80 seconds a slide is what produced two rebuilds. Also:
outline before slides, no em dashes, and the templates.

**`ai-brain/work/mission/2026-09-07-checklist-component/INDEX.md`**, under "Working conventions"
— the project's own rules and, more usefully, the six bug classes that have each bitten more than
once here. In short, so you know whether you need them:

1. Rebuilding a list destroys what was in it. Four separate bugs.
2. `scale` is CSS `zoom`, so there are two pixel spaces and mixing them is invisible at scale 1.
3. A hidden Reveal slide keeps its timers.
4. Measure drag geometry on the first move, never on pointerdown.
5. Fork a bench, never write one from memory. Porting a fragment is the same mistake.
6. Verify by driving it, and distrust a check that passed in only one environment.

**One thing that is not written down elsewhere, because it is about this tooling rather than the
work:** the automation browser tab runs backgrounded. Real key and mouse events are often not
delivered, `requestAnimationFrame` never fires, and CSS transitions do not advance. Several
apparent findings this session were measurement artefacts of exactly that. Confirm a surprising
result before reporting it.

## Bench params you will need

Full vocabulary is in `ai-brain/.../prototypes/INDEX.md`. Recently added:

- **c4**: `before=1` (the as-shipped state), `handles=1` (pin drag handles visible),
  `nesting=off`, `nospec=1`, `show=audit|contrast`
- **c1**: `handles=1`, `deep=1` (five-level list, for the unlimited-nesting rejection)
- **presence**: `solo=1` (one list, somebody working from off screen, starts
  immediately)
- **mechanics**: `chrome=object` (the rebuilt R1 editor-as-object), `autoedit=1`
  (open a field on arrival)
- **c3**: `autocollide=1` (stage the collision on arrival, because embed mode hides the
  rail and the other person is only drivable from there), `where=different` (the
  non-overlapping edit; default is the overlapping one, which is the case worth showing)

All benches hide their `Checklist` header and open-count in embed mode — that was
bench framing leaking into the component.

## Open decisions Matt has not made

1. **The primitives diagram** (slide 24) — he does not fully buy the four primitives.
2. **The docs slide** (slide 26) — show the param vocabulary, or build real docs.
3. **Nesting drop refusal** — dragging a parent refuses 45% of the list, and the
   interface only says so in colour. Reasoning and the measurement are in
   `design-direction.md` under the C1 findings.
4. **Presence treatment vs focus** — both wanted the left gutter. Also in
   `design-direction.md`.

## The read-through has been done

Walked slide by slide, 2026-09-13. What it found:

**Timing is fine.** About 17 minutes estimated against the 18 target, so there is a
little slack but not much. The risk is the 15 live embeds: every one of them invites
driving, and driving all 15 is what would blow the budget. Only five are meant to be
operated at length.

**The deck builds clean and every deep link is live.** All 14 unique bench URLs were
checked param by param against each bench's own allowed list. Every param is read and
every value is recognised. Nothing is silently ignored.

**Merging was missing, and has been added as slide 21.** Slide 20 rejects the lock and
nothing said what replaced it, which leaves the section unresolved on a question the
engineer on the panel will certainly ask. `c3-concurrency-bench` was built and unused.
It needed `autocollide=1` to be usable in a slide, because embed mode hides the rail and
the other person is only drivable from there. See below.

**The scorecard and contrast panels cannot go on slides, and this is now measured.**
Both were cut earlier on the note that the scorecard "was legible to me and to nobody
else", with a trigger to rebuild if the accessibility slide read thin. That trigger is
now closed: at presentation scale the audit panel renders about 1195px tall and the
contrast table about 2090px, against a usable slide budget of roughly 780px. They are
working instruments, not slide graphics. **Do not rebuild them as slides.**

## Left for Matt, because they are his call

1. **Slides 3 and 23 each carry six ideas in one grid.** That is against the deck's own
   rule, which is a subtitle and one thing, and slide 23 breaks it at the point the
   spine pays off. Splitting costs almost no time, because the words are already being
   said. The one that would most repay its own slide is the completed-item contrast
   callback, which is set up deliberately on slide 2 and currently lands as bullet four
   of six. Not done, because it is a content judgment and the deck has been reshaped
   three times already.
2. The two placeholders, 25 and 27, unchanged. Still conversations before they are work.
3. **The audit panel's verdict copy says "C2" and "the nesting round" on screen.** That
   is internal round vocabulary. It does not reach a slide any more, but the panel is
   linked from the explorations index, which is the thing handed to the panel afterwards.
