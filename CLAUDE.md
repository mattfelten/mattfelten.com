# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm start` - Generate favicons and start dev server (opens browser)
- `npm run site:run` - Start Astro dev server only
- `npm run build` - Full production build (favicons + Astro build to `./dist/`)
- `npm run site:serve` - Preview production build locally
- `npm run prettier` - Format code with Prettier

## Architecture

This is a personal portfolio site built with **Astro 5** and **React 18**, deployed to **Netlify**.

### Content Collections

Content lives in `src/content/` and uses Astro's Content Collections API with Zod validation:

- **work/** - Case studies (MDX with cover images, `featured` flag for homepage)
- **projects/** - External project links with descriptions
- **posts/** - Blog articles (Markdown)
- **roles/** - Work history entries
- **speaking/** - Speaking engagements with redirect URLs

Schemas are defined in `src/content/config.ts`.

### Page Routing

- Static pages in `src/pages/` (index, resume, gallery)
- Dynamic routes use `[slug].astro` pattern with `getStaticPaths()`
- Content-driven pages at `/work/[slug]`, `/posts/[slug]`, `/newsletter/[slug]`, `/projects/[slug]`

### Layout Hierarchy

`html.astro` → `default.astro` → page-specific layouts (e.g., `prose.astro` for articles)

### Components

- Astro components (`.astro`) for structure and static content
- React components (`.jsx`) for interactivity (e.g., `JobDescriber.jsx` for animated text)
- Homepage sections in `src/sections/` with barrel export in `index.ts`

### Path Aliases

Configured in `tsconfig.json`:
- `@assets`, `@components`, `@layouts`, `@sections`

### Styling

- Tailwind CSS with custom theme tokens in `src/assets/theme.css`
- Design tokens: accent color (#3DDFC2), light/dark mode via media queries
- Custom utilities in `src/assets/utilities.css` (e.g., `line-length-*` classes)
- Prose styling for article content in `src/assets/prose.css`

### Newsletter Pipeline

Newsletters are fetched at build time from the Buttondown `/v1/emails` API (not via Astro Content Collections like the rest of `src/content/`). The API returns a single `body` field per email, which can be either markdown or HTML depending on the Buttondown editor mode used when the newsletter was authored.

The `body` is parsed with `marked` before `set:html` in `src/pages/newsletter/[slug].astro`. HTML inside markdown passes through unchanged (per CommonMark spec), so the same code path handles both authoring modes.

`BUTTONDOWN_TOKEN` env var is required at build. Without it, `getStaticPaths()` returns `[]` and no newsletter routes are emitted.

### Server Actions

Newsletter subscription handled via server action in `src/actions/index.ts` using Buttondown API.

## Writing Style

- Never use em dashes (—) in written content. Use periods, commas, or colons to separate thoughts instead.
- Rhythm matters: mix short punchy sentences with longer elaborating ones. Contrast is intentional. Avoid running too many short sentences together — it gets clipped and hard to follow.
- Fragments are fine for emphasis. ("Judgment. Taste.")
- Use `---` to break major sections in posts.
- First-person, conversational, admits uncertainty and mistakes. Never preachy.
- Share experience honestly. Don't try to convince or convert — just show what you've found.
- No prescriptive CTAs at the end ("try this," "do that"). Let the last thought land as an honest observation, not a lesson.
- Dry humor is fine. Forced humor is not.
- When writing blog posts, after significant style or voice decisions are made, update this section to capture new learnings.

## Formatting

Uses both Biome and Prettier:
- Biome: tabs, double quotes, organized imports
- Prettier: tabs, single quotes, Tailwind class sorting
