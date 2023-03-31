<script lang="ts">
  import ProjectButtons from "../components/ProjectButtons.svelte";
  import SelectedProjectCard from "../components/SelectedProjectCard.svelte";
  import MiscProjectCard from "../components/MiscProjectCard.svelte";
  import About from "../components/About.svelte";
  import {
    getSelectedProjects,
    getMiscProjects,
  } from "../../services/firebase-utils";

  function getProjects() {
    return Promise.all([getSelectedProjects(), getMiscProjects()]);
  }

  let globalProjectType: "selected" | "misc" = "selected";
</script>

<div class="main">
  <div class="main-left-col">
    <About />
  </div>

  <div class="main-right-col">
    <ProjectButtons bind:globalProjectType />
    <div class="main-right-col-content">
      {#await getProjects()}
        <h2>Loading...</h2>
      {:then [selectedProjects, miscProjects]}
        {@const component =
          globalProjectType === "selected"
            ? SelectedProjectCard
            : MiscProjectCard}
        {@const projects =
          globalProjectType === "selected" ? selectedProjects : miscProjects}
        {#each projects as project}
          <svelte:component this={component} {...project} />
        {/each}
      {:catch error}
        <h2>{error.message}</h2>
      {/await}
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    column-gap: 1rem;
  }

  .main-right-col {
    flex: 1.4;
    display: flex;
    flex-direction: column;
  }

  .main-right-col-content {
    background-color: var(--white);
    padding: 2rem 2rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  .main-left-col {
    flex: 1;
  }

  @media screen and (max-width: 1000px) {
    .main {
      flex-direction: column;
      row-gap: 4rem;
    }
  }
</style>
