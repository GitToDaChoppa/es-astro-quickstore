import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import compress from "astro-compress";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
// import mdx from "@astrojs/mdx";

export default defineConfig({
  site: 'https://essentialsounds.shop',
  integrations: [tailwind(), image(), compress(), partytown(), sitemap()]
});