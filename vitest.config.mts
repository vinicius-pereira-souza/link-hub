import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "node",
    server: {
      deps: {
        inline: ["@neondatabase/auth"],
      },
    },
  },
});
