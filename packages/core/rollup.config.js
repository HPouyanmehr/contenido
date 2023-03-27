import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';

const config = [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named',
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      typescript(),
      commonjs(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];

export default config;
