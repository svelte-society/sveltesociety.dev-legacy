<script>
  import ComponentCard from "@/components/ComponentIndex/Card.svelte";
  import List from "@/components/ComponentIndex/CardList.svelte";
  import Button from "@/components/ComponentIndex/ArrowButton.svelte";
  import componentsMock from "./components.js";

  let searchValue;

  $: testData = componentsMock.filter(component => {
    if (searchValue) {
      return (
        component.title.includes(searchValue) ||
        component.description.includes(searchValue)
      );
    }
    return true;
  });
</script>

<style>
  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Overpass;
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
  </div>
  <hr />
  <List title="Forms & User Input">
    {#each testData.filter(d => d.category === 'forms') as data}
      <ComponentCard {...data} />
    {/each}
  </List>
  <List title="User Interface Libraries">
    {#each testData.filter(d => d.category === 'ui') as data}
      <ComponentCard {...data} />
    {/each}
  </List>
</main>
