<template>
  <section
    id="work"
    v-for="item in projects"
    :key="item.id"
    class="min-h-screen font-quick flex justify-center text-gray-800 items-center"
    :class="item.id === 2 ? 'bg-gray-50' : 'bg-[#f2ece8]'"
  >
    <div
      class="m-20 w-[80vw] h-[80vh] flex relative"
      :class="item.id === 2 ? 'bg-[#858585]' : ''"
    >
      <div
        class="absolute flex items-center bottom-20 py-20 shadow top-20 p-20 left-64 w-[400px] z-[1]"
        :class="
          item.id === 2 ? 'bg-[#F3EDE9]' : ' bg-[#D5D5D5] h-[350px] left-48'
        "
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
        class="bg-slate-50 absolute shadow flex justify-center items-center w-[400px] h-[450px] overflow-hidden top-10 right-48 p-8 z-[2]"
      >
        <img
          v-if="item.id !== 1"
          class="scale-125 hover:scale-100 border-2 border-black w-full transition-all ease-linear duration-500"
          :src="item.bgImage"
          :alt="item.name"
        />
        <img
          v-if="item.id === 1"
          class="scale-125 hover:scale-100 border w-full transition-all ease-linear duration-500"
          :src="item.img"
          :alt="item.name"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { useProjectStore } from "../store/projects";
import { RouterLink } from "vue-router";
export default {
  name: "ProjectItem",
  setup() {
    const { projects } = useProjectStore();
    return { projects };
  },
  data() {
    return {};
  },
  components: { RouterLink },
};
</script>
