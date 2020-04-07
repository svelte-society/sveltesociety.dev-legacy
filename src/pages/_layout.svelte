<style>
  .shaded {
    width: 100%;
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
  li a:hover {
    text-decoration: none;
    border-bottom: 4px solid var(--color);
  }
  .logo {
    display: flex;
    align-items: center;
  }
</style>

<svelte:head>
  <title>Svelte Society Day 2020</title>
  <script
    async
    defer
    data-domain="sveltesociety.dev"
    src="https://plausible.io/js/plausible.js">

  </script>
  <!-- Correct these when ready -->
  <meta
    name="description"
    content="An online full-day conference on all things Svelte" />

  <!-- Google / Search Engine Tags -->
  <meta itemprop="name" content="Svelte Society Day 2020" />
  <meta
    itemprop="description"
    content="An online full-day conference on all things Svelte" />
  <meta itemprop="image" content="http://sveltesociety.dev/introduction.png" />

  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="http://sveltesociety.dev/" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Svelte Society Day 2020" />
  <meta
    property="og:description"
    content="An online full-day conference on all things Svelte" />
  <meta
    property="og:image"
    content="http://sveltesociety.dev/introduction.png" />

  <!-- Twitter Meta Tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Svelte Society Day 2020" />
  <meta
    name="twitter:description"
    content="An online full-day conference on all things Svelte" />
  <meta
    name="twitter:image"
    content="http://sveltesociety.dev/introduction.png" />
</svelte:head>

<div class="shaded" id="title">
  <header>
    <nav>
      <div class="logo">
        <a href="/">
          <img alt="Svelte Society Logo" src="./logo.jpg" />
        </a>
        <h1>SVELTE SOCIETY</h1>
      </div>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/cookbook">COOKBOOK</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
<slot />
