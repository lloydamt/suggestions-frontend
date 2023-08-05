<template>
  <h4>@{{ user.username }}</h4>
  <p>{{ content }}</p>
  <base-button kind="button" @click="$emit('delete-comment', id)"
    >Delete</base-button
  >
</template>

<script>
export default {
  props: {
    id: Number,
    user: Object,
    content: String,
  },
  methods: {
    deleteComment() {
      this.$emit("delete-commment", this.id);
    },
  },
};
</script>
