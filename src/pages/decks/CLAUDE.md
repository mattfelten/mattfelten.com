# CLAUDE.md — decks/

Guidance for any Claude session working inside `src/pages/decks/`.

## What this is

Private, unlisted presentations rendered with Reveal.js 6 via vanilla init.
Each deck is a self-contained folder with its own slides, images, and route.
Decks are interview-ready and meant to be **frozen in time** — once given,
their content should never drift because of edits elsewhere.

URL pattern: `/decks/<folder-name>`.

## Folder layout

```
src/pages/decks/
├── _shared/                          # Cross-deck infrastructure
│   ├── DeckShell.astro               # HTML shell, fonts, popup script, dotted-grid CSS
│   ├── Deck.astro                    # Reveal config + init, accepts a `title` prop
│   │                                 # that flows to slides via Astro.locals.deckTitle
│   ├── index.ts                      # Barrel: DeckShell, Deck, and every template
│   └── templates/                    # Rendering primitives (layouts with no content)
│       ├── Slide.astro               # Base primitive — every typed layout wraps this
│       ├── TocSlide.astro
│       ├── TitleSlide.astro
│       ├── TextBlockSlide.astro      # Grid of title+body text blocks (1/2/3 cols)
│       ├── CardGridSlide.astro       # 2x2 stats cards
│       ├── ImageSlide.astro          # centered image, constrained to padded body
│       ├── BleedImage.astro          # absolute-positioned image, touches slide edge(s)
│       ├── Card.astro                # primitive used by CardGridSlide
│       └── CardGrid.astro
└── <date>-<name>/                    # One deck. URL = /decks/<date>-<name>
    ├── index.astro                   # Route. Imports slides + composes order
    ├── images/                       # All assets. Frozen with the deck
    └── _slides/                      # Per-deck slide files, numbered
        ├── 1-Title.astro
        ├── 2-X.astro
        ├── ...
        └── index.ts                  # Barrel of slide exports
```

Path aliases (tsconfig.json):

- `@decks` → `_shared/index.ts` — the barrel
- `@decks/*` → `_shared/*` — e.g. `@decks/templates/Slide.astro`

## The Slide primitive

`_shared/templates/Slide.astro` is the canonical wrapper. Every typed layout
composes it. Direct use is fine when content doesn't fit a typed layout.

Props:

- `title?: string` — strong-color line. Falls back to deck-level title via
  Astro.locals.deckTitle (set by `<Deck title="…">`). Pass explicit string
  to override the deck-level fallback (used by About Me / Closing slides
  that don't share the deck identifier).
- `subtitle?: string` — subdued-color line. The section label.
- `hideHeader?: boolean` — suppress the auto-injected header entirely.
  Used by title, TOC, and closing slides.
- `align?: 'top' | 'center' | 'bottom'` — vertical alignment of body
  content. `top` keeps the header in flow with a 112px gap below it
  (header→body spacing matches Figma's About-Me section). `center` (the
  default) and `bottom` position the header absolutely so body content
  centers on the *actual slide midpoint*, not the smaller region below
  the header.
- `padding?: 'default' | 'wide'` — `default` = 80px all sides; `wide` =
  260px horizontal, 80px vertical (TOC's inset spec).

## Template cheatsheet

Reach for these in order:

- **One image, centered with padding** → `ImageSlide`
- **One image that touches a slide edge** → `<Slide><BleedImage … /></Slide>`
- **Title + body chunks in a grid** → `TextBlockSlide`
- **2×2 stat cards** → `CardGridSlide`
- **Anything else** → `<Slide>` directly with custom children

## BleedImage

`_shared/templates/BleedImage.astro` is the absolute-positioned image
primitive. Drop it inside any `<Slide>` — Slide's section is `relative`,
so this anchors to the slide boundary, not the padded content area.

Props:

- `src`, `alt` — required.
- `bleed?: Edge | Edge[]` — edges at offset 0 (touching the slide
  boundary). E.g. `bleed="bottom"` or `bleed={['right', 'bottom']}`.
- `inset?: Edge | Edge[]` — edges that sit 80px in (matching the slide's
  standard padding). Useful when you want an image anchored to a side
  without it touching the boundary.
- `class?: string` — usually width/height/object-fit. The image renders
  at natural size unless you constrain it (e.g.
  `class="h-[865px] w-[1416px] object-cover"`).

Behavior:

- Bleed overrides inset if both name the same edge.
- On an axis where neither side is anchored, the image centers via
  `left-1/2 -translate-x-1/2` (or vertical equivalent).
- The component already applies `m-0! max-h-none! max-w-none! rounded-none!`
  to defeat Reveal's `.reveal img` defaults — **don't duplicate**.
- Corners are always square. Rounding next to a slide edge looks off.

## TextBlockSlide

`_shared/templates/TextBlockSlide.astro` renders a grid of `title + body`
text blocks. Use it for principles, topic lists, anything where each cell
is a labeled chunk of explanatory text.

Props:

- `items: { title, body }[]` — body can contain HTML (rendered via
  `set:html`).
- `cols?: 1 | 2 | 3` — default 2.
- `bodySize?: '2xl' | '3xl'` — default `'2xl'`. Use `'3xl'` for slides
  with fewer items (more breathing room).
- `bodyColor?: 'subdued' | 'default'` — default `'subdued'`.
- `containerClass?: string` — Tailwind class on the grid container, e.g.
  `max-w-[773px]` for a 1-column constrained-width layout.
- `title`, `subtitle`, `align` — pass through to `Slide`.

## Conventions

These are **rules**, not suggestions.

### Naming

- `title` = strong line; `subtitle` = subdued line. Never invent terms
  like `superTitle`, `supertitle`, `sectionLabel`, etc.
- Slide files: `<order-number>-<PascalName>.astro` inside `_slides/`.
- New decks: `YYYY-<slug>/` at the top level (date prefix freezes the
  deck conceptually).

### Spacing

- **Always read spacing from Figma, never eyeball.** For every Figma
  slide you recreate, pull the exact spacing values via the Figma MCP
  (`get_metadata`, `get_design_context`). Apply those values precisely.
  Comment Figma source values inline when non-obvious.
- Do not default to a grid (e.g. "80px because the rest of the deck is
  80px"). Defaulting is just eyeballing one step removed.

### Styling

- **Tailwind first.** The deck's 24/30/36/48/72px scale matches
  `text-2xl/3xl/4xl/5xl/7xl` exactly. `--spacing-1` through `--spacing-12`
  (8/16/24/32/48/64/80/96/120/144/168/192 px) handle most gaps.
- For off-grid values, use arbitrary `[]` syntax (`p-[40px]`,
  `rounded-[20px]`).
- Only fall back to a component `<style>` block when Tailwind can't
  express something cleanly (CSS pseudo-elements, complex selectors).
- Colors: `text-strong`, `text-subdued`, `text-default`, `text-weak`,
  `text-accent`, `bg-background`. Use `/[0.06]` alpha syntax for opacity.
- Color scheme follows `prefers-color-scheme` via existing theme tokens.
  Never lock a deck to dark mode.
- **Card background is `bg-[#111827]/60` (hardcoded hex), not the theme
  token.** Every card in the Anvil deck uses this. The theme tokens
  produce a different look — don't reach for `bg-strong/[0.06]`.

### Prose

- **Never use em dashes (—).** En dashes (–) are fine for date ranges.
  Use periods, commas, or colons for thought breaks.
- Use smart quotes (`'` `"`) in slide content where the Figma source has
  them.

## How to think about a deck

Before any slides, decide what kind of deck this is and write the spine.
The format is honest: the deck reads thin if these aren't sharp upstream.

### Deck types

- **Case study deck.** One project, deep. The spine *is* the project,
  told roughly in the order experienced. `2024-anvil-case-study` is the
  reference.
- **Thesis deck.** One argument, 2 to 4 projects as evidence. The spine
  is the claim. Each project is sized by how strongly it supports the
  claim.

Both are mono-narrative. Not necessarily mono-project. One story spine
runs through every slide.

### Invariants (across all decks)

- Three acts: who you are, then the work, then reflection.
- TOC interstitials between sections. No standalone section banners.
- Subtitle carries each slide's identity. Title stays the deck name.
- Distill text into lists. Prose is rare and short when it appears.
- Images carry meaning when they can. Bleed them when they're hero
  content.
- Don't frame quotes. Don't include CTAs. Don't summarize for the
  audience.
- Slide count is editorial. What got slides is what mattered. What
  didn't get slides doesn't go in.

### Act I and Act III are kits, not templates

Assemble per deck. Bring what argues *this* deck specifically.

Act I parts:

- Title (always)
- Work History (almost always; credibility frame)
- Design Principles (when the audience cares about taste / approach)
- Management Principles (when the role or thesis involves leading teams)
- A custom "about" slide (when the deck has a specific framing to set up)
- TOC

Act III parts:

- Why Me (evergreen)
- Testimonials (optional; recurate per deck. Pick quotes that reinforce
  *this* deck's thesis, not generic ones.)
- Thank You (always)

### Planning a case study deck

Act II beats, in order:

1. Context. Company, role, team, timeline.
2. Kickoff. Interviews and challenges (the gap that motivated the work).
3. Prior art. Research or audit.
4. Personas. 1 to 4 named people with traits and pain points. Count is
   signal: one persona means a single-user story; four means the problem
   cuts across a constellation.
5. Problem statement. One sentence, load-bearing phrases highlighted.
6. Framework (optional). A diagram of your process. Use it when the
   methodology itself is the interesting move; skip otherwise.
7. Execution. One or two slides per framework phase, each anchored by an
   artifact.
8. Outputs. System principles, components, etc.
9. Results. Quantified outcomes (CardGridSlide pattern).

Results land at the *end* of Act II, not the middle. The argument builds
first, the payoff lands last.

### Planning a thesis deck

Act II beats:

1. Thesis statement. One sentence, load-bearing phrases highlighted.
2. Why this thesis (optional). What pattern the thesis is reacting to.
   Skip if it adds nothing.
3. Evidence. 2 to 4 project mini-arcs. Each project gets:
   - Context (1 slide). Stripped down vs. a case study deck.
   - The decision specific to the thesis (1 to 2 slides). For a
     "highest-leverage problem" thesis, this is the leverage decision.
     For a different thesis, a different beat.
   - What shipped and the outcome (1 slide).
4. Synthesis. One slide pulling the pattern across all the projects.

The variable beat in step 3 is the most important one to nail. Every
project section must demonstrate that specific verb.

Project depth signals which evidence is strongest. A 5-slide project is
your headline; a 2-slide project is a supporting example. Use the count.

### Pre-slide checklist

Before drafting any slide:

1. Write the thesis (or project arc) in one sentence. If you can't write
   it crisply, the deck isn't ready.
2. For thesis decks: list candidate projects. Cut anything that doesn't
   *demonstrate* the thesis (versus "happens to be a project you worked
   on").
3. For each surviving project, write the load-bearing decision in one
   sentence.
4. Decide depth per project.
5. Draft the synthesis (thesis) or results (case study) slide first. If
   you can't articulate the takeaway, iterate the thesis before drafting
   anything else.
6. Assemble Act I and III from the parts bin to set up and close *this*
   deck specifically.

The work is upstream of any template.

## How to build a new slide

1. Get the Figma reference. Either Matt links a node, or look up the
   slide in the deck's Figma frame (file key `zfvWcmnVN7pAwZ0eNg7nD7` for
   Anvil-era decks).
2. Call the Figma MCP: `get_screenshot` for visual, `get_metadata` for
   structure, `get_variable_defs` for design tokens. For complex layouts
   add `get_design_context`.
3. Read every spacing value from the Figma metadata. Note inline as code
   comments.
4. Pick a typed template if one fits. Otherwise use `<Slide>` directly
   with custom children in the slot.
5. Write the file at `<deck-folder>/_slides/<N>-<Name>.astro`. Numbered
   prefixes give visual ordering in the file tree.
6. Add the export to `<deck-folder>/_slides/index.ts`.
7. Add the component to `<deck-folder>/index.astro` in the right slot.
8. `npm run site:build` to verify. Visual verification is Matt's job —
   don't burn tokens checking dev-server output.

When inserting a new slide between existing ones, **renumber the trailing
slides** so the file-tree ordering keeps matching the deck flow (e.g.
when adding slides between 5 and 6, the old 6/7/8 become 7/8/9, or shift
further to leave room). Update `_slides/index.ts` and `index.astro`
imports accordingly.

## How to build a new deck

1. Create `src/pages/decks/YYYY-<slug>/` with `index.astro`, `_slides/`,
   `images/`.
2. `index.astro` mounts `<DeckShell>` + `<Deck title="…">`. Title goes on
   `<Deck>` so it flows to slides via context.
3. Use a top-level TOC array (`const toc = ['Section 1', 'Section 2', …]`)
   and render `<TocSlide items={toc} />` (no active) at the start, plus
   `<TocSlide items={toc} active="…" />` before each section.
4. To reuse a slide from another deck, either `import` it directly
   (sharing — old deck's edits propagate) or `cp` the file into the new
   `_slides/` and tweak (true freezing).
5. Images: copy what you need into the new deck's `images/`. Even if
   logos are the same as another deck, copy — assets freeze with the
   deck too.

## Freezing principle

Each deck owns its content and assets. The shared `_shared/templates/`
are rendering primitives only. If a template changes, every deck's
visual will shift, but content stays put. If you need to lock visual too
for a specific deck, copy the template into that deck's folder and edit.

## Common gotchas

- The `<astro-slot>` wrapper issue: don't use `client:load` on a Deck
  with JSX children. We tried `@revealjs/react` and it inserted an
  `<astro-slot>` element between `.slides` and `<section>`, breaking
  Reveal's selector. Stay with the Astro-component approach.
- Reveal sets `position: absolute` on slide sections, so absolute-positioned
  children inside a slide anchor to the section, not the viewport.
- `align="top"` is "header in flow + body below"; `align="center"` is
  "header absolute + body fills full slide and centers". They are not
  the same flexbox config.
- **Reveal CSS resets bite.** The shell stylesheet applies the following
  to every slide and will silently break custom layouts unless you
  override:
  - `.reveal img` → `margin: 0.4em 0; max-height: 70vh; border-radius: 8px`.
    Any custom-positioned image needs `m-0! max-h-none! rounded-none!`.
    (BleedImage already handles this — only an issue for inline `<img>`.)
  - `.reveal p` → `line-height: 1.45`. If you want Tailwind's text-size
    line-heights, use `<div>` instead of `<p>`.
  - `.reveal a` → adds a 3px accent underline. Override with `border-b-0!`
    if you want a plain link.
