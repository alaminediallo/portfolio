# Portfolio

Personal portfolio of Mamadou Lamine Diallo, live at [laminediallo.me](https://bip.laminediallo.me/q/gl). A quiet, 
content-first 
single page that lists what I've built, where I've worked, and how to reach me. The home is a sticky sidebar paired with a scrolling main column; the archive page is a dense table of every project that has shipped.

## Stack

Astro 6 with Tailwind CSS 4 and TypeScript. Static output, no runtime framework. Fonts are downloaded at build via the Astro font API (Bunny provider) and served locally, so no third-party request is made at view time.

## Run locally

```sh
pnpm install
pnpm dev
```

Then open `localhost:4321`.

| Command        | Action                           |
| :------------- | :------------------------------- |
| `pnpm dev`     | Start the dev server             |
| `pnpm build`   | Build the static site to `dist/` |
| `pnpm preview` | Preview the production build     |
| `pnpm lint`    | Run ESLint                       |
| `pnpm format`  | Format the codebase              |

## Structure

```
src/
  components/   Shared UI (cards, icons, page sections)
  content/      Project and experience entries (markdown + frontmatter)
  data/         Site metadata and the archive list
  layouts/      Page shell
  pages/        Routes (index, archive)
  styles/       Global Tailwind layer
public/         Static assets (favicons, project images)
```

Adding a new project means dropping a markdown file in `src/content/projects/` and an image in `public/images/projects/`. The schema is enforced by `src/content.config.ts`, so a missing field will fail the build before deploy.

## Credits

Layout originally inspired by [Brittany Chiang](https://brittanychiang.com). Rewritten from scratch on top of Astro, with a personal pass on some typography, and content.
