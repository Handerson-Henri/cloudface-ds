import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const monorepoRoot = fileURLToPath(new URL('../..', import.meta.url));
const assetsRoot = fileURLToPath(new URL('../../packages/assets', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@cloudface/assets': assetsRoot,
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    fs: {
      allow: [monorepoRoot],
    },
  },
});
