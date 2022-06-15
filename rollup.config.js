import path from 'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import nodeGlobals from 'rollup-plugin-node-globals';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import json from '@rollup/plugin-json';

const inputRelative = './src/index.ts';
const input = path.resolve(process.cwd(), inputRelative);
const module = path.basename(process.cwd());

const globals = {};
const extensions = ['.ts', '.js'];

const options = {
  babel: {
    exclude: /node_modules/,
    babelHelpers: 'runtime',
    extensions,
    configFile: path.resolve('babel.config.js'),
  },
  nodeResolve: {
    preferBuiltins: false,
    extensions,
  },
  commonjs: {
    ignoreGlobal: true,
    include: /node_modules/,
  },
};

const plugins = [
  nodeResolve(options.nodeResolve),
  babel(options.babel),
  commonjs(options.commonjs),
  nodeGlobals({
    buffer: false,
  }),
  json({ compact: true })
];

function onwarn(warning) {
  if (['THIS_IS_UNDEFINED', 'MISSING_NODE_BUILTINS'].indexOf(warning.code) > -1) return;

  console.warn(warning);

  throw Error(warning.message);
}

const capitalize = value => `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`;

const name = module.split('-').map(item => capitalize(item)).join('');

export default [
  {
    input,
    onwarn,
    output: {
      file: `build/umd/${module}.dev.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      ...plugins,
      replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('development') }),
    ],
  },
  {
    input,
    onwarn,
    output: {
      file: `build/umd/${module}.prod.min.js`,
      format: 'umd',
      name,
      globals,
    },
    external: Object.keys(globals),
    plugins: [
      ...plugins,
      replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser(),
      sizeSnapshot({ snapshotPath: path.resolve(process.cwd(), 'size-snapshot.json') }),
    ],
  },
];
