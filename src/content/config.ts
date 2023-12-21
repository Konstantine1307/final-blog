import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		excerpt: z.string().optional(),
		headline: z.string().optional(),
		// Define galleryImages as an array of objects
		galleryImages: z.array(
			z.object({
			  src: z.string(), // Add more specific validations if needed
			  caption: z.string(),
			})
		  ).optional(),
		tags: z.array(z.string()).default(["others"]),
	}),
});

export const collections = { blog: blogCollection, };
