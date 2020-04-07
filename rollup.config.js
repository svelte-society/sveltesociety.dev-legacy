import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import { config } from '@sveltech/routify'
import copy from 'rollup-plugin-copy'
import del from 'del'
import ppidChanged from 'ppid-changed'


const production = !process.env.ROLLUP_WATCH;
const { distDir, staticDir, sourceDir, dynamicImports: split } = config
const buildDir = `${distDir}/build`
const template = staticDir + (split ? '/__dynamic.html' : '/__bundled.html')

// Delete the dist folder, but not between build steps
// ("build": "build-step-1 && build-step-2 && etc")
if (ppidChanged()) del.sync(distDir + '/**')

export default {
	input: `${sourceDir}/main.js`,
	output: [{
		sourcemap: true,
		name: 'app',
		format: split ? 'esm' : 'iife',
		[split ? 'dir' : 'file']: split ? `${buildDir}` : `${buildDir}/bundle.js`
	}],
	plugins: [
		copy({
			targets: [
			  { src: staticDir + '/*', dest: distDir },
			  { src: template, dest: distDir, rename: '__app.html' },
			], copyOnce: true
		  }),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			hydratable: true,
			// we'll extract any component CSS out into
			// a separate file — better for performance
			css: css => {
				css.write(`${buildDir}/bundle.css`);
			}
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration —
		// consult the documentation for details:
		// https://github.com/rollup/rollup-plugin-commonjs
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
		}),
		commonjs(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload(distDir),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
}

function serve() {
	let started = false;

	return {
		writeBundle() {
			if (!started) {
				started = true;

				require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				});
			}
		}
	};
}