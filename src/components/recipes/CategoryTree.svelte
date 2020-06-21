<script>
  export let nodes;
  import { page } from "@sveltech/routify";
</script>

<style>
  ul {
    list-style: none;
    margin-left: 20px;
  }
  li::before {
    content: "•";
    color: var(--svelte-grey-light);
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  li.active::before {
    color: var(--svelte-grey);
  }
</style>

<ul>
  {#each nodes.filter(r => !r.path.includes('/index')) as node}
    <li class:active={$page.path.includes(node.path)}>
      <a href={node.path}>{node.meta.frontmatter.title}</a>
    </li>
    {#if node.children}
      <svelte:self nodes={node.children} />
    {/if}
  {/each}
</ul>
