import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
  ],
  external: ['react', 'react-dom'],
};
