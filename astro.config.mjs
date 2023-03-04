import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/edge";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    analytics: false
  }),
  integrations: [react(), partytown()]
});