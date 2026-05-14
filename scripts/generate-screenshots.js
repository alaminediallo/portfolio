import puppeteer from "puppeteer";
import sharp from "sharp";
import matter from "gray-matter";
import { readFileSync, readdirSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const PROJECTS_DIR = "src/content/projects";
const PUBLIC_DIR = "public";

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
    return { title: data.title, url: data.url, image: data.image };
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

  const output = join(PUBLIC_DIR, image.replace(/^\//, ""));
  mkdirSync(dirname(output), { recursive: true });

  await sharp(buffer)
    .resize(800, 450)
    .webp({ quality: 90 })
    .toFile(output);

  console.log(`Generated ${image} (${title})`);
  await page.close();
}

await browser.close();
console.log(`Done. ${projects.length} screenshots generated.`);
