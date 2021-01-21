### Svelte Society Site

This repository contains the source code for the Svelte Society website. It is comprised of a couple of different pieces that are important to understand when contributing.

Technologies used:
* Routify
* MDSveX
* [RemixIcon](https://icones.js.org/collection/ri)
* Cloudflare Worker Site

## Contributing

Find an issue worth pursuing and pull down the repo. Run `npm i` followed by `npm run dev`. You can now access the site at `localhost:5000`.

If you want to expand the site or do larger work, such as adding new sections to the site, please come to the [Discord](https://discord.gg/JcvNM8p) and discuss it with us first. Otherwise you might be doing work that will not get merged and that is not fun for anyone!
## How to contribute

It is important to keep a good workflow while developing the Svelte Society Site, for this we have established a simple, but common, workflow based on two main branches:

- **master**: this is the branch that is currently live on the [website](https://sveltesociety.dev)
- **staging**: this the working branch and can be previewed [here](https://staging.sveltesociety.dev)

As this is a community driven project, contributions are always welcome :100:. However, make sure to follow these guidelines so everyone's life is easier:

1) Make your changes on the `staging` branch, this will make processing PRs a lot easier
2) Create a PR, detailing the changes you made and why (preferably linked to an open issue)
3) Be patient as we are also doing this on our free time :slightly_smiling_face:
## Recipes

The recipes are written and processed using [Mdsvex](https://mdsvex.com/). Three helper components are provided, located in `src/components/recipes` that can be used to highlight certain parts of a recipe.

- **Warning** Can be used to inform a reader of common pitfall or point to take extra care
- **Note** To highlight something noteworthy
- **ReadMore** Use this to wrap extra reading material related to the recipe

**⚠️ Be aware that markdown inside of these components will not be processed. So, for instance when placing a link inside use normal HTML markup to do so. ⚠️**

# Example usage

```md
---
title: Sample
---

<script>
  import ReadMore from './components/recipes/ReadMore.svelte'
  import Warning from './components/recipes/Warning.svelte'
</script>

This is regular text

<Warning>
    This is text within the block
</Warning>

<ReadMore>
  Click <a href="/">here</a> to read more about this.
</ReadMore>
```
