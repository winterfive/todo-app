<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container my-5>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-2">
            <v-responsive class="pt-4">image here </v-responsive>
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
        { name: "Darwin T. Kitty", role: "Cute Developer" },
        { name: "Lisa Chung", role: "DevOps" },
        { name: "Lee Gainer", role: "Front End Developer" },
        { name: "Sean McBeth", role: "VR/AR Developer" }
      ]
    };
  }
};
</script>