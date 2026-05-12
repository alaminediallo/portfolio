# Portfolio

Personal portfolio of Mamadou Lamine Diallo, live at [laminediallo.me](https://bip.laminediallo.me/q/gl). A quiet, content-first single page that lists what I've built, where I've worked, and how to reach me. The home is a sticky sidebar paired with a scrolling main column; the archive page is a dense table of every project that has shipped. Available in English and French.

## Stack

Astro 6 with Tailwind CSS 4 and TypeScript. Static output, no runtime framework. Fonts are downloaded at build via the Astro font API (Bunny provider) and served locally, so no third-party request is made at view time.

## Run locally

```sh
pnpm install
pnpm dev
```

Then open `localhost:4321`.

| Command            | Action                                 |
| :----------------- | :------------------------------------- |
| `pnpm dev`         | Start the dev server                   |
| `pnpm build`       | Build the static site to `dist/`       |
| `pnpm preview`     | Preview the production build           |
| `pnpm lint`        | Run ESLint                             |
| `pnpm format`      | Format the codebase                    |
| `pnpm screenshots` | Generate project screenshot assets     |

## Structure

```
src/
  components/   cards/, icons/, sections/, ui/, and top-level shared components
  content/      Project, experience, and about entries — each split into en/ and fr/
  data/         Site metadata and manual archive list
  i18n/         Translation strings and locale utilities
  layouts/      Page shell
  pages/        Routes (index, archive, 404, 50x) mirrored under fr/
  styles/       Global Tailwind layer
public/         Static assets (favicons, OG image, project images, resume PDF)
```

Adding a new project: drop a markdown file in `src/content/projects/en/` (and optionally `fr/`) and an image in `public/images/projects/`. The schema in `src/content.config.ts` enforces all fields at build time. Mark an experience entry `wip: true` to show a WIPModal instead of navigating on link click.

## Credits

Layout originally inspired by [Brittany Chiang](https://brittanychiang.com). Rewritten from scratch on top of Astro, with a personal pass on some typography, and content.
