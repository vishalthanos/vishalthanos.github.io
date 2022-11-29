<template>
  <section class="bg-hero-gradient relative px-20">
    <!-- <div class="flex -z-10">
      <img src="../assets/images/DP.png" alt="Vishal" />
    </div> -->
    <div
      class="container min-h-screen flex animate-in fade-in slide-in-from-right-full duration-1000 flex-col justify-between items-center gap-10 p-10 sm:flex-row"
    >
      <div class="flex">
        <img src="../assets/images/DP.png" alt="Vishal" />
      </div>
      <div class="container max-w-xl items-center flex flex-col h-36">
        <h1 class="text-4xl font-inter text-[#8F7B6A]">Hi, I am Vishal</h1>
        <div class="font-quick text-[#4A4A4A] relative">
          <p class="mt-6">
            I am a designer and a maker, currently pursuing my Master's
            programme from Central institude of technology kokrajhar
          </p>
          <p>
            I am passionate about designing experiences both from my heart &
            mind with focus on Design research, Service Design &User Experience
            Design
          </p>
          <div class="absolute bottom-0">
            <img src="../assets/images/Collage.png" alt="vishal-college" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
