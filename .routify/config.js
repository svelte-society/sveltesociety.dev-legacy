module.exports = {
  "pages": "src/pages",
  "sourceDir": "public",
  "routifyDir": ".routify",
  "ignore": "",
  "dynamicImports": true,
  "singleBuild": true,
  "noHashScroll": false,
  "extensions": [
    "svelte",
    "svx",
    "md"
  ],
  "distDir": "dist",
  "plugins": {
    "routify-plugin-frontmatter": {
      "extensions": [
        "md",
        "svx",
        "svelte"
      ]
    }
  },
  "hashScroll": true,
  "started": "2020-07-13T12:57:24.277Z"
}