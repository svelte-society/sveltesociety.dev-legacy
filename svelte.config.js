const { mdsvex } = require('mdsvex');
module.exports = {
  extensions: ['.svelte', '.svx'],
  preprocess: [mdsvex({
    layout: {
      recipe: "./src/layouts/Recipe.svelte",
      recipeCategory: "./src/layouts/RecipeCategory.svelte"
    }
  })],
};
