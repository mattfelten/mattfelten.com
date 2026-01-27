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

### Server Actions

Newsletter subscription handled via server action in `src/actions/index.ts` using Buttondown API.

## Formatting

Uses both Biome and Prettier:
- Biome: tabs, double quotes, organized imports
- Prettier: tabs, single quotes, Tailwind class sorting
