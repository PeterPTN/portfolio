<script lang="ts">
      import { fade, blur } from "svelte/transition";
</script>

<div class="loader" in:fade out:blur >
  <div />
</div>

<style>
  .loader {
    position: absolute;
    z-index: 100;
    display: flex;
    justify-content: center;
    left: -5rem;
    right: -5rem;
    top: 0;
    bottom: 0;
    background-color: black;
  }

  .loader div {
    margin-top: 25%;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 5px solid var(--white);
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
