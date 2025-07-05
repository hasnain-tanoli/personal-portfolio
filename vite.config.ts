import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          three: ['@react-three/fiber', '@react-three/drei'],
          icons: ['lucide-react'],
        },
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
  },
  server: {
    open: true,
    port: 3000,
  },
  preview: {
    port: 4173,
  }
})
