<script>
  import { layout, url } from "@roxi/routify";
  import Icon from "@/components/Icon.svelte";
  import societys from "./societys.json";

  let events = $layout.children;
  console.log(events);

  // sort events by date
  let sortedEvents = events.sort(
    (a, b) =>
      Date.parse(b.meta.frontmatter.date) - Date.parse(a.meta.frontmatter.date)
  );

  // function that formats hte standard ISO formatted date param in a better to read date format
  function formatDate(inputDate) {
    let rawDate = new Date(inputDate);
    let formattedDate = rawDate.toDateString();
    return formattedDate;
  }
</script>

<svelte:head>
  <title>Events</title>
</svelte:head>

<div class="wrapper">
  <!--event section-->
  <div class="event-wrapper">
    {#each sortedEvents as node}
      <figure class="event-tile">
        {#if node.meta.frontmatter.isPast === true}
          <span class="past-event">Past event</span>
        {/if}
        <h2><a href={$url(node.path)}> {node.meta.frontmatter.title} </a></h2>
        <p>
          <span class="icon-wrapper"
            ><Icon name="calendar" width="24em" height="24em" />{formatDate(
              node.meta.frontmatter.date
            )}</span
          >
        </p>
      </figure>
    {/each}
  </div>

  <!--society section-->
  <div class="society-wrapper">
    <h5>Societys arround the world</h5>
    {#each societys as society}
      <p class="society">{society.country}</p>
      <ul class="society">
        <li>
          <span class="icon-wrapper">
            <Icon name="globe" />
            <a href={society.url} rel="noopener">{society.name}</a>
          </span>
        </li>
        {#if society.twitter}
          <span class="icon-wrapper">
            <Icon name="twitter" />
            <a href="https://twitter.com/{society.twitter}" rel="noopener">{society.twitter}</a
            >
          </span>
        {/if}

        {#if society.githuburl}
          <ul style="list-style-type:none;">
            <li>
              <span class="icon-wrapper">
                <Icon name="github" />
                <a href={society.githuburl} target="_blank">GitHub</a>
              </span>
            </li>
          </ul>
        {/if}
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
    list-style-type: none;
  }

  p.society {
    margin-bottom: 0;
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
