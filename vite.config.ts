import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import million from "million/compiler";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    million.vite({ auto: true }),
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});
