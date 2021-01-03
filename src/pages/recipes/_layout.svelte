<script>
  import CategoryTree from "@/components/recipes/CategoryTree.svelte";
  import { setContext } from 'svelte'

  import { layout, page } from "@roxi/routify";
  const nodes = $layout.children;

  const categories = nodes.map(
    node => node.children.filter(r => r.path.includes("/index"))[0]
  );

  setContext('categories', categories)
</script>

<style>
  @media (min-width: 1024px) {
      main {
        display: flex;
      }
  }
  main {
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
    overflow-x: hidden;
  }
  @media (min-width: 1024px) {
      article {
        margin-left: 2rem;
      }
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
  <link rel="stylesheet" href="/prism.css">
</svelte:head>
{#if $page.path !== "/recipes/index"}
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
{:else}
  <div class="home-wrap">
    <slot />
  </div>
{/if}
