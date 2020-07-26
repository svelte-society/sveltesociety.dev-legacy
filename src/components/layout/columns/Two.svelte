<style>
  div {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
  @media screen and (min-width: 800px) {
    div {
      grid-template-columns: 3fr 2fr;
    }
  }
</style>

<div>
  <slot name="left">No content supplied to the left side.</slot>
  <slot>No content supplied to the right side.</slot>
</div>
