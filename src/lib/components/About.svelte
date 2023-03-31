<script lang="ts">
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
  import IoMdMail from "svelte-icons/io/IoMdMail.svelte";
  import me from "../../assets/images/me.gif";
</script>

<div class="about-container">
  <img src={me} alt="Self Portrait" />

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

  <p class="first-p">
    Hi, my name is Peter Nguyen. I'm a software developer from Sydney. I began
    re-training in software development the summer of 2021 after a brief stint
    in primary-teaching and in other odd jobs.
  </p>
  <p>
    Since then, I've dedicated most of my freetime to learning how to create web
    applications. I code mainly in <span class="highlight">HTML</span>,
    <span class="highlight">CSS</span>, <span class="highlight">JS</span>,
    <span class="highlight">ReactJS</span>,
    <span class="highlight">TypeScript</span>
    and more recently <span class="highlight">Java</span>,
    <span class="highlight">Springboot</span>
    and <span class="highlight">NestJS</span>.
  </p>
  <p>
    Here you'll find a bunch of projects I've deployed. Check out my GitHub for
    other non-deployed work too!
  </p>
</div>

<style>
  .about-container {
    position: sticky;
    top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ul {
    display: flex;
    padding: 1rem 0 0.5rem;
  }

  .first-p {
    text-indent: 1rem;
  }

  p {
    color: var(--white);
    font-size: 1.05rem;
  }

  p::first-letter {
    font-weight: bolder;
    font-size: 1.25rem;
  }

  .highlight {
    color: rgb(94, 123, 133);
  }

  ul {
    margin: auto;
    width: fit-content;
  }

  li {
    aspect-ratio: 1/1;
    width: 2rem;
    margin: 0 0.5rem;
  }

  a {
    color: var(--white);
    transition: all 0.15s;
  }

  a:hover {
    filter: brightness(0.65);
  }

  img {
    height: 500px;
    width: 100%;
    object-fit: contain;
    background-position: top;
    transform: rotateY(180deg);
    border-bottom: 2rem solid black;
    box-shadow: 5px 5px 5rem rgba(255, 255, 255, 0.1);
    filter: brightness(.7);
    transition: all .15s;
  }

  img:hover {
    filter: brightness(1);
  }
</style>
