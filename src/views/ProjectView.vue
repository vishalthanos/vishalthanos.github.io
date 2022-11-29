<template>
  <div class="min-h-screen">
    <img
      class="w-full h-screen"
      :src="project.project.bgImage"
      :alt="project.project.name"
    />
    <div class="absolute top-1/2 left-1/2 animate-in fade-in delay-75 duration-1000 font-quick text-6xl font-extrabold text-gray-50" v-if="project.project.id === 2">Typography</div>
    <img :src="project.project.aboutImg" :alt="project.project.name" />
  </div>
</template>
<script>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useProjectStore } from "../store/projects";
export default {
  name: "AboutView",
  setup() {
    const project = useProjectStore();
    const route = useRoute();
    const { id } = route.params;
    project.fetchProject(id);
    return { project };
  },
};
</script>
