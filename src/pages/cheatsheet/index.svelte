<script>
  import CheatSheetCard from "@/components/CheatSheetCard.svelte";
  import { cheatSheet } from "./cheat-sheet.js";
</script>

<main>
  {#each cheatSheet as item}
    <CheatSheetCard {...item} />
  {/each}
</main>

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
