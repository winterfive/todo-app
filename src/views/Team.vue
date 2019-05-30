<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container my-5>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-2">
            <v-responsive class="pt-4">
              <img :src="person.avatar" class="avatar" />
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-flex class="text-xs-center">
                <v-btn flat color="grey">
                  <v-icon small left>message</v-icon>
                  <span>Send message</span>
                </v-btn>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Darwin T. Kitty",
          role: "Cute Developer",
          avatar: "https://loremflickr.com/240/240/cat?random=1"
        },
        {
          name: "Lisa Chung",
          role: "DevOps",
          avatar: "https://loremflickr.com/240/240/cat?random=2"
        },
        {
          name: "Lee Gainer",
          role: "Front End Developer",
          avatar: "https://loremflickr.com/240/240/cat?random=3"
        },
        {
          name: "Sean McBeth",
          role: "VR/AR Developer",
          avatar: "https://loremflickr.com/240/240/cat?random=4"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
img {
  border: 2px solid grey;
  border-radius: 50%;
  height: 10em;
  width: 10em;
}
</style>