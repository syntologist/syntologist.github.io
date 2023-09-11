import { z, type SchemaContext } from 'astro:content'

export const blogSchema = ({ image }: SchemaContext) =>
	z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.date()
	})
