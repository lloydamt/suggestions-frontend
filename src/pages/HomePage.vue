<template>
  <div class="container">
    <div>
      <SuggestMovie />
    </div>
    <div>
      <MovieList />
    </div>
  </div>
</template>

<script>
import MovieList from "../components/movies/MovieList.vue";
import SuggestMovie from "../components/movies/SuggestMovie.vue";
export default {
  components: {
    MovieList,
    SuggestMovie,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
</style>
