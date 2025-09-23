import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
     chunkSizeWarningLimit: 1000, 
  },
  server: {
    historyApiFallback: true, // Ensures that deep links work
    proxy: {
      '/wp-json': 'https://contents.trinity-metals.com', // Proxy API requests to bypass CORS
    },
  },
  
})

