<script>
  import { prefetch } from "@roxi/routify";
</script>

<div class="shaded" id="title">
  <header>
    <nav>
      <div class="logo">
        <a href="/"> <img alt="Svelte Society Logo" src="/logo.svg" /> </a>
        <h1>SVELTE SOCIETY</h1>
      </div>
      <ul>
        <li><a href="/" use:prefetch>HOME</a></li>
        <li><a href="/recipes" use:prefetch>RECIPES</a></li>
        <li><a href="/components" use:prefetch>COMPONENTS</a></li>
        <li><a href="/cheat" use:prefetch>CHEAT SHEET</a></li>
        <li><a href="/events" use:prefetch>EVENTS</a></li>
        <li><a href="/about" use:prefetch>ABOUT</a></li>
      </ul>
    </nav>
  </header>
</div>

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
</style>
