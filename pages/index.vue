<template>
  <div>
    <div class="main">
      <b-container>
        <h1 class="text-center text-white">
          FIND YOUR BIRTHDAY POKEMON!
        </h1>
        <b-row align-v="center">
          <b-col></b-col>
          <b-form-datepicker
            v-model="value"
            class="mx-2 datepicker"
            initial-date="2020-01-01"
            min="2020-01-01"
            max="2020-12-31"
            placeholder="Choose a date"
            locale="en-US"
            menu-class="w-100"
            calendar-width="100%"
            :dark="dark"
            :show-decade-nav="showdecade"
            :hide-header="hideheader"
          ></b-form-datepicker>
          <b-col></b-col>
        </b-row>
        <b-row align-v="center" class="my-2">
          <b-col class="text-center">
            <b-button variant="success" to="/pokemon"
              >Find My Pokemon!</b-button
            >
            <b-button variant="primary" to="/random"
              >I'm Feeling Lucky</b-button
            >
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-container class="my-5">
        <b-row>
          <b-col></b-col>
          <b-col cols="8">
            <h2>Features</h2>
            <ul>
              <li>Generate a special pokemon based on your birthday</li>
              <li>Add pokemon to favorites list</li>
              <li>Display official artwork by Ken Sugimori of your pokemon</li>
              <li>
                Link to multiple resources for more info about your pokémon
              </li>
            </ul>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
    <div>
      <b-container class="my-5">
        <b-row>
          <b-col></b-col>
          <b-col cols="8">
            <h2>
              Disclaimer
            </h2>
            <b
              >I DO NOT OWN ANYTHING BUT THE SITE ITSELF, ALL POKÉMON RELATED
              THINGS BELONG TO THEIR RESPECTIVE COPYRIGNT/TRADEMARK HOLDERS!</b
            >
            <br />
            © 2020 Pokémon. © 1995–2020 Nintendo/Creatures Inc./GAME FREAK Inc.
            Pokémon, Pokémon character names and artwork are all trademarks of
            Nintendo.
            <br />
            All Pokémon related content on this service, including artwork,
            graphics, logos, downloads and other files, is the property of
            Pokémon and is protected by United States and international
            copyrights, trademarks and other intellectual property laws.
            Trademarks and copyrights for third-party games and characters are
            owned by the companies which market or license those products.
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: '',
    dark: true,
    showdecade: false,
    hideheader: true
  })
}
</script>

<style>
.main {
  padding-top: 130px;
  height: 90vh;
  background-image: url('https://deathhackz.gitlab.io/Birthday-Pokemon-Generator/resources/background.jpg');
  background-size: cover;
  background-position: right bottom;
  background-repeat: no-repeat;
}
.datepicker {
  width: 310px;
}
</style>
