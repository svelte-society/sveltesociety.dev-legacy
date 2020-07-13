<script>
  import '/static/prism.css'
  import CategoryTree from "/src/components/recipes/CategoryTree.svelte";
  import { layout, page } from "@sveltech/routify/runtime";
  const nodes = $layout.children.filter(r => !r.path.includes("/index"));

  const categories = nodes.map(
    node => node.children.filter(r => r.path.includes("/index"))[0]
  );
</script>

<style>
  main {
    display: flex;
    margin: 0 auto;
    max-width: var(--width-content);
    padding: 2rem 1rem;
  }
  .TOC {
    margin-right: 2rem;
    flex: 1;
    font-family: Overpass;
    line-height: 150%;
  }
  .TOC :global(a) {
    color: #2e2e35;
    font-weight: normal;
  }
  article {
    flex: 3;
    margin-left: 2rem;
    overflow-x: hidden;
  }
  :global(article blockquote) {
    background: #ff3e01;
    opacity: 0.2;
    border-radius: 5px 0px 0px 5px;
    color: black;
    border-left: 2px solid #ff3e01;
  }
  .TOCLink {
    align-items: baseline;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 10px;
    padding: 1rem 0;
    border-bottom: 1px solid #d0deec;
    font-size: 1.1em;
  }
  .TOCLink.active a {
    font-weight: bold;
  }
  .TOCLink img {
    height: 1em;
  }
</style>

<svelte:head>
  <title>Svelte Recipes</title>
</svelte:head>

<main>
  <div class="TOC">
    <h1>Table of Contents</h1>
    {#each categories as node}
      <div class="TOCLink" class:active={$page.path.includes(node.parent.path)}>
        <img src={node.meta.frontmatter.icon} alt="" />
        <a href={node.parent.path}>{node.meta.frontmatter.title}</a>
      </div>
      {#if $page.path.includes(node.parent.path)}
        <CategoryTree nodes={node.parent.children} />
      {/if}
    {/each}
  </div>
  <article>
    <slot />
  </article>
</main>
