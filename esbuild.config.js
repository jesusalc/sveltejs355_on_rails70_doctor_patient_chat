#!/usr/bin/env node
// import esbuild from "esbuild";
// ^^^^^^

// SyntaxError: Cannot use import statement outside a module
// import esbuild from "esbuild";
// import esbuildSvelte from "esbuild-svelte";
// import sveltePreprocess from "svelte-preprocess";

const esbuild = require("esbuild");
const esbuildSvelte = require("esbuild-svelte");
const sveltePreprocess = require("svelte-preprocess");

var watch = process.argv.includes("--watch");

require("esbuild")
  .build({
    entryPoints: ["app/javascript/application.ts"],
    bundle: true,
    outfile: "app/assets/builds/application.ts",
    plugins: [
      esbuildSvelte({
        preprocess: sveltePreprocess(),
      }),
      require("esbuild-svelte")()
    ],
    logLevel: "info",
    watch: watch,
  })
  .catch(() => process.exit(1));
  // Watch stoped compatabilty new verion os esbuild uses livereload


  // import * as esbuild from 'esbuild'

  // let ctx = await esbuild.context({
  //   entryPoints: ["app/javascript/application.ts"],
  //   bundle: true,
  //   outfile: "app/assets/builds/application.js",
  //   plugins: [require("esbuild-svelte")()],
  //   logLevel: "info",

  // })

  // await ctx.watch()
  // console.log('watching...')

  // let { host, port } = await ctx.serve({
  //   servedir: 'www',
  // })

// const esbuild = require('esbuild');
// const esbuildContext =  esbuild.build({
//     entryPoints: ["app/javascript/application.ts"],
//     bundle: true,
//     outfile: "app/assets/builds/application.js",
//     plugins: [require("esbuild-svelte")()],
//     logLevel: "info",

//   });

//   console.log('watching...')