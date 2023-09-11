import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://syntologist.github.io/',
	trailingSlash: 'always',
	build: {
		format: 'directory'
	},
	integrations: [tailwind(), sitemap()]
})
