<template>
  <nav>
    <v-toolbar flat app color="blue lighten-2">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">TODO</span>
        <span>Stuff</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat color="blue darken-4">
        <span>Sign out</span><v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <p>test</p>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
};
</script>

