<script>
  import Icon from "@/components/Icon.svelte";

  let hide = false;
  export let icon = "";
</script>

{#if !hide}
  <div>
    <span class="icon-wrapper"
      ><Icon name={icon} width="6rem" height="6rem" /></span
    >
    <slot />
    <button class="close-hero" on:click={() => (hide = true)}
      ><span class="icon-wrapper"><Icon name="close" /></span></button
    >
  </div>
{/if}

<style>
  div {
    margin: 7px;
    padding: 4px;
    border: 3px solid #f43f5e;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  span.icon-wrapper {
    padding: 0;
  }
  button.close-hero {
    margin-top: 0px;
    align-self: flex-start;
    padding: 2px;
    background: #fff;
    border: none;
  }
  button.close-hero:hover {
    background: #fca5a5;
  }
</style>
