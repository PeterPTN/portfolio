<script lang="ts">
  import type ProjectDetails from "../../types/ProjectDetails";
  import FaExternalLinkAlt from "svelte-icons/fa/FaExternalLinkAlt.svelte";
  import FaCode from "svelte-icons/fa/FaCode.svelte";
  import { fade } from "svelte/transition";
  export let details: ProjectDetails;
  export let images: string[];

</script>

<div class="project-card-container" in:fade>
  <a
    class="project-image-link"
    href={details?.url}
    target="_blank"
    rel="noopener noreferrer nofollow"
  >
    <img src={images[0]} alt={details.title + " image"} />
  </a>

  <article>
    <div>
      <h2>{details?.title}</h2>
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
</div>

<style>
  .project-card-container {
    display: flex;
    align-items: stretch;
    line-height: 1.25;
    column-gap: 2rem;
  }

  article {
    flex: 2;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    line-height: 1.35;
    letter-spacing: .5px;
  }

  li {
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 0.5rem;
  }

  .icon {
    aspect-ratio: 1/1;
    height: 20px;
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
    flex: 1;
    height: 175px;
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 0px 25px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }
</style>
