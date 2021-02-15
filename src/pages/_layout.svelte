<script>
  import { metatags, page } from "@roxi/routify";
  import Nav from "@/components/layout/Nav.svelte";
  import Footer from "@/components/layout/Footer.svelte";

  metatags.template(
    "title",
    (title) => `${title=='Index' ? ` Home` :`${title}`} - Svelte Society`
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
</script>

<div class="grid">
  <div class="content">
    <Nav />
    <slot />
  </div>
  <div class="footer">
    <Footer />
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100%;
  }

  .footer {
    grid-row: 2;
  }
</style>
