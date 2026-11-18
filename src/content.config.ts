import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      order: z.number(),
      spec: z.array(z.object({ label: z.string(), value: z.string() })),
      before: z.object({ label: z.string(), text: z.string() }),
      after: z.object({ label: z.string(), text: z.string() }),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      callout: z.string().optional(),
      diagram: z.boolean().default(false),
    }),
});

export const collections = { casos };
