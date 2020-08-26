<script>
  export let show = false;
</script>

<style>
  .background {
    position: fixed;
    display: grid;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
  }

  .content {
    display: grid;
    justify-content: center;
    margin: 15% auto;
  }
</style>

{#if show}
  <div class="background" on:click>
    <div class="content" on:click|stopPropagation={console.log}>
      <slot />
    </div>
  </div>
{/if}
