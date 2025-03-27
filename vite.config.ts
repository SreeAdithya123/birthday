import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/birthday', // Moved base to root level config
  optimizeDeps: {
    exclude: ['lucide-react']
  },
});
