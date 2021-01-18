module.exports = {
  "pages": "src/pages",
  "sourceDir": "public",
  "routifyDir": ".routify",
  "ignore": "",
  "dynamicImports": true,
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
  "started": "2021-01-18T15:49:39.133Z"
}