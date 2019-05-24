<template>
  <div>
    <div class="home">
      <h1>Homepage</h1>
      <v-btn class="green white--text">click me</v-btn>
      <v-btn depressed color="pink">click me!</v-btn>
      <v-btn flat color="pink">click me!</v-btn>

      <v-btn depressed class="pink white--text">
        <v-icon left>email</v-icon>
        <h4>Email me!</h4>
      </v-btn>
      <v-btn class="blue"><v-icon left>language</v-icon>World</v-btn>
      <v-btn class="red">Shield<v-icon dark right>security</v-icon></v-btn>
    </div>
    <div>
      <v-btn color="yellow lighten-3" small>
        <v-icon color="red darken-3" small left>email</v-icon>
        Email me
      </v-btn>
      <v-btn color="yellow lighten-3" large>
        Email me
        <v-icon color="red darken-3" large right>email</v-icon>
      </v-btn>
      <v-btn color="purple" dark fab small><v-icon>favorite</v-icon></v-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>
