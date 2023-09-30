<template>
  <the-header></the-header>
  <router-view> </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
export default {
  components: { TheHeader },
  name: "App",
  computed: {
    autoLoggedOut() {
      return this.$store.getters.autoLoggedOut;
    },
  },
  created() {
    this.$store.dispatch("tryLogin");
  },
  watch: {
    autoLoggedOut(newVal, oldVal) {
      if (newVal && newVal !== oldVal) {
        this.$router.replace("/auth");
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

body {
  font-family: "Lato", sans-serif;
  margin: 0;
}
</style>
