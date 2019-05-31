<template>
  <nav>
    <v-toolbar flat app color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="font-weight-light">TODO</span>
        <span>Stuff</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown menu -->
      <v-menu offset-y>
        <v-btn flat slot="activator" dark>
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list class="indigo" dark>
          <v-list-tile
            v-for="link in links"
            :key="link.index"
            router
            :to="link.route"
          >
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat dark>
        <span>Sign out</span><v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img
              src="/avatar.jpg"
              class="hero-img"
              alt="A capital L on a black background"
            />
          </v-avatar>
        </v-flex>
        <v-flex>
          <popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
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
import Popup from "./Popup.vue";

export default {
  components: {
    Popup
  },
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
          text: "Projects",
          route: "/projects"
        },
        {
          icon: "folder",
          text: "My Projects",
          route: "/myprojects"
        },
        {
          icon: "person",
          text: "Team",
          route: "/team"
        },
        {
          icon: "extension",
          text: "Stuff",
          route: "/stuff"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.hero-img {
  height: 80px;
  width: 80px;
}
</style>

