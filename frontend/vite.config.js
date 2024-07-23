import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // "/foo": "http://localhost:8000",
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true, // Needed for virtual hosted sites
      },
    },
  },
  plugins: [react()],
});
