<template>
  <header class=" font-quick text-lg bg-[#F3EDE9] p-4">
    <div class="container max-w-xl mx-auto">
      <nav class="flex text-[#8F7B6A] justify-between items-center">
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/work">Work</RouterLink>
        <RouterLink to="/resume">Resume</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavBarItem",
    components: { RouterLink }
};
</script>

<style></style>
