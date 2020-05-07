<template>
  <footer class="bg-dark py-3">
    <b-container>
      <p class="text-white text-center my-0">
        Copyright &copy;DeathHackz 2018 - {{ year }}
      </p>
    </b-container>
  </footer>
</template>

<script>
export default {
  data: () => ({
    year: new Date().getFullYear()
  })
}
</script>
