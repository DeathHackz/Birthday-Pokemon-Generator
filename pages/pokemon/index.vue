<template>
  <div class="main">
    <b-container>
      <h1 class="text-center">
        <span class="dontprint">Your</span
        ><span class="onlyprint">My</span> birthday is on {{ birthday }}
      </h1>
      <h2 class="text-center">
        "{{ pokemonName }}" is <span class="dontprint">your</span
        ><span class="onlyprint">my</span> special {{ specialType }} Pokemon!
      </h2>
      <hr />
      <b-row align-v="center">
        <b-col></b-col>
        <div class="artwork">
          <b-icon-heart-fill
            variant="danger"
            scale="2"
            animation="throb"
            class="heart red"
            v-if="favoriteIcon"
          ></b-icon-heart-fill>
          <b-img
            center
            :src="pokemonArtwork"
            :alt="'Official ' + pokemonName + ' Artwork'"
          >
          </b-img>
        </div>
        <b-col></b-col>
      </b-row>
      <hr />
      <!-- <b-row align-v="center" class="my-2 onlyprint">
        <b-col class="text-center">
          <h3>Find your special birthday pokemon at bdaypokemon.com!</h3>
        </b-col>
      </b-row> -->
      <b-row align-v="center" class="my-2 dontprint">
        <b-col class="text-center">
          <b-button variant="success" @click="print()">Print Pokemon</b-button>
          <b-button variant="primary" @click="favorite()">{{
            favbuttontxt
          }}</b-button>
        </b-col>
      </b-row>
      <br />
      <b-row class="mb-5 dontprint">
        <b-col></b-col>
        <b-col cols="8">
          <h2>More Info About "{{ pokemonName }}"</h2>
          <b-row>
            <b-col>
              <b-link href="#" target="_blank">
                Official Pokedex
              </b-link>
            </b-col>
            <b-col>
              <b-link href="#" target="_blank">
                Pokemon Database
              </b-link>
            </b-col>
            <b-col>
              <b-link href="#" target="_blank">
                Bulbapedia
              </b-link>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-link href="#" target="_blank">
                Smogon
              </b-link>
            </b-col>
            <b-col>
              <b-link href="#" target="_blank">
                Serebii
              </b-link>
            </b-col>
            <b-col>
              <b-link href="#" target="_blank">
                Veekun
              </b-link>
            </b-col>
          </b-row>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    favoriteIcon: false,
    favbuttontxt: 'Add to Favorites',
    pokemonName: 'Skiddo',
    pokemonArtwork:
      'https://deathhackz.gitlab.io/Birthday-Pokemon-Generator/resources/official_sugimori_art_small/672.png',
    birthday: 'November 10',
    specialType: ''
  }),
  methods: {
    favorite: function() {
      this.favoriteIcon = !this.favoriteIcon
      this.favoriteIcon
        ? (this.favbuttontxt = 'Remove from Favorites')
        : (this.favbuttontxt = 'Add to Favorites')
    },
    print: function() {
      window.print()
    }
  }
}
</script>

<style scoped>
.main {
  padding-top: 30px;
}
.artwork {
  position: relative;
}
.artwork .heart {
  top: 10%;
  left: 80%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
