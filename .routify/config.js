module.exports = {
  "pages": "src/pages",
  "sourceDir": "public",
  "routifyDir": ".routify",
  "ignore": "",
  "dynamicImports": false,
  "singleBuild": false,
  "noHashScroll": false,
  "distDir": "dist",
  "plugins": {
    "routify-plugin-frontmatter": {
      "extensions": [
        "md",
        "svx"
      ]
    }
  },
  "hashScroll": true,
  "extensions": [
    "svelte",
    "html",
    "svx",
    "md"
  ],
  "started": "2021-01-21T15:49:12.363Z"
}