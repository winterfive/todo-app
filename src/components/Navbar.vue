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
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text">
          <v-list-tile-action>
            <v-icon dark>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">
              {{ link.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {
          icon: "dashboard",
          text: "Dashboard",
          route: "/"
        },
        {
          icon: "folder",
          text: "My Projects",
          route: "/projects"
        },
        {
          icon: "person",
          text: "Team",
          route: "/team"
        }
      ]
    };
  }
};
</script>

