import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  rollupOptions: {
    input: 'src/index.jsx',
  },
  build: {
    lib: {
        entry: resolve(__dirname, 'src/index.jsx'),
        formats: ["es"],
    },
    outDir: 'build/vite',
    rollupOptions: {
        external: [
            // 'react',
            // 'react-dom',
        ],
        output: {
            entryFileNames: "[name].js",
        },
    }
},
})
