import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  build: {
    rollupOptions: {
      external: ['antd'] // Add any other external modules if needed
    }
  }
}
