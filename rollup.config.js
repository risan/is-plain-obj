import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
  // CommonJS
  {
    input: "src/index.js",
    output: {
      file: pkg.main,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**",
        babelrc: false,
        presets: [
          [
            "@babel/env",
            {
              modules: false,
              targets: "node 8"
            }
          ]
        ]
      })
    ]
  },

  // UMD
  {
    input: "src/index.js",
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      })
    ]
  },

  {
    input: "src/index.js",
    output: {
      name: pkg.name,
      file: pkg.browser.replace(/\.js$/i, ".min.js"),
      format: "umd"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      terser()
    ]
  }
];
