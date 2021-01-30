<script>
  import { isActive, url } from "@roxi/routify";
  const links = [
    ["/index", "home"],
    ["/recipes", "recipes"],
    ["/components", "components"],
    ["/cheatsheet", "cheat sheet"],
    ["/events", "events"],
    ["/about", "about"],
  ];
</script>

<div class="shaded" id="title">
  <header>
    <nav>
      <div class="logo">
        <a href="/"> <img alt="Svelte Society Logo" src="/logo.svg" /> </a>
        <h1><a href="/">SVELTE SOCIETY</a></h1>
      </div>
      <ul>
        {#each links as [path, name]}
          <li>
            <a href={$url(path)} class:active={$isActive(path)}>
              {name}
            </a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
</div>

<style>
  h1 a {
    font-size: inherit;
    text-decoration: none;
  }
  .shaded {
    max-width: 100%;
    background: #f3f6f9;
  }

  header {
    padding: 64px 1rem;
  }

  nav {
    margin: 0;
  }

  @media screen and (max-width: 840px) {
    nav {
      flex-direction: column;
    }
  }

  h1 {
    margin: 0 0 0 35px;
    padding: 0;
    text-align: center;
  }

  a {
    color: black;
    font-size: 19px;
  }
  li a {
    text-transform: uppercase;
  }

  li a:hover {
    text-decoration: none;
    border-bottom: 4px solid var(--color);
  }
  .active {
    border-bottom: 4px solid var(--color);
  }
  .logo {
    display: flex;
    align-items: center;
  }

  img {
    width: 92px;
    height: 92px;
  }

  @media print {
    .shaded{
      display: none;
    }
  }
</style>
