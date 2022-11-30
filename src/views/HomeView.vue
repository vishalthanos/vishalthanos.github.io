<template>
  <section class="bg-hero-gradient relative px-20 overflow-hidden">
    <div
      class="container min-h-[93vh] flex animate-in fade-in slide-in-from-right-full ease-linear duration-1000 flex-col justify-between items-center gap-10 p-10 sm:flex-row"
    >
      <div class="flex">
        <img src="../assets/images/DP.png" alt="Vishal" />
      </div>
      <div class="container max-w-xl flex flex-col h-36">
        <h1 class="text-6xl font-inter text-[#8F7B6A]">Hi, I am Vishal</h1>
        <div class="font-quick text-[#4A4A4A]">
          <p class="mt-6">
            I am a designer and a maker, currently pursuing my Master's
            programme from Central institude of technology kokrajhar
          </p>
          <p>
            I am passionate about designing experiences both from my heart &
            mind with focus on Design research, Service Design &User Experience
            Design
          </p>
          <div class="absolute bottom-28">
            <img
              class="h-10"
              src="../assets/images/Collage.png"
              alt="vishal-college"
            />
          </div>
        </div>

        <a
          href="#work"
          class="bg-gray-200 w-36 h-36 absolute -bottom-[70px] transform -translate-x-1/2 flex justify-center items-center left-1/2 rounded-full border border-gray-700 border-dashed"
        >
          <div
            class="absolute animate-spin-slow w-28 h-28 z-0 rounded-full border-2 border-gray-700 border-dotted"
          ></div>
          <div
            class="bg-gray-50 w-20 z-10 text-gray-500 h-20 rounded-full flex justify-center items-center flex-col"
          >
            <div
              class="animate-bounce absolute top-10 flex justify-center flex-col items-center"
            >
              &darr;
              <p class="text-xs">Scroll Down</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
  <projects-item />
</template>

<script>
import ProjectsItem from "../components/ProjectsItem.vue";
export default {
  components: { ProjectsItem },
  data() {
    return {
      animate: false,
    };
  },
  mounted() {
    this.animate = true;
  },
};
</script>

<style scoped>
.bg-hero-gradient {
  background-image: url(../assets/images/bg-hero.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
