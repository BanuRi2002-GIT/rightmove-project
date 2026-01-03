/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,               // allows using 'test', 'expect' without importing
    environment: 'jsdom',        // needed for React component testing
    include: ['src/__tests__/**/*.test.jsx'], // your test files
    setupFiles: './src/setupTests.js', // optional, if you have global mocks
    coverage: {
      provider: 'istanbul',      // optional: generate coverage reports
      reporter: ['text', 'html'] // optional: coverage output formats
    }
  }
});
