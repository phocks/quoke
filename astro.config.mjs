import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// import vercel from "@astrojs/vercel/serverless";
import vercel from '@astrojs/vercel/edge';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    analytics: true
  }),
  site: "https://quoke.co",
  integrations: [mdx()]
});