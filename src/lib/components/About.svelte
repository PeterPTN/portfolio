<script lang="ts">
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import IoMdMail from "svelte-icons/io/IoMdMail.svelte";
</script>

<div>
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
  img::before {
    content: attr(alt);
    color: white;
  }

  ul {
    display: flex;
  }

  p {
    color: white;
  }

  ul {
    display: flex;
    justify-content: space-around;
  }

  li {
    aspect-ratio: 1/1;
    width: 4rem;
  }

  a {
    color: white;
    transition: all 0.15s;
  }

  a:hover {
    filter: brightness(0.75);
  }
</style>
