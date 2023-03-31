<script lang="ts">
  import type ProjectDetails from "../../types/ProjectDetails";
  import FaExternalLinkAlt from "svelte-icons/fa/FaExternalLinkAlt.svelte";
  import FaCode from "svelte-icons/fa/FaCode.svelte";
  import { fade} from "svelte/transition";
  export let details: ProjectDetails;
  export let images: string[];
</script>

<div class="project-card-container" in:fade>
  <article>
    <div class="project-description">
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
    column-gap: 2rem;
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.03);
    padding: .5rem;
  }

  h2 {
    margin-bottom: 1rem;
    background-color: rgb(31, 30, 30);
    color: var(--white);
    width: fit-content;
    padding: 0 .5rem;
  }

  article {
    flex: 1.5;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    line-height: 1.5;
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
    flex: 1;
    height: 210px;
  }

  img {
    width: 100%;
    height: 100%;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 0px 25px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  @media screen and (max-width:1000px) {
    .project-card-container, article {
      flex-direction: column;
      align-items: center;
    }

    .project-card-container {
      row-gap: 1rem;
    }
  }
</style>
