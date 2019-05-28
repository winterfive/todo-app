<template>
  <nav>
    <v-toolbar flat app color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">TODO</span>
        <span>Stuff</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat dark>
        <span>Sign out</span><v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="info">
      <p class="warning">test</p>
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

