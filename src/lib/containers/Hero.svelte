<script lang="ts">
  import pptn from "../../assets/images/pptn.png";
</script>

<div>
  <div>
      <img src={pptn} alt="PPTN title">
      <h2>SOFTWARE DEVELOPER</h2>
      <p>Peter Phong Thanh Nguyen</p>
  </div>
</div>

<style>
  img {
    object-fit: contain;
    max-width: 100%;
    margin: 4rem 0 2rem;
  }

  h2 {
    top: -3rem;
    position: relative;
    font-size: 3rem;
    color: var(--white);
  }

  p {
    position: relative;
    top: -3.5rem;
    font-size: 1.5rem;
    color: var(--white);
    flex: 1;
    opacity: 0.25;
  }
</style>
