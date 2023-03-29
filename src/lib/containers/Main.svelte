<script lang="ts">
  import ProjectButtons from "../components/ProjectButtons.svelte";
  import MainProjectCard from "../components/SelectedProjectCard.svelte";
  import SideProjectCard from "../components/MiscProjectCard.svelte";
  import About from "../components/About.svelte";

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
      {#if globalProjectType === "selected"}
        <MainProjectCard />
        <MainProjectCard />
        <MainProjectCard />
        <MainProjectCard />
      {:else if globalProjectType === "misc"}
        <SideProjectCard />
        <SideProjectCard />
        <SideProjectCard />
        <SideProjectCard />
      {/if}
    </div>
  </div>
</div>

<style>
  .main {
    display: flex;
  }

  .main-right-col {
    flex: 1.25;
    display: flex;
    flex-direction: column;
  }

  .main-right-col-content {
    background-color: white;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }

  .main-left-col {
    flex: 1;
  }
</style>
