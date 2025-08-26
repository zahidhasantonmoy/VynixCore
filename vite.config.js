import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssConfig from './postcss.config.js'; // Import postcss.config.js

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: postcssConfig, // Use the imported postcssConfig
  },
})