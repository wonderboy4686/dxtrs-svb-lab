import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          mainScript: process.env.VITE_APP_MAIN_SCRIPT || '/src/main.tsx',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: '/index.html',
    },
    outDir: 'dist',
  },
});
