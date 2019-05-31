import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Projects from "./views/Projects.vue";
import MyProjects from "./views/MyProjects.vue";
import Team from "./views/Team.vue";
import Stuff from "./views/Stuff.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects
    },
    {
      path: "/stuff",
      name: "stuff",
      component: Stuff
    },
    {
      path: "/team",
      name: "Team",
      component: Team
    },
    {
      path: "/myprojects",
      name: "My Projects",
      component: MyProjects
    }
  ]
});
