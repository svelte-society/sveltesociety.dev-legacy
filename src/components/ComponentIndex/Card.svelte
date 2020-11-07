<script>
  import Tag from "@/components/Tag.svelte";
  export let active = false;
  export let title = "";
  export let description = "";
  export let image = "";
  export let tags = [];
  export let stars = 0;
  export let addedOn = new Date();
  export let url = "";
</script>

<style>
  .card {
    display: flex;
    flex-direction: column;
    max-width: 370px;
    padding: 14px;
    background: #f3f6f9;
    border-radius: 5px;
  }
  .active,
  .card:hover {
    background: #e8f3fe;
  }
  .card__tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }
  .card__bottom {
    display: flex;
    justify-content: space-between;
  }
  .flex-grow {
    flex-grow: 1;
  }
</style>

<div class="card" class:active>
  {#if image}<img src={image} alt={title} />{/if}
  <h1><a href={url}>{title}</a></h1>
  <p class="flex-grow">{description}</p>
  <div class="card__tags">
    {#each tags as tag}
      <Tag title={tag} variant='blue' />
    {/each}
  </div>
  <div class="card__bottom">
    <div>
      <img src="/github_logo.svg" alt="github logo" />
      {stars}
    </div>
    <div>{new Intl.DateTimeFormat('en-Us').format(Date.parse(addedOn))}</div>
  </div>
</div>
