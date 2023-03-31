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
    font-size: 1.35rem;
    flex: 1;
    border-bottom: .5rem solid transparent;
  }

  button.active {
    transition: all 0.15s;
    background-color: var(--white);
    color: black;
    font-weight: bolder;
    letter-spacing: 4px;
    border-color: black;
    animation: fade .45s;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  } 
</style>
