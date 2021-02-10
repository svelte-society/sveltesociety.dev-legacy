<script>
  import { HighlightSvelte } from "svelte-highlight";
  import { fly } from "svelte/transition";

  export let title = "";
  export let content = "";
  export let doc = "";
  export let repl = "";
  let isCopied = false;
  function copy() {
    const element = document.getElementById(title).firstChild;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(element.innerText);
      isCopied = true;
      setTimeout(() => (isCopied = false), 1500);
    }
  }
</script>

<div class="card">
  <header class="title">
    <h2>{title}</h2>
    <span class="circles" />
  </header>

  <section class="links">
    {#if isCopied}
      <span transition:fly={{ x: 20 }}> Copied to clipboard </span>
    {/if}

    <a href on:click|preventDefault={copy} title="Copy to clipborad">📋</a>
    <a href={doc} target="_blank" title="Go to documentation">📃</a>
    <a href={repl} target="_blank" title="See in REPL">💻</a>
  </section>

  <section class="content">
    <HighlightSvelte id={title} code={content} />
  </section>
</div>

<style>
  .card {
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    border: var(--m1) transparent var(--color);
    border-radius: 10px;
    width: fit-content;
    border-radius: 10px;
  }
  .card > .title {
    background-color: var(--color-secondary);
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
    width: var(--m15);
    height: var(--m15);
    border-radius: 50%;
    background-color: var(--color-red);
    box-shadow: 25px 0 0 0 var(--color-yellow), 50px 0 0 0 var(--color-green);
    margin-right: 50px;
    margin-left: 20px;
  }
  .card > .links {
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-bottom: 0;
    color: var(--color-red);
    font-size: 0.8rem;
  }
  .links > a {
    font-size: 1.25rem;
    margin-left: 20px;
    text-decoration: none;
  }
  .card > .content {
    display: block;
    background: none;
    padding: 0 var(--m10);
    height: calc(100% - 48px);
    overflow-x: auto;
    font-size: 0.9rem;
  }

  .content > :global(pre.hljs) {
    background: none;
    line-height: 1.5;
  }
  @media (max-width: 484px) {
    .title > h2 {
      font-size: 0.9em;
    }
    .card > section {
      font-size: 0.7rem;
    }
  }

  @media print {
    @page {
      margin: 0.5cm;
    }
    .card,
    .card > .title,
    .title > h2,
    .card > section,
    section > :global(pre.hljs),
    :global(code) {
      page-break-inside: avoid;
    }
    .card {
      --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
      border: var(--m1) transparent var(--color);
      border-radius: 10px;
      width: fit-content;
      page-break-before: auto;
      page-break-after: auto;
    }
    .card > .title {
      background-color: var(--color-secondary);
      padding: var(--m5);
      color: var(--color-text-secondary);
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      max-width: 100%;
      border-radius: 10px 10px 0px 0px;
    }
    .title > h2 {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 1em;
    }
    .title > .circles {
      display: none;
    }
    .card > section {
      display: block;
      background: none;
      height: calc(100% - 48px);
      overflow-x: auto;
      font-size: 0.5rem;
      padding: 3px;
    }
    section > :global(pre.hljs) {
      line-height: 1.25;
      background: none;
    }
  }
</style>
