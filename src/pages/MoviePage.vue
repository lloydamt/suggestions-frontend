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
          <CommentForm @add-comment="addComment" />
        </base-card>
      </div>
      <div class="card">
        <CommentList :comments="comments" @delete-comment="deleteComment" />
      </div>
    </div>
  </div>
</template>

<script>
import CommentList from "@/components/comments/CommentList.vue";
import CommentForm from "@/components/comments/CommentForm.vue";
export default {
  components: {
    CommentList,
    CommentForm,
  },
  props: ["id"],
  computed: {
    commentList() {
      return this.$store.getters.comments;
    },
  },
  data() {
    return {
      movie: null,
      comments: null,
    };
  },
  watch: {
    commentList() {
      this.getComments();
    },
  },
  created() {
    this.movie = this.$store.getters.movies.find(
      (movie) => movie.id === Number(this.id)
    );
  },
  mounted() {
    this.getComments();
  },
  methods: {
    addComment(content) {
      const payload = {
        movieId: this.id,
        content,
      };
      this.$store.dispatch("addComment", payload);
      this.getComments();
    },
    deleteComment(id) {
      this.comments = this.comments.filter((comment) => id !== comment.id);
    },
    getComments() {
      this.comments = this.commentList.filter(
        (comment) => comment.movie.id === this.movie.id
      );
    },
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
</style>
