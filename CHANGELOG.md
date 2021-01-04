# Svelte Society Changelog

Changes after PR #79


- added CHANGELOG.md
- CategoryTree.svelte
    - added display:grid and grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) to ul and media query has been added.
    - removed the below block as it spawns ul as a child of parent ul.
    ```
    {#if node.children}
      <svelte:self nodes={node.children} />
    {/if}
    ```
    - the list now aligns with Figma design.
- global.css
    - added .d-flex.
- index.svx
    - the recipes block is now a section and .content-wrap spans to --width-content ie, 1166px.
    - button aligns with design.
    - some media queries have been modified to target all devices.
    - added class to icon and list title has properties aligned to Figma design.
- recipes/_layout.svelte
    - removed .home-wrap.
