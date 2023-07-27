<template>
  <base-card>
    <h3>Comments</h3>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <h4>@{{ comment.user.username }}</h4>
      <p>{{ comment.content }}</p>
      <base-button kind="button">Delete</base-button>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    comments: Array,
  },
};
</script>

<style scoped>
.comment {
  border: 1px solid #c5d6dd;
  border-radius: 4px;
  padding: 3px;
}

.comment p {
  text-align: center;
}
</style>
