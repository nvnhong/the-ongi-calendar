import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@router", replacement: "/src/router" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@constants", replacement: "/src/constants" },
      { find: "@util", replacement: "/src/util" },
    ],
  },
});
