import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		excerpt: z.string().optional(),
		headline: z.string().optional(),
		// Define galleryImages as an array of objects
		galleryImages: z.array(
			z.object({
			  src: z.string(), // Add more specific validations if needed
			  caption: z.string(),
			})
		  ).optional(),
	}),
});

export const collections = { blog };
