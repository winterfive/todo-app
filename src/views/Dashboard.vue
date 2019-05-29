<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <v-container my-5>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <v-btn outline block class="primary">1</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
        <v-flex xs4 md2>
          <v-btn outline block class="primary">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-around>
        <v-flex xs4 md3>
          <v-btn outline block class="red">1</v-btn>
        </v-flex>
        <v-flex xs4 md3>
          <v-btn outline block class="info">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-center>
        <v-flex xs4 md6>
          <v-btn solo block class="blue">1</v-btn>
        </v-flex>
        <v-flex xs4 md6>
          <v-btn outline block class="info">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-end>
        <v-flex xs2 md3>
          <v-btn outline block class="info">1</v-btn>
        </v-flex>
        <v-flex xs2 md3>
          <v-btn outline block class="info">2</v-btn>
        </v-flex>
      </v-layout>

      <v-layout row wrap justify-space-between>
        <v-flex xs6 md4>
          <v-btn solo block class="info">1</v-btn>
        </v-flex>
        <v-flex xs6 md1>
          <v-btn solo block class="info">2</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
