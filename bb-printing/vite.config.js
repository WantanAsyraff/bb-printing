import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Only import devtools in dev
let vueDevTools = []
if (process.env.NODE_ENV !== 'production') {
  try {
    // dynamic import so it doesn’t break production
    const devtools = require('vite-plugin-vue-devtools')
    vueDevTools = [devtools.default()]
  } catch (e) {
    console.warn('vite-plugin-vue-devtools not installed in prod')
  }
}

export default defineConfig({
  plugins: [
    vue(),
    ...vueDevTools,
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
