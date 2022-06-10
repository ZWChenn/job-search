<template>
  <div>
    <main-nav />
    <hero />
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import Hero from "@/components/JobSearch/Hero.vue";
Hero;
export default {
  name: "App",
  components: {
    MainNav,
    Hero,
  },
};
</script>
