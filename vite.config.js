import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
  ],
  server: {
    proxy: {
      '/posts': {
        target: 'https://mockend.com/vue_longvinter',
        changeOrigin: true,
      }
    }
  },
  base: './',
  resolve: {
    alias: [{ find: '~', replacement: `${__dirname}/src` }],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      external: [
        /^node:.*/,
      ]
    }
  },
})
