import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  base: '/',
  plugins: [react(), visualizer({ 
    filename: 'dist/stats.html', 
    open: true, 
    gzipSize: true, 
    brotliSize: true 
  })],
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
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('@mui') || id.includes('@emotion')) return 'vendor-ui';
            if (id.includes('react-dom')) return 'vendor-react-dom';
            if (id.includes('react')) return 'vendor-react';
            if (id.includes('moment')) return 'vendor-moment';
            if (id.includes('react-router')) return 'vendor-router';
            return 'vendor-other';
          }
        }
      }
    }
  },
  server: {
    historyApiFallback: true,
    proxy: {
      '/wp-json': 'https://contents.trinity-metals.com',
    },
  },
})