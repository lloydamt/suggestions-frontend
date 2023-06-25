<template>
  <div class="movie">
    <h3>{{ title }}</h3>
    <h4>{{ year }}</h4>
    <base-badge
      v-for="genre in genres"
      :key="genre"
      :genre="genre"
    ></base-badge>
    <div class="details">
      <base-button kind="button">View Details</base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    genres: Array,
    year: Number,
  },
};
</script>

<style scoped>
.movie {
  background-color: #fff;
  border: 1px solid #3b9cc5;
  border-radius: 4px;
  padding: 5px;
  margin: 20px auto;
  position: relative;
  height: 200px;
}

.details {
  position: absolute;
  right: 0;
  margin: 5px;
}

.movie h3,
.movie h4 {
  margin: 10px;
}
</style>
