import commonJS from "@rollup/plugin-commonjs";
import filesize from "rollup-plugin-filesize";
import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    context: "this",
    input: "src/index-rollup.ts",
    output: [
      {
        file: "dist/ws-connector.js",
        format: "esm",
      },
      {
        file: "dist/ws-connector.min.js",
        format: "esm",
        plugins: [terser()],
      },
    ],
    plugins: [
      resolve(),
      commonJS(),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      filesize({
        showBrotliSize: true,
        showMinifiedSize: false,
      }),
    ],
  },
];
