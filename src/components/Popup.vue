<template>
  <v-dialog max-width="600px">
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
          <v-btn flat class="primary mx-0" @click="submit">Add Project </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      // Will become props and passed to other views
      newProjectTitle: "",
      newProjectContent: ""
    };
  },
  methods: {
    submit() {
      // eslint-disable-next-line no-console
      console.log(this.title, this.content);
      this.newProjectTitle = this.title;
      this.title = "";
      this.newProjectContent = this.content;
      this.content = "";
    }
  }
};
</script>

