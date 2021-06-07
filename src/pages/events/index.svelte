<script>
  import { layout, url } from "@roxi/routify";
  import Icon from "@/components/Icon.svelte";
  import WarningHero from "@/components/layout/WarningHero.svelte";
  import societies from "./societies.json";

  let events = $layout.children;

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

<WarningHero
  icon="virus"
>
  <p>Due to the coronavirus pandemic, we can't currently hold events with live audiences. Instead, we are holding many events online.</p>
</WarningHero>

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
            ><Icon name="calendar" width="25px" height="25px" />{formatDate(
              node.meta.frontmatter.date
            )}</span
          >
        </p>
      </figure>
    {/each}
  </div>

  <!--society section-->
  <div class="society-wrapper">
    <h5>Societies arround the world</h5>
    {#each societies as society}
      {#if society.continent}
        <h6 class="continent">{society.continent}</h6>
      {:else}
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
              <a href="https://twitter.com/{society.twitter}" rel="noopener"
                >{society.twitter}</a
              >
            </span>
          {/if}
          {#if society.telegram}
            <span class="icon-wrapper"
              ><Icon name="telegram" />
              <a href={society.telegram} target="_blank" rel="noopener"
                >Join on Telegram</a
              ></span
            >
          {/if}

          {#if society.youtube}
            <span class="icon-wrapper"
              ><Icon name="youtube" />
              <a href={society.youtube} target="_blank" rel="noopener"
                >{society.name} YouTube Channel</a
              ></span
            >
          {/if}

          {#if society.githuburl}
            <li>
              <span class="icon-wrapper">
                <Icon name="github" />
                <a href={society.githuburl} target="_blank" rel="noopener"
                  >GitHub</a
                >
              </span>
            </li>
          {/if}
        </ul>
      {/if}
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

  h6.continent {
    font-size: 25px;
    color: #64748b;
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

  /* mobile design */
  @media only screen and (max-width: 768px) {
    .wrapper {
      display: flex;
      flex-direction: column;
    }
    .society-wrapper {
      flex: 0 1 auto;
      margin-top: 5%;
      padding: 2rem;

      --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
        0 4px 6px -2px rgba(0, 0, 0, 0.05);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }
  }
</style>
