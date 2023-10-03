import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ include: ['lib'] })],
  build: {
      lib: {
        entry: resolve(__dirname, 'lib/main.ts'),
        formats: ['es']
      },
      copyPublicDir: false, // maybe remove it later
      rollupOptions: {
        external: ['react', 'react/jsx-runtime'],
        input: Object.fromEntries(
           glob.sync('lib/**/*.{ts,tsx}').map(file => [
             // The name of the entry point
             // lib/nested/foo.ts becomes nested/foo
             relative(
               'lib',
               file.slice(0, file.length - extname(file).length)
             ),
             // The absolute path to the entry file
             // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
             fileURLToPath(new URL(file, import.meta.url))
           ])
         ),
         output: {
          assetFileNames: 'assets/[name][extname]',
          entryFileNames: '[name].js'
         }
      }
    },
})
