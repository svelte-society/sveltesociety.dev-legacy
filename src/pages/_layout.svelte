<script>
  import { metatags, page } from "@roxi/routify";
  metatags.template(
    "title",
    (title) => `${title ? ` ${title} - ` : ""}Svelte Society`
  );
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  $: metatags.title = capitalize($page.title);
  $: metatags.url = `https://sveltesociety.dev${$page.path.replace(
    /\/index$/,
    ""
  )}`;
  $: metatags.description = `Svelte Society is a community-driven effort to organise and promote SvelteJS.`;
  $: metatags.type = `website`;
  $: metatags.image = `http://sveltesociety.dev/introduction.png`;

  $: metatags["twitter:card"] = `summary_large_image`;
  $: metatags["twitter:image"] = `http://sveltesociety.dev/introduction.png`;
  $: metatags["twitter:title"] = `Svelte Society`;
  $: metatags[
    "twitter:description"
  ] = `Svelte Society is a community-driven effort to organise and promote SvelteJS.`;

  // get the year for the copyright statement
  var date = new Date();
  var year = date.getFullYear();
</script>

<style>
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
  li a:hover {
    text-decoration: none;
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
  footer {
    display: flex;
    justify-content: space-between;
    max-width: unset;
    padding: 3em;
  }
</style>

<div class="shaded" id="title">
  <header>
    <nav>
      <div class="logo">
        <a href="/"> <img alt="Svelte Society Logo" src="/logo.svg" /> </a>
        <h1>SVELTE SOCIETY</h1>
      </div>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/recipes">RECIPES</a></li>
        <li><a href="/components">COMPONENTS</a></li>
        <li><a href="/events">EVENTS</a></li>
        <li><a href="/about">ABOUT</a></li>
      </ul>
    </nav>
  </header>
</div>
<slot />

<footer class="shaded">
  <div>© Svelte Society {year}</div>

  <div>
    Want to contribute? Pick up an issue on
    <a
      href="https://github.com/svelte-society/sveltesociety.dev"
      target="_blank">GitHub</a>!
  </div>
</footer>
