import { defineCollection, z } from 'astro:content';

import { glob } from 'astro/loaders'; // Not available with legacy API

const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    features: z.array(z.string()),
    isMostPopular: z.boolean().optional(),
  }),
});

export const collections = { services };