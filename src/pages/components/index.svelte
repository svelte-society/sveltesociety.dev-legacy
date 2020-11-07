<script>
  import ComponentCard from "@/components/ComponentIndex/Card.svelte";
  import List from "@/components/ComponentIndex/CardList.svelte";
  import Button from "@/components/ComponentIndex/ArrowButton.svelte";
  import components from "./components.json";

  let searchValue;
  const tags = Array.from(new Set(components.map(item => item.tags).flat()))
  let filterTag = []

  const intersection = (array1, array2) => {
    return array1.filter(item => array2.includes(item))
  }

  $: testData = components.filter(component => {
    if (!searchValue && filterTag.length === 0) return true
    return searchValue && (component.title.includes(searchValue) || component.description.includes(searchValue))
      || filterTag.length > 0 && intersection(filterTag, component.tags).length > 0
  });
  $: categories = Array.from(new Set(testData.map(item => item.category)))
</script>

<style>
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Overpass;
    position: relative;
  }

  .inputs {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 0.5rem;
    margin-right: 2rem;
  }

  .searchbar {
    height: 100%;
    width: 35%;
    font-family: Overpass;
    border-width: 0;
    background: #f3f6f9 url(/search-icon.svg) 98% no-repeat;
    margin: 0;
    padding: 10px 15px;
  }

  .searchbar-count {
    position: absolute;
    top: 100%;
    right: 0;
  }
</style>

<main>
  <h1>This page is not complete yet, below are just placeholders.</h1>
  <div class="controls">
    <div class="inputs">
      <Button>Tags</Button>
      <Button>Size</Button>
      <Button>Other Options</Button>
    </div>

    <input
      class="searchbar"
      type="text"
      placeholder="Search for components..."
      bind:value={searchValue} />
    <span class="searchbar-count">{testData.length} result{#if testData.length !== 1}s{/if}</span>
  </div>
  <hr />
  {#each categories as category}
    <List title={category||"Unclassified"}>
      {#each testData.filter(d => d.category === category) as data}
        <ComponentCard {...data} />
      {/each}
    </List>
  {/each}
</main>
