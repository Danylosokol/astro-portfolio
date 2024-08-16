import { defineCollection, z } from "astro:content";

const experience = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    role: z.string(),
    company: z.string(),
    website: z.string(),
    logo: z.object({
      src: image(),
      alt: z.string(),
    }),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

export const collections = { experience };
