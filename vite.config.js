import { defineConfig } from 'vite';

export default defineConfig({
  root: 'html',

  base: '/taskflow/',

  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});