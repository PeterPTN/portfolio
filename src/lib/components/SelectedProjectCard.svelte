<script lang="ts">
  import type ProjectDetails from "../../types/ProjectDetails";
  import FaExternalLinkAlt from "svelte-icons/fa/FaExternalLinkAlt.svelte";
  import FaCode from "svelte-icons/fa/FaCode.svelte";
  import { fade } from "svelte/transition";
  export let details: ProjectDetails;
  export let images: string[];
  export let id;

  let currentHoverId = "";

  function test() {
    currentHoverId = id;
  }

  console.log(id);
</script>

<div
  on:mouseover={() => test()}
  on:focus={() => test()}
  on:mouseout={() => (currentHoverId = "")}
  on:blur={() => (currentHoverId = "")}
  class="project-card-container"
  in:fade
>
  <article>
    <div class="project-description">
      <h2 class={currentHoverId === id && id} class:out={currentHoverId === ""}>
        {details?.title}
      </h2>
      <p>{details?.blurb}</p>
    </div>

    <ul>
      <li>
        <a class="external-links" href={details?.github}
          ><div class="icon"><FaCode /></div>
          Source Code</a
        >
      </li>
      <li>
        <a class="external-links" href={details?.url}
          ><div class="icon"><FaExternalLinkAlt /></div>
          View Live</a
        >
      </li>
    </ul>
  </article>

  <a
    class="project-image-link"
    href={details?.url}
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <img src={images[0]} alt={details.title + " gif"} />
  </a>
</div>

<style>
  .project-card-container {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.03);
    padding: 0.5rem;
  }

  h2 {
    margin-bottom: 1rem;
    width: fit-content;
    padding: 0 0.5rem;
    color: var(--white);
  }

  h2.GVZHh0UgAvrVkmFqaUl2 {
    background-color: rgb(201, 138, 20);
    transition: all 0.15s;
  }

  h2.JPs4nPRKqIZ3whzabJV7 {
    background-color: rgb(20, 201, 101);
    transition: all 0.15s;
  }

  h2.xQPPhEE7o7Hxi0kYflgs {
    background-color: rgb(14, 82, 160);
    transition: all 0.15s;
  }

  h2.out {
    background-color: rgb(31, 30, 30);
    color: var(--white);
    transition: all 0.15s;
  }

  article {
    min-width: 250px;
    flex: 1.25;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    line-height: 1.5;
    letter-spacing: 0.5px;
  }

  li {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 0.5rem;
  }

  .icon {
    aspect-ratio: 1/1;
    height: 25px;
    margin-right: 10px;
  }

  .external-links {
    display: flex;
    color: black;
  }

  .external-links:hover {
    text-decoration: underline;
  }

  .project-image-link {
    width: 350px;
  }

  img {
    width: 100%;
    transform: scale(0.9);
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 0px 25px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    border: 4px solid rgb(0, 0, 0, 0.05);
  }

  @media screen and (max-width: 1000px) {
    .project-card-container,
    article {
      flex-direction: column;
      align-items: center;
    }

    .project-card-container {
      row-gap: 1.5rem;
    }

    .project-image-link {
      width: auto;
      margin: 0 .5rem;
    }

    img {
      transform: scale(1.1);
    }
  }
</style>
