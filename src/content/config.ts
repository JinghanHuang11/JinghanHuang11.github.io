import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    tags: z.array(z.string()),
    locale: z.enum(['en', 'zh']),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    demo: z.string().url().optional(),
    github: z.string().url().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    image: z.string(),
    locale: z.enum(['en', 'zh']),
  }),
});

export const collections = { blog, projects };
