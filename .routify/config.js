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
  "started": "2020-12-01T22:43:18.358Z"
}