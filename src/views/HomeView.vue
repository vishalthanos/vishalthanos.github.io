<template>
  <section class="bg-hero-gradient relative px-20 overflow-hidden">
    <!-- <div class="flex -z-10">
      <img src="../assets/images/DP.png" alt="Vishal" />
    </div> -->
    <div
      class="container min-h-[90vh] flex animate-in fade-in slide-in-from-right-full ease-linear duration-1000 flex-col justify-between items-center gap-10 p-10 sm:flex-row"
    >
      <div class="flex">
        <img src="../assets/images/DP.png" alt="Vishal" />
      </div>
      <div class="container max-w-xl flex flex-col h-36">
        <h1 class="text-4xl font-inter text-[#8F7B6A]">Hi, I am Vishal</h1>
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

        <div
          class="bg-gray-300 w-36 h-36 absolute -bottom-[50px] transform -translate-x-1/2 flex justify-center items-center left-1/2 rounded-full border border-gray-400 border-dashed"
        >
          <div
            class="bg-gray-50 w-20 text-gray-500 h-20 rounded-full flex justify-center items-center flex-col"
          >
            <div
              class="animate-bounce flex justify-center flex-col items-center"
            >
              &darr;
              <p class="text-xs">Scroll Down</p>
            </div>
          </div>
        </div>
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
