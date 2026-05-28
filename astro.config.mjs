import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://cccl.eastlaw.wang",
  integrations: [mdx()],
  output: "static"
});
