/// <reference types="vitest" />
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["./tests/setup.ts"],
    environment: "node",
    globals: true,
    exclude: ["**/node_modules/**", "**/dist/**", "**/docs/**", "**/public/**", "**/cjs-app/**", "**/esm-app/**", "**/test-apps/**"],
    coverage: {
      all: false,
      provider: "v8",
      reporter: ["json-summary", "html"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
  },
});
