import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { resolve } from 'path';

const PackageJson = require('./package.json');
const aliasConfig = {
  entries: [
    { find: '~/', replacement: resolve(__dirname, PackageJson.sourceRoot) },
  ],
};

export default {
  input: PackageJson.entry,
  plugins: [alias(aliasConfig), typescript({ tsconfig: './tsconfig.json' })],
  output: {
    format: 'cjs',
    sourcemap: true,
    preserveModules: true,
    dir: PackageJson.dir,
  },
  treeshake: true,
};
