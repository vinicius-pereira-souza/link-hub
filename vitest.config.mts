// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    globals: true,
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          globals: true,
          environment: "jsdom",
          include: [
            "src/**/*.unit.test.{ts,tsx}",
            "src/**/*.component.test.{ts,tsx}",
          ],
          setupFiles: ["./vitest.setup.ts"],
          pool: "threads",
          fileParallelism: false,
          server: {
            deps: {
              inline: ["@neondatabase/auth"],
            },
          },
          env: {
            NEON_AUTH_COOKIE_SECRET: "test-secret-only",
          },
        },
      },
      {
        extends: true,
        test: {
          name: "integration",
          globals: true,
          environment: "node",
          include: ["src/**/*.integration.test.ts"],
          pool: "forks",
          fileParallelism: false,
          testTimeout: 15_000,
        },
      },
    ],
  },
});
