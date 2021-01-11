<script>
    import { layout, url, metatags } from "@roxi/routify";
</script>

<style>
    .event-tile {
        --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

        padding: 2rem;
        margin-top: 3rem;
        border-radius: 0.5rem;
        background: #f3f6f9;
    }
    .event-tile:hover {
        background: #e8f3fe;
    }
    .past-event {
        background-color: #fcd34d;
        padding: 0.3rem;
        border-radius: 0.6rem;
        margin-bottom: 1rem;
    }
</style>

<svelte:head>
    <title>Events</title>
</svelte:head>

{#each $layout.children as node}
    <figure class="event-tile">
        {#if node.meta.frontmatter.isPast === true}
            <span class="past-event">Past event</span>
        {/if}
        <h2><a href={$url(node.path)}> {node.meta.frontmatter.title} </a></h2>
        <p>{node.meta.frontmatter.date}</p>
    </figure>
{/each}
