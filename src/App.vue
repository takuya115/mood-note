<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row justify="center">
          <!-- インプット -->
          <v-col cols="auto" sm="12" md="6" lg="4">
            <Note/>
          </v-col>
          <!-- グラフ -->
          <v-col cols="auto" sm="12" md="6" lg="4">
            <!-- <Chart/> -->
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Note from './components/VNote';
// import Chart from './components/VChart';

export default {
  name: 'App',

  components: { Note },

  data: () => ({
    //
  }),
};
</script>

<style>
  #app {
    background: rgb(216, 255, 216);
  }
</style>
