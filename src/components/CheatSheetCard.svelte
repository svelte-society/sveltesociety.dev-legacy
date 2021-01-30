<script>
  import { HighlightSvelte } from "svelte-highlight";

  export let title = "";
  export let content = "";
  export let doc = "";
  export let repl = "";
  let component;

  function copy() {
    const element = document.getElementById(title).firstChild
    navigator.clipboard.writeText(element.innerText)
  }

</script>

<style>
  .card {
    box-shadow: -5px 5px 5px rgba(0, 0, 0, 0.3);
    border: var(--m1) solid var(--color);
    width: fit-content;
    border-radius: 10px;
  }

  .card > .title {
    background-color: var(--color);
    padding: var(--m10);
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    max-width: 100%;
    border-radius: 10px 10px 0 0;
  }

  .title > h2 {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1.5em;
  }

  .title > .circles {
    display: block;
    width: var(--m18);
    height: var(--m18);
    border-radius: 50%;
    background-color: var(--color-red);
    border: 1px solid #fff;
    box-shadow: 25px 0 0 0 var(--color-yellow), 50px 0 0 0 var(--color-green);
    margin-right: 50px;
    margin-left: 20px;
  }

  .card > .links {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-bottom: 0;
  }

  .links > a {
    font-size: 1.25rem;
    margin-left: 10px;
    text-decoration: none;
  }

  .card > .content {
    display: block;
    padding: 0 var(--m10);
    height: calc(100% - 48px);
    overflow-x: auto;
    font-size: 0.8rem;
  }

  @media (max-width: 484px) {
    .title > h2 {
      font-size: 0.8em;
    }
  }
</style>

<div class="card">
  <header class="title">
    <h2>{title}</h2>
    <span class="circles" />
  </header>

  <section class="links">
    <a href on:click|preventDefault={copy}  title="Copy to clipborad">📋</a>
    <a href={doc} target="_blank" title="Go to documentation">📃</a>
    <a href={repl} target="_blank" title="See in REPL">💻</a>
  </section>

  <section class="content">
    <HighlightSvelte id={title} code={content} />
  </section>
</div>