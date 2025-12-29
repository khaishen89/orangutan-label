import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Use empty string or './' for relative paths in built assets
  base: '', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false
  }
});
