import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://wangjiangyu-creator.github.io",
  base: "/CCCL",
  integrations: [mdx()],
  output: "static"
});
