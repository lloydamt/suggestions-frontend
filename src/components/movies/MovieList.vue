<template>
  <base-card>
    <h2>Movie List</h2>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        {{ movie.title }}
      </li>
    </ul>
  </base-card>
</template>

<script>
export default {
  computed: {
    movies() {
      return this.$store.getters.movies;
    },
  },
  methods: {},
};
</script>
