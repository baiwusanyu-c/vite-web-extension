import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { r } from './scripts/util'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: false,
  resolve: {
    alias: {
      '@': r('src'),
    },
  },
  plugins: [
    vue(),
    Components({
      dts: true,
    }),
  ],
  build: {
    outDir: 'dist/scripts/content',
    sourcemap: true,
    emptyOutDir: true,
    lib: {
      entry: r('./src/views/chrome-content/main.ts'),
      name: 'content',
      fileName: 'content',
    },
  },
})
