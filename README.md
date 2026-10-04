# Yossi Mendelovitz — personal site

Personal portfolio of Yossi Mendelovitz, a full-stack developer in Jerusalem,
Israel. A single fast, static page: hero, about + skills, featured projects,
and contact — with light/dark themes and a Hebrew/RTL-aware design (the site
itself demonstrates the bidirectional work it describes).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, fully static output)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- Fonts: Frank Ruhl Libre (display, Hebrew + Latin), IBM Plex Sans, IBM Plex Mono — self-hosted via `next/font`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint     # eslint
npm run build    # production build
```

## Editing content

All copy that changes over time lives in [`lib/content.ts`](lib/content.ts):

- `LINKS.linkedin` — LinkedIn URL (the link is hidden while the string is empty)
- `PROJECTS[n].href` — repo or product link per card (`null` for work that
  cannot be shared); `note` adds a status line, `featured` spans the full width
- `SITE_URL` — the production URL (used for OpenGraph/canonical metadata)

## Deploy on Vercel

The repo is Vercel-ready as-is — no configuration needed:

1. Go to [vercel.com/new](https://vercel.com/new) and import this repository
   (`yossime/home-page`).
2. Accept the detected Next.js defaults and click **Deploy**.

Every push to `main` then deploys automatically. After the first deploy,
update `SITE_URL` in `lib/content.ts` to the production URL.

## CI

GitHub Actions ([.github/workflows/ci.yml](.github/workflows/ci.yml)) runs
install, lint, and build on every push and pull request.
