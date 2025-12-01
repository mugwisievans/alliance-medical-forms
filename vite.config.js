import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import htmlBundle from "rollup-plugin-html-bundle";

export default defineConfig({
  plugins: [
    react(),
    {
      ...htmlBundle({
        template: "index.html",
        dest: "dist",
        inline: true,       // inline ALL JS + CSS + images
        minify: true
      }),
      enforce: "post",
      apply: "build",
    },
  ],

  build: {
    target: "esnext",
    cssCodeSplit: false,
    assetsInlineLimit: Infinity,
    modulePreload: false,

    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: undefined
      }
    }
  },

  base: "./",
  
});

