import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    server: {
      deps: {
        inline: ["@neondatabase/auth"],
      },
    },
    env: {
      // variable for the test environment only
      NEON_AUTH_COOKIE_SECRET: "DvrwLYyj2o5YM8EfHZA55c5/18lqmB59KesYh4fHH2U=",
    },
  },
});
