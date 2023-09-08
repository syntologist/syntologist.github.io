import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://syntologist.github.io/",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [tailwind()],
});
