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
  export let npm = "";
  export let repo = "";
  export let repl = [];

  const copyToClipboard = (text) => {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.writeText(text)
      }
    });
  }
  const getReplInfo = hash => {
    return fetch(`https://svelte.dev/repl/${hash}.json`, {
      headers: {"accept": "application/json"},
      mode: "cors"
    }).then(response => response.json())
  }
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
  .card__bottom > * {
    white-space: nowrap;
  }

  .flex-grow {
    flex-grow: 1;
  }

  .section-title {
    color: var(--color-text-secondary);
    text-transform: uppercase;
    font-size: 0.9em;
  }
</style>

<div class="card" class:active>
  {#if image}
    <img src={image} alt={title} />
  {/if}
  <h1>
    <a href={url}>{title}</a>
    {#if npm}<Tag click={() => copyToClipboard(`npm install ${npm}`)} variant="copy" title="npm install {npm}"/>{/if}
  </h1>
  <p class="flex-grow">{description}</p>
  <div class="card__tags">
    {#each tags as tag}
      <Tag title={tag} variant='blue' />
    {/each}
  </div>
  {#if repl && repl.length > 0}
    <div class="section-title">REPL</div>
    <div class="card__tags">
      {#each repl as hash}
        {#await getReplInfo(hash)}
          <Tag title="REPL" variant='red' click={() => window.open(`https://svelte.dev/repl/${hash}`)} />
        {:then info}
          <Tag title={info.name} variant='red' click={() => window.open(`https://svelte.dev/repl/${hash}`)} />
        {:catch e}
          <Tag title="REPL" variant='red' click={() => window.open(`https://svelte.dev/repl/${hash}`)} />
        {/await}
      {/each}
    </div>
  {/if}
  <div class="card__bottom">
    <div>
      {#if stars > 0}
        {#if (repo || url).includes('github')}
          <img src="/github_logo.svg" alt="github logo" />
        {:else if (repo || url).includes('gitlab')}
          <img src="/gitlab_logo.svg" alt="gitlab logo" />
        {:else}
          &#9733;
        {/if}
        {stars}
      {/if}
    </div>
    <div>{new Intl.DateTimeFormat('en-Us').format(Date.parse(addedOn))}</div>
  </div>
</div>
