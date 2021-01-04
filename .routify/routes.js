
/**
 * @roxi/routify 2.8.4
 * File generated Mon Jan 04 2021 14:41:33 GMT+0000 (Greenwich Mean Time)
 */

export const __version = "2.8.4"
export const __timestamp = "2021-01-04T14:41:33.605Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "root": true,
  "children": [
    {
      "isFallback": true,
      "path": "/_fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "ext": "svx",
          "isIndex": true,
          "isPage": true,
          "path": "/about/index",
          "id": "_about_index",
          "component": () => import('../src/pages/about/index.svx').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/about",
      "id": "_about__layout",
      "component": () => import('../src/pages/about/_layout.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "ext": "",
      "children": [
        {
          "isIndex": true,
          "isPage": true,
          "path": "/components/index",
          "id": "_components_index",
          "component": () => import('../src/pages/components/index.svelte').then(m => m.default)
        }
      ],
      "path": "/components"
    },
    {
      "isDir": true,
      "children": [
        {
          "ext": "svx",
          "isPage": true,
          "path": "/help/components",
          "id": "_help_components",
          "component": () => import('../src/pages/help/components.svx').then(m => m.default)
        }
      ],
      "isLayout": true,
      "path": "/help",
      "id": "_help__layout",
      "component": () => import('../src/pages/help/_layout.svelte').then(m => m.default)
    },
    {
      "isIndex": true,
      "isPage": true,
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isDir": true,
      "children": [
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Transpiling ES6 to ES5 for Legacy Browser (IE11) Support with Babel",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/build-setup/transpiling-es6-to-es5-for-legacy-browser-support",
              "id": "_recipes_buildSetup_transpilingEs6ToEs5ForLegacyBrowserSupport",
              "component": () => import('../src/pages/recipes/build-setup/transpiling-es6-to-es5-for-legacy-browser-support.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Using Future JS Syntax in Svelte with Babel",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/build-setup/using-future-js-syntax-in-svelte-using-babel",
              "id": "_recipes_buildSetup_usingFutureJsSyntaxInSvelteUsingBabel",
              "component": () => import('../src/pages/recipes/build-setup/using-future-js-syntax-in-svelte-using-babel.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Using PostCSS with Svelte",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/build-setup/using-postcss-with-svelte",
              "id": "_recipes_buildSetup_usingPostcssWithSvelte",
              "component": () => import('../src/pages/recipes/build-setup/using-postcss-with-svelte.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Using TypeScript with Svelte",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/build-setup/using-typescript-with-svelte",
              "id": "_recipes_buildSetup_usingTypescriptWithSvelte",
              "component": () => import('../src/pages/recipes/build-setup/using-typescript-with-svelte.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Writing Your Own Preprocessors",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/build-setup/writing-your-own-preprocessors",
              "id": "_recipes_buildSetup_writingYourOwnPreprocessors",
              "component": () => import('../src/pages/recipes/build-setup/writing-your-own-preprocessors.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Build Setup",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/build-setup/index",
              "id": "_recipes_buildSetup_index",
              "component": () => import('../src/pages/recipes/build-setup/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/build-setup"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Form Validation with Svelte",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/component-recipes/form-validation-with-svelte",
              "id": "_recipes_componentRecipes_formValidationWithSvelte",
              "component": () => import('../src/pages/recipes/component-recipes/form-validation-with-svelte.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Getting references to Components generated in an each block",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/component-recipes/getting-references-to-components-in-each-blocks",
              "id": "_recipes_componentRecipes_gettingReferencesToComponentsInEachBlocks",
              "component": () => import('../src/pages/recipes/component-recipes/getting-references-to-components-in-each-blocks.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Passing attributes to component DOM element",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/component-recipes/passing-attributes-to-component-dom-element",
              "id": "_recipes_componentRecipes_passingAttributesToComponentDomElement",
              "component": () => import('../src/pages/recipes/component-recipes/passing-attributes-to-component-dom-element.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Using Fetch to Consume APIs with Svelte",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/component-recipes/using-fetch-to-consume-apis",
              "id": "_recipes_componentRecipes_usingFetchToConsumeApis",
              "component": () => import('../src/pages/recipes/component-recipes/using-fetch-to-consume-apis.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Component Recipes",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/component-recipes/index",
              "id": "_recipes_componentRecipes_index",
              "component": () => import('../src/pages/recipes/component-recipes/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/component-recipes"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Authentication with Svelte",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/design-patterns/authentication-with-svelte",
              "id": "_recipes_designPatterns_authenticationWithSvelte",
              "component": () => import('../src/pages/recipes/design-patterns/authentication-with-svelte.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Routing with Svelte",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/design-patterns/routing-with-svelte",
              "id": "_recipes_designPatterns_routingWithSvelte",
              "component": () => import('../src/pages/recipes/design-patterns/routing-with-svelte.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Server-side Rendering",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/design-patterns/server-side-rendering",
              "id": "_recipes_designPatterns_serverSideRendering",
              "component": () => import('../src/pages/recipes/design-patterns/server-side-rendering.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Design Patterns",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/design-patterns/index",
              "id": "_recipes_designPatterns_index",
              "component": () => import('../src/pages/recipes/design-patterns/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/design-patterns"
        },
        {
          "isIndex": true,
          "isPage": true,
          "path": "/recipes/index",
          "id": "_recipes_index",
          "component": () => import('../src/pages/recipes/index.svelte').then(m => m.default)
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Editable SVG Icon Systems with Svelte and Heroicons",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/other/editable-svg-icon-systems-with-svelte-and-heroicons",
              "id": "_recipes_other_editableSvgIconSystemsWithSvelteAndHeroicons",
              "component": () => import('../src/pages/recipes/other/editable-svg-icon-systems-with-svelte-and-heroicons.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Other",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/other/index",
              "id": "_recipes_other_index",
              "component": () => import('../src/pages/recipes/other/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/other"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Dockerize a Sapper App",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/publishing-and-deploying/dockerize-a-sapper-app",
              "id": "_recipes_publishingAndDeploying_dockerizeASapperApp",
              "component": () => import('../src/pages/recipes/publishing-and-deploying/dockerize-a-sapper-app.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Dockerize a Svelte App",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/publishing-and-deploying/dockerize-a-svelte-app",
              "id": "_recipes_publishingAndDeploying_dockerizeASvelteApp",
              "component": () => import('../src/pages/recipes/publishing-and-deploying/dockerize-a-svelte-app.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Publishing and Deploying",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/publishing-and-deploying/index",
              "id": "_recipes_publishingAndDeploying_index",
              "component": () => import('../src/pages/recipes/publishing-and-deploying/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/publishing-and-deploying"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Stores",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/stores/index",
              "id": "_recipes_stores_index",
              "component": () => import('../src/pages/recipes/stores/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/stores"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Looping",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/svelte-language-fundamentals/looping",
              "id": "_recipes_svelteLanguageFundamentals_looping",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/looping.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Passing values from JS to CSS",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/svelte-language-fundamentals/passing-values-from-js-to-css",
              "id": "_recipes_svelteLanguageFundamentals_passingValuesFromJsToCss",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/passing-values-from-js-to-css.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Reactivity",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/svelte-language-fundamentals/reactivity",
              "id": "_recipes_svelteLanguageFundamentals_reactivity",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/reactivity.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Scoped global CSS",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/svelte-language-fundamentals/scoped-global-css",
              "id": "_recipes_svelteLanguageFundamentals_scopedGlobalCss",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/scoped-global-css.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Svelte Language Fundamentals",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/svelte-language-fundamentals/index",
              "id": "_recipes_svelteLanguageFundamentals_index",
              "component": () => import('../src/pages/recipes/svelte-language-fundamentals/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/svelte-language-fundamentals"
        },
        {
          "isDir": true,
          "ext": "",
          "children": [
            {
              "ext": "svx",
              "isPage": true,
              "meta": {
                "frontmatter": {
                  "title": "Unit Testing Svelte Components",
                  "layout": "recipe"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/testing-and-debugging/unit-testing-svelte-component",
              "id": "_recipes_testingAndDebugging_unitTestingSvelteComponent",
              "component": () => import('../src/pages/recipes/testing-and-debugging/unit-testing-svelte-component.svx').then(m => m.default)
            },
            {
              "ext": "svx",
              "isIndex": true,
              "isPage": true,
              "ownMeta": {
                "index": 1
              },
              "meta": {
                "index": 1,
                "frontmatter": {
                  "title": "Testing and Debugging Svelte",
                  "layout": "recipeCategory",
                  "icon": "/images/icons/test.svg"
                },
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/recipes/testing-and-debugging/index",
              "id": "_recipes_testingAndDebugging_index",
              "component": () => import('../src/pages/recipes/testing-and-debugging/index.svx').then(m => m.default)
            }
          ],
          "path": "/recipes/testing-and-debugging"
        }
      ],
      "isLayout": true,
      "path": "/recipes",
      "id": "_recipes__layout",
      "component": () => import('../src/pages/recipes/_layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": true,
  "path": "/",
  "id": "__layout",
  "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

