<script>
  import { layout, url } from "@roxi/routify";
  import societys from "./societys.json";

  let events = $layout.children;
  console.log(events);

  let sortedEvents = events.sort(
    (a, b) =>
      Date.parse(b.meta.frontmatter.date) - Date.parse(a.meta.frontmatter.date)
  );
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>

<div class="wrapper">
  <div class="event-wrapper">
    {#each sortedEvents as node}
      <figure class="event-tile">
        {#if node.meta.frontmatter.isPast === true}
          <span class="past-event">Past event</span>
        {/if}
        <h2><a href={$url(node.path)}> {node.meta.frontmatter.title} </a></h2>
        <p>{node.meta.frontmatter.date}</p>
      </figure>
    {/each}
  </div>
  <div class="society-wrapper">
    <h5>Societys arround the world</h5>
    {#each societys as society}
      <p class="society">{society.country}</p>
      {#if society.twitter}
        <span class="twitter-wrapper">
          <svg
            class="twittericon"
            viewBox="0 0 21 16"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            ><path
              d="M20.3 2c-.7.3-1.5.4-2.4.5A3.8 3.8 0 0019.7.3c-.8.5-1.7.8-2.6 1a4.2 4.2 0 00-3-1.3 4.2 4.2 0 00-2.9 1.2 4 4 0 00-1 3.7A12.3 12.3 0 011.5.7 3.8 3.8 0 002.8 6c-.7 0-1.3-.2-1.9-.5 0 1 .3 1.9 1 2.6.5.7 1.4 1.2 2.3 1.3l-1 .1h-.9c.3.7.8 1.4 1.5 2 .6.4 1.5.7 2.3.8A8.4 8.4 0 010 13.8a12 12 0 0014.6-1.6 11.3 11.3 0 003.4-8v-.5c1-.3 1.8-1 2.3-1.8z"
            /></svg
          >
          <a href="https://twitter.com/{society.twitter}">{society.twitter}</a>
        </span>
      {/if}

      <ul class="society">
        <li><a href={society.url}>{society.name}</a></li>
      </ul>
    {/each}
  </div>
</div>

<style>
  .wrapper {
    display: flex;
  }

  .event-wrapper {
    flex: 1 1 auto;
    margin: 1%;
  }
  .society-wrapper {
    flex: 0 1 auto;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 0;
    padding: 2rem;

    --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    border-radius: 0.5rem;
  }
  ul.society {
    margin-top: 0;
  }

  p.society {
    margin-bottom: 0;
  }
  .twitter-wrapper {
    padding: 4px 20px;
    display: flex;
    justify-items: start;
  }
  .twittericon {
    padding-right: 4px;
    width: 19px;
    height: 19px;
    color: #60a5fa;
    fill: currentColor;
    place-self: center;
  }
  .event-tile {
    --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    padding: 2rem;
    margin-top: 3rem;
    border-radius: 0.5rem;
    background: #f3f6f9;
  }
  .event-tile:hover {
    background: #e8f3fe;
  }
  .past-event {
    background-color: #fcd34d;
    padding: 0.3rem;
    border-radius: 0.6rem;
    margin-bottom: 1rem;
  }
</style>
