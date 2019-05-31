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
      dialog: false,
      title: "",
      content: "",
      newProjectTitle: "",
      newProjectContent: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimal length required is 3."]
    };
  },
  methods: {
    handler() {
      if (this.$refs.form.validate()) {
        this.submitInfo();
        this.closePopup();
      }
    },
    submitInfo() {
      this.newProjectTitle = this.title;
      this.title = "";
      this.newProjectContent = this.content;
      this.content = "";

      const project = {
        title: this.newProjectTitle,
        content: this.newProjectContent,
        due: format(this.due, "Do MMM YYYY"),
        person: "LG",
        status: "ongoing"
      };

      db.collection("projects")
        .add(project)
        .then(() => {
          // eslint-disable-next-line no-console
          console.log("Added to db");
        });
    },
    closePopup() {
      this.dialog = false;
    }
  },
  watch: {
    dialog(value) {
      !value;
    }
  },
  computed: {
    formatDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>

