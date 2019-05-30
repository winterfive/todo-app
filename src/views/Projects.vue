<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container my-5>
      <v-card flat v-for="project in projects" :key="project.title"
        ><v-layout row wrap class="pa-3 border-left" :class="project.status">
          <v-flex xs12 md6>
            <div class="caption darkgrey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption darkgrey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption darkgrey--text">Due by</div>
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
export default {
  data() {
    return {
      projects: [
        {
          title: "title01",
          person: "person01",
          due: "5th May 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "title02",
          person: "person02",
          due: "24th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "title03",
          person: "person03",
          due: "10th Jan 2021",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
          title: "title04",
          person: "person04",
          due: "30th June 2020",
          status: "new",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      ]
    };
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

