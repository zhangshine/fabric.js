import commonjs from '@rollup/plugin-commonjs';
import ts from "rollup-plugin-ts";

// https://rollupjs.org/guide/en/#configuration-files
export default {
  external: ['Qunit'],
  input: ['test/unit/index.ts', 'test/visual/index.ts'],
  output: [
    {
      dir: ".dumps/tests",
      format: "cjs",
      exports: "named",
      preserveModules: true, // Keep directory structure and files
    },
  ],
  plugins: [
		ts({
			/* Plugin options */
    }),
    commonjs()
	]
};