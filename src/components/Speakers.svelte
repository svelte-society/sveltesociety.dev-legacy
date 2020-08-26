<script>
  import ShadedGrid from "./layout/ShadedGrid.svelte";
  import Speaker from "./Speaker.svelte";

  const speakers = [];
</script>

<ShadedGrid title="Our Great Speakers">
  <Speaker />
  <Speaker />
  <Speaker />
  <Speaker />
  {#each speakers as { image, name, blurb, twitter }}
    <Speaker {image} {name} {blurb} {twitter} />
  {/each}
</ShadedGrid>
