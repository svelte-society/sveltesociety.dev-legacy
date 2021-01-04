module.exports = {
  "pages": "src/pages",
  "sourceDir": "public",
  "routifyDir": ".routify",
  "ignore": "",
  "dynamicImports": true,
  "singleBuild": true,
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
    "html",
    "svelte",
    "md",
    "svx"
  ],
  "started": "2021-01-04T14:41:33.564Z"
}