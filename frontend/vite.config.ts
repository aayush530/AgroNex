import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // expose server to LAN
    host: "0.0.0.0",
    // don't fail if port is busy; Vite will try another port
    strictPort: false,
  },
  optimizeDeps: {
    // explicitly include common runtime deps to avoid pre-bundling misses
    include: ["react", "react-dom", "react-router-dom"],
  },
});
