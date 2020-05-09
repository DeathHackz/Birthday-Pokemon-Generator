<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" sticky>
    <b-container>
      <b-navbar-brand to="/">Birthday Pokemon Generator</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/favorites" right>Favorites</b-nav-item>
          <b-nav-item to="/downloads" right>Downloads</b-nav-item>
          <b-nav-item
            href="https://github.com/DeathHackz/Birthday-Pokemon-Generator"
            target="_blank"
            right
            >GitHub</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style></style>
