import { z } from 'astro:content'

export const blogSchema = z.object({
	title: z.string(),
	description: z.string(),
	image: z.object({
		src: z.string(),
		alt: z.string()
	}),
	publishDate: z.date()
})

export type BlogSchema = z.infer<typeof blogSchema>
