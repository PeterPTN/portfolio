<script lang="ts">
  export let globalProjectType = "selected";
  export let handleClick;
</script>

<div>
  <button
    class="truncate"
    class:active={globalProjectType === "selected"}
    on:click={() => handleClick("selected")}>Selected Projects</button
  >
  <button
    class="truncate"
    class:active={globalProjectType === "misc"}
    on:click={() => handleClick("misc")}>Misc. Projects</button
  >
</div>

<style>
  div {
    display: flex;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--white);
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    font-size: 1.5rem;
    flex: 1;
  }

  button.active {
    transition: all 0.25s;
    background-color: var(--white);
    color: rgb(129, 94, 17);
    font-weight: bold;
  }
</style>
