<script lang="ts">
  import type ProjectDetails from "../../types/ProjectDetails";
  export let details: ProjectDetails;
  export let images: string[];

  console.log(details)
  console.log(images)
</script>

<div>
  <article>
    <h2>{details?.title}</h2>
    <p>{details?.blurb}</p>
    <p>{details?.github}</p>
    <p>{details?.url}</p>
  </article>

  <img src={images[0]} alt={details.title + " gif"}>
</div>

<style>
    div {
        display: flex;
        align-items: center;
        line-height: 1.25;
    }

    img {
      width: 4rem;
      height: 4rem;
      object-fit: cover;
    }
</style>
