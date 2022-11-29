<template>
  <section
    v-for="item in projects"
    :key="item.id"
    class="min-h-screen bg-[#F3EDE9] flex justify-center text-gray-800 items-center"
  >
    <div class="bg-[#858585] m-20 w-[80vw] h-[80vh] flex relative">
      <div
        class="bg-[#F3EDE9] absolute flex items-center bottom-20 py-20 shadow top-20 p-20 left-64 w-[400px] z-[1]"
      >
        <div class="w-56">
          <h2 class="text-2xl">{{ item.name }}</h2>
          <p class="mt-10 text-sm text-gray-700">{{ item.description }}</p>
          <RouterLink
            :to="`/project/${item.id}`"
            class="absolute items-center hover:underline bottom-10 right-10 mt-10 rounded-md"
            >View Project &rarr;</RouterLink
          >
        </div>
      </div>
      <div
        class="bg-slate-50 absolute shadow flex justify-center items-center w-[400px] top-10 right-48 p-8 z-[2]"
      >
        <img class="border-2 border-black" :src="item.img" :alt="item.name" />
      </div>
    </div>
  </section>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "ProjectItem",
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Branding on Mahua",
          description:
            "Design a brand identity to uplift a group indegenously grown and manufactured product range ...",
          img: "/src/assets/images/Mahua-logo.png",
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
          img: "https://picsum.photos/500/300",
        },
      ],
    };
  },
  components: { RouterLink },
};
</script>

<style></style>
