import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsConfigPaths(), reactRefresh(), dts()],
  build: {
    lib: {
      entry: resolve('src', 'index.tsx'),
      name: 'Contenido',
      formats: ['es', 'cjs'],
      fileName: (format) => `contenido-lib.${format}.js`,
    },
  },
});
