import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  root: 'html',
  base: command === 'build'
    ? '/TaskFlow/'
    : '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
}));