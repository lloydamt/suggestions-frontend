<template>
  <base-card>
    <h3>Comments</h3>
    <div v-for="comment in comments" :key="comment.id" class="comment">
      <CommentItem
        :id="comment.id"
        :user="comment.user"
        :content="comment.content"
        @delete-comment="deleteComment"
      />
    </div>
  </base-card>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  components: {
    CommentItem,
  },
  props: {
    comments: Array,
  },
  methods: {
    deleteComment(id) {
      this.$emit("delete-comment", id);
    },
  },
};
</script>

<style scoped>
.comment {
  border: 1px solid #c5d6dd;
  border-radius: 4px;
  padding: 3px;
}

.delete {
  color: red;
}

.comment p {
  text-align: center;
}
</style>
