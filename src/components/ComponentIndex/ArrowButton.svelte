<script>
  export const primary = false;
  let hovered = false;
</script>

<style>
  div {
    border: 2px solid #7e7e93;
    border-radius: 5px;
    background-color: white;
    color: #7e7e93;
    display: flex;
    align-items: center;
    padding: 5px 15px;
  }
  div:hover {
    cursor: pointer;
    border-color: var(--color) !important;
    color: var(--color) !important;
  }

  .arrow {
    margin-left: 25px;
    height: 16px;
    -webkit-mask: url(/right-arrow.svg) no-repeat center;
    mask: url(/right-arrow.svg) no-repeat center;
    background-color: #7e7e93;
  }
  .arrow.active {
    background-color: var(--color);
  }
</style>

<div
  on:mouseover={() => (hovered = true)}
  on:mouseout={() => (hovered = false)}>
  <span>
    <slot />
  </span>
  <div class="arrow" class:active={hovered} />
</div>
