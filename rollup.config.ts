import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const PackageJson = require('./package.json');
const aliasConfig = {
  entries: [
    {
      find: '@',
      replacement: resolve(__dirname, PackageJson.sourceRoot),
    },
  ],
};

export default {
  input: PackageJson.entry,
  output: {
    file: PackageJson.main,
    format: 'esm',
    sourcemap: true,
  },
  plugins: [peerDepsExternal(), typescript(), alias(aliasConfig)],
};
