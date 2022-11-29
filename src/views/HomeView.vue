<template>
  <section class="bg-[#464848]">
    <div
      class="container  min-h-screen flex animate-in fade-in slide-in-from-right-full delay-500 duration-500 flex-col justify-center items-center gap-8 p-10 sm:flex-row"
    >
      <div class="flex">
        <img src="../assets/images/DP.png" alt="Vishal" />
      </div>
      <div class="container mx-auto justify-center items-center flex flex-col">
        <h1 class="text-3xl">Hi, I am Vishal</h1>
        <p>
          I am a designer and a maker, currently pursuing my Master's programme
          from Central institude of technology kokrajhar
        </p>
        <p>
          I am passionate about designing experiences both from my heart & mind
          with focus on Design research, Service Design &User Experience Design
        </p>
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

<style></style>
