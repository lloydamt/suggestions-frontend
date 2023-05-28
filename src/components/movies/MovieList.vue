<template>
  <base-card>
    <h2>Movie List</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <MovieItem
          :id="movie.id"
          :title="movie.title"
          :genres="movie.genres"
          :year="movie.year"
        />
      </li>
    </ul>
  </base-card>
</template>

<script>
import MovieItem from "./MovieItem.vue";
export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  text-align: center;
}

ul {
  list-style: none;
  padding: 5px;
}
</style>
