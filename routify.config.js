module.exports = {
  routifyDir: '.routify',
  dynamicImports: true,
  extensions: ['svelte', 'svx','html','md'],
  plugins: {
    "routify-plugin-frontmatter": {
      extensions: [
        "md",
        "svx"
      ]
    }
  }
};
