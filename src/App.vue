<template>
  <main-nav />
</template>

<script>
import MainNav from "@/components/MainNav.vue";
export default {
  name: "App",
  components: {
    // key值通常跟組件同名，但也可以自訂
    // MainNav: MainNav,
    // ES6語法，key-value同名可以只寫一個就好
    MainNav,
  },
};
</script>
