<script lang="ts">
  import Hero from "./lib/containers/Hero.svelte";
  import Main from "./lib/containers/Main.svelte";
  import Footer from "./lib/containers/Footer.svelte";
  import Loader from "./lib/components/Loader.svelte";
  import { onMount } from "svelte";
  import { getLatency } from "./services/dom-utils";
  let loading = true;

  onMount(async () => {
    setTimeout(() => {
      loading = false;
    }, getLatency());
  });
</script>

{#if loading}
  <Loader />
{/if}
<div>
  <Hero />
  <Main />
  <Footer />
</div>

<style>
</style>
