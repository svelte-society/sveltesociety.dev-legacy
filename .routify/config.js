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
  "started": "2021-01-17T23:19:42.863Z"
}