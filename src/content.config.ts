import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({

  // Carpeta donde se encuentran los artículos
  loader: glob({
    base: "./src/content/blog",
    pattern: "**/*.md"
  }),

  // Estructura de datos que debe tener cada artículo
  schema: z.object({

    title: z.string(),

    description: z.string(),

    pubDate: z.coerce.date()

  })

});

// Registramos la colección
export const collections = {
  blog
};
