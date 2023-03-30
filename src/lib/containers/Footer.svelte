<script lang="ts">
  const date = new Date().getFullYear();
</script>

<div>
  <span
    >&#169; {date}
    <a href="mailto:peter.p.t.nguyen@gmail.com">Peter Nguyen</a></span
  >
</div>

<style>
  div {
    text-align: center;
    color: var(--white);
    padding: 1rem 0;
  }

  a {
    color: var(--white);
  }

  a:hover {
    text-decoration: underline;
  }
</style>
