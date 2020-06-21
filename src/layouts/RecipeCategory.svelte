<script>
  import { layout, page } from "@sveltech/routify";
  const nodes = $layout.parent.children.filter(r => !r.path.includes("/index"));
</script>

<slot />

<ul>
  {#each nodes as node}
    <li>
      <a href={node.path}>{node.meta.frontmatter.title}</a>
    </li>
  {/each}
</ul>
