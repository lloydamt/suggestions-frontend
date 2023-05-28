<template>
  <div class="movie">
    <h3>{{ title }}</h3>
    <h4>{{ year }}</h4>
    <base-badge
      v-for="genre in genres"
      :key="genre"
      :genre="genre"
    ></base-badge>
    <div>
      <button>View Details</button>
    </div>
  </div>
</template>

<script>
import BaseBadge from "../base/BaseBadge.vue";
export default {
  components: { BaseBadge },
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
  border: 1px solid #cfdfe6;
  border-radius: 4px;
  padding: 5px;
  margin: 20px auto;
}

.movie h3,
.movie h4 {
  margin: 10px;
}
</style>
