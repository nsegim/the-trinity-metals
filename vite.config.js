import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), visualizer({ filename: 'dist/stats.html', open: true, gzipSize: true, brotliSize: true })],
  build: {
     chunkSizeWarningLimit: 1000,
     minify: 'terser',
     terserOptions: {
       compress: {
         drop_console: true,
         drop_debugger: true,
         pure_funcs: ['console.log', 'console.info', 'console.debug'],
       },
     },
     rollupOptions: {
       output: {
         manualChunks: {
           // Separate large libraries into their own chunks
           'moment': ['moment'],
           'react-vendor': ['react', 'react-dom'],
           'router': ['react-router-dom'],
           'mui': ['@mui/material', '@mui/icons-material', '@mui/system', '@emotion/react', '@emotion/styled'],
           'axios': ['axios'],
           'i18n': ['i18next', 'i18next-browser-languagedetector', 'i18next-http-backend', 'react-i18next'],
           'form': ['react-hook-form'],
           'maps': ['@react-google-maps/api'],
           'email': ['@emailjs/browser'],
           'helmet': ['react-helmet-async'],
           'bootstrap': ['bootstrap', 'react-bootstrap'],
           'utils': ['dayjs', 'dompurify']
         }
       }
     }
  },
  server: {
    historyApiFallback: true, // Ensures that deep links work
    proxy: {
      '/wp-json': 'https://contents.trinity-metals.com', // Proxy API requests to bypass CORS
    },
  },
  
})

