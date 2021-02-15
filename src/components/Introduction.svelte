<script>
  import Icon from "@/components/Icon.svelte";
</script>

<section>
  <h2>
    Welcome to the community page of SvelteJS! Here you can find a lot of
    information around this great opportunity to build cybernetically enhanced
    web apps. We provide topics like Svelte events, the local communities around
    the world and a cheatsheet.
  </h2>
  <p>Here you can find more interesting things about us in Social Media:</p>
  <div class="wrapper">
    <div class="wrapper-element">
      <Icon name="youtube" width="7rem" height="7rem" />
      <a href="https://youtube.com/SvelteSociety" rel="noopener">
        Our YouTube Channel</a
      >
    </div>
    <div class="wrapper-element">
      <Icon name="twitter" width="7rem" height="7rem" />
      <a href="https://twitter.com/sveltesociety" rel="noopener"
        >Our Twitter for the latest news around the community</a
      >
    </div>
    <div class="wrapper-element">
      <Icon name="discord" width="7rem" height="7rem" />
      <a href="https://discord.gg/daNtanDmsE" rel="noopener"
        >Our Discord to <s>share memes</s> get help</a
      >
    </div>
  </div>
  <br />
  <img src="introduction.svg" alt="Live Conversation Application Preview" />
</section>

<style>
  section {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h2,
  p {
    max-width: 720px;
    text-align: left;
    margin: 40px 0;
  }

  p {
    font-size: larger;
    letter-spacing: 1px;
  }
  div.wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  div.wrapper-element {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 1rem;
    margin-left: 1rem;
  }
  a {
    color: black;
    font-weight: lighter;
  }
  img {
    margin: 2rem 0;
  }
</style>
