<script>
  import ComponentCard from "@/components/ComponentIndex/Card.svelte";
  import List from "@/components/ComponentIndex/CardList.svelte";
  import Button from "@/components/ComponentIndex/ArrowButton.svelte";
  import components from "./components.json";

  let searchValue;
  let searchTag;
  const tags = Array.from(new Set(components.map(item => item.tags).flat()))
  let filterTag = []

  const intersection = (array1, array2) => {
    return array1.filter(item => array2.includes(item))
  }

  $: testData = components.filter(component => {
    if (!searchValue && filterTag.length === 0) return true

    if (
          (searchValue && !(component.title.includes(searchValue) || component.description.includes(searchValue)))
          || (filterTag.length > 0 && intersection(filterTag, component.tags).length === 0)
    ) {
      return false
    }

    return true
  });
  $: tagSearchResult = searchTag ? tags.filter(item => item.includes(searchTag)) : tags
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

  ul.popin {
    padding: 0.5ex;
    margin: 0;
    font-size: 0.7em;
    max-height: 50vh;
    overflow-y: auto;
  }

  ul.popin li {
    list-style: none;
    padding: 0;
    margin: 0;
    text-transform: capitalize;
  }
  ul.popin li:hover {
    background: #eee;
    border-radius: 3px;
  }
  ul.popin li.tag-search {
    position: sticky;
    top: -0.5ex;
    margin: 0 -0.5ex;
    padding: 0.5ex;
    border-radius: 4px;
    background: white;
  }
  ul.popin li.tag-search input {
    margin: 0;
    background: #f3f6f9;
    width: 100%;
  }
  ul.popin li.tag-search:hover {
    background: white;
  }

  ul.popin li label {
    display: flex;
    align-items: center;
    line-height: 0.7rem;
    padding: 0.8ex;
  }

  ul.popin li input {
    flex: 0;
    margin: 0 1ex 0 0;
  }

  @media screen and (max-width: 1024px) {
    .controls {
      flex-flow: column-reverse;
    }

    .inputs {
      align-self: flex-start;
      width: 100%;
      grid-template-columns: repeat(3, auto);
    }

    .searchbar {
      align-self: flex-end;
      margin-bottom: 1ex;
    }
  }

  @media screen and (max-width: 700px) {
    .controls {
      align-items: stretch;
    }

    .inputs {
      grid-template-columns: auto;
    }

    .searchbar {
      width: auto;
      align-self: stretch;
    }
  }
</style>

<main>
  <h1>Components</h1>
  <div class="controls">
    <div class="inputs">
      <Button active={filterTag.length > 0}>
        Tags {#if filterTag.length > 0}<small>({filterTag.length})</small>{/if}
        <ul slot="menu" role="menu" class="popin">
          <li class="tag-search"><input placeholder="Search for tags..." bind:value={searchTag} /></li>
          {#each tagSearchResult as tag}
            <li><label><input type="checkbox" bind:group={filterTag} value={tag}> {tag}</label></li>
          {/each}
        </ul>
      </Button>
      <Button>Size</Button>
      <Button on:click={() => location.href = "/help/components"}>Submit a component</Button>
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
