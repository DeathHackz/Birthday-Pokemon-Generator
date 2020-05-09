<template>
  <div>
    <div class="main">
      <b-container>
        <h1 class="text-center text-white">
          MY FAVORITE POKEMON!
        </h1>
      </b-container>
    </div>
    <div>
      <b-container class="my-5">
        <b-row>
          <b-img-lazy
            v-bind="imageProps"
            v-for="n in 10"
            :src="pokemonArtwork"
            :alt="pokemonName"
            :title="pokemonName"
          ></b-img-lazy>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imageProps: {
      center: true,
      fluidGrow: false,
      blank: true,
      blankColor: '#bbb',
      width: 150,
      height: 150,
      class: 'my-5'
    },
    pokemonName: 'Skiddo',
    pokemonArtwork:
      'https://deathhackz.gitlab.io/Birthday-Pokemon-Generator/resources/official_sugimori_art_small/672.png'
  })
}
</script>

<style scoped>
.main {
  padding-top: 100px;
  height: 40vh;
  background-image: url('~assets/background.jpg');
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
}
.datepicker {
  width: 310px;
}
</style>
