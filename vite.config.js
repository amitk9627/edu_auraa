import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      external: ['redux-persist/integration/react'],
    },
  },
  optimizeDeps: {
    include: ['redux-persist/integration/react']
  },
  resolve: {
    dedupe: ['redux-persist'], // prevent duplication if multiple versions are being bundled
  },
})

