import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // important — root deployment
  build: { outDir: 'dist' },
  server: {
    port: 9090, // local dev port (safe to keep)
  },
})
