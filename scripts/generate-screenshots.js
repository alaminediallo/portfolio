import puppeteer from "puppeteer";
import sharp from "sharp";
import matter from "gray-matter";
import { readFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const PROJECTS_DIR = "src/content/projects";

function walkMd(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return walkMd(full);
    if (entry.isFile() && entry.name.endsWith(".md")) return [full];
    return [];
  });
}

const files = walkMd(PROJECTS_DIR);
const seen = new Set();
const projects = files
  .map((f) => {
    const { data } = matter(readFileSync(f, "utf8"));
    // Frontmatter image paths are relative to their markdown file so Astro's
    // image() schema helper can resolve them, so resolve from the same base.
    return {
      title: data.title,
      url: data.url,
      image: data.image ? resolve(dirname(f), data.image) : undefined,
    };
  })
  .filter((p) => p.url && p.image)
  .filter((p) => {
    if (seen.has(p.image)) return false;
    seen.add(p.image);
    return true;
  });

const browser = await puppeteer.launch();

for (const { title, url, image } of projects) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(url, { waitUntil: "networkidle2" });

  const buffer = await page.screenshot({ encoding: "binary" });

  mkdirSync(dirname(image), { recursive: true });

  await sharp(buffer)
    .resize(800, 450)
    .webp({ quality: 90 })
    .toFile(image);

  console.log(`Generated ${relative(process.cwd(), image)} (${title})`);
  await page.close();
}

await browser.close();
console.log(`Done. ${projects.length} screenshots generated.`);
