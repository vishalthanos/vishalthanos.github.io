<template>
  <NavBarItemVue />
  <RouterView />
</template>

<script>
import { RouterView } from "vue-router";
import NavBarItemVue from "./components/NavBarItem.vue";
export default {
  components: {
    NavBarItemVue,
  },
};
</script>

<style></style>
