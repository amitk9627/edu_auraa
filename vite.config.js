import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})

export default {
  build: {
    rollupOptions: {
      external: ['redux-persist/integration/react'],
    },
  },
};
