<template>
  <div class="bg-gray-600 min-h-screen">
    <vue-pdf-embed source="/resume.pdf" />
  </div>
</template>

<script>
import VuePdfEmbed from "vue-pdf-embed";

export default {
  components: {
    VuePdfEmbed,
  },
};
</script>
