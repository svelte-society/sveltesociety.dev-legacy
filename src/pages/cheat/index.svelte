<script>
import CheatSheetCard from '@/components/CheatSheetCard.svelte';
import { HighlightSvelte } from 'svelte-highlight';
import { cheatSheet } from './cheat-sheet.js';

</script>

<style>

main {
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
}

main :global(.card) {
    margin-left: 10px;
    margin-bottom: 10px;
    flex: 1;
}

@media (max-width: 960px) {
    main > :global(.card) {
        max-width: 95%;
    }
}
</style>

<main>
    {#each cheatSheet as item}
        <CheatSheetCard title={item.title}>
            <HighlightSvelte code={item.content.replace(/::/g, '//')} />
        </CheatSheetCard>
    {/each}
</main>
  