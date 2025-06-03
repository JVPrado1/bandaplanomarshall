// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],

  output: "static",

  devToolbar: {
    enabled: false,
  },

  build: {
    inlineStylesheets: "auto",
    assets: "assets",
  },

  site: "https://bandaplanomarshall.com",
  base: "/",
  trailingSlash: "never",

  server: {
    port: 4321,
    host: true,
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: "assets/[name].[hash][extname]",
          chunkFileNames: "assets/[name].[hash].js",
          entryFileNames: "assets/[name].[hash].js",
          manualChunks: {
            "react-vendor": ["react", "react-dom"],
            "tailwind-vendor": ["tailwindcss"],
          },
        },
      },
      minify: "esbuild",
      cssMinify: "esbuild",
      target: "esnext",
      sourcemap: false,
      chunkSizeWarningLimit: 1000,
    },
    optimizeDeps: {
      include: ["react", "react-dom"],
      exclude: [],
    },
    plugins: [],
    css: {
      devSourcemap: false,
    },
  },
});
