import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  server: {
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
  plugins: [react(), tailwindcss(), svgr()],
});
