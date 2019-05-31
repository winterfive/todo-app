<template>
  <v-dialog max-width="600px">
    <v-btn flat slot="activator" class="indigo lighten-1" dark
      >Add new project</v-btn
    >
    <v-card>
      <v-card-title><h2>Add a New Project</h2></v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field label="title" v-model="title"></v-text-field>
          <v-textarea label="Information" v-model="content"></v-textarea>
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
      content: ""
    };
  }
};
</script>

