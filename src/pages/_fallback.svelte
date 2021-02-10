<script>
    import { url, metatags } from '@roxi/routify';
    metatags.title = 'Page not found';
</script>

<style>
  .huge {
    font-size: 10rem;
  }
  .e404 {
    text-align: center;
    margin-bottom: 1rem;
  }
</style>

<div class="e404">
  <h1 class="huge">404</h1>
  <div class="big">Page not found. 
    <!-- link to the parent folder of _fallback.svelte -->
    <a href={$url('/')}>Go back</a>
  </div>
</div>
