import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const config = {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: './dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
      exports: 'named',
    },
  ],
  external: ['react', 'react-dom', 'draft-js'],
  plugins: [
    external(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react'],
    }),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    postcss({
      plugins: [],
      minimize: true,
    }),
    commonjs(),
    terser(),
  ],
};

export default config;
