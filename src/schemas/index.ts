import { z } from 'astro:content'

export const blogSchema = () =>
	z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date(),
		layout: z.string().optional()
	})
