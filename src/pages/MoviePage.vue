<template>
  <div>
    <base-card>
      <h1>{{ movie.title }}</h1>
      <div class="details">
        <div class="desc">
          <p>{{ movie.description }}</p>
        </div>
        <p>Year: {{ movie.year }}</p>
        <p>Likes: {{ movie.likes }}</p>
        <span class="genre" v-for="genre in movie.genres" :key="genre">
          <base-badge :genre="genre"></base-badge>
        </span>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      movie: null,
    };
  },
  created() {
    this.movie = this.$store.getters.movies.find(
      (movie) => movie.id === Number(this.id)
    );
  },
};
</script>
