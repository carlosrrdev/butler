import {defineConfig} from "vite";
import electron from "vite-plugin-electron";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "../dist"
  },
  plugins: [
      electron({
        entry: 'main.js'
      })
  ]
})