import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error react plugin doesn't have the latest types
  plugins: [react()],
  test: {
    environment: "happy-dom",
    exclude: ["**/node_modules/**", "**/e2e/**", "build/**", "**/*.js"],
    globals: true,
    setupFiles: resolve(__dirname, "vitest.setup.ts"),
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "./src"),
    },
  },
});
