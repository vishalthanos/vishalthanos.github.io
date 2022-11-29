import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import ResumeView from "../views/ResumeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: HomeView,
    },
    {
      path: "/resume",
      name: "resume",
      component: ResumeView,
    },
    {
      path: "/project/:id",
      name: "project",
      component: ProjectView,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
