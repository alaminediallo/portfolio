import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const experience = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/experience" }),
  schema: z.object({
    company: z.string(),
    title: z.string(),
    url: z.url(),
    range: z.string(),
    date: z.coerce.date(),
    tech: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["featured", "other"]),
    url: z.url().optional(),
    github: z.url().optional(),
    image: z.string(),
    tech: z.array(z.string()),
    date: z.coerce.date(),
  }),
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    year: z.number().int(),
    url: z.url().optional(),
    publication: z.string().optional(),
    order: z.number().int(),
  }),
});

export const collections = { experience, projects, writing };
