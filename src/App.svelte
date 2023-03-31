<script lang="ts">
  import Hero from "./lib/containers/Hero.svelte";
  import Main from "./lib/containers/Main.svelte";
  import Footer from "./lib/containers/Footer.svelte";
  import Loader from "./lib/components/Loader.svelte";
  import { getLatency } from "./services/dom-utils";
  import { sleep } from "./services/async-utils";
</script>

{#await sleep(getLatency())}
  <Loader />
{:then}
  <div>
    <Hero />
    <Main />
    <Footer />
  </div>
{/await}
