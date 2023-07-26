<template>
  <button v-if="kind === 'button'">
    <slot></slot>
  </button>
  <router-link v-else :to="path">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    kind: {
      type: String,
      default: "link",
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  font: inherit;
  background-color: #3b9cc5;
  border: 1px solid #3b9cc5;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-align: right;
}
</style>
