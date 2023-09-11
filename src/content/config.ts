import { z, defineCollection } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const projectCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    stack: z.array(z.string()),
  }),
});

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  projects: projectCollection,
};
