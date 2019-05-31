<template>
  <div class="myProjects">
    <h1 class="subheading grey--text mb-5">My Projects</h1>

    <v-expansion-panel>
      <v-expansion-panel-content
        v-for="project in myProjects"
        :key="project.title"
      >
        <div slot="header">{{ project.title }}</div>
        <v-card>
          <v-card-text class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      projects: []
    };
  },
  computed: {
    // Doing this as there's no authentication in this app
    myProjects() {
      return this.projects.filter(project => {
        if (project.person === "Lee Gainer" || project.person === "LG")
          return project;
      });
    }
  },
  created() {
    db.collection("projects").onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          });
        }
      });
    });
  }
};
</script>

