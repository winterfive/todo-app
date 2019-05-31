<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-btn flat slot="activator" class="indigo lighten-1" dark
      >Add new project</v-btn
    >
    <v-card>
      <v-card-title><h2>Add a New Project</h2></v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="title"
            v-model="title"
            prepend-icon="folder"
            :rules="inputRules"
          ></v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="edit"
            :rules="inputRules"
          ></v-textarea>

          <v-menu>
            <v-text-field
              slot="activator"
              label="Due date"
              prepend-icon="date_range"
              :value="formatDate"
              :rules="inputRules"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>

          <v-btn
            flat
            class="primary mx-0"
            @click="handler"
            @keydown.enter="handler"
            :loading="loading"
            >Add Project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";

export default {
  data() {
    return {
      content: "",
      dialog: false,
      due: null,
      inputRules: [v => v.length >= 3 || "Minimal length required is 3."],
      loading: false,
      newProjectTitle: "",
      newProjectContent: "",
      title: ""
    };
  },
  methods: {
    handler() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.submitInfo();
      }
    },
    submitInfo() {
      const project = {
        title: this.title,
        content: this.content,
        due: format(this.due, "Do MMM YYYY"),
        person: "LG",
        status: "ongoing"
      };

      db.collection("projects")
        .add(project)
        .then(() => {
          this.loading = false;
          this.dialog = false;
          this.title = "";
          this.content = "";
        });
    }
  },
  computed: {
    formatDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>

