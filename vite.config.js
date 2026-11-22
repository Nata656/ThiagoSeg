import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// BASE_PATH é definido na publicação do GitHub Pages ('/ThiagoSeg/').
// Sem ele (no computador ou na Cloudflare), o site roda na raiz '/'.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
})
