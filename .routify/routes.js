
/**
 * @sveltech/routify 1.9.0
 * File generated Mon Jul 13 2020 14:57:24 GMT+0200 (Central European Summer Time)
 */

export const __version = "1.9.0"
export const __timestamp = "2020-07-13T12:57:24.329Z"

//buildRoutes
import { buildClientTree } from "@sveltech/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/",
      "id": "__layout",
      "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "ext": "svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "ext": "svelte",
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes",
          "id": "_recipes__layout",
          "component": () => import('../src/pages/recipes/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Build Setup",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/build-setup/index",
              "id": "_recipes_buildSetup_index",
              "component": () => import('../src/pages/recipes/build-setup/index.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Transpiling ES6 to ES5 for Legacy Browser (IE11) Support with Babel",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/build-setup/transpiling-es6-to-es5-for-legacy-browser-support",
              "id": "_recipes_buildSetup_transpilingEs6ToEs5ForLegacyBrowserSupport",
              "component": () => import('../src/pages/recipes/build-setup/transpiling-es6-to-es5-for-legacy-browser-support.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Using Future JS Syntax in Svelte with Babel",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/build-setup/using-future-js-syntax-in-svelte-using-babel",
              "id": "_recipes_buildSetup_usingFutureJsSyntaxInSvelteUsingBabel",
              "component": () => import('../src/pages/recipes/build-setup/using-future-js-syntax-in-svelte-using-babel.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Using PostCSS with Svelte",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/build-setup/using-postcss-with-svelte",
              "id": "_recipes_buildSetup_usingPostcssWithSvelte",
              "component": () => import('../src/pages/recipes/build-setup/using-postcss-with-svelte.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Using TypeScript with Svelte",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/build-setup/using-typescript-with-svelte",
              "id": "_recipes_buildSetup_usingTypescriptWithSvelte",
              "component": () => import('../src/pages/recipes/build-setup/using-typescript-with-svelte.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Writing Your Own Preprocessors",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/build-setup/writing-your-own-preprocessors",
              "id": "_recipes_buildSetup_writingYourOwnPreprocessors",
              "component": () => import('../src/pages/recipes/build-setup/writing-your-own-preprocessors.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/build-setup"
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Form Validation with Svelte",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/component-recipes/form-validation-with-svelte",
              "id": "_recipes_componentRecipes_formValidationWithSvelte",
              "component": () => import('../src/pages/recipes/component-recipes/form-validation-with-svelte.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Getting references to Components generated in an each block",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/component-recipes/getting-references-to-components-in-each-blocks",
              "id": "_recipes_componentRecipes_gettingReferencesToComponentsInEachBlocks",
              "component": () => import('../src/pages/recipes/component-recipes/getting-references-to-components-in-each-blocks.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Component Recipes",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/component-recipes/index",
              "id": "_recipes_componentRecipes_index",
              "component": () => import('../src/pages/recipes/component-recipes/index.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Passing attributes to component DOM element",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/component-recipes/passing-attributes-to-component-dom-element",
              "id": "_recipes_componentRecipes_passingAttributesToComponentDomElement",
              "component": () => import('../src/pages/recipes/component-recipes/passing-attributes-to-component-dom-element.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Using Fetch to Consume APIs with Svelte",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/component-recipes/using-fetch-to-consume-apis",
              "id": "_recipes_componentRecipes_usingFetchToConsumeApis",
              "component": () => import('../src/pages/recipes/component-recipes/using-fetch-to-consume-apis.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/component-recipes"
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Authentication with Svelte",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/design-patterns/authentication-with-svelte",
              "id": "_recipes_designPatterns_authenticationWithSvelte",
              "component": () => import('../src/pages/recipes/design-patterns/authentication-with-svelte.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Design Patterns",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/design-patterns/index",
              "id": "_recipes_designPatterns_index",
              "component": () => import('../src/pages/recipes/design-patterns/index.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Routing with Svelte",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/design-patterns/routing-with-svelte",
              "id": "_recipes_designPatterns_routingWithSvelte",
              "component": () => import('../src/pages/recipes/design-patterns/routing-with-svelte.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Server-side Rendering",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/design-patterns/server-side-rendering",
              "id": "_recipes_designPatterns_serverSideRendering",
              "component": () => import('../src/pages/recipes/design-patterns/server-side-rendering.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/design-patterns"
        },
        {
          "isFile": true,
          "isDir": false,
          "ext": "svx",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/index",
          "id": "_recipes_index",
          "component": () => import('../src/pages/recipes/index.svx').then(m => m.default)
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Editable SVG Icon Systems with Svelte and Heroicons",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/other/editable-svg-icon-systems-with-svelte-and-heroicons",
              "id": "_recipes_other_editableSvgIconSystemsWithSvelteAndHeroicons",
              "component": () => import('../src/pages/recipes/other/editable-svg-icon-systems-with-svelte-and-heroicons.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Other",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/other/index",
              "id": "_recipes_other_index",
              "component": () => import('../src/pages/recipes/other/index.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/other"
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Dockerize a Svelte App",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/publishing-and-deploying/dockerize-a-svelte-app",
              "id": "_recipes_publishingAndDeploying_dockerizeASvelteApp",
              "component": () => import('../src/pages/recipes/publishing-and-deploying/dockerize-a-svelte-app.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Publishing and Deploying",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/publishing-and-deploying/index",
              "id": "_recipes_publishingAndDeploying_index",
              "component": () => import('../src/pages/recipes/publishing-and-deploying/index.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/publishing-and-deploying"
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Stores",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/stores/index",
              "id": "_recipes_stores_index",
              "component": () => import('../src/pages/recipes/stores/index.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/stores"
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Svelte Language Fundamentals",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/svelte-language-fundamentals/index",
              "id": "_recipes_svelteLanguageFundamentals_index",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/index.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Looping",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/svelte-language-fundamentals/looping",
              "id": "_recipes_svelteLanguageFundamentals_looping",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/looping.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Passing values from JS to CSS",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/svelte-language-fundamentals/passing-values-from-js-to-css",
              "id": "_recipes_svelteLanguageFundamentals_passingValuesFromJsToCss",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/passing-values-from-js-to-css.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Reactivity",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/svelte-language-fundamentals/reactivity",
              "id": "_recipes_svelteLanguageFundamentals_reactivity",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/reactivity.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Scoped global CSS",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/svelte-language-fundamentals/scoped-global-css",
              "id": "_recipes_svelteLanguageFundamentals_scopedGlobalCss",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/scoped-global-css.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/svelte-language-fundamentals"
        },
        {
          "isFile": false,
          "isDir": true,
          "ext": "",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Testing and Debugging Svelte",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/testing-and-debugging/index",
              "id": "_recipes_testingAndDebugging_index",
              "component": () => import('../src/pages/recipes/testing-and-debugging/index.svx').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "ext": "svx",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "frontmatter": {
                  "title": "Unit Testing Svelte Components",
                  "layout": "recipe"
                },
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/recipes/testing-and-debugging/unit-testing-svelte-component",
              "id": "_recipes_testingAndDebugging_unitTestingSvelteComponent",
              "component": () => import('../src/pages/recipes/testing-and-debugging/unit-testing-svelte-component.svx').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/recipes/testing-and-debugging"
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/recipes"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

