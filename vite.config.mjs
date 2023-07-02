import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import vpc from "vite-plugin-cloudflare";

export default defineConfig({
  plugins: [react(), ssr(), vpc({ scriptPath: "./worker/index.ts", modules: true })],
  esbuild: { minify: true },
});
