import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/the-trinity-metals/',
  plugins: [react()],
  server: {
    historyApiFallback: true, // Ensures that deep links work
    proxy: {
      '/wp-json': 'https://trinity-metals.com', // Proxy API requests to bypass CORS
    },
  },
  
})

