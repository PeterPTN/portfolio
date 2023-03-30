<script lang="ts">
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import IoMdMail from "svelte-icons/io/IoMdMail.svelte";
</script>

<div class="about-container">
  <img src="" alt="Me" />

  <ul>
    <li>
      <a href="https://www.linkedin.com/in/peter-nguyen-05314b171/"
        ><FaLinkedin /></a
      >
    </li>
    <li><a href="https://github.com/PeterPTN"><FaGithub /></a></li>
    <li>
      <a href="mailto:peter.p.t.nguyen@gmail.com"><IoMdMail /></a>
    </li>
  </ul>

  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore esse
    obcaecati delectus blanditiis quae iusto fugiat, voluptatibus, amet eveniet
    sed temporibus porro commodi quas eos incidunt culpa! Deserunt, non
    perferendis!
  </p>
</div>

<style>
  .about-container {
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
  }

  img::before {
    content: attr(alt);
    color: var(--white);
  }

  ul {
    display: flex;
  }

  p {
    color: var(--white);
  }

  ul {
    margin: auto;
    width: fit-content;
  }

  li {
    aspect-ratio: 1/1;
    width: 3rem;
    margin: 0 0.5rem;
  }

  a {
    color: var(--white);
    transition: all 0.15s;
  }

  a:hover {
    filter: brightness(0.75);
  }

  img {
    height: 500px;
    width: 100%;
    background-color: rgb(29, 25, 25);
    filter: brightness(0.8);
  }
</style>
