import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/fellow-persistence-viz/', // matches your repository name
  build: {
    outDir: 'dist',
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'recharts'],
  },
  resolve: {
    alias: {
      '@': '/src', // This allows us to use @ to reference the src directory
    },
  },
});
