<template>
  <!-- form needs submit on return keypress -->

  <v-dialog v-model="dialog" max-width="600px">
    <v-btn flat slot="activator" class="indigo lighten-1" dark
      >Add new project</v-btn
    >
    <v-card>
      <v-card-title><h2>Add a New Project</h2></v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            label="title"
            v-model="title"
            prepend-icon="folder"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
          ></v-textarea>
          <v-btn flat class="primary mx-0" @click="handler">Add Project </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: "",
      content: "",
      // Will become props and passed to other views
      newProjectTitle: "",
      newProjectContent: ""
    };
  },
  methods: {
    handler() {
      this.submitInfo();
      this.closePopup();
      // eslint-disable-next-line no-console
      console.log("got to here");
    },
    submitInfo() {
      this.newProjectTitle = this.title;
      this.title = "";
      this.newProjectContent = this.content;
      this.content = "";
    },
    closePopup() {
      this.dialog = false;
    }
  },
  watch: {
    dialog(value) {
      !value;
    }
  }
};
</script>

