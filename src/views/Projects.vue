<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container my-5>
      <v-layout my-4 align-center justify-start row fill-height>
        <v-tooltip top>
          <v-btn
            small
            depressed
            ma-2
            color="white"
            @click="sortBy('title')"
            slot="activator"
          >
            <v-icon left>folder</v-icon>
            <span class="caption text-lowercase">by project title</span>
          </v-btn>
          <span>Sort projects by title</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn
            small
            depressed
            ma-2
            color="white"
            @click="sortBy('person')"
            slot="activator"
          >
            <v-icon left>person</v-icon>
            <span class="caption text-lowercase">by person</span>
          </v-btn>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title"
        ><v-layout row wrap class="pa-3 border-left" :class="project.status">
          <v-flex xs12 md6>
            <div class="caption grey--text lighten-1">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <v-chip
              small
              class="white--text caption my-2 right"
              :class="project.status"
            >
              {{ project.status }}
            </v-chip>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
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
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
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

<style lang="scss">
$status-border-width: 5px;
$status-border-style: solid;
$status-color-complete: blue;
$status-color-ongoing: #7fd8da;
$status-color-overdue: tomato;
$status-color-new: yellowgreen;

.border-left.complete {
  border-left: $status-border-width $status-border-style$status-color-complete;
}

.border-left.new {
  border-left: $status-border-width $status-border-style $status-color-new;
}

.border-left.ongoing {
  border-left: $status-border-width $status-border-style $status-color-ongoing;
}

.border-left.overdue {
  border-left: $status-border-width $status-border-style$status-color-overdue;
}

.v-chip.complete {
  background: $status-color-complete;
}

.v-chip.new {
  background: $status-color-new;
}

.v-chip.ongoing {
  background: $status-color-ongoing;
}

.v-chip.overdue {
  background: $status-color-overdue;
}
</style>

