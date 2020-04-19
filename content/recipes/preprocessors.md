---
title: Build Setup Recipes
---

# Build Setup Recipes

## Using Svelte Preprocessors (for SCSS, TypeScript, and Babel)

_to be written_

related issues: https://github.com/svelte-society/recipes-mvp/issues/8

## Preprocessors

> This article references `svelte.preprocess` throughout but you may be more familiar with the `preprocess` option of `svelte-loader` or `rollup-plugin-svelte`. This `preprocess` option calls `svelte.preprocess` internally. The bundler plugin gives you easy access to it, so you don't need to transform your components before compilation manually.

The Svelte compiler expects all components it receives to be valid Svelte syntax. To use compile-to-js or compile-to-css languages, you need to make sure that any non-standard syntax is transformed before Svelte tries to parse it. To enable this Svelte provides a `preprocess` method allowing you to transform different parts of the component before it reaches the compiler.

With `svelte.preprocess` you have a great deal of flexibility in how you write your components while ensuring that the Svelte compiler receives a plain component.

### svelte.preprocess

Svelte's `preprocess` method expects an object or an array of objects with one or more of `markup`, `script`, and `style` properties, each being a function receiving the source code as an argument. The preprocessors run in this order.

```js
const preprocess = {
  markup,
  script,
  style,
};
```

In general, preprocessors receive the component source code and must return the transformed source code, either as a string or as an object containing a `code` and `map` property. The `code` property must contain the transformed source code, while the `map` property can optionally contain a sourcemap. The sourcemap is currently unused by Svelte.

### Markup preprocessors

_to be written_

### Script preprocessors

_to be written_

### Style preprocessors

_to be written_

## How to make a pre-processor that makes it possible to use PUG/Jade

_to be written_
