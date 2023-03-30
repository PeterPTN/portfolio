<script lang="ts">
  import ProjectButtons from "../components/ProjectButtons.svelte";
  import SelectedProjectCard from "../components/SelectedProjectCard.svelte";
  import MiscProjectCard from "../components/MiscProjectCard.svelte";
  import About from "../components/About.svelte";
  import {
    getSelectedProjects,
    getMiscProjects,
  } from "../../services/firebase-utils";
  import { onMount } from "svelte";

  let selectedProjects = [];
  let miscProjects = [];

  onMount(async () => {
    selectedProjects = await getSelectedProjects();
    miscProjects = await getMiscProjects();
  });

  let globalProjectType = "selected";

  function toggleButton(projectType: string) {
    globalProjectType = projectType;
  }
</script>

<div class="main">
  <div class="main-left-col">
    <About />
  </div>

  <div class="main-right-col">
    <ProjectButtons {globalProjectType} handleClick={toggleButton} />
    <div class="main-right-col-content">
      {#if selectedProjects.length === 0 && miscProjects.length === 0}
        <p>Loading...</p>
      {/if}

      {#if globalProjectType === "selected" && selectedProjects.length > 0}
        {#each selectedProjects as project}
          <SelectedProjectCard {...project} />
        {/each}
      {:else if globalProjectType === "misc"}
        {#each miscProjects as project}
          <MiscProjectCard {...project} />
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
    column-gap: 2rem;
  }

  .main-right-col {
    flex: 1.25;
    display: flex;
    flex-direction: column;
  }

  .main-right-col-content {
    background-color: var(--white);
    padding: 3rem 1.5rem;
    display: flex;
    flex-direction: column;
    row-gap: 3rem;
  }

  .main-left-col {
    flex: 1;
  }
</style>
