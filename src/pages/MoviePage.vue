<template>
  <div class="page">
    <base-button :path="`/movies`">Go Back</base-button>
    <div class="page-container">
      <div class="card">
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
          <form class="comment-form">
            <div class="container">
              <textarea id="comment" cols="50" rows="2"></textarea>
              <base-button kind="button">Leave a comment</base-button>
            </div>
          </form>
        </base-card>
      </div>
      <div class="card">
        <CommentList :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from "@/components/comments/CommentList.vue";
export default {
  components: {
    CommentList,
  },
  props: ["id"],
  data() {
    return {
      movie: null,
      comments: null,
    };
  },
  created() {
    this.movie = this.$store.getters.movies.find(
      (movie) => movie.id === Number(this.id)
    );
  },
  mounted() {
    this.comments = this.$store.getters.comments.filter(
      (comment) => comment.movie.id === this.movie.id
    );
  },
};
</script>

<style scoped>
.page {
  margin: 1em;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  margin: 2em;
}

.comment-form {
  margin: 2em 0;
  padding: 5px 0;
}
</style>
