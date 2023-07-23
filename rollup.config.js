import svelte from "rollup-plugin-svelte-hot";
import Hmr from "rollup-plugin-hot";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import { terser } from "rollup-plugin-terser";
import { copySync, removeSync } from "fs-extra";
import { spassr } from "spassr";
import getConfig from "@roxi/routify/lib/utils/config";
import autoPreprocess from "svelte-preprocess";
import postcssImport from "postcss-import";
import { injectManifest } from "rollup-plugin-workbox";

// const { distDir } = getConfig() // use Routify's distDir for SSOT
// const assetsDir = 'app/assets'
// const buildDir = `public/assets`
// const isNollup = !!process.env.NOLLUP
// const production = !process.env.ROLLUP_WATCH;

// // clear previous builds
// removeSync(distDir)
// removeSync(buildDir)

// const serve = () => ({
//     writeBundle: async () => {
//         const options = {
//             assetsDir: [assetsDir, distDir],
//             entrypoint: `${assetsDir}/__app.html`,
//             script: `${buildDir}/main.js`
//         }
//         spassr({ ...options, port: 5000 })
//         spassr({ ...options, ssr: true, port: 5005, ssrOptions: { inlineDynamicImports: true, dev: true } })
//     }
// })
// const copyToDist = () => ({ writeBundle() { copySync(assetsDir, distDir) } })

// export default {
//     preserveEntrySignatures: false,
//     input: [`app/javascript/svelte/main.js`],
//     output: {
//         sourcemap: true,
//         format: 'esm',
//         dir: buildDir,
//         // for performance, disabling filename hashing in development
//         chunkFileNames:`[name]${production && '-[hash]' || ''}.js`
//     },
//     plugins: [
//         svelte({
//             dev: !production, // run-time checks
//             // Extract component CSS — better performance
//             css: css => css.write(`bundle.css`),
//             hot: isNollup,
//             preprocess: [
//                 autoPreprocess({
//                     postcss: { plugins: [postcssImport()] },
//                     defaults: { style: 'postcss' }
//                 })
//             ]
//         }),

//         // resolve matching modules from current working directory
//         resolve({
//             browser: true,
//             dedupe: importee => !!importee.match(/svelte(\/|$)/)
//         }),
//         commonjs(),

//         production && terser(),
//         !production && !isNollup && serve(),
//         !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
//         !production && isNollup && Hmr({ inMemory: true, public: assetsDir, }), // refresh only updated code
//         {
//             // provide node environment on the client
//             transform: code => ({
//                 code: code.replace('process.env.NODE_ENV', `"${process.env.NODE_ENV}"`),
//                 map: { mappings: '' }
//             })
//         },
//         injectManifest({
//             globDirectory: assetsDir,
//             globPatterns: ['**/*.{js,css,svg}', '__app.html'],
//             swSrc: `src/sw.js`,
//             swDest: `dist/serviceworker.js`,
//             maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
//             mode: 'production'
//         }),
//         production && copyToDist(),
//     ],
//     watch: {
//         clearScreen: false,
//         buildDelay: 100,
//     }
// }

// import svelte from 'rollup-plugin-svelte';
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import livereload from 'rollup-plugin-livereload';
// import { terser } from 'rollup-plugin-terser';
import css from "rollup-plugin-css-only";

const { distDir } = getConfig(); // use Routify's distDir for SSOT
const assetsDir = "app/assets";
const buildDir = `public/assets`;
const isNollup = !!process.env.NOLLUP;
const production = !process.env.ROLLUP_WATCH;

// clear previous builds
removeSync(distDir);
removeSync(buildDir);

const serve = () => ({
  writeBundle: async () => {
    const options = {
      assetsDir: [assetsDir, distDir],
      entrypoint: `${assetsDir}/__app.html`,
      script: `${buildDir}/main.js`,
    };
    spassr({ ...options, port: 5000 });
    spassr({
      ...options,
      ssr: true,
      port: 5005,
      ssrOptions: { inlineDynamicImports: true, dev: true },
    });
  },
});
const copyToDist = () => ({
  writeBundle() {
    copySync(assetsDir, distDir);
  },
});

// function serve() {
//   let server;

//   function toExit() {
//     if (server) server.kill(0);
//   }

//   return {
//     writeBundle() {
//       if (server) return;
//       server = require('child_process').spawn(
//         'npm',
//         ['run', 'start', '--', '--dev'],
//         {
//           stdio: ['ignore', 'inherit', 'inherit'],
//           shell: true,
//         }
//       );

//       process.on('SIGTERM', toExit);
//       process.on('exit', toExit);
//     },
//   };
// }

// export default {
//     input:  [`app/javascript/svelte/main.js`],
//     output: {
//         sourcemap: true,
//         format: 'esm',
//         dir: buildDir,
//         // for performance, disabling filename hashing in development
//         chunkFileNames:`[name]${production && '-[hash]' || ''}.js`
//     },

//   plugins: [
//     svelte({
//       compilerOptions: {
//         // enable run-time checks when not in production
//         dev: !production,
//       },
//     }),
//     // we'll extract any component CSS out into
//     // a separate file - better for performance
//     css({ output: 'bundle.css' }),

//     // If you have external dependencies installed from
//     // npm, you'll most likely need these plugins. In
//     // some cases you'll need additional configuration -
//     // consult the documentation for details:
//     // https://github.com/rollup/plugins/tree/master/packages/commonjs
//     resolve({
//       browser: true,
//       dedupe: ['svelte'],
//     }),
//     commonjs(),

//     // In dev mode, call `npm run start` once
//     // the bundle has been generated
//     !production && serve(),

//     // Watch the `public` directory and refresh the
//     // browser on changes when not in production
//     !production && livereload('public'),

//     // If we're building for production (npm run build
//     // instead of npm run dev), minify
//     production && terser(),
//   ],
//   watch: {
//     clearScreen: false,
//   },
// };


// include CSS in component's JS for ease of use
//
// set to true to get separate CSS for the component (but then,
// you'll need to inject it yourself at runtime somehow)
//
const emitCss = false
// const hot = !production && !!watch

export default {
  preserveEntrySignatures: false,
  input: [`app/javascript/svelte/main.js`],
  output: {
    sourcemap: true,
    format: "esm",
    // format will be overridden to 'system' when using Rollup + HMR
    // format: 'iife',
    dir: buildDir,
    // for performance, disabling filename hashing in development
    chunkFileNames: `[name]${(production && "-[hash]") || ""}.js`,
  },
  plugins: [
    svelte({
      emitCss,
      compilerOptions: {
        dev: !production, // run-time checks
        // Extract component CSS — better performance
        // css: (css) => css.write(`bundle.css`),
        // ParseError: /app/javascript/svelte/App.svelte
        // Error: options.css must be true, false, 'injected', 'external', or 'none' (got '(css) => css.write(`bundle.css`)')
        css: emitCss
      },
        hot: isNollup,
        preprocess: [
          autoPreprocess({
            postcss: { plugins: [postcssImport()] },
            defaults: { style: "postcss" },
          }),
        ],

    }),

    emitCss && css({ output: `${cmp}.css` }),

    // resolve matching modules from current working directory
    resolve({
      browser: true,
      dedupe: (importee) => !!importee.match(/svelte(\/|$)/),
    }),
    commonjs(),

    production && terser(),
    !production && !isNollup && serve(),
    !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
    !production && isNollup && Hmr({ inMemory: true, public: assetsDir }), // refresh only updated code
    {
      // provide node environment on the client
      transform: (code) => ({
        code: code.replace("process.env.NODE_ENV", `"${process.env.NODE_ENV}"`),
        map: { mappings: "" },
      }),
    },
    injectManifest({
      globDirectory: assetsDir,
      globPatterns: ["**/*.{js,css,svg}", "__app.html"],
      swSrc: `app/javascript/svelte/sw.js`,
      swDest: `app/assets/builds/serviceworker.js`,
      maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
      // WorkboxConfigError: [InjectManifest] 'mode' property is not expected to be here
      // mode: "production",
    }),
    production && copyToDist(),
  ],
  watch: {
    clearScreen: false,
    buildDelay: 100,
  },
};
