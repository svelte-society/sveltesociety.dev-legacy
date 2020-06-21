<script>
  export let image, name, blurb, twitter;
</script>

<style>
  .speaker {
    display: grid;
    grid-gap: 24px;
    grid-template-columns: 82px auto;
  }
  img {
    width: 82px;
    height: 82px;
    border-radius: 50%;
  }
  h3 {
    margin-top: 0;
  }
</style>

<div class="speaker">
  <img src={image} alt="Speaker profile" />
  <div>
    <h3>{name}</h3>
    <p>{blurb}</p>
    <div class="twitter">{twitter}</div>
  </div>
</div>
