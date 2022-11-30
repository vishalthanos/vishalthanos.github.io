<template>
  <header class="font-quick text-lg bg-[#F3EDE9] p-4">
    <div class="container max-w-xl mx-auto">
      <nav class="flex text-[#8d7968] justify-between items-center">
        <RouterLink to="/">About</RouterLink>
        <RouterLink :to="{ name: 'about' }">
          <a class="text-[#4A4A4A]" href="#work">Work</a>
        </RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "NavBarItem",
  components: { RouterLink },
};
</script>

<style></style>
