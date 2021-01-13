import Prism from 'prismjs';
import 'prism-svelte';

import svelte from 'rollup-plugin-svelte-hot';
import Hmr from 'rollup-plugin-hot'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { copySync, removeSync } from 'fs-extra'
import svg from 'rollup-plugin-svg';
import alias from '@rollup/plugin-alias'
import json from "@rollup/plugin-json"
import { mdsvex } from 'mdsvex'
// import replace from '@rollup/plugin-replace';
import { spassr } from 'spassr'
import getConfig from '@roxi/routify/lib/utils/config'
import autoPreprocess from 'svelte-preprocess'
import postcssImport from 'postcss-import'
import { injectManifest } from 'rollup-plugin-workbox'

const { distDir } = getConfig() // use Routify's distDir for SSOT
const assetsDir = 'assets'
const buildDir = `${distDir}/build`
const isNollup = !!process.env.NOLLUP
const production = !process.env.ROLLUP_WATCH;

// clear previous builds
removeSync(distDir)
removeSync(buildDir)


const serve = () => ({
  writeBundle: async () => {
    const options = {
      assetsDir: [assetsDir, distDir],
      entrypoint: `${assetsDir}/__app.html`,
      script: `${buildDir}/main.js`
    }
    spassr({ ...options, port: 5000 })
    spassr({ ...options, ssr: true, port: 5005, ssrOptions: { inlineDynamicImports: true, dev: true } })
  }
})
const copyToDist = () => ({ writeBundle() { copySync(assetsDir, distDir) } })


export default {
  preserveEntrySignatures: false,
  input: [`src/main.js`],
  output: {
      sourcemap: true,
      format: 'esm',
      dir: buildDir,
      // for performance, disabling filename hashing in development
      chunkFileNames:`[name]${production && '-[hash]' || ''}.js`
  },
  plugins: [
    alias({ entries: [{ find: '@', replacement: './src' },] }),
    svg(),
    json(),
    svelte({
      extensions: ['.svelte', '.md', '.svx'],
      dev: !production, // run-time checks      
      // Extract component CSS — better performance
      css: css => css.write(`bundle.css`),
      hot: isNollup,
      preprocess: [
        mdsvex({
          layout: {
            recipe: "./src/layouts/Recipe.svelte",
            recipeCategory: "./src/layouts/RecipeCategory.svelte",
            eventPage: "./src/layouts/Event.svelte"
          }
        }),
        autoPreprocess({
          postcss: { plugins: [postcssImport()] },
          defaults: { style: 'postcss' }
        })
      ]
    }),

    // resolve matching modules from current working directory
    resolve({
      browser: true,
      dedupe: importee => !!importee.match(/svelte(\/|$)/)
    }),
    commonjs(),

    production && terser(),
    !production && !isNollup && serve(),
    !production && !isNollup && livereload(distDir), // refresh entire window when code is updated
    !production && isNollup && Hmr({ inMemory: true, public: assetsDir, }), // refresh only updated code
    {
      // provide node environment on the client
      transform: code => ({
        code: code.replace('process.env.NODE_ENV', `"${process.env.NODE_ENV}"`),
        map: { mappings: '' }
      })
    },
    injectManifest({
      globDirectory: assetsDir,
      globPatterns: ['**/*.{js,css,svg}', '__app.html'],
      swSrc: `src/sw.js`,
      swDest: `dist/serviceworker.js`,
      maximumFileSizeToCacheInBytes: 10000000, // 10 MB,
      mode: 'production'
    }),
    production && copyToDist(),
  ],
  watch: {
    clearScreen: false,
    buildDelay: 100,
  }
}
// const liveUpdate = () => useHmr
//   ? Hmr({ inMemory: true, public: staticDir, }) // refresh only updated code
//   : livereload(distDir) // refresh entire window when code is updated

// !production && spassr({
//   serveSpa: true, // serve app
//   serveSsr: !isNollup, // Nollup doesn't need SSR
//   silent: isNollup // Nollup needs Spassr internally
// })


// /**
//  * Base config extended by dynamicConfig and baseConfig
//  */
// const baseConfig = () => ({
//   input: `src/main.js`,
//   output: {
//     name: 'routify_app',
//     sourcemap: true,
//   },
//   plugins: [
//     alias({ entries: [{ find: '@', replacement: './src' },] }),
//     svg(),
//     json(),
//     copy({
//       targets: [
//         { src: [`${staticDir}/*`, "!*/(__index.html)"], dest: distDir },
//         { src: [`${staticDir}/__index.html`], dest: distDir, rename: '__app.html', transform },
//       ],
//       copyOnce: true,
//       flatten: false
//     }),
//     svelte({
//       extensions: ['.svelte', '.md', '.svx'],
//       dev: !production, // run-time checks      
//       // Extract component CSS — better performance
//       css: css => {
//         css.write(`${buildDir}/bundle.css`);
//       },
//       hot: useHmr,
//       preprocess: [
        // mdsvex({
        //   layout: {
        //     recipe: "./src/layouts/Recipe.svelte",
        //     recipeCategory: "./src/layouts/RecipeCategory.svelte",
        //     eventPage: "./src/layouts/Event.svelte"
        //   }
        // })
//       ],
//     }),

//     // resolve matching modules from current working directory
//     resolve({
//       browser: true,
//       dedupe: importee => !!importee.match(/svelte(\/|$)/)
//     }),
//     commonjs(),

//     production && terser(), // minify
//     !production && liveUpdate(),
//     buildStaticExports && prerender()
//   ],
//   watch: {
//     clearScreen: false,
//     buildDelay: 100,
//   }
// })

// // extends baseConfig
// const bundledConfig = extendBase({
//   inlineDynamicImports: true,
//   output: { format: 'iife', file: `${buildDir}/bundle.js` }
// })

// // extends baseConfig
// const dynamicConfig = extendBase({ output: { format: 'esm', dir: buildDir } })


// /**
//  * Can be deleted if service workers aren't used
//  */
// // const serviceWorkerConfig = {
// //   input: `src/sw.js`,
// //   output: {
// //     name: 'service_worker',
// //     sourcemap: true,
// //     format: 'iife',
// //     file: `${distDir}/sw.js`
// //   },
// //   plugins: [
// //     {
// //       name: 'watch-app',
// //       buildStart() { this.addWatchFile("dist/build") }
// //     },
// //     commonjs(),
// //     resolve({ browser: true }),
// //     injectManifest({
// //       swSrc: `${distDir}/sw.js`,
// //       swDest: `${distDir}/sw.js`,
// //       globDirectory: distDir,
// //       globPatterns: ['**/*.{js,css,svg}', '__app.html'],
// //       maximumFileSizeToCacheInBytes: 10000000, // 10 MB
// //     }),
// //     replace({ 'process.env.NODE_ENV': JSON.stringify('production'), }),
// //     production && terser(),
// //   ]
// // }


// // Combine configs as needed
// const configs = [
//   useDynamicImports && dynamicConfig,
//   !isNollup && bundledConfig,
// ].filter(Boolean)

// export default configs


// /**
//  * Config helper functions
//  */

// function prerender() {
//   return {
//     writeBundle() {
//       require('child_process').spawn('npm', ['run', 'export'], {
//         stdio: ['ignore', 'inherit', 'inherit'],
//         shell: true
//       });
//     }
//   }
// }

// function transform(contents) {
//   return contents.toString().replace('__SCRIPT__', useDynamicImports
//     ? '<script type="module" defer src="/build/main.js"></script>'
//     : '<script defer src="/build/bundle.js"></script>')
// }

// function extendBase(extend) { return mergeRollupConfigs(baseConfig(), extend) }

// function mergeRollupConfigs(base, extend) {
//   Object.entries(extend).forEach(([key, value]) => {
//     if (Array.isArray(value)) base[key].push(...value)
//     else if (typeof value === 'object') Object.assign(base[key], value)
//     else base[key] = value
//   })
//   return base
// }
