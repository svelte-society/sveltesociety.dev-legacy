import svelte from 'rollup-plugin-svelte-hot';
import Hmr from 'rollup-plugin-hot'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy'
import svg from 'rollup-plugin-svg';
import alias from '@rollup/plugin-alias'
import json from "@rollup/plugin-json"
import { mdsvex } from 'mdsvex'
import del from 'del'
import replace from '@rollup/plugin-replace';
import { injectManifest } from 'rollup-plugin-workbox'
import { spassr } from 'spassr'

const staticDir = 'static'
const distDir = 'dist'
const buildDir = `${distDir}/build`
const production = !process.env.ROLLUP_WATCH;
const buildStaticExports = process.env.PRERENDER === "true" || !!production
const isNollup = !!process.env.NOLLUP
const useDynamicImports = process.env.BUNDLING === 'dynamic' || isNollup || !!production
const useHmr = isNollup

const liveUpdate = () => useHmr
  ? Hmr({ inMemory: true, public: staticDir, }) // refresh only updated code
  : livereload(distDir) // refresh entire window when code is updated

del.sync(distDir + '/**') // clear previous builds
!production && spassr({
  serveSpa: true, // serve app
  serveSsr: !isNollup, // Nollup doesn't need SSR
  silent: isNollup // Nollup needs Spassr internally
})


/**
 * Base config extended by dynamicConfig and baseConfig
 */
const baseConfig = () => ({
  input: `src/main.js`,
  output: {
    name: 'routify_app',
    sourcemap: true,
  },
  plugins: [
    alias({ entries: [{ find: '@', replacement: './src' },] }),
    svg(),
    json(),
    copy({
      targets: [
        { src: [`${staticDir}/*`, "!*/(__index.html)"], dest: distDir },
        { src: [`${staticDir}/__index.html`], dest: distDir, rename: '__app.html', transform },
      ],
      copyOnce: true,
      flatten: false
    }),
    svelte({
      extensions: ['.svelte', '.md', '.svx'],
      dev: !production, // run-time checks      
      // Extract component CSS — better performance
      css: css => {
        css.write(`${buildDir}/bundle.css`);
      },
      hot: useHmr,
      preprocess: [
        mdsvex({
          layout: {
            recipe: "./src/layouts/Recipe.svelte",
            recipeCategory: "./src/layouts/RecipeCategory.svelte"
          }
        })
      ],
    }),

    // resolve matching modules from current working directory
    resolve({
      browser: true,
      dedupe: importee => !!importee.match(/svelte(\/|$)/)
    }),
    commonjs(),

    production && terser(), // minify
    !production && liveUpdate(),
    buildStaticExports && prerender()
  ],
  watch: {
    clearScreen: false,
    buildDelay: 100,
  }
})

// extends baseConfig
const bundledConfig = extendBase({
  inlineDynamicImports: true,
  output: { format: 'iife', file: `${buildDir}/bundle.js` }
})

// extends baseConfig
const dynamicConfig = extendBase({ output: { format: 'esm', dir: buildDir } })


/**
 * Can be deleted if service workers aren't used
 */
// const serviceWorkerConfig = {
//   input: `src/sw.js`,
//   output: {
//     name: 'service_worker',
//     sourcemap: true,
//     format: 'iife',
//     file: `${distDir}/sw.js`
//   },
//   plugins: [
//     {
//       name: 'watch-app',
//       buildStart() { this.addWatchFile("dist/build") }
//     },
//     commonjs(),
//     resolve({ browser: true }),
//     injectManifest({
//       swSrc: `${distDir}/sw.js`,
//       swDest: `${distDir}/sw.js`,
//       globDirectory: distDir,
//       globPatterns: ['**/*.{js,css,svg}', '__app.html'],
//       maximumFileSizeToCacheInBytes: 10000000, // 10 MB
//     }),
//     replace({ 'process.env.NODE_ENV': JSON.stringify('production'), }),
//     production && terser(),
//   ]
// }


// Combine configs as needed
const configs = [
  useDynamicImports && dynamicConfig,
  !isNollup && bundledConfig,
].filter(Boolean)

export default configs


/**
 * Config helper functions
 */

function prerender() {
  return {
    writeBundle() {
      require('child_process').spawn('npm', ['run', 'export'], {
        stdio: ['ignore', 'inherit', 'inherit'],
        shell: true
      });
    }
  }
}

function transform(contents) {
  return contents.toString().replace('__SCRIPT__', useDynamicImports
    ? '<script type="module" defer src="/build/main.js"></script>'
    : '<script defer src="/build/bundle.js"></script>')
}

function extendBase(extend) { return mergeRollupConfigs(baseConfig(), extend) }

function mergeRollupConfigs(base, extend) {
  Object.entries(extend).forEach(([key, value]) => {
    if (Array.isArray(value)) base[key].push(...value)
    else if (typeof value === 'object') Object.assign(base[key], value)
    else base[key] = value
  })
  return base
}
