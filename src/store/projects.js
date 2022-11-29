import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjectStore = defineStore("main", {
  // a function that returns a fresh state
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Branding on Mahua",
        description:
          "Design a brand identity to uplift a group indegenously grown and manufactured product range ...",
        img: "/images/Mahua-logo.png",
      },
      {
        id: 2,
        name: "Typography",
        description: "Project 2 description",
        img: "https://picsum.photos/500/300",
      },
      {
        id: 3,
        name: "Project 3",
        description: "Project 3 description",
        img: "https://picsum.photos/500/700",
      },
    ],
  }),
  // optional getters
  getters: {
    getProjects() {
      return this.projects;
    },
  },
  // optional actions
  actions: {
    async fetchProjects() {
      const response = await fetch(
        "https://api.github.com/users/swaubhik/repos"
      );
      this.projects = await response.json();
    },
    async fetchProject(id) {
      const response = await fetch(
        `https://api.github.com/repos/swaubhik/${id}`
      );
      this.project = await response.json();
    },
  },
});
