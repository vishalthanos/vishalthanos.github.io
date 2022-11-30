import { defineStore } from "pinia";

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useProjectStore = defineStore("project", {
  // a function that returns a fresh state
  state: () => ({
    projects: [
      {
        id: 1,
        name: "Branding on Mahua",
        description:
          "Design a brand identity to uplift a group indegenously grown and manufactured product range ...",
        img: "/images/Mahua/Mahua-logo.png",
        bgImage: "/images/Mahua/bg-mahua.png",
        aboutImg: "/images/Mahua/branding-mahua.png",
      },
      {
        id: 2,
        name: "Typography",
        description: "Design inspiration taken from circuit ...",
        bgImage: "/images/typo/bg-typo.png",
        aboutImg: "/images/typo/branding-typo.png",
      },
      {
        id: 3,
        name: "Project 3",
        description: "Design inspiration taken fromn mushroom",
        bgImage: "/images/mush/bg-mush.png",
        aboutImg: "/images/mush/branding-mush.png",
      },
    ],
    project: null,
  }),
  actions: {
    fetchProject(id) {
      this.project = this.projects.find((project) => project.id == id);
    },
  },
});
