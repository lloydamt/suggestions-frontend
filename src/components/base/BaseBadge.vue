<template>
  <span class="badge">{{ genre }}</span>
</template>

<script>
export default {
  props: ["genre"],
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.genre {
  font-weight: bold;
}
</style>
