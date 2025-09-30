import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://thefinancialhelm.co.uk",
  integrations: [tailwind(), mdx(), icon({
    include: {
      ph: ["check-circle-fill", "number-circle-one", "number-circle-two", "number-circle-three", "number-circle-four", "invoice", "package", "shopping-bag", "bank", "currency-dollar", "network"]
    }
  }), sitemap()],
  adapter: netlify()
});
