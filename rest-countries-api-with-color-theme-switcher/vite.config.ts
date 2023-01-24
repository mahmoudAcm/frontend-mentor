import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      theme: path.join(__dirname, "./src/theme.tsx"),
    },
  },
  plugins: [react()],
});
