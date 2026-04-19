# pinhighmedia-marketing

Marketing site for Pin High Media — a specialist software studio for the UK
golf industry.

## Stack

- Astro v6 (static output)
- Tailwind CSS v4 (via `@tailwindcss/vite`, CSS-first `@theme` config)
- TypeScript
- Inter from Google Fonts

## Scripts

```bash
npm install
npm run dev       # local dev at http://localhost:4321
npm run build     # static build to ./dist
npm run preview   # preview the built site locally
```

## Production deployment

Production is hosted at Krystal (not Vercel). To deploy:

1. `npm run build` — outputs static HTML to `./dist`
2. Upload the contents of `./dist` to Krystal via cPanel / SFTP
3. Stage to a temporary folder first, then swap, so the old site stays
   live until the new files are in place (atomic replacement)

Vercel is used only for the staging URL during build/review.

## Content

- `src/pages/` — one file per route
- `src/layouts/Layout.astro` — shared HTML shell, accepts `title`,
  `description`, `ogImage`, `canonical` props
- `src/components/` — Nav, Footer, FlagshipCard, ToolCard
- `src/styles/global.css` — Tailwind `@import` + `@theme` design tokens
- `scripts/gen-og.mjs` — regenerates the placeholder `public/og-image.png`
