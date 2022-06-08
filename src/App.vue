<template>
  <div>
    <main-nav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import Hero from "@/components/Hero.vue";
Hero;
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
