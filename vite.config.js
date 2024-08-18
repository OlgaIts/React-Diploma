import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@img': '/src/img',
      '@app': '/src/app',      
      '@api': '/src/api',
      '@pages': '/src/pages',
      '@types': '/src/types',
      '@hooks': '/src/hooks',
      '@components': '/src/components',
    },
  },
});
