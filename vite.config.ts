const path = require('path')
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const NODE_ENV = process.env.NODE_ENV;
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry:path.resolve(__dirname,'package/index.ts'),
      name:'ty-ui',
      fileName:(format) => `ty-ui.${format}.js`,
      formats:['es','umd']
    },
    rollupOptions:{
      input:'package/index.ts'
    }

  }
})