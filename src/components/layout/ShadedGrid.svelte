<script>
  export let title;
</script>

<style>
  .shaded {
    width: 100%;
    background: #f3f6f9;
    padding: 80px 0;
  }
  section {
    max-width: var(--width-content);
    margin: 0 auto;
    padding: 0 1rem;
  }
  h2 {
    margin-bottom: 80px;
  }
  .grid {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  }
  @media screen and (max-width: 600px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="shaded">
  <section>
    <h2>{title}</h2>
    <div class="grid">
      <slot />
    </div>
  </section>
</div>
