<template>
  <TheHeader />
  <HomePage />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import HomePage from "./pages/HomePage.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    HomePage,
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
