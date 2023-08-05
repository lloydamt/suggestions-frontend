<template>
  <form class="comment-form" @submit.prevent="addComment">
    <div class="container">
      <textarea id="comment" cols="50" rows="2" v-model="content"></textarea>
      <base-button kind="button">Leave a comment</base-button>
    </div>
  </form>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      content: "",
    };
  },
  methods: {
    addComment() {
      if (this.content.length > 0) {
        this.$emit("add-comment", this.content);
      }
    },
  },
};
</script>

<style scoped>
.comment-form {
  margin: 2em 0;
  padding: 5px 0;
}
</style>
