import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      // Semua permintaan yang dimulai dengan '/api' akan diarahkan ke MyAnimeList API
      "/api": {
        target: "https://api.myanimelist.net/v2",
        
        changeOrigin: true, // Agar API menganggap permintaan berasal dari domain yang sama
        rewrite: (path) => path.replace(/^\/api/, ""), // Menghilangkan prefix '/api'
      },
    },
  },
  plugins: [react()],
});
